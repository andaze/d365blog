---
title:  "Dynamics 365 の基本について知ろう"
draft: false
weight: 1
datetitle: "2017.08.23 | "
image: "artical1.jpg"
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
      "dateModified": "2015-02-05T09:20:00+08:00"
    }
---
<!-- Intro  -->
前回は、管理センターから Dynamics 365 へアクセスした記事をご紹介しました。

管理者以外の場合のアクセスは、下記のホームページからです。

https://home.dynamics.com

すると、Dynamics 365 のホームページが開きます。

マイアプリ に現在のユーザーの利用可能なアプリが表示されています。そこで、下記の画面で 「Dynamics 365」 をダブルクリックしてアクセスしてみましょう。
<!-- Image= app.png -->
{{< imagedisplay src="app.png" >}}

するとDynamics 365 にログインすると下記のような画面になっています。

初期設定では、まずダッシュボードが開きます。
<!-- Image= dashboard.png -->
{{< imagedisplay src="dashboard.png" >}}

Dynamics 365 を開いて最初のページは、この 営業のカテゴリの、一番左上のエンティティが表示されるようです。
<!-- Image= sales.png -->
{{< imagedisplay src="sales.png" >}}

このナビゲーションメニューについては、サイトマップエディターで変更できます。（また別の記事で触れる予定です）。

現在利用できるアプリについては、メニューからも確認ができます。
<!-- Image= menu.png -->
{{< imagedisplay src="menu.png" >}}

どのアプリをインストールしているか、もしくはどのライセンスを購入しているかによって初期のサイトマップ(※下記の画像の赤線部分) は異なりますが、プラン1 で 営業、顧客、フィールドサービスなどをインストールしていると下記のようなナビゲーションメニューになっているはずです。

このメニューは、ソリューションのサイトマップエディターで編集することができます。
<!-- Image= menu1.png -->
{{< imagedisplay src="menu1.png" >}}

サイトマップを編集するときは
* エリア
* グループ
* サブエリア

と3層構造に分かれています。
<!-- Image= menu2.png -->
{{< imagedisplay src="menu2.png" >}}

Dynamics 365 でカスタマイズやセキュリティ、メールやドキュメントの設定を行う際は、基本的に 「設定」 のエリアからアクセスします。
<!-- Image= settings.png -->
{{< imagedisplay src="settings.png" >}}

エンティティやフィールド Web リソース、サイトマップ、ダッシュボードなどの設定はほとんどが カスタマイズ のサブエリアから、「システムのカスタマイズ」 で設定します。

設定のカスタマイズから、
<!-- Image= settings1.png -->
{{< imagedisplay src="settings1.png" >}}

「システムのカスタマイズ」 をクリックすると、
<!-- Image= CustomizeSystem.png -->
{{< imagedisplay src="CustomizeSystem.png" >}}

既定のソリューションを開くことができます。
<!-- Image= solution.png -->
{{< imagedisplay src="solution.png" >}}

それでは次回より、少しずつ設定をしていきましょう。