---
title:  "Dynamics 365 ポータルアドオンの利用"
draft: false
weight: 6
datetitle: "2017.08.23 | "
image: "artical6.jpg"
Author: "Takafumi Noguchi"
authorimage: "authorimage.jpg"
showinhome: true
showinaccordian: false
rightMenu: "artical"
linkdin: "aa"
---
<!-- Intro  -->
Dynamics 365 Customer Engagement Plan アプリケーションには標準で、１つのポータルアドオンが提供されています。

ポータルを利用するメリットしては以下のようなことが挙げられます。
<!-- QuateBox -->
* Dynamics 365 のライセンスを持たない組織外のユーザーに対しても、Dynamics 365 のデータを活用してサービスや情報の提供ができる
* Dynamics 365 のレコードの作成・編集のみで簡単に Web サービスの構築が行える
等のメリットが得られます。

引用元: [Microsoft Dynamics 365 新機能: Portal アドオン その 1](https://docs.microsoft.com/en-us/archive/blogs/crmjapan/introduction-of-portal-01)
今回は Dynamics 365 のポータルを使って、お問い合わせフォームを構成する手順をご紹介します。


## Dynamics 365 ポータルのセットアップ
Dynamics 365 ポータル機能については、上述したマイクロソフトのブログに詳しく記載されているため、ここでは割愛します。

なお、ここでは下図のように、顧客セルフサービスポータルをセットアップしました。
<!-- Image= portaldemo01.png -->
{{< imagedisplay portaldemo01 "290" "596" "796" >}}


### ページビューとライセンス
Dynamics 365 Customer Engagement Plan でポータル機能を利用する上での制限として以下があります。
* Dynamics 365 Customer Engagement Plan もしくはアプリケーション (Sales, CS, FS, PSA) のライセンスを合計で10シート必要
* ページビューは 100万回/月
* クラウドのみで利用可能。オンプレミスでは不可

引用元: [Dynamics 365 ライセンス ガイド ](https://go.microsoft.com/fwlink/?LinkId=866544&clcid=0x411)     
無償版の Dynamics 365 を利用して検証する場合は、上記の制限を気にする必要はありません。

### Marketing 利用時の注意事項
すでに Dynamics 365 for Marketing をセットアップしている環境で上記のポータルセットアップ手順を行うと、Marketing の機能に支障が出る可能性があります。Dynamics 365 for Marketing をセットアップしている環境で、ポータル機能を利用する場合は、別途ライセンスの購入が必要になります。

## ポータル管理画面へアクセス
まずはポータルの管理画面に遷移します。左パネルの「ポータルの詳細」をクリックすると、ポータルの詳細情報を確認できます。
<!-- Image= portaldemo02.png -->
{{< imagedisplay portaldemo02 "290" "596" "796" >}}


「ポータルアクション」をクリックすると、ポータルの再起動やURLの変更、リセットなどを実行できます。
<!-- Image= portaldemo03.png -->
{{< imagedisplay portaldemo03 "290" "596" "796" >}}


診断ログを有効にできるのですが、これは別途 Azure Blob が必要になるので、ここでは触れません。

## ポータルのアカウント
作成したポータルにアクセスをすると、右上に「サインイン」がありますので、クリックします。
<!-- Image= portaldemo04.png -->
{{< imagedisplay portaldemo04 "290" "596" "796" >}}

ここで、「ローカル アカウント」と「外部アカウント」の２種類のサインインがあります。
<!-- Image= portaldemo05.png -->
{{< imagedisplay portaldemo05 "290" "596" "796" >}}

* ローカルアカウントはポータルで管理されるアカウントで、登録をすると ID とパスワードがポータル内で管理されます。
* 外部アカウントは、Azure AD や他の外部システムで管理されているアカウントでのサインインになります。

以下、技術情報での定義です。

<!-- QuateBox -->
**ローカル認証:** ローカル認証は、認証用に Dynamics 365 for Customer Engagement 組織の取引先担当者レコードを使用する、共通のフォーム ベースの認証です。 カスタムの認証エクスペリエンスを構築するには、開発者は ASP.NET ID API を使用して、カスタムのログイン ページおよびツールを作成します。   
**外部認証:** 外部認証は、ASP.NET ID API によって提供されます。 この場合、アカウント資格とパスワード管理は、サード パーティーの ID プロバイダーによって処理されます。 これには、Yahoo! などのプロバイダー ベースの OpenID が含まれます。 さらに Twitter、Facebook、および Microsoftなどのプロバイダー ベースの Google や OAuth 2.0。 ユーザーは、ポータルに登録するための外部 ID を選択して、ポータルにサイン アップします。 登録した後、外部 ID でローカル アカウントと同じ機能にアクセスできます。

引用元: [Dynamics 365 for Customer Engagement ポータル認証を構成する](https://docs.microsoft.com/ja-jp/powerapps/maker/portals/configure/configure-portal-authentication)

ここでのアカウントは、Dynamics 365 の「**取引先担当者**」レコードとして管理されます。


## オープン登録の無効化
「**オープン登録**」というポータル上でユーザーが自由にアカウントを登録できる機能は既定ではONになっており、「サインイン」の「登録」タブからメールアドレス、ID、パスワードを自由に登録できます。これはマイページのようなアクセスしたユーザーが自由に利用できるタイプのサイトでは有効です。
<!-- Image= portaldemo06.png -->
{{< imagedisplay portaldemo06 "290" "596" "796" >}}

もしこのオープン登録を無効化したい場合は、Dynamics 365 の「ポータル」を開きます。
<!-- Image= portaldemo07.png -->
{{< imagedisplay portaldemo07 "290" "596" "796" >}}

「サイトの設定」をクリックします。
<!-- Image= portaldemo11.png -->
{{< imagedisplay portaldemo11 "290" "596" "796" >}}

“**Authentication/Registration/OpenRegistrationEnabled**” という設定を検索してクリックします。
<!-- Image= portaldemo08.png -->
{{< imagedisplay portaldemo08 "290" "596" "796" >}}

値を “false” にして保存します。
<!-- Image= portaldemo09.png -->
{{< imagedisplay portaldemo09 "290" "596" "796" >}}

ポータルに戻り、「サインイン」をクリックします。すると「登録」のタブが消えていることがわかります。
<!-- Image= portaldemo10.png -->
{{< imagedisplay portaldemo10 "290" "596" "796" >}}

その他の認証方法に関する技術情報は下記を参照してください。    
技術情報： [ポータル用の認証 ID の設定](https://docs.microsoft.com/ja-jp/powerapps/maker/portals/configure/set-authentication-identity)     
※オープン登録は利用したいので、**true に値を戻して**おきます。

## 招待状の送付とサインイン
サインインできるユーザーを限定したい場合は、「招待状」を利用してユーザー登録を行います。
※ 招待状を送付するには、操作するユーザーのメールボックスが有効になっている必要があります。

手順については、 [Dynamics 365 のメール設定を確認する](https://dynamics365.andaze.com/cannot-send-email-from-trial/#Dynamics_365) で触れています。

### 事前作業：Send Invitation プロセスの更新
招待状に引換用のコードを付与したURLを追加するために、Send Invitation というプロセスを編集します。Dynamics 365 の「設定」の「プロセス」から “Send Invitation” というプロセスを開きます。「非アクティブ化」をクリックして非アクティブ化した後、「Create an email to act as an email template」の「プロパティの設定」をクリックします。
<!-- Image= portal1.png -->
{{< imagedisplay portal1 "290" "596" "796" >}}

ここでメール本文にポータルログイン用のURLがありますが、これはサンプルになるのでここを書き換えます。URLの最初の部分は作成したポータルのURLに書き換えて、/register/?returnurl=%2f&invitation= だけ残しつつ、その後に “Encode Invitation Code” というプロセスの前のステップで取得した引き換えコード（動的）の値を追加します。
<!-- Image= portal3.png -->
{{< imagedisplay portal3 "290" "596" "796" >}}

URLは下記のようになります。

**<ポータルのURLはここ>/register/?returnurl=%2f&invitation=<Encode invitation Code をここに>**
<!-- Image= portal004.png -->
{{< imagedisplay portal004 "290" "596" "796" >}}

これでプロセス実行の準備ができました。

### 招待状の送付とサインイン
Dynamics 365 の取引先担当者を１つ開きます。招待状が送付される電子メールに値が入っていることを確認して、
メニューから「招待状の送付」をクリックします。
<!-- Image= portaldemon01.png -->
{{< imagedisplay portaldemon01 "290" "596" "796" >}}


招待状の新規作成画面が表示されるので、名前などを入力して上書き保存します。そしてメニューの・・・より「フロー」を展開して、「ワークフローの実行」から “Send Invitation” をクリックします。

<!-- Image= portaldemon02.png -->
{{< imagedisplay portaldemon02 "290" "596" "796" >}}


ダイアログで「OK」をクリックして完了です。
<!-- Image= portaldemon03.png -->
{{< imagedisplay portaldemon03 "290" "596" "796" >}}

実行されたら、メールが届きます。下記のURLをコピーします。
<!-- Image= portal005.png -->
{{< imagedisplay portal005 "290" "596" "796" >}}

ポータルで招待コードの引き換え画面になるので、「登録」をクリックします。
<!-- Image= portal006.png -->
{{< imagedisplay portal006 "290" "596" "796" >}}

「ユーザー名」と「パスワード」を入力して「登録」をクリックします。
<!-- Image= portal007.png -->
{{< imagedisplay portal007 "290" "596" "796" >}}


これで招待状を送付したユーザーはポータルにマイページをもって利用することが可能になります。

### ポータルアカウントの確認
招待状で登録されたポータルアカウントの設定内容は、取引先担当者の別フォームで確認できます。フォームセレクターから「Portal Contacts」をクリックします。
<!-- Image= portal008.png -->
{{< imagedisplay portal008 "290" "596" "796" >}}

「Web認証」タブを開くと先ほど設定した内容が記載されています。
<!-- Image= portal009.png -->
{{< imagedisplay portal009 "290" "596" "796" >}}


* 「ユーザー名」はポータルのログイン名
* 「ログインが有効」でユーザーのログインが可能かどうかを判断（無効にするならチェックを外す）
* 「ロックアウトが有効」でユーザーが複数回ログインをするとしばらくロックアウトするかどうか
* 「ロックアウト終了日」でロックアウトされた場合、いつ解除されるか

などの設定が確認できます。

## ポータルからお問い合わせ
それでは招待状でサインインしたまま、ポータル上でお問い合わせを行います。ページ下の「サポート案件の作成」をクリックします。
<!-- Image= port1.png -->
{{< imagedisplay port1 "290" "596" "796" >}}

新規お問い合わせフォームが開きますので、そこでタイトルや説明を埋めます。
<!-- Image= portal11.png -->
{{< imagedisplay portal11 "290" "596" "796" >}}


添付ファイルはないので、このまま「送信」をクリックします。
<!-- Image= portal12.png -->
{{< imagedisplay portal12 "290" "596" "796" >}}


お問い合わせが届いたか確認します。Dynamics 365 の「サービス」を開きます。
<!-- Image= portal13.png -->
{{< imagedisplay portal13 "290" "596" "796" >}}


「サポート案件」を開くと、先ほどのお問い合わせが作成されています。
<!-- Image= portal14.png -->
{{< imagedisplay portal14 "290" "596" "796" >}}

これでポータルからサポート案件を作成することができました。もしお問い合わせをキャンセルやクローズしたい場合は、ポータルから設定もできます。
<!-- Image= portal15.png -->
{{< imagedisplay portal15 "290" "596" "796" >}}

ポータルの簡単なセットアップについてはここまで。    
&nbsp;