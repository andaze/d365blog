---
title:  "Dynamics 365 インスタンスの管理"
draft: false
weight: 9
datetitle: "2017.08.23 | "
image: "artical9.jpg"
Author: "Takafumi Noguchi"
authorimage: "authorimage.jpg"
showinhome: true
showinaccordian: true
linkdin: ""
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
      "dateModified": "2015-02-05T09:20:00+08:00"
    }
---
<!-- Intro  -->
それでは Dynamics 365 の管理センターで何ができるかについて説明していきます。


## インスタンスの管理
インスタンスでは、現在構成がされているインスタンス（実稼動およびサンドボックス(※1)）の管理、インスタンスのソリューションのインストールなどが行えます。プラン1　ライセンスの場合は、無償のサンドボックスインスタンスが提供されています。

（※2）
<!-- Image= Instances1.png -->
{{< imagedisplay src="Instances1.png" >}}

(※1) サンドボックスとは：
<!-- Quate Box -->
サンドボックス インスタンスは、Microsoft Dynamics 365 (オンライン)の非運用環境インスタンスです。 運用環境から独立しているので、サンドボックス インスタンスでは、アプリケーションの変更を、低リスクで安全に開発およびテストできます。

引用元： [https://technet.microsoft.com/ja-jp/library/dn659833.aspx#BKMK_View](https://technet.microsoft.com/ja-jp/library/dn659833.aspx#BKMK_View)


（※2）無償提供のサンドボックスインスタンスについて
<!-- Quate Box -->
Microsoft Dynamics 365 用 2016 年 12 月の更新プログラム (オンライン)で、無料サンドボックス インスタンスを受け取るための最低購買価格は必要とされません。 サブスクリプションを購入しても無料サンドボックス インスタンスを受け取っていない場合は、完全な Dynamics 365 Enterprise ライセンスを購入時に提供されます。 テナントごとに 1 つの無料のインスタンスという制限があります。 サンドボックス インスタンスを追加で購入することもできます。 詳細については、 「[Microsoft Dynamics 365 価格設定とライセンス](https://go.microsoft.com/fwlink/p/?LinkID=321102)」を参照してください。

引用元：[https://technet.microsoft.com/ja-jp/library/dn659833.aspx#BKMK_View](https://technet.microsoft.com/ja-jp/library/dn659833.aspx#BKMK_View  )

### 開発環境の構築方法
実稼動しているインスタンスを下に、開発環境を構築したい場合はどうすればいいか？

答えは単純です。

サンドボックスインスタンスにデータごとすべてコピーを行うことで、現時点の実稼動インスタンスのコピーを作成すればいいのです。構築方法はとてもシンプルです。

まず、Dynamics 365 管理センターより、インスタンスタブより実稼動インスタンス上をクリックします。

右メニューにある コピー ボタンをクリックすると、サンドボックスに現在のデータをコピーできます。
<!-- Image= Instances2.png -->
{{< imagedisplay src="Instances2.png" >}}

コピー先のインスタンスを選択して、完全なコピーか最小コピーかを選択して実行します。初回は「完全なコピー」を選択します。

(※ 100GB を超えるインスタンスのコピーについては、マイクロソフトサポートセンターにコピーを依頼する必要があります。)
<!-- Image= Instances3.png -->
{{< imagedisplay src="Instances3.png" >}}

インスタンスの完全および最小コピーについての詳細は下記の技術情報に記載があります。

インスタンスをサンドボックス インスタンスにコピーする

[https://docs.microsoft.com/ja-jp/dynamics365/customer-engagement/admin/copy-instance#next-steps-after-copying-an-instance](https://docs.microsoft.com/ja-jp/dynamics365/customer-engagement/admin/copy-instance#next-steps-after-copying-an-instance)

<!-- Quate Box -->
**インスタンスの完全なコピー**    
完全なコピーには、元のインスタンスのすべてのアプリケーション データ、ユーザー、およびカスタマイズが含まれ、以下の場合に適しています。
* ユーザー受け入れテスト
* アップグレードのテスト
* 運用環境 (TAP/EA) でのプレビュー
* 研修

**インスタンスの最小限コピー**    
最小限のコピーには、元のインスタンスのユーザー、カスタマイズ、およびスキーマのみが含まれ、以下の場合に適しています。
* 反復的なチーム開発
* パートナー/ISV ソリューション
* 概念実証


### インスタンスのソリューション管理
インスタンスにインストールされているソリューションを管理する場合は、ソリューションの 鉛筆マーク をクリックします。

初回インスタンス構成時に、営業・マーケティング・サービスとアプリを選択すると思いますが、構成時に選択しなかったアプリをインスタンス構成後にインストールする場合は、ここから行います。

その方法については　Dynamics 365ライセンス購入と管理センターへのアクセスをしてみよう で触れていますので、ご確認ください。
<!-- Image= Instances4.jpg -->
{{< imagedisplay src="Instances4.jpg" >}}

ソリューション一覧を表示すると、インストール状況や有効期限、バージョンなどを確認できます。Dynamics 365　のポータル機能などを利用したい場合は、ソリューションのインストールを行う必要がありますが、この場所から実施します。
<!-- Image= Instances5.jpg -->
{{< imagedisplay src="Instances5.jpg" >}}

### インスタンスを管理モードにする
開発中のサンドボックスインスタンスを管理者のみ（システム管理者およびシステムカスタマイザーのロール）のアクセスのみにする機能が、管理モードになります。この機能を有効にすると、通常のユーザーのアクセスが制限される上、バックグラウンドで実行されるワークフローや Exchange との同期機能が停止されるため、他の干渉を受けることなく作業を行うことができます。

たとえば、運用ルールを変更する、単体の機能の動作確認などを行いたいときに便利です。


サンドボックスインスタンスの「管理」ボタンをクリックします。
<!-- Image= Instances6.jpg -->
{{< imagedisplay src="Instances6.jpg" >}}

「管理モードを有効にする」にチェックを入れると管理モードになり、

「バックグラウンド操作を無効にする」にチェックをいれると、ワークフローなどのバックグラウンド実行ジョブがすべて無効になり、

「エンドユーザー向けのカスタムメッセージ」にメッセージを入力すると、システム管理者以外がサンドボックスにアクセスした際に表示するメッセージを設定できます。
<!-- Image= Instances7.jpg -->
{{< imagedisplay src="Instances7.jpg" >}}

### インスタンスのリセットおよび削除
インスタンスを初期状態に戻す場合はリセット、削除する場合は削除のボタンをクリックします。
<!-- Image= Instances8.jpg -->
{{< imagedisplay src="Instances8.jpg" >}}

インスタンスのリセットはとても便利で、サンドボックスでの開発が複雑になり問題が発生した際は、一度サンドボックスをリセットしてから、実稼動のインスタンスをコピーすれば、再度開発を進めることができます。リセット画面は、インスタンス構成時の画面と同じです。

※　この際、最新のアップデートが公開されていれば、「対象のバージョン」で選択することができます。
<!-- Image= Instances9.jpg -->
{{< imagedisplay src="Instances9.jpg" >}}

削除については、記憶域の回復をする場合に利用されます。インスタンスを削除した場合、管理センターのインスタンス一覧には構成対象のインスタンスとして表示されます。

### インスタンスのアップデート管理
インスタンスのアップデートについては、更新 より管理できます。Dynamics 365 のメジャーアップデートは年に2回実施されます。もし Dynamics 365 にカスタマイズを実装している場合などは、アップデートは慎重に行う必要がありますが、顧客側がスケジュールを管理できる 顧客主導更新 (CDU)  という仕組みを、マイクロソフトは 2016 年12月3日から取り入れています。

ただし、アップデートが 2 世代前のバージョンになると、最新のアップデートが必須となり、自動的にアップデートがスケジュールされるため、定期的なアップデート実施を計画する必要があります。
<!-- Image= Instances10.png -->
{{< imagedisplay src="Instances10.png" >}}

次回は、[インスタンスの正常性](#)についてふれていきます。