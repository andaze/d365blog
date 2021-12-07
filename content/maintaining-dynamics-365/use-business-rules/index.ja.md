---
title:  "Dynamics 365 業務ルールを使う"
draft: false
weight: 6
datetitle: "2017.08.23 | "
showinhome: true
showinaccordian: false
rightMenu: "artical"
indexImg: "artical6.jpg"
description: "Dynamics 365 には**業務ルール**という機能があります。通常フォーム上でフィールドの非表示や条件に合わせた操作を行う場合は、Javascript の実装が必要になります。"
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
Dynamics 365 には**業務ルール**という機能があります。通常フォーム上でフィールドの非表示や条件に合わせた操作を行う場合は、Javascript の実装が必要になります。しかしこの機能を使用することで、スクリプト実装が不要となり、ユーザーが業務で必要なルールを簡易に設定できるようになります。

業務ルールでは以下のようなことが実現可能です。

<!-- Quate Box -->
条件とアクションを組み合わせることで、業務ルールを使用して以下の操作を実行できます
* フィールド値を設定する
* フィールド値のクリア
* フィールドの入力要求レベルを設定する
* フィールドを表示または非表示にする
* フィールドを有効化または無効化するデータを検証し、エラー メッセージを表示する
* ビジネス インテリジェンスに基づくビジネス レコメンデーションを作成する

引用元：[フォームにロジックを適用するために業務ルールおよびビジネス レコメンデーションを作成する](https://docs.microsoft.com/ja-jp/dynamics365/customer-engagement/customize/create-business-rules-recommendations-apply-logic-form)    

ここでは、業務ルールを使って簡単な操作を行っていきます。


## 業務ルールを作成する
「設定」の「カスタマイズ」を開き、「システムのカスタマイズ」をクリックします。
<!-- Image= businessRule1.jpg -->
{{< imagedisplay src="businessRule1.jpg" >}}

エンティティから「取引先企業」を展開して「フォーム」をクリックします。業務ルールを適用したいフォームを開きます。
<!-- Image= businessRule2.jpg -->
{{< imagedisplay src="businessRule2.jpg" >}}

メニューの「業務ルール」をクリックします。
<!-- Image= businessRule3.png -->
{{< imagedisplay src="businessRule3.png" >}}

右下に、「新しい業務ルールの追加」というボタンが表示されるので、クリックします。するとエディタが表示されます。ここで、必要な操作を行っていきます。

以下の図のように、コンポーネントとよばれるエリアに、フィールドのロックや非表示、エラーメッセージの表示などの要素が用意されており、条件にあった動作を行うことができます。
<!-- Image= businessRule4.png -->
{{< imagedisplay src="businessRule4.png" >}}

まずは条件を設定します。条件のコンポーネントをクリックすると、右側の「プロパティ」が開きますので、「表示名」や「ルール」を追加していきます。今回は以下のような条件とします。

| 表示名      | 	企業の基本情報を入力する        |
| --- | --- |
| ルール１   | 電子メール が空白である        |
| ルール２   | Webサイト が空白である        |
| ルール ロジック   | かつ        |

ルールを追加する場合は、「＋新規」をクリックします。設定が終われば「適用」ボタンをクリックしましょう。
<!-- Image=  businessRule5.png-->
{{< imagedisplay src="businessRule5.png" >}}

新しい条件ができました。それでは、条件が TRUE の場合、エラーメッセージを表示させます。「コンポーネント」から「エラーメッセージの表示」を条件コンポーネントの右側にドラック＆ドロップします。
<!-- Image= businessRule6.png -->
{{< imagedisplay src="businessRule6.png" >}}

以下のように設定をします。

| 表示名      | エラー表示       |
| --- | --- |
| フィールド   | Webサイト        |
| メッセージ   | 企業情報を調べて入力してください。    |

設定したら「適用」をクリックします。
<!-- Image= businessRule7.png -->
{{< imagedisplay src="businessRule7.png" >}}

これで業務ルールが作成できました。「保存」をクリックして、ルールに問題がないかを検証します。何も問題が検出されなければ、「アクティブ化」をクリックしましょう。
<!-- Image= businessRule8.png -->
{{< imagedisplay src="businessRule8.png" >}}

フォームエディタに戻り、保存してカスタマイズを「公開」します。
<!-- Image= businessRule9.png -->
{{< imagedisplay src="businessRule9.png" >}}

それでは、業務ルールが適用されたかを確認しましょう。

Web サイト というフィールドにエラーメッセージが表示されていますね。
<!-- Image= businessRule10.png -->
{{< imagedisplay src="businessRule10.png" >}}

## 業務ルールを他のフォームに利用する
上記で作成した業務ルールを他のフォームでも同じような条件で利用したい場合はどうしたらいいでしょうか。業務ルールのスコープを設定しましょう。

業務ルールを開き、「非アクティブ化」をクリックして、編集可能にします。右上にある「スコープ」を確認します。スコープは以下のような範囲を設定できます。

|  エンティティ      | すべてのフォームとサーバー       |
| --- | --- |
| すべてのフォーム   | すべてのフォーム        |
| 特定のフォーム名   | 指定したフォームのみ        |


すべてのフォームに適用する場合は、「すべてのフォーム」を選択しましょう。

もし、すべてのフォームではなく、2つのフォームのみという限定的な設定を行いたい場合は、一度この業務ルールを「ファイル名をつけて保存」で複製します。
<!-- Image= businessRule11.png -->
{{< imagedisplay src="businessRule11.png" >}}

業務ルールが複製されるので、そこでスコープを変更して、表示名の 「XXのコピー」の箇所を削除して保存すれば実現可能です。あとは「アクティブ化」をクリックして、別のフォームでも同じ業務ルールが有効になるように設定を完了させてください。

※ 複製元の業務ルールは非アクティブな状態のままになっているので、そちらも「アクティブ化」しておいてください。
<!-- Image= businessRule12.png -->
{{< imagedisplay src="businessRule12.png" >}}

## レコメンデーションを使う
業務ルールには、「レコメンデーション」というコンポーネントがあります。これは、ユーザーに推奨する値を提示して、OKであれば、それを適用するような提案型のコンポーネントです。

例えば以下のようなレコメンデーションを作成します。


業務ルール名：レコメンデーションを使う

条件

| 表示名      | 	説明が空白       |
| --- | --- |
| フィールド   | 説明        |
| 演算子   | が空白である        |     

&nbsp;


レコメンデーション

| レコメンデーション名      | テストレコメンデーション       |
| --- | --- |
| フィールド   | 	説明        |
| タイトル      | 説明が空白です。       |
| 詳細   | 説明が空白の場合は、「なし」と記載しましょう。       |

&nbsp;

アクション

| 表示名      | テストアクション       |
| --- | --- |
| フィールド   | 説明        |
| 値   | 	なし        |


条件は以下のように設定。
<!-- Image= businessRule13.png -->
{{< imagedisplay src="businessRule13.png" >}}

レコメンデーションをコンポーネントから追加して、条件の右側にドラック＆ドロップします。そして、レコメンデーションの設定をして「適用」をクリックします。
<!-- Image= businessRule14.png -->
{{< imagedisplay src="businessRule14.png" >}}

レコメンデーション内のアクションは以下の通り設定しましょう。
<!-- Image= businessRule15.png -->
{{< imagedisplay src="businessRule15.png" >}}

保存して、アクティブ化した後、公開します。結果を見てみましょう。フィールドを見てみると、レコメンデーションの i マークが表示されており、クリックすると作成した通りになっています。
<!-- Image= businessRule16.png -->
{{< imagedisplay src="businessRule16.png" >}}

「適用」というボタンをクリックすると、アクションが実行され、説明に「なし」という値が追加されることになります。
<!-- Image= businessRule17.png -->
{{< imagedisplay src="businessRule17.png" >}}

業務ルールは、その他にも、フィールドをロックして編集させない、非表示にする、別のフィールドの値をコピーするなど様々な用途に活用できます。ぜひ利用してみてください。