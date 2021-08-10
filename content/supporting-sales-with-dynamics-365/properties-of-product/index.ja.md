---
title:  "Dynamics 製品のプロパティを管理する"
draft: false
weight: 10
datetitle: "2017.08.23 | "
showinhome: true
showinaccordian: true
rightMenu: "artical"
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
{{< detailTopImage src="artical10.png" >}}
{{< authorImage src="authorimage.jpg" name="Takafumi Noguchi" linkdin="https://www.linkedin.com/in/tnoguchi1123531" >}}
<!-- Intro  -->
製品のプロパティについて、[前回](#)の記事に続きご紹介をしていきます。

Dynamics 365 の製品から価格表まで、一通り作成して利用可能となりました。それでは、製品についてもう少し詳しく解説をしていきます。

自社で提供する製品において、その属性や状態はさまざまです。例えば、携帯ケースでいうと、色・形・サイズ・利用できる携帯機種・状態（新品か中古）などを分類する必要があります。

その分類を行う際に必要なのが、**製品プロパティ**の設定です。プロパティを設定することで、製品の分類を行うことが可能になるため、管理を簡略化できます。それでは、早速その設定方法を確認してみましょう。

### 製品にプロパティ設定を行う
それでは、前回までに作成した製品ファミリでのプロパティにて、下記の設定を行います。
<!-- Image= configure1.png -->
{{< imagedisplay src="configure1.png" >}}

「設定」-「製品カタログ」-「製品およびファミリ」をクリックして、製品ファミリを選択します。
<!-- Imege= configure2.png -->
{{< imagedisplay src="configure2.png" >}}

製品ファミリの状態が「アクティブ」で公開されているとプロパティの編集ができないので、「変更」をクリックして「改訂中」に状態を変更します。
<!-- Image= configure3.png -->
{{< imagedisplay src="configure3.png" >}}

「製品プロパティ」のセクションにて「＋」ボタンをクリックします。
<!-- Image= configure4.png -->
{{< imagedisplay src="configure4.png" >}}

名前、読み取り専用、必須、非表示を入力して、データの種類を 「オプションセット」とします。一度「上書き保存」をクリックします。
<!-- Image= configure5.png -->
{{< imagedisplay src="configure5.png" >}}

そして、オプションセットの項目を「＋」ボタンをクリックして追加していきます。
<!-- Image= configure6.png -->
{{< imagedisplay src="configure6.png" >}}

すべて設定が終わると、下記のように製品ファミリにて製品プロパティが設定されました。
<!-- Image= configure7.png -->
{{< imagedisplay src="configure7.png" >}}

プロパティの設定が終わったので、製品ファミリを階層ごと公開します。「公開」から「階層の公開」をクリックします。
<!-- Image= configure8.png -->
{{< imagedisplay src="configure8.png" >}}

上記のプロパティ設定は、下位の製品にも反映されるようになっています。

## 営業案件に関連づいた製品のプロパティをセットする
それでは、営業案件に製品を設定する際に、上記で作成したプロパティも同時にセットしましょう。

営業案件を開き、「製品品目」 にて製品を設定します。そうすると、製品の「プロパティ」列に警告が出て「編集」というリンクが表示されるので、クリックしましょう。
<!-- Image= configure9.png -->
{{< imagedisplay src="configure9.png" >}}

そうすると、先ほど設定したプロパティの設定を行うことができます。今回警告が表示されたのは、プロパティの設定を「必須」に設定したからです。プロパティの設定を行い「完了」としましょう。
<!-- Image= configure10.png -->
{{< imagedisplay src="configure10.png" >}}

これで、製品のプロパティ設定は完了しました。
<!-- Image= configure11.png -->
{{< imagedisplay src="configure11.png" >}}

このように、1つの製品の属性をプロパティで管理することで、簡易な分類が可能になりました。

それでは、次回はこの製品にさらに付属の情報を設定することを行いましょう。