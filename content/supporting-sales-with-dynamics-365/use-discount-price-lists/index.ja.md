---
title:  "Dynamics 365 の値引き表で商談を有利に運ぶ"
draft: false
weight: 11
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
{{< detailTopImage src="artical11.jpg" >}}
{{< authorImage src="authorimage.jpg" name="Takafumi Noguchi" linkdin="https://www.linkedin.com/in/tnoguchi1123531" >}}
<!-- Intro  -->
[前回まで](#)に作成した製品ファミリを利用すれば、営業案件のレコードをより効率的に管理できるようになりました。さて、商談が進む上で最終的な価格の調節が必要になる場面が訪れるとします。その際利用する機能が**値引き表**です。

値引き表については、[以前の記事](#)ですでに作成しましたので、実際にこの機能を利用してみます。


## 製品ファミリ・製品・バンドルを公開する
まず、最初に前回の記事で作成した製品ファミリ・製品・バンドルを公開します。順番としては、親製品ファミリ→子製品ファミリ→製品→バンドル で公開してください。
<!-- Image= publish1.png -->
{{< imagedisplay src="publish1.png" >}}

公開する場合は、一つのレコードを選択して、「公開」 ボタンをクリックします。
<!-- Image= publish2.png -->
{{< imagedisplay src="publish2.png" >}}

これで製品ファミリ・製品・バンドルの公開は完了です。製品については、このように **ドラフト→公開→改訂→廃止**というライフサイクルがあります。技術情報の図を引用しますが、下記のようなイメージです。
<!-- Image= publish3.png -->
{{< imagedisplay src="publish3.png" >}}

引用元： [https://msdn.microsoft.com/ja-jp/library/dn817887.aspx](https://msdn.microsoft.com/ja-jp/library/dn817887.aspx)

そのため、製品を作成しても公開を行わないと選択することができませんし、公開後変更する場合は一度、改訂中の状態にして編集して、再度公開しないと反映されません。

それでは、製品の準備も整ったので、さっそく価格表と値引き表の設定を行います。


## 価格表品目に製品・価格・値引き率を設定
公開をすべて行うと、次は価格表に**価格表品目**を設定して、価格表での製品の値段と値引きについて設定をしていきます。まずは、「設定」-「製品カタログ」から「価格表」を開きます。
<!-- Image= publish4.png -->
{{< imagedisplay src="publish4.png" >}}

価格表をひとつ選択します。
<!-- Image= publish5.png -->
{{< imagedisplay src="publish5.png" >}}

「価格表品目」を見ると、まだどの製品も設定されていません。 「＋」ボタンで新規に製品とその価格を設定しましょう。
<!-- Image= publish6.png -->
{{< imagedisplay src="publish6.png" >}}

新規価格表品目の画面になります。ここで、**価格表、製品、出荷単位**を選択します。

下記の図のように、ここで**値引き表**を利用することになります。ここでは、CRMライセンスを 1ライセンス毎に販売する金額と値引き表によって、**“もし100個以上200個以下の数量を購入すると、5%割引”** という値引きが働くことになります。
<!-- Image= publish7.png -->
{{< imagedisplay src="publish7.png" >}}

値引き表を見てみると、下記のような設定になっています。
<!-- Image= publish8.png -->
{{< imagedisplay src="publish8.png" >}}

これで、価格表と値引き表、製品の設定が完了しました。それでは、営業案件にこの価格表と製品を利用してみましょう。

## 営業案件に価格表と製品を設定してみる
営業案件にアクセスをして、さっそく価格表と製品を設定します。営業案件をひとつ選択して開きます。
<!-- Image= publish9.png -->
{{< imagedisplay src="publish9.png" >}}

「製品品目」 の 「価格表」 から価格表を選択します。
<!-- Image= publish10.png -->
{{< imagedisplay src="publish10.png" >}}

「＋」ボタンをクリックして、「既存の製品」を選択、そして上述した製品を選択してください。今回は、CRMオンラインライセンス を検索して設定しました。
<!-- Image= publish11.png -->
{{< imagedisplay src="publish11.png" >}}

これで営業案件に製品の設定ができました。以下のように数量は１として設定されているので、この数量を100と設定しましょう。そうすると、値引き表により5%割引された合計金額が表示されるようになります。

※以下の場合、1,000円のCRMオンラインライセンスを100購入、5%オフのため、

1,000円 x 100ライセンス x 0.95 = 95,000円 が合計です。
<!-- Image= publish12.png -->
{{< imagedisplay src="publish12.png" >}}

このように、値引き表が有効であることがわかります。もしその他製品を追加したり、数量を変更したりした場合は、営業案件のメニューにある「営業案件の再計算」ボタンをクリックすると、再計算を行うことができます。
<!-- Image= publish13.png -->
{{< imagedisplay src="publish13.png" >}}

また、「売上」を “システムより計算” にすることで、営業案件の売り上げ見込みをシステムで自動計算した結果を表示させ、さらにロックがかかった状態にすることが可能です。ユーザーで自由に売り上げ見込みを変更することがない場合は利用してみてください。
<!-- Image= publish14.png -->
{{< imagedisplay src="publish14.png" >}}

営業案件と製品・価格表・値引き表について述べてきました。これで、商談を価格の面でも有利に進めることができそうです。

[次回](#)は、もう少しだけ製品の特性について書いていきます。製品のプロパティを変更することで、より管理がしやすくなるでしょう。