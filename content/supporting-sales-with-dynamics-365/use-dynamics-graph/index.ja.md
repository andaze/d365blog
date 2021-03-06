---
title:  "Dynamics 365 でグラフを使ってみる"
draft: false
weight: 14
datetitle: "2017.08.23 | "
showinhome: true
showinaccordian: true
rightMenu: "artical"
indexImg: "artical14.png"
description: "Dynamics 365 を活用し、自社の営業活動で効率的な管理を継続することで、Dynamics 365 にて営業戦略を考慮するに十分なデータが蓄積されていきます。"
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
Dynamics 365 を活用し、自社の営業活動で効率的な管理を継続することで、Dynamics 365 にて営業戦略を考慮するに十分なデータが蓄積されていきます。

データを参考にして、どのような活動やセールストークに効果があるのか、顧客のタイプに合わせたアプローチ方法の研究、商談を勝ち取るために新しい製品やサービスの提供などを行うことができるでしょう。

さらに注目すべきところは、Dynamics 365 では、蓄積した企業のデータをもとに、レポートやグラフ、ダッシュボードなどで加工して可視化することができることです。

もちろん、通常のCRM製品でも多少のデータ加工機能は実装されていると思いますが、Dynamics 365 単体でのデータの加工機能はもちろん、Power BI と連携することで、より高度なデータ加工機能を提供できることは Dynamics 365 の強みではないでしょうか。

今回の記事では、データ加工機能の1つであるグラフについて触れていきます。

## グラフの作成
さっそくグラフを作成してみましょう。

まずは、営業案件で商談がどのような状況であるかを確認してみたいと思います。「営業」から「営業案件」を開きます。営業案件のレコード一覧の右側に「グラフ」とありますので、その箇所を展開して広げます。
<!-- Image= graph1.png -->
{{< imagedisplay src="graph1.png" >}}

グラフ ウィンドウを広げると、既定のグラフ（システムグラフ）がすでに表示されていると思います。ここで、「＋」ボタンをクリックして新しいグラフを作成しましょう。
<!-- Image= graph2.png -->
{{< imagedisplay src="graph2.png" >}}

そうすると、グラフデザイナーが表示されます。グラフ名をまず入力して、グラフのX軸とY軸となるフィールドを選択していきます。
<!-- Image= graph3.png -->
{{< imagedisplay src="graph3.png" >}}

それでは、今回はシンプルにY軸に 取引先企業、X軸に売り上げ見込み を選択します。
<!-- Image= graph4.png -->
{{< imagedisplay src="graph4.png" >}}

そして、グラフの種類を 縦棒 にします。
<!-- Image= graph5.png -->
{{< imagedisplay src="graph5.png" >}}

そうすると、グラフの完成イメージが表示されます。表示のグラフよければ、保存ボタンを押してグラフを保存、Xボタンでグラフデザイナーを閉じます。
<!-- Image= graph6.png -->
{{< imagedisplay src="graph6.png" >}}

完成したグラフをみてみましょう。例えば、売り上げ見込みが ¥25,000 の箇所をクリックしてみます。そうすると、左の画面では該当の営業案件2件がフィルタリングされて表示されていることがわかります。
<!-- Image= graph7.png -->
{{< imagedisplay src="graph7.png" >}}

このサンプルではレコード件数が少ないのであまり効果的には見えませんが、例えばレコード数が 10,000 ～100,000 と膨大に存在する場合、売り上げ見込みの多いものを可視化して、フィルタリングをかけることで、効率的な検索を行うことも可能です。

自分が所有している営業案件は、合計するとどのくらいの売り上げ見込みをもっているか、などを把握することも簡単になります。

次回の記事では、セールス ファネルを使って、リードの管理を行います。