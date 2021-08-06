---
title:  "Dynamics 365 の製品ファミリとバンドルを作成する"
draft: false
weight: 9
datetitle: "2017.08.23 | "
image: "artical9.jpg"
Author: "Takafumi Noguchi"
authorimage: "authorimage.jpg"
showinhome: true
showinaccordian: true
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
[前回の記事](#)で、単一の製品と値引き表まで作成しました。今回は製品ファミリを構成して、ファミリに製品を関連させてみます。それでは、**製品ファミリ**の利用方法について述べていきます。


## 製品ファミリを作成する
製品ファミリは、同様の製品をひとつのグループとしてまとめて管理する際に利用されます。例えば、パソコンという製品の親ファミリがあり、その子ファミリとして、ノートブック・デスクトップ・タブレットに分けられます。
<!-- Image= family.png -->
{{< imagedisplay src="family.png" >}}

また、後ほど説明しますが、バンドルという複数の製品をまとめて販売することも可能です。前回の記事では、営業案件でオンライン製品のライセンスを販売していました。

例えば、オンライン製品＝Office365 とするならば、合わせてDynamics 365 のライセンスをバンドルさせて、Office 365 拡張ライセンス製品として販売するようなイメージです。

それでは、製品ファミリを作成します。

「設定」の「製品カタログ」から、「製品およびファミリ」をクリックします。
<!-- Image= family1.png -->
{{< imagedisplay src="family1.png" >}}

「ファミリの追加」をクリックします。
<!-- Image= family2.png -->
{{< imagedisplay src="family2.png" >}}

名前、製品ID、有効開始日、有効最終日 を設定して「上書き保存」をクリックします。

親の製品ファミリのため、親は設定しません。

<!-- Image= family3.png -->
{{< imagedisplay src="family3.png" >}}

子の製品ファミリを作成します。先ほどの親の製品ファミリに関連付けます。下記では、「オンライン専用ライセンス」 を作成して、親に「製品ライセンス」 を設定しました。同様に「設置型専用ライセンス」も作成しました。
<!-- Image= family4.png -->
{{< imagedisplay src="family4.png" >}}

下記のようなファミリを作成しました。
<!-- Image= family5.png -->
{{< imagedisplay src="family5.png" >}}

下記の技術情報にも注意がありますが、一度親のファミリに設定すると、別のファミリに親を変更することはできません。

**製品ファミリの作成 (Sales)**

[https://docs.microsoft.com/ja-jp/dynamics365/customer-engagement/sales-enterprise/create-product-family](https://docs.microsoft.com/ja-jp/dynamics365/customer-engagement/sales-enterprise/create-product-family)

<!-- Quate Box -->
製品、バンドル、または他の製品ファミリの作成に使用する製品ファミリが親ファミリになります。 子製品、バンドル、またはファミリの親ファミリを変更することはできません。

そのため、ファミリに新たな製品を追加します。


## 親ファミリに製品を追加する
「製品およびファミリ」にて、「製品」ボタンをクリックします。今回の製品では、親 に親のファミリ名を設定します。
<!-- Image= family6.png -->
{{< imagedisplay src="family6.png" >}}

一度保存して、既定の価格表を設定します。下図の様に、すでに親のフィールドがファミリ階層になっており、変更ができないようになっています。
<!-- Image= family7.png -->
{{< imagedisplay src="family7.png" >}}

## バンドルを作成して親ファミリに追加する
前述したバンドルを作成して、製品と同じように親ファミリに追加してみます。

「製品およびファミリ」にて「バンドルの追加」をクリックします。
<!-- Image= family8.png -->
{{< imagedisplay src="family8.png" >}}

製品同様、親の設定をして一度保存します。その後、価格表の設定をして保存してください。
<!-- Image= family9.png -->
{{< imagedisplay src="family9.png" >}}

「バンドル製品」にて「＋」ボタンをクリックします。
<!-- Image= family10.png -->
{{< imagedisplay src="family10.png" >}}

事前に作成していた２つ製品をバンドルします。このバンドルする製品の親も同じ親とします。
<!-- Image= family11.png -->
{{< imagedisplay src="family11.png" >}}

下記のようにバンドルされました。
<!-- Image= family12.png -->
{{< imagedisplay src="family12.png" >}}

製品ファミリをみてみると下記のようになっています。
<!-- Image= family13.png -->
{{< imagedisplay src="family13.png" >}}

製品ファミリについては、下記の技術情報も併せてご参照ください。

**複数の品目を共に販売する製品バンドルを作成 (Sales)**

[https://docs.microsoft.com/ja-jp/dynamics365/customer-engagement/sales-enterprise/create-product-bundles-sell-multiple-items-together](https://docs.microsoft.com/ja-jp/dynamics365/customer-engagement/sales-enterprise/create-product-bundles-sell-multiple-items-together)

[次回](#)は作成している値引き表を利用してみましょう。