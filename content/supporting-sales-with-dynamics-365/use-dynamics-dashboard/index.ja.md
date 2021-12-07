---
title:  "Dynamics 365 ダッシュボードで情報の可視化を行う"
draft: false
weight: 17
datetitle: "2017.08.23 | "
showinhome: true
showinaccordian: true
rightMenu: "artical"
indexImg: "artical17.jpg"
description: "Dynamics 365 の営業機能についてお知らせしてきました。グラフやファネル、目標管理などを理解したので、次はダッシュボードについて触れていきます。"
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
Dynamics 365 の営業機能についてお知らせしてきました。グラフやファネル、目標管理などを理解したので、次はダッシュボードについて触れていきます。 

 
Dynamics 365 のダッシュボードは、システムダッシュボード と ユーザーダッシュボード の2種類が存在しています。ユーザーダッシュボードを利用すると、自身に権限があるレコードをグラフやグリッド、リストなどで自由に編集して、情報の可視化を行うことができます。 

また、システム管理者は、システムダッシュボードを作成することで、ダッシュボードを公開して全社的な利用、部署ごとの利用などを設定できます。 

 

ダッシュボードは、「営業」の「ダッシュボード」から確認することができます。 
<!-- Image= dashboard1.jpg -->
{{< imagedisplay src="dashboard1.jpg" >}}

以下のように、既定のダッシュボードでは、グラフやファネル、Yammer でのコメントなどを並べています。 
<!-- Image= dashboard2.jpg -->
{{< imagedisplay src="dashboard2.jpg" >}}


## 既存のダッシュボードを編集する 
それでは、既存のダッシュボードを編集してみます。まずは、「設定」　から　「カスタマイズ」　をクリックします。 
<!-- Image= dashboard3.jpg -->
{{< imagedisplay src="dashboard3.jpg" >}}

「システムのカスタマイズ」　を開き、「ダッシュボード」　を選択します。
<!-- Image= dashboard4.jpg -->
{{< imagedisplay src="dashboard4.jpg" >}}

適切なダッシュボードを開くと、以下のようになっています。 
<!-- Image= dashboard5.jpg -->
{{< imagedisplay src="dashboard5.jpg" >}}

ダッシュボードでは、グラフ・リスト・Web リソース・　IFrame・　ソーシャルインサイト（Social Engagement 機能）などをページの領域に組み込んでいくことで、ユーザーおよび企業にとって有益な情報をビジュアル化することができます。 
<!-- Image= dashboard6.jpg -->
{{< imagedisplay src="dashboard6.jpg" >}}

たとえば、既存のグラフを編集してみます。左側でファネルとして表示されているグラフをダブルクリックします。 

※もしくは、「コンポーネントの編集」　ボタンをクリックします。 
<!-- Image= dashboard7.jpg -->
{{< imagedisplay src="dashboard7.jpg" >}}

プロパティをみると、このグラフは、営業案件のデータをもとに、営業パイプライン というグラフだけが表示されていることがわかります。 
<!-- Image= dashboard8.jpg -->
{{< imagedisplay src="dashboard8.jpg" >}}

ここで、「既定のグラフ」 を　上位の営業案件　に設定して　「OK」　をクリックします。 
<!-- Image= dashboard9.jpg -->
{{< imagedisplay src="dashboard9.jpg" >}}

すると、グラフが変わりました。このように、必要なグラフを作成して、ダッシュボードで貼り付けることで、データの可視化を容易に行えます。 
<!-- Image= dashboard10.jpg -->
{{< imagedisplay src="dashboard10.jpg" >}}

## ダッシュボードに個人用のウォールを追加する 
ウォールという機能を利用するとこで、アクティビティ フィードの情報を載せることができます。 

アクティビティ フィードについては、後程の記事で詳しく説明しますが、ユーザーのコメントや会話、取引先や営業案件の更新時の情報、ユーザーのフォロー履歴などを追跡・管理できる機能です。それら情報の更新が即座にウォールに表示させることができます。 

 
たとえば、同じ課のメンバー同士がお互いにフォローをしている状態で、各営業が進めている案件に対してコメントをしたとします。そのコメント内容が、即座にダッシュボードに追加されているウォールに反映されるため、現状を素早く把握して、お互いにフォローすることが可能になります。 

 
ダッシュボードで、そのウォールを設置するには、Web リソースを利用します。 
<!-- Image= dashboard11.jpg -->
{{< imagedisplay src="dashboard11.jpg" >}}

個人用のウォールを設定するために、Web リソース で　「msdyn_/PersonalWall.htm」　を入力して、「名前」　や　「ラベル」　に値を入力後、「OK」　をクリックします。そして、「上書き保存」　をクリックして、保存した内容を公開しましょう。 
<!-- Image= dashboard12.jpg -->
{{< imagedisplay src="dashboard12.jpg" >}}

すると、ダッシュボードでは、以下のようにシステムで投稿された内容が更新されています。
<!-- Image= dashboard13.jpg -->
{{< imagedisplay src="dashboard13.jpg" >}}

このように、ダッシュボードは、グラフやリスト、アクティビティフィードを活用することで、有益な情報を1ページで展開することが可能です。ただ注意点として、ダッシュボードにグラフを大量に設定すると、その結果を読み込むことに時間がかかります。どの情報が必要であるか、それを適切に判断してダッシュボードを設定すると、必要な情報だけを取得できるため効果的だと思われます。 


今回は以上です。 