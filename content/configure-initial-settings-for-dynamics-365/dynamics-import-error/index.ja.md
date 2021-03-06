---
title:  "Dynamics 365 インポートエラーの対処方法"
draft: false
weight: 8
datetitle: "2017.08.23 | "
showinhome: true
showinaccordian: true
rightMenu: "artical"
indexImg: "artical8.jpg" 
description: "前回の記事では、Excel テンプレートを使ったデータのインポート方法をお伝えしてきましたが、もしデータインポート時にエラーが発生した場合、どのように対処すればいいでしょうか。"
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
前回の記事では、Excel テンプレートを使ったデータのインポート方法をお伝えしてきましたが、もしデータインポート時にエラーが発生した場合、どのように対処すればいいでしょうか。


## どんな時にエラーがでるのか？
<!-- Image= error.jpg -->
{{< imagedisplay src="error.jpg" >}}

まず、テンプレートでエラーが出た際、最も多いのが、重複のデータによるエラーです。Excel テンプレートを見るとわかるのですが、参照フィールドの値は表示名をベースに入力するようになっています。

 

例えば、同じ名前の別の取引先企業に、それぞれ担当者を Excel テンプレートでインポートするとどうなるでしょうか？

行１     
取引先担当者名：テスト 太郎    
取引先企業名：テスト 株式会社      
&nbsp;


行2    
取引先担当者名：テスト 次郎     
取引先企業名：テスト 株式会社      
&nbsp;


この「テスト 株式会社」はまったく別の会社です。通常、このような場合、参照する企業の内部IDなどで判断するはずですが、通常の表示名だけを見てしまうので、インポート時に以下のようなエラーが出てしまいます。

<!-- Image= error1.jpg -->
{{< imagedisplay src="error1.jpg" >}}

この場合、どう対処できるでしょうか？

### １．インポート時のマッピング機能で対処する
これは一番簡単な方法になりますが、インポート時に関連させるフィールドを、会社名ではなく、別のフィールドに変えてしまう方法です。例えば、会社の株式銘柄コードを利用する場合、先ほどのExcelテンプレートファイルに、会社名ではなく、それぞれの株式銘柄コードを入力します。
<!-- Image= error2.jpg -->
{{< imagedisplay src="error2.jpg" >}}


そして、Excel テンプレートファイルを再度インポートさせます。この際、フィールドのマッピングエディタを表示させる必要があるので、事前にExcelテンプレートに、適当な列を追加しておきます。（前回の記事を参照）

マッピングエディタで、今回重複のエラーが表示されていた、「会社名」を検索して、虫眼鏡のボタンをクリックします。
<!-- Image= error3.jpg -->
{{< imagedisplay src="error3.jpg" >}}



すると、マッピングする参照先を追加できます。この場合、新しく「株式銘柄コード」にチェックをいれて、「OK」をクリックしましょう。
<!-- Image= error4.jpg -->
{{< imagedisplay src="error4.jpg" >}}

あとはインポート処理を最後まで完了させます。すると、先ほどエラーになっていた箇所が、今回は成功しました。
<!-- Image= error5.jpg -->
{{< imagedisplay src="error5.jpg" >}}


正しくデータが作成されていますね。
<!-- Image= error6.jpg -->
{{< imagedisplay src="error6.jpg" >}}


### 2. レコードのIDを取得してインポートする
上記１の方法はとても有効ですが、マッピングエディタを使わずとも実施することができます。それは、それぞれの企業レコードのIDを取得してインポートする方法です。

今回重複エラーとなった企業をリストでチェックします。そしてメニューから「リンクを電子メールで送信」をクリックします。
<!-- Image= error7.jpg -->
{{< imagedisplay src="error7.jpg" >}}

するとメーラーのメール作成画面本文に、各レコードのURLが表示されるはずです。

ここで、id= から先のURLがレコードのIDになります。(先頭の %7b は無視します）

<!-- Image= error8.jpg -->
{{< imagedisplay src="error8.jpg" >}}


あとは、Excel テンプレートの「会社名」にIDを入力してから、ファイルを通常通りインポートしてください。
<!-- Image= error9.jpg -->
{{< imagedisplay src="error9.jpg" >}}

この方法の場合、マッピングエディタは不要なので、テンプレートに事前にカスタムの列を追加する必要がないので、とても便利です。

## その他のエラーについて
インポート時のエラーは重複に関することが多いのですが、その他のエラーについては、以下のコミュニティサイトなどを活用することで解決することがあります。

Dynamics 365 Community     
[https://community.dynamics.com/](https://community.dynamics.com/)   
&nbsp;

それでも解決しない場合は、サブスクリプション付帯のマイクロソフトサポートにお問い合わせをしてみてください。     
&nbsp;