---
title:  "Dynamics 365 にデータをインポートする"
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
Dynamics 365 のセットアップができたら、いよいよデータのインポートになります。インポートする方法はいくつかありますが、本記事では、インポートデータをどのように準備して、インポート処理を行うかについて触れていきます。

## データインポートの事前準備
まず、Dynamics 365 でデータをインポートする方法は2パターンあります。

１つは、インポート用のExcelテンプレートを使ってインポートする方法。
もう１つは、Excel Online でデータをインポートする方法です。

初回データインポートであれば、前者の インポート用の Excel テンプレート についてまずは触れていきましょう。

Dynamics 365 では、インポート用のテンプレートが各エンティティごとに用意されており、エンティティに作成されているすべてのフィールドが列となっている Excel ファイルをダウンロードして、そこにデータを書き込み、インポートする手順になります。

 

テンプレートは以下のように、各エンティティのリスト一覧からダウンロードできます。
<!-- Image= templates.jpg -->
{{< imagedisplay src="templates.jpg" >}}


インポートしたExcelを開くと、D列からエンティティのフィールドがすべて表示されています。なお、AからC列はシステムで必要な列になるため、変更しないように注意してください。

<!-- Image= templates1.jpg -->
{{< imagedisplay src="templates1.jpg" >}}

各列は、フィールドに設定したデータ型も反映されています。そのため、フィールドの型に合わせてデータを入力する必要があります。
<!-- Image= templates2.jpg -->
{{< imagedisplay src="templates2.jpg" >}}



## データをインポートする際の注意点

データのテンプレートをダウンロードしたら、値を入力してインポートすると思いますが、インポートする上で重要なことは順番です。

エンティティ同士の上位下位関係を考慮しながらインポートしていく必要があります。

 

例えば、取引先企業 -取引先担当者 – 営業案件 というような上位下位の関係があり、下位のエンティティはもちろん、上位のエンティティを参照しています。もしこの状況で、営業案件からデータをインポートしたらどうなるでしょうか？参照している企業名や担当者名は事前に作成されていないため、インポートエラーになってしまいます。
<!-- Image= templates3.jpg -->
{{< imagedisplay src="templates3.jpg" >}}

常にエンティティの上位下位を意識して、上位からのインポートが必須です。


## データのインポートを行う
それでは、ダウンロードした Excel テンプレートに値を追加していきましょう。今回は、取引先企業のテンプレートに、以下の情報を追加していきます。

取引先企業名： 株式会社インポート

代表電話：03-1234-5050

電子メール：support@import.xyz

株式銘柄コード：7022

業種：農業

企業形態：公開企業

説明：インポート用の会社です。

上述した情報をテンプレートに追加すると以下のようになります。
<!-- Image= templates4.jpg -->
{{< imagedisplay src="templates4.jpg" >}}

テンプレートを保存して、さっそくインポートを行います。取引先企業のリスト一覧から、「データのインポート」の▼をクリックして、「データのインポート」をクリックします。

<!-- Image= templates5.jpg -->
{{< imagedisplay src="templates5.jpg" >}}

インポートダイアログが表示されたら、先ほどのテンプレートファイルをドラッグ＆ドロップします。そして、「次へ」をクリックします。
<!-- Image= templates6.jpg -->
{{< imagedisplay src="templates6.jpg" >}}

インポートファイルの列を追加・削除していないので、すぐに設定の確認画面に遷移します。後ほど説明しますが、もしテンプレートに新しい列を追加したり、列名を編集すると、フィールドのマッピング画面が表示されます。

ここでは、「重複の許可」は いいえ として、「インポート済みのレコードの所有者」をシステム管理者 として 「送信」をクリックします。
<!-- Image= templates7.jpg -->
{{< imagedisplay src="templates7.jpg" >}}

すると、インポート処理がスタートします。以下のダイアログの「インポート」をクリックすると、インポートエディタが開きます。
<!-- Image= templates8.jpg -->
{{< imagedisplay src="templates8.jpg" >}}


以下のようにステータスが完了して、成功していればインポートされたことになります。
<!-- Image= templates9.jpg -->
{{< imagedisplay src="templates9.jpg" >}}


取引先企業にも作成されていることが確認できました。
<!-- Image= templates14.jpg -->
{{< imagedisplay src="templates14.jpg" >}}


## インポートする列のマッピングを行う
それでは、ダウンロードしたテンプレートファイルを少し加工しましょう。FAX列の横に、「ファクシミリ」という列を追加して値を入れます。
<!-- Image= templates10.jpg -->
{{< imagedisplay src="templates10.jpg" >}}

このファイルをアップロードします。すると、先ほどファイルをドラッグ＆ドロップした後では表示されなかったダイアログが表示されます。ここでは「次へ」をクリックしましょう。
<!-- Image= templates11.jpg -->
{{< imagedisplay src="templates11.jpg" >}}

そして次のダイアログで、マッピングを行います。先ほど追加した「ファクシミリ」が現在どのフィールドともマッピングしていません。
<!-- Image= templates12.jpg -->
{{< imagedisplay src="templates12.jpg" >}}


そこで、住所１：FAX とマッピングさせましょう。これで「次へ」をクリックします。
<!-- Image= templates13.jpg -->
{{< imagedisplay src="templates13.jpg" >}}


あとは上述の通りにインポートを行います。これでインポートできました。

この方法は、自社に合わせて加工したインポート用のテンプレートを、フィールドが新しく追加された後も利用したい場合の臨時対応で有効です。ただ、データ型などの情報は引き継がれていないため、インポートファイルは常に最新のファイルをダウンロードすることをお勧めします。
 

さて、ここまでデータのインポートについてお伝えしてきましたが、もしインポート処理が失敗した場合、どのように対処すればいいのでしょうか？

それについては次回の記事で触れていきましょう。     
&nbsp;