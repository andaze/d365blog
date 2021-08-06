---
title:  "Dynamics 365 ライセンス の購入"
draft: false
weight: 3
datetitle: "2017.08.23 | "
image: "artical3.jpg"
Author: "Takafumi Noguchi"
authorimage: "authorimage.jpg"
showinhome: true
showinaccordian: false
rightMenu: "artical"
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

<!-- Intro  -->
これまで、Dynamics 365 の導入に向けて準備を進めていきました。

スケジュールやコストの概算ができ、さっそく Dynamics 365 を使い始めてみたいと思います。まず必要なことは、ライセンスの購入。これは基本中の基本ですが、ライセンスを購入しないと話が進みません。


## Dynamics 365 のライセンスを購入する
まずは下記のサイトから、ライセンス購入を進めていきましょう。

Dynamics 365 の価格     
[https://www.microsoft.com/ja-jp/dynamics365/pricing](https://dynamics.microsoft.com/ja-jp/pricing/)

アクセスすると、下記のような画面に遷移すると思います。

<!-- Image= accessSite.png -->
{{< imagedisplay src="accessSite.png" >}}


今回は Dynamics 365 Plan 1 を購入する手続きにしようと思います。

Dynamics 365 Plan 1 の 「購入」ボタンをクリックします。

<!-- Image= Purchase.png -->
{{< imagedisplay src="Purchase.png" >}}

するとユーザー登録の画面になるため、登録をします。

※事前に Office 365 のアカウント(@xxxx.onmicrosoft.com) を登録している場合は「サインイン」から購入画面に進みます。

<!-- Image= signIn.png -->
{{< imagedisplay src="signIn.png" >}}

下記のようにアカウント名とパスワードを登録して、【次へ】に進むとアカウントを作成します。
<!-- Image= add-01.png -->
{{< imagedisplay src="add-01.png" >}}


あとは、購入画面にてライセンス購入をします。
必要なライセンス数を決めて、【次へ】をクリックします。

<!-- Image= licenses.png -->
{{< imagedisplay src="licenses.png" >}}

お支払い情報を入力後、注文をして購入をしてください。
<!-- Image= payment.png -->
{{< imagedisplay src="payment.png" >}}


購入が完了したら、次のステップへ行きましょう。

## Office 365 管理センターへアクセス
購入後、Office 365 の管理者サイトへ移動します。

Office 365 Admin center    
[https://portal.office.com/adminportal/home#/homepage](https://portal.office.com/adminportal/home#/homepage)

課金情報 の ライセンス から購入したライセンスの情報を確認できます。
<!-- Image= Billing.png -->
{{< imagedisplay src="Billing.png" >}}


あとは、Dynamics 365 を利用するアカウントにライセンスを割り当ててください。
<!-- Image= account.png -->
{{< imagedisplay src="account.png" >}}


【製品ライセンス】の【編集】を押します。
<!-- Image= add-02.png -->
{{< imagedisplay src="add-02.png" >}}


Dynamics 365 のライセンスをオンにして、保存をクリックしてください。
<!-- Image= add-03.png -->
{{< imagedisplay src="add-03.png" >}}


Dynamics 365 の管理センターからアクセスする

あとは、管理センターより Dynamics 365 にアクセスします。
<!-- Image= Management.png -->
{{< imagedisplay src="Management.png" >}}


Dynamics 365 の管理センターでインスタンスを編集して、（※画面ではすでに完了となっていますが）
<!-- Imnage= admin.png -->
{{< imagedisplay src="admin.png" >}}


このようにインスタンスの URL や実稼働環境かそれともサンドボックスにするかを設定できます。セキュリティグループを設定することも可能です。
<!-- Image= sandbox.png -->
{{< imagedisplay src="sandbox.png" >}}


インスタンスに利用するアプリ（営業やマーケティング、サービスなど）はソリューションから設定できます。
<!-- Image= configured.png -->
{{< imagedisplay src="configured.png" >}}


インストールが完了しているアプリを確認できます。今回は営業と顧客サービスアプリケーションはインストールしています。その他、必要なソリューションはインストールしてください。

<!-- Image= add-04.png -->
{{< imagedisplay src="add-04.png" >}}


準備が整えば、実際に Dynamics 365 へアクセスしてみましょう。
<!-- Image= access.png -->
{{< imagedisplay src="access.png" >}}

実際の Dynamics 365 画面が表示されました。
<!-- Image= screen.png -->
{{< imagedisplay src="screen.png" >}}


次回は管理センターの画面について少し説明をしていきます。