---
title:  "Dynamics 365 でリードから営業案件を作成する"
draft: false
weight: 4
datetitle: "2017.08.23 | "
showinhome: true
showinaccordian: false
rightMenu: "artical"
indexImg: "artical4.jpg"
description: "Dynamics 365 のリードについては[前回](#)お伝えしましたが、そのリードが「見込みあり」となった場合、リードから取引先企業と取引先担当者、そして営業案件を作成する動作について説明します。"
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
Dynamics 365 のリードについては[前回](#)お伝えしましたが、そのリードが「見込みあり」となった場合、リードから取引先企業と取引先担当者、そして営業案件を作成する動作について説明します。

## リードを見込みありとする
まずは今後商談になる予定のリードを開きます。そして、「見込みありと評価」のボタンをクリックしてください。
<!-- Image= potential.png -->
{{< imagedisplay src="potential.png" >}}

重複チェックのダイアログが表示されます。もし、すでに取引のある企業で担当者が同じ場合は、ここで企業名や担当者名を入力します。もし新規であれば、このまま「続行」をクリックします。
<!-- Image= potential1.png -->
{{< imagedisplay src="potential1.png" >}}

そうすると、リードから 営業案件 に自動的に切り替わったことが確認できます。この時点で、取引先企業と取引先担当者の情報が作成されています。
<!-- Image= potential2.png -->
{{< imagedisplay src="potential2.png" >}}

営業案件の情報を確認すると、企業名と担当者の情報が作成されています。営業案件の名前は、リードのトピックがそのまま利用されていますので、もし営業案件名を変える場合は、この時点で営業案件のトピック変更してください。
<!-- Image= potential3.png -->
{{< imagedisplay src="potential3.png" >}}

## 営業案件の業務プロセスフロー
リードから営業案件を作成すると、業務プロセスフローは 「**見込みありと評価する → 提案作成 → 提案　→ 閉じる**」 となってきます。

なお、「**見込みありと評価する**」 のプロセスがすでにチェックされているのですが、これはリードにおいて見込みありと評価されたため、このプロセスが完了したことを意味しています。
<!-- Image= projects.png -->
{{< imagedisplay src="projects.png" >}}

営業案件で「**見込みありと評価する**」　をクリックすればリードに移動するため、見込みありとなった理由などを再度確認したい場合はとても便利です。
<!-- Image= projects1.png -->
{{< imagedisplay src="projects1.png" >}}

## リードから営業案件の業務プロセスフローを編集する
リードから見込みとなった顧客との営業案件がクローズするまでのプロセスを編集するには、「設定」 から 「プロセス」 を開きます。
<!-- Image= case.png -->
{{< imagedisplay src="case.png" >}}

プロセスのカテゴリが業務プロセスフローの「**リードから営業案件への業務プロセス**」を選択します。
<!-- Image= case1.png -->
{{< imagedisplay src="case1.png" >}}

そうすると、下記のような業務プロセスフローのエディタが開きます。ここで、各プロセスに追加・編集および削除したいステップを選択していき、自社の営業プロセスに合わせたフローを構築することが可能になります。
<!-- Image= case2.png -->
{{< imagedisplay src="case2.png" >}}

例えば、営業案件の 「提案作成」 (develop と表示されています) に「購入時期」というステップを一つ追加してみます。まずは ＋追加ボタン をクリックして、追加ステップをクリックします。
<!-- Image= case3.png -->
{{< imagedisplay src="case3.png" >}}

そうすると、どのステップの前後に追加するかを決めるための＋が下記のように表示されます。今回はステップ4 の後に追加します。
<!-- Image= case4.png -->
{{< imagedisplay src="case4.png" >}}

ステップ５が追加されます。右パネルの「プロパティ」タブを開き、データフィールドで「購入時期」を選択した後、適用をクリックします。
<!-- Image= case5.png -->
{{< imagedisplay src="case5.png" >}}

あとは「更新」ボタンをクリックして、業務プロセスフローを更新します。その後、営業案件を確認すると、下記のように購入時期が新たに追加されています。
<!-- Image= case6.png -->
{{< imagedisplay src="case6.png" >}}

自社に合わせた業務プロセスフロー作成して、商談の状況をより正確に把握することが可能になります。

[次回の記事](https://www.andaze.com/ja/dynamics365/supporting-sales-with-dynamics-365/p1036/)では、営業案件に活動を紐づけて、さらに商談を進めて行く方法をお知らせします。