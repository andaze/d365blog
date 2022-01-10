---
title:  "Dynamics 365 でセールス ファネルを利用したリードの管理"
draft: false
weight: 15
datetitle: "2017.08.23 | "
showinhome: true
showinaccordian: true
rightMenu: "artical"
indexImg: "artical15.png"
description: "今回は、[Dynamics 365 でグラフを使ってみる](#)　のグラフの利用でも触れた「セールス ファネル」についてです。"
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
今回は、[Dynamics 365 でグラフを使ってみる](https://www.andaze.com/ja/dynamics365/supporting-sales-with-dynamics-365/use-dynamics-graph/)　のグラフの利用でも触れた「セールス ファネル」についてです。

そもそもセールス ファネルとは何か、を理解することをはじめ、実際にリードという潜在顧客のデータをもとに、セールス ファネルを作成してみましょう。


## セールス ファネルとは？
ファネルとは「漏斗」という意味で、液体や粉末を、口径の小さな容器に投入する場合に利用される器具です。

セールス ファネルとは、下の図のように顧客の情報を漏斗状で表し、潜在顧客－見込み客－顧客という分類にすることで、自社のマーケティング戦略や、営業活動の現状と課題を浮き彫りにするために利用されます。
<!-- Image= funnel1.png -->
{{< imagedisplay src="funnel1.png" >}}

マーケティングというと、通常はMAツール（Marketing Automation）などを活用して、集客活動で自社を顧客に認知してもらい、関心や興味をもってもらうところからがスタートです。

しかし、この記事では集客後、自社に興味をもった顧客をリードで管理して、そのリードの情報をセールス ファネルにするところまでに絞っていきます。

## セールス ファネルを作成する
今回も、前回のグラフの記事で書いたグラフ作成方法と同じになります。

事前準備として、まずリードにファネルの材料になるようなフィールドを作成します。今回は「購入意欲」というフィールドで3段階（すぐにでも購入したい、比較・検討中、興味はある）のオプションセットとして作成します。
<!-- Image= funnel2.png -->
{{< imagedisplay src="funnel2.png" >}}

そして、各リードのフォームにフィールドを設定して公開します。さらに業務プロセスも変更して、このフィールドを条件に追加しましょう。「設定」の「プロセス」から、「リードから営業案件への営業プロセス」をクリックします。
<!-- Image= funnel3.png -->
{{< imagedisplay src="funnel3.png" >}}

編集を行うため、「非アクティブ」のボタンをクリックして業務プロセスを非アクティブ化します。
<!-- Image= funnel4.png -->
{{< imagedisplay src="funnel4.png" >}}

リード 「見込みありと評価」 のプロセスに、新しく「＋」ボタンから 「追加ステップ」 をクリックしてステップを追加します。
<!-- Image= funnel5.png -->
{{< imagedisplay src="funnel5.png" >}}

追加ステップのデータ フィールドを「購入意欲」 として「適用」ボタンで保存します。
<!-- Image= funnel6.png -->
{{< imagedisplay src="funnel6.png" >}}

あとは、「保存」 ボタンをクリック後、「アクティブ化」 をクリックしてアクティブ化しましょう。
<!-- Image= funnel7.png -->
{{< imagedisplay src="funnel7.png" >}}

そうすると、リードの業務プロセスに、新しく 「購入意欲」 が追加されました。
<!-- Image= funnel8.png -->
{{< imagedisplay src="funnel8.png" >}}

それでは、早速リードに購入意欲が入力された、という前提でセールス ファネルを作成していきましょう。グラフデザイナーにおいて「＋」ボタンで新規作成を開始します。グラフ名を入力して、X軸を購入意欲、Y軸を名前をします。
<!-- Image= funnel9.png -->
{{< imagedisplay src="funnel9.png" >}}

そして、グラフでファネルを選択します。
<!-- Image= funnel10.png -->
{{< imagedisplay src="funnel10.png" >}}

あとは保存して、デザイナーをXボタンで閉じてください。そうすると、セールス ファネルの結果が表示されます。

例えば、下の図のような場合、比較検討中のリードが一番多く、すぐに購入したいリードが少ないことが分かります。ここで打つ戦略としては、「比較・検討している顧客が自社の製品やサービス選ぶためにはどういうアプローチや興味付けをするか」 になると思います。
<!-- Image= funnel11.png -->
{{< imagedisplay src="funnel11.png" >}}

また、別のパターンでは、下記のように 「すぐにでも購入したい」という顧客が多数あります。

この場合は、リードから営業案件（商談）に変わっていないリードが多数ある、と判断できるため、「リードから営業案件へ見込みありと評価されていない原因やボトルネックを理解して、対策を打つ」 ことが必要になると思います。

<!-- Image= funnel12.png -->
{{< imagedisplay src="funnel12.png" >}}

このように、セールス ファネルを活用して現状の課題を明確にし、即座に対策を打つことができるようになります。

これは、管理するリードや営業案件が多数、かつ、複雑になるほど効果的な機能となるため、ぜひ自社のデータをモデルに、セールス ファネルやグラフを活用してみてください。

今回の記事は以上です。