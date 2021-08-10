---
title:  "Dynamics 365 と Power Bi を連携させて、ダッシュボードを強化する"
draft: false
weight: 3
datetitle: "2017.08.23 | "
showinhome: true
showinaccordian: false
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
{{< detailTopImage src="artical3.jpg" >}}
{{< authorImage src="authorimage.jpg" name="Takafumi Noguchi" linkdin="https://www.linkedin.com/in/tnoguchi1123531" >}}
<!-- Intro  -->
Dynamics 365 にはダッシュボード機能が既存で存在していますが、Power BI を連携させると、より情報をグラフィカルに確認することができるようになります。

Power BI は、マイクロソフトが提供するビジネスインテリジェンスツールで、大規模なデータを加工し、ビジネスに効果的な情報として、視覚化して提供するツールです。

詳細については、[Power BI とは?](https://powerbi.microsoft.com/ja-jp/)  をご参考ください。          
また、[Power BI Pro が無料試用版](https://powerbi.microsoft.com/ja-jp/pricing/)で提供されているので、ぜひ利用してみてください。

今回は、この Power BI で加工したグラフを、Dynamics 365 のダッシュボードに追加してみようと思います。

## ダッシュボードに Power BI を組み込む設定をする
まずは、「設定」の「管理」をクリックします。
<!-- Image= Power1.png -->
{{< imagedisplay src="Power1.png" >}}

そして、「システムの管理」をクリックしましょう。
<!-- Image= Power2.png -->
{{< imagedisplay src="Power2.png" >}}


「レポート」タブを開き、「Power BI のビジュアル化の埋め込みを許可する」にて “はい” にチェックをいれたら、「OK」をクリックします。
<!-- Image= Power3.png -->
{{< imagedisplay src="Power3.png" >}}


これで設定は完了です。

## ダッシュボードに Power BI のグラフを組み込む
それでは、ダッシュボードを新規に作成してみます。ダッシュボードから「新規」ボタンをクリックします。任意のダッシュボードレイアウトを選択して「作成」ボタンをクリックすればOKです。
<!-- Image= Power4.png -->
{{< imagedisplay src="Power4.png" >}}


ダッシュボードのメニューを開くと、図のように「Power BI タイル」が表示されているので、早速クリックして利用してみます。
<!-- Image= Power5.png -->
{{< imagedisplay src="Power5.png" >}}


すると Power BI のワークスペースを選択する必要がでてきます。
<!-- Image= Power6.png -->
{{< imagedisplay src="Power6.png" >}}


ここで、Power BI 側の設定をしていないと表示されないので注意です。もしすでに、Power BI のライセンスを有効にしているのであれば、Office 365 のメニューから、Power BI へアクセスします。
<!-- Image= Power7.png -->
{{< imagedisplay src="Power7.png" >}}


今回はすでに作成しているワークスペースを利用します。もしまだ作成していない場合は、「アプリのワークスペースの作成」ボタンをクリックして、ワークスペースを作成してみてください。
<!-- Image= Power8.png -->
{{< imagedisplay src="Power8.png" >}}


それでは、Dynamics 365 のダッシュボードに戻ります。Power BI のワークスペース名を指定して、どのグラフを表示するかを設定します。設定をしたら「OK」をクリックします。
<!-- Image= Power9.png -->
{{< imagedisplay src="Power9.png" >}}


するとダッシュボードに Power BI のグラフが一部追加されました。この要領でいくつかのグラフを追加してみましょう。
<!-- Image= Power10.png -->
{{< imagedisplay src="Power10.png" >}}


最後に、ダッシュボード名を入力したら、「上書き保存」をしましょう。
<!-- Image= Power11.png -->
{{< imagedisplay src="Power11.png" >}}



ダッシュボードは以下のように表示されます。
<!-- Image= Power12.png -->
{{< imagedisplay src="Power12.png" >}}


Power BI のグラフはこのように、ダッシュボードに表示できるようになります。
今回は、サンプルの Power BI のグラフを使ったので、Dynamics 365 のデータとの連動はありませんが、Power BI のワークスペースで、Dynamics 365 のデータとインタラクティブに動作するように設定すれば、より効果のあるダッシュボードを作成できるはずです。

それでは、今回はここまで。