---
title:  "Dynamics 365 フィールドセキュリティを設定"
draft: false
weight: 4
datetitle: "2017.08.23 | "
image: "artical4.jpg"
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
セキュリティについて、今までロールや部署、チームなどについて触れてきました。ここまでの知識で社内のセキュリティ設定は十分といってもいいのではないでしょうか。

 

ただ、システムを運用していく過程で、より細かいセキュリティ設定が要求された場合はどうしましょうか。例えば、同じ部署内でも、フィールド単位で、非表示にしたり、書き込みを禁止したりなど細かいセキュリティ設定を必要とする場面があったとします。今でいうと顧客の個人情報としてマイナンバー情報などがわかりやすいのではないでしょうか。

 

このようなシナリオの場合、Dynamics 365 では、**フィールド セキュリティ プロファイル**を作成することで実現が可能になります。ではどのように設定していくのでしょうか。

## フィールドのセキュリティ設定を有効にする
まずは、フィールドセキュリティを設定したいフィールドのプロパティを開きます。

「設定」から「カスタマイズ」を開きましょう。
<!-- Image= customize.png -->
{{< imagedisplay src="customize.png" >}}

「システムのカスタマイズ」をクリックして、「エンティティ」を展開して、設定したいエンティティの「フィールド」を開きます。そこで、セキュリティ設定を行うフィールドを選択したらダブルクリックでプロパティ設定を開きます。
<!-- Image= customize1.png -->
{{< imagedisplay src="customize1.png" >}}

「フィールド セキュリティ」を “有効にする” にチェックをいれたら、保存して閉じてください。あとは、システムのカスタマイズの画面で、「すべてのカスタマイズの公開」をクリックして公開をします。
<!-- Image= customize2.png -->
{{< imagedisplay src="customize2.png" >}}

これで、フィールドのセキュリティを有効にする準備は完了です。この時点では、システム管理者以外のユーザーに、上記でセキュリティを有効にしたフィールドは 非表示 となっています。


## フィールドセキュリティプロファイルを設定する
それでは、フィールドセキュリティの設定を行います。「設定」の「セキュリティ」をクリックしたら、「フィールド セキュリティ プロファイル」をクリックします。
<!-- Image= customize3.png -->
{{< imagedisplay src="customize3.png" >}}

ここでは「新規」ボタンをクリックして新しくプロファイルを作成しましょう。

プロファイル名は “営業用” としてください。一度「保存」をクリックしたら、「フィールドのアクセス許可」をクリックします。
<!-- Image= customize4.png -->
{{< imagedisplay src="customize4.png" >}}

先ほどセキュリティを有効にしたフィールドが表示されているので、選択して「編集」ボタンをクリックします。
<!-- Image= customize5.png -->
{{< imagedisplay src="customize5.png" >}}

以下のような画面になります。ここでは、読み取り権限のみを与える設定にします。「OK」をクリックして設定を完了します。

<!-- Image= customize6.png -->
{{< imagedisplay src="customize6.png" >}}

これで設定は完了です。「保存」をクリックしましょう。

## ユーザーにフィールドセキュリティを割り当てる
フィールドセキュリティ プロファイルを作成したので、早速ユーザーに割り当てましょう。「ユーザー」をクリックします。
<!-- Image= customize7.png -->
{{< imagedisplay src="customize7.png" >}}

「追加」をクリックしてユーザーを追加します。適用したいユーザーを選択したら「追加」ボタンでユーザーを追加しましょう。
<!-- Image= customize8.png -->
{{< imagedisplay src="customize8.png" >}}

これで、ユーザーへの割り当ては完了です。チームに対しても同じように割り当てることは可能です。
<!-- Image= customize9.png -->
{{< imagedisplay src="customize9.png" >}}


このようにフィールド単位でのセキュリティ設定を行うことは可能ですが、多くのフィールドに対して行い、さらに複数のプロファイルを部署ごとなどで管理すると、設定はとても複雑になってしまいます。

例えば、100のフィールドに対してセキュリティを有効にして、さらにフィールドセキュリティプロファイルを10つ作った場合、単純に 100 x 10 = 1,000 箇所の設定変更が必要になります。

そのため、多くのフィールドを非表示や読み取り専用にしたいという要望があれば、できる限りフォームの業務ルールや javascript で対応するほうが管理上は楽です。

そのあたりを考慮しながら、フィールド セキュリティを利用してみてください。

 
今回はここまで。    
&nbsp;