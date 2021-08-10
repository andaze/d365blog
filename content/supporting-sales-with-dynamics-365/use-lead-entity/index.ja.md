---
title:  "Dynamics 365 のリードを使ってみよう"
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
それでは、**前回のシナリオ**も織り交ぜていきながら、Dynamics 365 の営業エンティティを利用していきます。

まずは Dynamics 365 にログインして、営業エリアの リード を開きます。
<!-- Image= leads.png -->
{{< imagedisplay src="leads.png" >}}

下記はサンプルですが、現在進行中のリード（自分のオープンしているリード）が表示されています。
<!-- Image= leads1.png -->
{{< imagedisplay src="leads1.png" >}}

実際にひとつのリードを開いてみると、下記のような画面になります。潜在顧客といわれる顧客データをリードで管理します。下記の画面で注目していただきたい箇所を赤枠にしてみましたので、それぞれ説明していきます。
<!-- Image= leads2.png -->
{{< imagedisplay src="leads2.png" >}}

このリードに見込みがある場合は、**見込みありと評価**ボタン、見込みがない場合は、**見込みなしと評価**ボタンで区別できます。**見込みありと評価**ボタンをクリックすると、そのリードは**自動的に営業案件に変換**され、営業ステージを前に進めることが可能です。（同時に、**取引先と取引先担当者**の情報も作成されます。）

<!-- Image= leads3.png -->
{{< imagedisplay src="leads3.png" >}}

また、見込みありと判断されたリードは、”読み取り専用” のレコードとして保存されています。これは、何かの事情で、見込みありの顧客との商談が、前の営業ステージに戻ってしまった場合、**リードを再アクティブ化**できるようになっています。
<!-- Image= leads4.png -->
{{< imagedisplay src="leads4.png" >}}

**見込みなしと評価**ボタンでは、見込みなしと判断した理由を選択して、リードを評価できるようになっています。
<!-- Image= leads5.png -->
{{< imagedisplay src="leads5.png" >}}

フォームのヘッダー部分になり、”当社についてどこで知ったか？” や “(潜在顧客の) 評価” など、重要な情報を画面右上に配置することが可能です。この設定はフォームで行います。
<!-- Image= leads6.png -->
{{< imagedisplay src="leads6.png" >}}

こちらは **業務プロセス フロー**と呼ばれるもので、潜在顧客へのアプローチがどのステージにあるかを図る指標になります。見込みありと評価するために必要な要素を標準化することで、どの営業でも同じ結果が得られるような施策を実行することができます。
<!-- Image= leads7.png -->
{{< imagedisplay src="leads7.png" >}}

業務プロセス フローをカスタマイズする場合は、「設定」 の 「プロセス」 から 「業務プロセス フロー」 をフィルターします。
<!-- Image= leads8.png -->
{{< imagedisplay src="leads8.png" >}}

そして、**リードから営業案件への営業プロセス**を変更する必要があります。
<!-- Image= leads9.png -->
{{< imagedisplay src="leads9.png" >}}

もしこの業務プロセス フローが不要ということであれば、それは セキュリティ ロール から非表示にすることも可能になりますのでご安心ください。
<!-- Image= leads10.png -->
{{< imagedisplay src="leads10.png" >}}

リードの関係する情報をさらに追加していきたい場合、例えば、活動内容（メールや電話）の記録も行うことが可能です。メニューを開くと、リードに紐づいた他のエンティティを追加することができます。

メニューから「活動」 をクリックすると
<!-- Image= leads11.png -->
{{< imagedisplay src="leads11.png" >}}

このように、電子メールや電話の活動内容を記録していくことが可能です。
<!-- Image= leads12.png -->
{{< imagedisplay src="leads12.png" >}}

**新しい活動の追加**をクリックすれば、新しい活動を追加できます。

<!-- Image= leads13.png -->
{{< imagedisplay src="leads13.png" >}}

既定でこれだけの活動の種類があり、活動のカスタムエンティティを追加すれば、さらに一覧に増やすことができます。ただ注意いただきたいことは、一度活動エンティティを作成して、この活動の一覧に追加すると、サポートされた方法では削除できません。活動を新たに追加する際は、事前に考慮が必要になります。

今回はリードについて少し触れてまいりました。引き続き、リードから取引先や担当者、営業案件を作成するまでの流れを、[次回](#)の記事でより深く理解していきましょう。
