---
title:  "オンプレミスの SQL Server からデータを取得する"
draft: false
weight: 4
datetitle: "2017.08.23 | "
showinhome: true
showinaccordian: false
rightMenu: "artical"
indexImg: "artical4.jpg"
description: "Dynamics 365 は Power Platform と呼ばれる PowerApps、Flow、Power BI と連携することで、その価値をさらに高めることができます。"
jsonld: {
      "@context": "https://schema.org",
      "@type": "NewsArticle",
      "headline": "Article headline",
      "image": [
        "https://example.com/photos/1x1/photo.jpg",
        "https://example.com/photos/4x3/photo.jpg",
        "https://example.com/photos/16x9/photo.jpg"
       ],
      "datePublished": "2015-02-05T08:00:00+08:00",
      "dateModified": "2015-02-05T09:20:00+08:00",
      "author": {
        "@type": "Person",
        "name": "John Doe"
       },
       "publisher": {
        "@type": "Organization",
        "name": "Google",
        "logo": {
          "@type": "ImageObject",
          "url": "https://google.com/logo.jpg"
         }
       }
    }
---
{{< detailTopImage >}}
{{< authorImage src="authorimage.jpg" name="Takafumi Noguchi" linkdin="https://www.linkedin.com/in/tnoguchi1123531" >}}
<!-- Intro  -->
Dynamics 365 は Power Platform と呼ばれる PowerApps、Flow、Power BI と連携することで、その価値をさらに高めることができます。Dynamics 365 Customer Engagement Plan のライセンスを利用している場合は、ぜひとも活用したいアプリケーションです。

現在 Dynamics 365 は Common Data Service を使用してデータを管理しているため、Dynamics 365 で蓄積したデータを、同様にCommon Data Service を利用している PowerApps、Flow、Power BI にシームレスに渡すことができます。
<!-- Image= cds01.jpg -->
{{< imagedisplay src="cds01.jpg" >}}


引用元： [Common Data Service とは何ですか （マイクロソフト）](https://docs.microsoft.com/ja-jp/powerapps/maker/data-platform/data-platform-intro)

<!-- Quate Box -->
**Common Data Service にデータの統合**
アプリケーションの構築には、通常、複数のソースからのデータが含まれますが、これはアプリケーション レベルで行われることもあります。このデータを共通のストアに統合することで、アプリケーション構築の経験が簡単になり、データを維持して操作するための単一のロジック セットが可能になる場合もあります。 Common Data Service は複数のソースから単一のストアにデータを統合し、Dynamics 365 アプリケーションから既に利用可能なデータとともに、PowerApps、Flow および Power BI で使用することができます。

引用元： [Common Data Service とは何ですか （マイクロソフト）](https://docs.microsoft.com/ja-jp/powerapps/maker/data-platform/data-platform-intro)

この Common Data Service （CDS）を使って、オンプレミスの SQL Server からデータを取得して、Dynamics 365 の新しいエンティティに格納する手順をご紹介します。※CDS とは何かについては上記の技術情報をご参照ください。


## 事前準備
SQL Server のデータを Dynamics 365 に反映させる前に、いくつか準備をします。

### オンプレミスの SQL Server を構築
オンプレミスの SQL Server を Azure の VM を使って構築しました。

手順としては、
  * [無料アカウント](https://azure.microsoft.com/ja-jp/free/search/?&OCID=AID719813_SEM_sFJ0b07m&dclid=CL-x6bax3uICFQ_ZvQodph0BJA) でAzure ポータルにログインして、VM （Windows 10）環境を1台構築
  * リモートデスクトップでアクセスして、 [オンプレミスの SQL Server 2017 ](https://www.microsoft.com/ja-jp/sql-server/sql-server-downloads)  をインストール 
  * [SQL Server Management Studio (SSMS) ](https://docs.microsoft.com/ja-jp/sql/ssms/download-sql-server-management-studio-ssms?view=sql-server-2017)をインストールして接続
  * [サンプルデータ](https://github.com/Microsoft/sql-server-samples/releases) をダウンロードして、SSMS から復元
    ※手順は 「[SQL Server でサンプルDBを利用する](https://www.nuits.jp/entry/sqlserver-sample-db-install)」を参照

を行いました。**すべて無料**で検証できます。
※自分のクライアントPCに SQL Server インストールしてやればよかったんですが、いろいろな大人の事情があり、
Azure の VM 構築で対応しました。オンプレミス？ という多少の疑問は一度横に置いています（笑）

サンプルデータの「AdventureWorks2017」 から「SalesPerson」というテーブルを CDS の新しいエンティティに格納します。

サンプルデータの「AdventureWorks2017」 から「SalesPerson」というテーブルを CDS の新しいエンティティに格納します。

### Dynamics 365 と PowerApps の無償版のセットアップ
もし両方とも環境が用意できていない方は、無償版の利用を開始してください。
ここでは
  * [Dynamics 365 for Sales の無償版](https://trials.dynamics.com/)をセットアップ
  * 上記１で作成した onmicrosoft.com のアカウントで [PowerApps の無償版](https://powerapps.microsoft.com/ja-jp/#) をセットアップ

の順番で準備をしました。※手順は割愛します。

## オンプレミス データ ゲートウェイのインストール
それでは準備が整ったので早速始めます。まずはオンプレミスの SQL Server 上に **オンプレミス データ ゲートウェイ** をインストールします。このオンプレミス データ ゲートウェイをインストールすることで、オンプレミス・クラウド間のデータのやり取りが簡単にできるようになります。

オンプレミス データ ゲートウェイは、 [、ここからダウンロード](https://powerapps.microsoft.com/ja-jp/downloads/)できます。
<!-- Image= cds02.jpg -->
{{< imagedisplay src="cds02.jpg" >}}


### オンプレミス データ ゲートウェイの前提条件
オンプレミス データ ゲートウェイをオンプレ環境にインストールする場合は留意事項があります。

<!-- Quate Box -->
**最小:**
  * .NET 4.5 Framework
  *  64 ビット バージョンの Windows 7 または Windows Server 2008 R2 (またはそれ以降)     


**推奨:**
  * 8 コア CPU
  * 8 GB のメモリ
  * 64 ビット バージョンの Windows 2012 R2 (またはそれ以降)         


**関連する考慮事項:** ゲートウェイをドメイン コントローラーにインストールすることはできません。
ゲートウェイは、電源オフ、スリープ状態、インターネット未接続状態になる可能性があるコンピューター (ノート PC など) にインストールしないでください。このような状況では、ゲートウェイは動作できません。 さらに、ワイヤレス ネットワーク経由ではゲートウェイのパフォーマンスが低下する可能性があります。

引用元: [キャンバスアプリ用のオンプレミス データ ゲートウェイについて](https://docs.microsoft.com/ja-jp/powerapps/maker/canvas-apps/gateway-reference)

ダウンロードしたらインストールを開始します。インストール手順は上記の技術情報に記載があるのでご参考ください。

ここでは、データ ゲートウェイの名前を下図のように設定して構成しました。
<!-- Image= cds03.png -->
{{< imagedisplay src="cds03.png" >}}


正常に完了したら、下図のようになりました。PowerApps で準備完了となっています。
<!-- Image= cds04.png -->
{{< imagedisplay src="cds04.png" >}}


PowerApps の「ゲートウェイ」を開くと作成した データ ゲートウェイが表示されていました。
<!-- Image= cds05.png -->
{{< imagedisplay src="cds05.png" >}}


## オンプレミス SQL Server からデータを取得
オンプレミス SQL Server 上でオンプレミス データ ゲートウェイの設定が完了したので、PowerApps 側で特定のデータベースを取得してエンティティに格納します。

### SQL Server に接続する
PowerApps の画面に移動して、右上より Environment を切り替えます。
<!-- Image= cds06.jpg -->
{{< imagedisplay src="cds06.jpg" >}}


左パネルの「データ」を展開して「データ統合」をクリックします。「データ統合プロジェクトを作成」をクリックします。
<!-- Image= cds07.png -->
{{< imagedisplay src="cds07.png" >}}

データソースとして「SQL Server データベース」を選択します。
<!-- Image= cds08.png -->
{{< imagedisplay src="cds08.png" >}}


接続設定で SQL Server のサーバー名と取得したいデータベース名を入力、オンプレミス データ ゲートウェイに先ほど作成したデータ ゲートウェイを選択して、Windows 認証として認証情報を入力します。そして「次へ」をクリックします。

<!-- Image= cds09.png -->
{{< imagedisplay src="cds09.png" >}}


### 取得するデータ列を選択する
データベースのテーブルを選択します。ここでは「SalesPerson」を選択して「次へ」をクリック。
<!-- Image= cds10.png -->
{{< imagedisplay src="cds10.png" >}}

クエリの編集画面になります。「列の管理」で「列の選択」をクリックして、必要な列のみ取得するようにします。
<!-- Image= cds11.png -->
{{< imagedisplay src="cds11.png" >}}

選択したら「次へ」をクリックします。
<!-- Image= cds12.png -->
{{< imagedisplay src="cds12.png" >}}


### 新しいエンティティに読み込む
テーブルの情報を新しいエンティティに読み込みます。読み込みの設定で「新しいエンティティに読み込む」にチェックをいれて、エンティティ名と表示名を設定します。
<!-- Image= cds13.png -->
{{< imagedisplay src="cds13.png" >}}


フィールドマッピングでキーフィールドを設定します。ここでは BusinessEntityID という一意のIDフィールドを選択しました。
<!-- Image= cds14.png -->
{{< imagedisplay src="cds14.png" >}}

プライマリ名フィールドに LastName を設定しようとしたらエラーが出ました。複数行テキストは設定できないということなので、LastName のフィールド型を「テキスト」に変更しました。
<!-- Image= cds15.png -->
{{< imagedisplay src="cds15.png" >}}


プライマリ名フィールドを LastName にして、その他のフィールド型も「テキスト」に変更して「次へ」をクリックしました。

※もし複数行テキストがいい場合は、そのままでもOKです。
<!-- Image= cds16.png -->
{{< imagedisplay src="cds16.png" >}}


最後に設定の更新ですが、ここでは「手動で更新」としました。自動的に更新する場合は、更新間隔や開始日を設定します。
<!-- Image= cds17.png -->
{{< imagedisplay src="cds17.png" >}}


「作成」をクリックします。読み込み状態が「完了済み」となればOKです。
<!-- Image= cds18.png -->
{{< imagedisplay src="cds18.png" >}}


データ統合に新しいプロジェクトが作成されています。
<!-- Image= cds19.png -->
{{< imagedisplay src="cds19.png" >}}


エンティティをみると、新規作成したエンティティが一覧に表示されています。
<!-- Image= cds20.png -->
{{< imagedisplay src="cds20.png" >}}

Dynamics 365 のサイトマップ上に表示させてみました。
<!-- Image= cds21.png -->
{{< imagedisplay src="cds21.png" >}}


これでオンプレミス SQL Server から Dynamics 365 へのデータの取り込みは完了です。オンプレミスからの移行も CDS を活用することでスムーズに行えそうです。

今回はここまで。    
&nbsp;