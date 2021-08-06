---
title:  "Dynamics 365 無料試用版利用手順【2018年時点】"
draft: false
weight: 6
datetitle: "2017.08.23 | "
image: "artical6.jpg"
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
Dynamics 365 の用途や魅力について今まで様々な記事でご紹介してきましたが、まだ導入を検討されている方は、**無料試用版**で実際に検証をしてみて、使い勝手や動作について理解を深めてみることをお勧めします。特に、Dynamics 365 ブログでは、Dynamics 365 のアプリケーション毎の機能や用途、セットアップ手順などを細かく記載していますので、実際にご自分の手で触れてみることは理解を深める上でも重要なステップです。


## 無料試用版の Dynamics 365 について
Dynamics 365 のアプリケーションは、30日の無料試用版が提供されています。詳しくは[公式のドキュメント](https://docs.microsoft.com/ja-jp/power-platform/admin/try-powerapps-dynamics-365)にも記載があるのですが、操作が少しわかりづらい点もあるのでここでも詳細にまとめておきたいと思います。


### 無料試用版を利用する前に
無料試用版を利用する前の注意点として３点あります。

* 会社用のメールアドレスが必要になります。個人用のメールアドレスでは登録できませんのでご注意ください。
* ロボットでないことの確認のため、SMS が可能な携帯電話番号を用意してください。
* 公式ドキュメントを読むと、パートナーや新規・既存によって、操作が異なります。特に注意が必要なことが公式ドキュメント通りに無料試用版を作成しようとすると、既存のテナントに対して無料試用版を作成してしまうので、顧客に常駐しているパートナーが勝手にこの作業をすると問題になる可能性があります。作業をする場合は、顧客のテナントとは別のテナント（開発用）で検証するように注意してください。

今回は、独立したテナント上で環境を構築したいため、開発目的で Dynamics 365 のテナントを新規に作成します。

## Dynamics 365 無料試用版を作成
まずは、[Dynamics 365 の無料試用版](https://trials.dynamics.com/Dynamics365/Signup/)へアクセスします。すると利用できるアプリケーションが一覧で表示されていると思います。ここでは、開発を目的としているので「こちらからサインアップしてください」をクリックします。
<!-- Image =  d-setup-01.png-->
{{< imagedisplay src="d-setup-01.png" >}}


ダイアログが表示されますので、「いいえ、サインアップを続行します」をクリックします。
<!-- Image =  d-setup-02.png-->
{{< imagedisplay src="d-setup-02.png" >}}


個人情報を入力する画面になりますので、情報を入力してください。メールアドレスは法人のアドレスを入力します。
<!-- Image =  d-setup-03.png-->
{{< imagedisplay src="d-setup-03.png" >}}


ここでテナント情報とDynamics管理者のメールアドレスとパスワードを設定します。すでに使用済みだと設定できないのでユニークに設定しましょう。「Create My Account」で作成が開始されます。
<!-- Image =  d-setup-04.png-->
{{< imagedisplay src="d-setup-04.png" >}}


ここでロボットでないことの確認のために携帯電話の番号を入力します。日本なので (+81) で設定して SMS でテキストメッセージを送りましょう。
<!-- Image =  d-setup-05.png-->
{{< imagedisplay src="d-setup-05.png" >}}


6桁の数字が送られてくるので入力してください。
<!-- image= d-setup-06.png -->
{{< imagedisplay src="d-setup-06.png" >}}


するとテナント作成が始まります。有効期限は30日なので作成日を覚えておいてくださいね。「Set Up」をクリックしたOKです。
<!-- image= d-setup-07.png -->
{{< imagedisplay src="d-setup-07.png" >}}


サインインのダイアログでログインをしてください。
<!-- image= d-setup-08.png -->
{{< imagedisplay src="d-setup-08.png" >}}


セットアップ画面になります。言語を “日本語” にして、今回は “営業” のみを選択します。（すべてがいい場合は右端のすべてにチェック）「セットアップの完了」で無料試用版のセットアップが完了しました。
<!-- image= d-setup-09.png -->
{{< imagedisplay src="d-setup-09.png" >}}


Dynamics 365 の無料試用版にアクセスできるようになりました。これで利用開始ができます。

## 最後に
無料試用版は、基本的に最新のバージョンかつプレビュー版の機能が備わっているため、早めに機能をためしたいと考える方にとてもおすすめです。またこの手順で開発用のテナントを作成すれば、いくつも試用版を構築して検証をすることができますので、ぜひ試してみてください。    
&nbsp;
