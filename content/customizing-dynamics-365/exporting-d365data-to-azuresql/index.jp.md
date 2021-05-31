---
title:  "Dynamics 365 のデータを Azure SQL へエクスポート"
draft: false
weight: 5
datetitle: "2017.08.23 | "
image: "artical5.jpg"
Author: "Takafumi Noguchi"
authorimage: "authorimage.jpg"
showinhome: true
showinaccordian: true
rightMenu: "artical"
linkdin: ""
---
<!-- Intro  -->
Dynamics 365 のデータを Data Export Service というアドオン サービスを使って、Azure SQL Server にエクスポートする方法をご紹介します。

Dynamics 365 には監査履歴によるデータ変更の追跡や、インスタンスの日時バックアップによるインスタンスの復元などでデータリカバリーはできるものの、削除してしまったデータの復元については、[XRM Toolbox](https://www.xrmtoolbox.com/)を使って復元する以外の便利な方法がなかったので、Data Export Service は重宝しています。

Data Export Service のセットアップ作業については公式ドキュメントの[Azure SQL データベースでデータを複製](https://docs.microsoft.com/ja-jp/power-platform/admin/replicate-data-microsoft-azure-sql-database)に手順の記載がありますが、Key Vault URL 生成の手順が、ドキュメントだけを読んでも正しくできなかったので、調査した内容を加えて今回まとめることにしました。


## 事前準備
Data Export Service のセットアップにあたり以下の準備が必要です。
  * Azure SQL データベース
  * Azure Key Vault サービス
  * ローカルに SSMS （SQL Server Management Studio）のインストール （ここでは手順割愛）
  
もし Azure アカウントを持っていない場合は、無償版を事前にセットアップしておいてください。
※必要な権限については [ [データ エクスポート サービス] を使用するための前提条件](https://docs.microsoft.com/ja-jp/power-platform/admin/replicate-data-microsoft-azure-sql-database)をご確認ください。

### Azure SQL データベース サービス
Azure ポータルへログインして、SQL データベースを作成します。
<!-- Image= dbexport01.png -->
{{< imagedisplay dbexport01 "290" "596" "796" >}}

「データベース名」を入力して「サーバー」を選択したら、「確認および作成」をクリックします。もしサーバーを作成していない場合は、新しいサーバーを作成します。

ここで設定する「サーバー管理者ログイン」と「パスワード」は Azure SQL 接続時に必要は情報なのでメモしておきます。
<!-- Image= dbexport02.png -->
{{< imagedisplay dbexport02 "290" "596" "796" >}}

「作成」というボタンをクリックしてSQLデータベースを作成します。作成が完了したら下図のようになります。
<!-- Image= dbexport03.png -->
{{< imagedisplay dbexport03 "290" "596" "796" >}}

作成した Azure SQL の「接続文字列」を開き、「ADO.NET」タブを開きます。この文字列をコピーします。
<!-- Image- dbexport04.png -->
{{< imagedisplay dbexport04 "290" "596" "796" >}}

メモ帳などに張り付け、以下の部分を上記のSQLサーバー管理者アカウントとパスワードを入力します。

ID={your_username};Password={your_password};

この接続文字列は、後述の **Key Vault  URL の生成** で必要になります。

### Azure Key Vault サービス
次に Azure Key Vault  の準備です。「リソースの作成」から “Key Vault” で検索します。
<!-- Image= dbexport05.png -->
{{< imagedisplay dbexport05 "290" "596" "796" >}}

Key Vault で「作成」をクリック。
<!-- Image= dbexport06.png -->
{{< imagedisplay dbexport06 "290" "596" "796" >}}

キーコンテナ名などを入力して作成します。
<!-- Image= dbexport07.png -->
{{< imagedisplay dbexport07 "290" "596" "796" >}}

作成したら「概要」を確認します。
<!-- Image= dbexport08.png -->
{{< imagedisplay dbexport08 "290" "596" "796" >}}

ここで記載されている
  * リソースグループ
  * 場所
  * サブスクリプションID
  * ディレクトリID

は後程の **Key Vault  URL の生成** で必要な情報になります。

Key Vault を作成したら、「シークレット」を開き「生成/インポート」をクリックします。
<!-- Image= dbexport09.png -->
{{< imagedisplay dbexport09 "290" "596" "796" >}}

ここでシークレットの名前と値を入力して保存します。
<!-- Image= dbexport10.png -->
{{< imagedisplay dbexport10 "290" "596" "796" >}}

このシークレットの名前も **Key Vault  URL の生成**で必要な情報になります。

参照： [：Azure Key Vault とは](https://docs.microsoft.com/ja-jp/azure/key-vault/general/basic-concepts)

## Key Vault URL の生成
Data Export Service で Dynamics 365 と Azure SQL サーバーを接続するために **Key Vault URL** を生成する必要があります。

公式ドキュメントの[ Azure Key Vault の設定方法](https://docs.microsoft.com/ja-jp/power-platform/admin/replicate-data-microsoft-azure-sql-database#how-to-set-up-azure-key-vault)にある Power Shell コマンドを実行すると URL を取得できます。

<!-- Quate Box -->
スクリプトを実行する前に、次の変数のプレースホルダーを置き換えます。

$subscriptionId。 使用する Key Vault リソース グループ。 リソース グループが存在しない場合は、指定した名前の新しいグループが作成されます。 この例では、[ContosoResourceGroup1] が使用されます。

$location。 [米国西部] などの、リソース グループまたはあるべき場所を指定します。

$connectionString。 [Azure SQL Database] への接続文字列。 [Azure] ダッシュボードに表示される場合は、ADO.NET 接続文字列を使用できます。

$organizationIdList =許可された Dynamics 365 for Customer Engagement アプリ組織のコンマ区切り一覧は、データ エクスポート サービス を有効にする組織 ID (organizationId) で一覧表示されます。 組織の ID を調べるには、Dynamics 365 for Customer Engagement アプリで、設定 > カスタマイズ > 開発者リソースの順に移動します。 組織 ID は、インスタンス参照情報にあります。

$tenantId。 Key Vault サブスクリプションが する Azure Active Directory テナント ID を指定します。



ただ、ドキュメントを読むだけではちょっと理解しづらいのと一部間違いがあるので １つずつ説明します。

以下のパラメーターについては、Key Vault の「概要」とシークレット名から取得。
  * **$subscriptionId は サブスクリプションID**（公式ドキュメントでは リソースグループと間違った記載になっている）documentation)
  * **$keyvaultName は Key Vault の名前**
  * **$resourceGroupName は リソースグループ**
  * **$location は 場所**
  * **$tenantId は ディレクトリ ID**
    <!-- Image= dbexport11.png -->
{{< imagedisplay dbexport11 "290" "596" "796" >}}

  * **$secretName は Key Vault で作成したシークレットの名前**
    <!-- Image= dbexport12.png -->
{{< imagedisplay dbexport12 "290" "596" "796" >}}

  この部分は、SQL サーバーの「接続文字列」から取得。
  * **$connectionString は上記の SQL サーバー作成時に確認した「接続文字列」の部分 （SQL サーバーアカウントとパスワード設定済）**
    <!-- Image= dbexport13.png -->
{{< imagedisplay dbexport13 "290" "596" "796" >}}

  ここは Dynamics 365 から取得。
  * **$organizationIdList は エクスポートする Dynamics 365 インスタンス参照情報 の ID**
    Dynamics 365 にアクセスして「設定」の「カスタマイズ」より「開発者リソース」を開き、「インスタンス参照情報」の 「ID」をコピーします。
     <!--Image= dbexport14.png  -->
{{< imagedisplay dbexport14 "290" "596" "796" >}}

  （例）各値が下記の場合
  * サブスクリプションID：0aaaaaaa-9999-ff44-0000-xxxxxxxxTest
  * Key Vault 名：vdemovault
  * シークレット名：vdemoPswd
  * リソースグループ名：NetworkWatcherRG
  * 場所：米国東部
  * SQL サーバー名：demodemo.database.windows.net
  * SQL サーバーアカウント：sqladmin
  * パスワード：P@ssword
  * インスタンス参照情報 の ID：12345678-bbbb-test-demo-9876543210vd
  * ディレクトリID：xxxxxxxx-0000-1111-2222-yyyyyyyyyyy

  Power Shell コマンドの各パラメーターの値は以下のようになります。
  * $subscriptionId = '**0aaaaaaa-9999-ff44-0000-xxxxxxxxTest**'
  * $keyvaultName = '**vdemovault**'
  * $secretName = '**vdemoPswd**'
  * $resourceGroupName = '**NetworkWatcherRG**'
  * $location = '**米国東部**'
  * $connectionString = 'Server=tcp:**demodemo.database.windows.net**,1433;Initial     
    Catalog=**demodemo**;Persist Security    
    Info=False;User     
    ID=**sqladmin**;Password=P@**ssw0rd**;MultipleActiveResultSets=False;Encrypt=True;    
    TrustServerCertificate=False;Connection     
    Timeout=30;'
  * $organizationIdList = '**12345678-bbbb-test-demo-9876543210vd**'
  * $tenantId = '**xxxxxxxx-0000-1111-2222-yyyyyyyyyyy**'

Azure で Power Shell を実行するには、右上の  >_ が Power Shell コマンド起動ボタンなのでクリックします。画面下に、上記で用意したパラメーターと残りのコマンドを張り付けて実行しましょう。
<!-- Image= dbexport15.png -->
{{< imagedisplay dbexport15 "290" "596" "796" >}}

コマンドの途中

#Login to Azure account, select subscription and tenant Id         
**Login-AzureRmAccount**

でログインが求められるので、コマンド内の https://microsoft.com/devicelogin にアクセスして、 code を入力します。
<!-- Image= dbexport16.png -->
{{< imagedisplay dbexport16 "290" "596" "796" >}}

デバイスのログインページで、コードを入力したら「続行」をクリック。
<!-- Image= dbexport17.png -->
{{< imagedisplay dbexport17 "290" "596" "796" >}}

以下の画面になったら、このログイン画面は閉じてOKです。先ほどの Azure Power Shell 画面に戻りましょう。
<!-- Image= dbexport18.png -->
{{< imagedisplay dbexport18 "290" "596" "796" >}}

すべて完了したら、下記のような URL が生成されます。
<!-- Image= dbexport19.png -->
{{< imagedisplay dbexport19 "290" "596" "796" >}}

この Key Vault URL を後述の Data Export Service セットアップ時に使います。

## Data Export Service のセットアップ
Dynamics 365 に管理者でログインして、Data Export Service をセットアップします。

### 監査の有効化
エクスポートしたいエンティティの監査を有効にする必要があります。

「設定」の「管理」から「システムの管理」を開き、「監査」タブにて「監査の開始」にチェックを入れます。領域については、そのまま共通エンティティのみにチェックで「OK」をクリックします。
<!-- Image= dbexport20.png -->
{{< imagedisplay dbexport20 "290" "596" "796" >}}

次に「設定」の「カスタマイズ」から「システムのカスタマイズ」をクリックして、

特定のエンティティの「情報」を開き、「データサービス」の「監査」にチェックをいれて保存してください。
<!-- Image= dbexport21.png -->
{{< imagedisplay dbexport21 "290" "596" "796" >}}

### Data Export Service をインストール
まず、「設定」の「Microsoft AppSource」をクリックします。
<!-- Image= dbexport22.png -->
{{< imagedisplay dbexport22 "290" "596" "796" >}}

Data Export Service を検索して「今すぐ入手する」をクリックします。
<!-- Image= dbexport23.png -->
{{< imagedisplay dbexport23 "290" "596" "796" >}}

チェックをいれて、「続行」をクリックします。
<!-- Image= dbexport24.png -->
{{< imagedisplay dbexport24 "290" "596" "796" >}}

インストールするインスタンスを選択して、２つにチェックを入れたら「同意する」をクリック
<!-- Image= dbexport25.png -->
{{< imagedisplay dbexport25 "290" "596" "796" >}}

インスタンスにインストールが完了したかどうかを確認します。
<!-- Image= dbexport26.png -->
{{< imagedisplay dbexport26 "290" "596" "796" >}}

インストールされると、「設定」に「データのエクスポート」が表示されているので開きます。
<!-- Image= dbexport27.png -->
{{< imagedisplay dbexport27 "290" "596" "796" >}}

ポップアップブロックがされていると開かないので許可しておきましょう。開いたら「＋NEW」をクリックします。

Create Export Profile のダイアログで、Name は任意、Key Vault URL は上記で取得した URL を設定します。その他はそのままで、「Validate」をクリックします。
<!-- Image= dbexport28.png -->
{{< imagedisplay dbexport28 "290" "596" "796" >}}

Validate がうまくいくとダイアログが表示されます。「OK」をクリックします。
<!-- Image= dbexport29.png -->
{{< imagedisplay dbexport29 "290" "596" "796" >}}

「Next」をクリックして、エクスポートしたいエンティティを検索してチェックします。（監査が有効になっていないエンティティはグレーアウトしています。）

今回は、取引先企業・担当者・営業案件を選択しました。選択が完了したら「Next」をクリック。
<!-- Image= dbexport30.png -->
{{< imagedisplay dbexport30 "290" "596" "796" >}}

Relationship の追加はないので「Next」
<!-- Image= dbexport31.png -->
{{< imagedisplay dbexport31 "290" "596" "796" >}}

完了。「Create & Activate」をクリックします。
<!-- Image= dbexport32.png -->
{{< imagedisplay dbexport32 "290" "596" "796" >}}

しばらくするとエクスポートが完了です。
<!-- Image= dbexport33.png -->
{{< imagedisplay dbexport33 "290" "596" "796" >}}

SSMS 側でも確認してみると、テーブルが増えていることが確認できました。
<!-- Image= dbexport34.png -->
{{< imagedisplay dbexport34 "290" "596" "796" >}}

無事にエクスポートできました。これでセットアップは終了です。

最後に、便利な Data Export Service ですが、[既知の問題](https://docs.microsoft.com/ja-jp/power-platform/admin/replicate-data-microsoft-azure-sql-database#known-issues)も記載されているので、検証を終えて、本番導入する場合は事前に目を通しておいてください。※特に 「行の最大許容サイズ 8060 より大きい行を作成できない」制限をきちんと把握してから、エクスポートの計画を立てていくことをお勧めます。

今回はここまで。