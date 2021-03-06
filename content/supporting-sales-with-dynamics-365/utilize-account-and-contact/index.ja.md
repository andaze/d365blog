---
title:  "Dynamics 365 の取引先企業と取引先担当者を活用する"
draft: false
weight: 6
datetitle: "2017.08.23 | "
showinhome: true
showinaccordian: false
rightMenu: "artical"
indexImg: "artical6.jpg"
description: "営業案件と関連する活動についてお伝えしましたが、親エンティティである**取引先企業および取引先担当者**について触れていきます。"
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
営業案件と関連する活動についてお伝えしましたが、親エンティティである**取引先企業および取引先担当者**について触れていきます。

## 取引先企業と上位下位の関連
取引先企業、つまり会社名は、取引先担当者や営業案件、活動などの親エンティティ（上位）にあたります。つまり、取引先企業の情報を元に、子エンティティ（下位）の情報が作成、関連付けされていくわけです。

上位下位の関係については、「設定」 – 「システムのカスタマイズ」 より、取引先企業の **1:N の関連付け** の設定を確認すればわかります。
<!-- Image= levels.png -->
{{< imagedisplay src="levels.png" >}}

上の図のように、取引先担当者は、取引先企業と上位下位の関係であり、「会社名」というフィールドがその関連付けの役割を果たしています。取引先担当者のフォームを見てみると、たしかに「会社名」というフィールドに関連する会社名が入力されています。
<!-- Image= levels1.png -->
{{< imagedisplay src="levels1.png" >}}

取引先企業エンティティの特徴としては、下位のエンティティを複数（N個）もつことが可能であり、取引先企業の上位には一つだけであれば上位に取引先企業情報（親会社）を保持することができます。
<!-- Image= levels2.png -->
{{< imagedisplay src="levels2.png" >}}

また、他のエンティティにいっさい関連性を持たない情報として管理することも可能です。

## 取引先担当者と営業案件
取引先担当者も上位エンティティとして扱われます（取引先企業を除く）。

1つの取引先企業において、複数の取引先担当者と役割が存在することがあります。その場合は、企業と担当者を 1:N で関連付け、さらに営業案件において、その担当者を役割別で管理することが可能です。

例えば、下の図ように担当者が3名存在している企業Aがあります。今回の自社との商談（営業案件 X）に関わる担当者は2名であり、それぞれの担当者の役割も管理しています。

下の図の情報をもとにすると、自社の営業は、契約や決済などの最終決定については担当者①と、技術的な課題については担当者②とコンタクトを取りながら、営業案件を進めていけばいいことがわかります。
<!-- Image= levels3.png -->
{{< imagedisplay src="levels3.png" >}}

## 営業案件と競合企業
営業案件に関連付く取引先企業と担当者を管理して効率的に商談を進める際、注意しなくてはいけない情報は「競合」についてです。営業案件ごとに、その競合となる同業者は異なります。その**競合企業**の管理も Dynamics 365 では行うことが可能です。

上の図を利用すると、営業案件Xに対して、競合企業Pが存在します。競合企業Pと自社のサービスは同じレベルであり、扱う製品も同様です。ただ、競合企業Pと比較すると、製品の質では勝るものの、価格が5%低いため、他の案件において何度か商談で負けてしまった経緯があるとします。
<!-- Image= levels4.png -->
{{< imagedisplay src="levels4.png" >}}

その場合、競合企業Pの情報を、Dynamics 365 で管理します。競合企業 というエンティティから新規にレコードを作成することもできますが、営業案件に関連付けたいので、営業案件の 「競合企業」 から直接新規に作成します。
<!-- Image= levels5.png -->
{{< imagedisplay src="levels5.png" >}}

簡易作成画面が表示されるため、競合企業名、長所や短所を記載して保存します。
<!-- Image= levels6.png -->
{{< imagedisplay src="levels6.png" >}}

そうすると、営業案件の競合企業として管理され、競合の動きを見つつ商談を進めることができます。
<!-- Image= levels7.png -->
{{< imagedisplay src="levels7.png" >}}

また、競合を営業案件ごとに管理して、その競合企業をグルーピングすることで、商談の勝敗率を把握し、自社がその競合に対してどのような戦略を立てるべきかなどを分析することも可能です。もちろん、営業案件に複数の競合企業を関連付けることも可能です。

次回は見積もりや請求書を作成するプロセスまで営業案件プロセスが進んだ場合についてお知らせします。