---
title:  "Dynamics 365 計算フィールドの活用"
draft: false
weight: 8
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
{{< detailTopImage src="artical8.jpg" >}}
{{< authorImage src="authorimage.jpg" name="Takafumi Noguchi" linkdin="https://www.linkedin.com/in/tnoguchi1123531" >}}
<!-- Intro  -->
今回は、Dynamics 365 の計算フィールドについて簡単にご紹介していきます。


## 計算フィールドについて
計算フィールドは、Dynamics 365 のフィールドの種類で、以下のデータ型のフィールドで利用することができます。
* 1 行のテキスト
* オプション セット
* 2 つのオプション
* 整数
* 10 進数
* 通貨
* 日付と時間

計算フィールドを使うことで、If Else の条件によりフィールドの値を変えたり、関数により計算したり、ルックアップフィールドを介して関連性のあるエンティティのデータを取得することができるようになります。

また、計算フィールドで値や条件をセットすると、その設定はすべてのレコードに対して即時反映されます。オンデマンドプロセスのように手動ですべてのレコードに設定を反映させる必要がないのでとても便利です。

## 計算フィールドを作成
フィールドの新規作成画面に移動します。「データの種類」に上述したどれからの型を選び、「フィールドの種類」で “計算”

を選択します。すると「編集」というボタンが表示されます。このボタンをクリックすると、自動的にフィールドが作成されるので、「表示名」や「名前」は先に入力してクリックします。
<!-- Image= calcu01.png -->
{{< imagedisplay src="calcu01.png" >}}

「編集」をクリックすると、ポップアップが表示されます。ここで条件や値をセットします。
<!-- Image= calcu02.png -->
{{< imagedisplay src="calcu02.png" >}}

### 条件を設定
「条件の追加」をクリックすると、条件を設定できます。「エンティティ」でエンティティを選択します。計算フィールドを作成するエンティティにルックアップフィールドがあれば、関連するエンティティのフィールドを利用することも可能です。
<!-- Image= calcu03.png -->
{{< imagedisplay src="calcu03.png" >}}

ここでは “現在のエンティティ” にしておきます。「フィールド」は選択したエンティティのフィールドを選択でき、「演算子」で ＝ や ＞、NULL などを設定、「種類」では “値” もしくは “フィールド” を選択できます。
<!-- Image= calcu04.png -->
{{< imagedisplay src="calcu04.png" >}}

条件を設定したらチェックボタンをクリックしてください。
<!-- Image= calcu05.png -->
{{< imagedisplay src="calcu05.png" >}}

### 値を設定
「操作」により値を設定できます。「アクションの追加」をクリックします。この場合、上記で設定した条件が TRUE なら、この操作を行うということになります。ここでは = の後に、関数やフィールド、もしくは値を定義できます。
<!-- Image= calcu06.png -->
{{< imagedisplay src="calcu06.png" >}}

**利用できる関数**

ここで利用できる関数については以下を参照にしてください。
<!-- Image= calcu07.png -->
{{< imagedisplay src="calcu07.png" >}}

引用元：[計算フィールドを定義して手動計算を自動化する](https://docs.microsoft.com/ja-jp/dynamics365/customer-engagement/customize/define-calculated-fields#calculated-field-functions-syntax)

ここではテキストを入力しました。チェックボタンをクリックします。
<!-- Image= calcu08.png -->
{{< imagedisplay src="calcu08.png" >}}

## 別エンティティのフィールドを参照
「その他」（Else）の値として、別エンティティのフィールドの値をセットしてみます。「その他」を展開して「操作」から「アクションの追加」をクリックします。
<!-- Image= calcu09.png -->
{{< imagedisplay src="calcu09.png" >}}

営業案件に関連する「取引先担当者」（parentcontactidp）を利用します。
<!-- Image= calcu10.png -->
{{< imagedisplay src="calcu10.png" >}}

= に 「取引先担当者」フィールドの名前 parentcontactidp と ドット ( . ) を入力します。すると「取引先担当者」フィールドが候補として出てきます。
<!-- Image= calcu11.png -->
{{< imagedisplay src="calcu11.png" >}}

ここでは「氏名」を選択してチェックボックスをクリックしました。
<!-- Image= calcu12.png -->
{{< imagedisplay src="calcu12.png" >}}

このように、（取引先担当者）氏名 が設定されていることがわかります。
<!-- Image= calcu13.png -->
{{< imagedisplay src="calcu13.png" >}}

あまり意味のない設定になっていますが、とりあえず設定しました（笑）保存して閉じます。結果を確認してみましょう。
<!-- Image= calcu15.png -->
{{< imagedisplay src="calcu15.png" >}}

他のシナリオについては技術情報にも記載があるのでご参照ください。

[計算フィールドを定義して手動計算を自動化する](https://docs.microsoft.com/ja-jp/dynamics365/customer-engagement/customize/define-calculated-fields#calculated-field-functions-syntax)

（最近、マイクロソフトのドキュメントは画像付きで読みやすくなってきたなと思います。この改善はとても助かります。）