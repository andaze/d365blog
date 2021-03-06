---
title:  "Dynamics 365 の活動を活用して商談を行う"
draft: false
weight: 5
datetitle: "2017.08.23 | "
showinhome: true
showinaccordian: false
rightMenu: "artical"
indexImg: "artical5.jpg"
description: "前回の記事では、リードから営業案件を作成しましたが、その営業案件に商談の進捗状況を随時記録する必要があります。その際、**活動**というエンティティを活用します。"
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
前回の記事では、リードから営業案件を作成しましたが、その営業案件に商談の進捗状況を随時記録する必要があります。その際、**活動**というエンティティを活用します。

## 活動エンティティの種類
まず Dynamics 365 では、**活動 (Activity Pointer)**　というエンティティが存在します。この活動は、取引先企業や担当者、営業案件、リード、サポート案件など様々なエンティティと関連しており、それぞれのエンティティでの活動データとして利用することができます。

まず、メニューから　「活動」　を開きます。
<!-- Image= activities.png -->
{{< imagedisplay src="activities.png" >}}

そうすると、活動のメニューに、**タスク・電子メール・予定・電話・レター**などの活動が準備されていることがわかります。　
<!-- Image= activities1.png -->
{{< imagedisplay src="activities1.png" >}}

これは、活動というエンティティ以下にさらに、タスク、メール、電話などのエンティティが存在しており、それぞれの活動の種類によって区分けされているという構造になります。わかりやすくすると下記のような図の位置関係です。

※下記の図以外にも活動に紐づくエンティティはありますが、あくまで一例です。
<!-- Image= activities2.png -->
{{< imagedisplay src="activities2.png" >}}

## 活動の新規作成
では、商談において電話という営業活動をした場合を例とします。活動の「電話」をクリックして、電話の活動を新規に作成するとします。
<!-- Image= activities3.png -->
{{< imagedisplay src="activities3.png" >}}

下記の電話活動の入力フォームにて、「件名」をまずは入力します。そして、「通話先」に関連している企業名や個人名を入力します。このフィールドに入力することで、どのエンティティにこの活動が関連付けされるかが決まります。
<!-- Image= activities4.png -->
{{< imagedisplay src="activities4.png" >}}

「通話先」　を決めるため、その他のレコードを検索してみます。
<!-- Image= activities5.png -->
{{< imagedisplay src="activities5.png" >}}

するとレコード検索のダイアログが表示されますが、検索先を確認すると下記のように取引先・取引先担当者・ユーザーなどを選択することができるようになっています。
<!-- Image= activities6.png -->
{{< imagedisplay src="activities6.png" >}}

今回は架電先が企業のため、取引先企業を選択してレコードを選択します。選択が終われば、「追加」をクリックします。
<!-- Image= activities7.png -->
{{< imagedisplay src="activities7.png" >}}

そうすると「通話先」に企業名が入力されます。その他入力をして保存します。
<!-- Image= activities8.png -->
{{< imagedisplay src="activities8.png" >}}

そして取引先企業のデータにて活動を確認すると、下記のように一覧に先ほど作成された電話の活動が関連付けされていることがわかります。
<!-- Image= activities9.png -->
{{< imagedisplay src="activities9.png" >}}

※上記の図では、取引先企業のナビゲーションメニューから、活動を開いています。この場合、活動の「期日」というフィールドに値がない場合、**フィルターの設定対象**が既定の　「今後30日以内」 の場合、活動が表示されないことがあるため、一覧に表示されていない場合は、フィルター条件を「すべて」に切り替えてお試しください。
<!-- Image= activities10.png -->
{{< imagedisplay src="activities10.png" >}}

その他に、関連しているエンティティから新規作成することも可能です。例えば営業案件に関連している活動を作成したい場合は、メニューから「活動」をクリックします。
<!-- Image= activities11.png -->
{{< imagedisplay src="activities11.png" >}}

「新しい活動の追加」から「電話」をクリックします。
<!-- Image= activities12.png -->
{{< imagedisplay src="activities12.png" >}}

先ほどの作成方法では「通話先」を検索して入力しましたが、営業案件から直接作成すると、「通話先」に自動でデータが入力されています。件名などを入力して保存をすると、作成終了です。
<!-- Image= activities13.png -->
{{< imagedisplay src="activities13.png" >}}

## 新しい活動エンティティの作り方
活動エンティティは新しく作成することが可能です。

ただし、一度作成した活動エンティティに設定した場合、その設定は変更することはできないため、活動エンティティを作成する場合は、本当にその活動を作成する必要があるか？既定のエンティティで代用できないか？を検討した上で実施してください。

また、一度作成したエンティティを削除する場合、他のエンティティとの関連性や依存関係をすべて解除して削除する必要がある上、削除後、関連していたエンティティが正常に動作しなくなる、などの状態になる可能性があるためおすすめしません。

※過去に、活動エンティティを削除した後、取引先企業エンティティが使えなくなるという現象が発生した経験があります。

そのため、エンティティ作成については、計画を立てて実施することをお勧めします。

活動エンティティに設定するには、「設定」 – 「システムのカスタマイズ」　よりエンティティを開きます。すると、エンティティのメニューに、「活動エンティティとして定義します。」というチェックがあるため、チェックをいれると活動のエンティティとして定義されます。
<!-- Image= activities14.png -->
{{< imagedisplay src="activities14.png" >}}

今回は、活動のエンティティの利用方法をご紹介してきました。次回は、取引先企業と競合などについてふれていきます。