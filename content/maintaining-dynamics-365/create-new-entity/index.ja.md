---
title:  "Dynamics 365 エンティティを管理する"
draft: false
weight: 7
datetitle: "2017.08.23 | "
showinhome: true
showinaccordian: false
rightMenu: "artical"
indexImg: "artical7.jpg"
description: "Dynamics 365 のエンティティを作成・編集・削除などの管理方法をご紹介します。"
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
Dynamics 365 のエンティティを作成・編集・削除などの管理方法をご紹介します。

## エンティティについて
Dynamics 365 では、ビジネスデータをエンティティでモデル化して管理しています。Dynamics 365 をセットアップすると既定で、取引先企業・取引先担当者・営業案件・活動という基本的なエンティティが用意されていますが、それぞれのエンティティで、企業情報・代表者情報・商談・商談の活動（電話・メール・予定・タスクなど）を管理しています。

また、組織に合わせてカスタムエンティティを作成して、既定のエンティティと関連付けることでビジネスデータを柔軟に管理できるようになります。

### エンティティのコンポーネント
エンティティには以下のコンポーネントが含まれています。
<!-- Image= entity01.png -->
{{< imagedisplay src="entity01.png" >}}
|||
| --- | --- |
|  フォーム      | ユーザーがビジネスデータを閲覧・編集するためのユーザー インターフェイスです。フォーム内に項目（フィールド）を配置して、表示・非表示や既定値の設定などを業務ルールで設定します。Javascript を使ってコーディングすることも可能です。       |
| ビュー   | ビジネスデータの一覧を表示するための機能です。エンティティに作成されている項目（フィールド）を列としてどのデータを一覧に表示させるか、どのようなフィルターをかけるかなどを設定できます。        |
| グラフ      | エンティティのデータを使って、円グラフや棒グラフ、セールスファネルなどを作成できます。       |
| フィールド   | ビジネス データを格納する入れ子です。開発者によっては属性（Attribute）と呼ばれるようです。       |
| キー      | 代替キーと呼ばれる識別子を作成できます。外部データ ストアと統合する際などに必要になります。      |
| 関連付け   | エンティティと他エンティティの関連性を構成します。        |
| メッセージ   | エンティティで利用されるメッセージです。システムですでに用意されており、編集可能です。      |
| ビジネスルール   | 業務ルールです。フォーム内でも作成できます。       |
| 階層設定   | 同エンティティ内での階層設定です。取引先企業だと、親会社を設定すると階層ビューが表示されますが、そのビュー内で表示される企業の情報を変更できます。既定では「階層のタイルフォーム」が設定されています。     |
| ダッシュボード   | 各エンティティのダッシュボードです。        |


**参考情報**
  * [エンティティの代替キーの定義](https://docs.microsoft.com/ja-jp/dynamics365/customer-engagement/developer/define-alternate-keys-entity)
  * [システム エンティティ メッセージの編集](https://docs.microsoft.com/ja-jp/dynamics365/customer-engagement/customize/edit-system-entity-messages)
  * [階層ビューでの取引先企業の関連付けの表示](https://docs.microsoft.com/ja-jp/dynamics365/customer-engagement/basics/account-relationships-hierarchical-view)

**階層ビューの例（取引先企業）**
<!-- Image= entity02.png -->
{{< imagedisplay src="entity02.png" >}}

## エンティティの作成
Dynamics 365 でカスタムエンティティの作成は、「システムのカスタマイズ」で行います。    
※ エンティティを作成する際は、設計と検証を行った上で作成してください。後述する削除手順にあるように、作成したエンティティを削除するとインスタンスに影響が出る場合があり、慎重な対応が必要です。不用意にエンティティを作成しないように注意してください。   

エンティティ作成時の注意事項は公式ページにも記載があります。

<!-- Quate Box -->
* ブラウザーに Safari を使用する場合、新しいユーザー定義エンティティを保存または公開しようとするとき、タイムアウト エラーが表示される場合があります。 このエラーが表示される場合、別のブラウザーを使用してエンティティを作成することをお勧めします。
* エンティティ名で Dynamics 365 for Customer Engagement for Customer Service 埋め込みサポート情報検索を使用するために、発行者の接頭辞を含む最大エンティティ名の長さは 24 文字を超えてはなりません。

引用元： [エンティティの作成](https://docs.microsoft.com/ja-jp/dynamics365/customer-engagement/customize/create-entities)

「コンポーネント」を展開して「エンティティ」で「新規」ボタンをクリックします。
<!-- Image= entity03.png -->
{{< imagedisplay src="entity03.png" >}}

「表示名」「複数名」「名前」の必須項目を入力します。色や説明は任意です。
<!-- Image= entity04.png -->
{{< imagedisplay src="entity04.png" >}}

「組織形態」は “ユーザーとチーム” のままでOKです。
<!-- Image= entity05.png -->
{{< imagedisplay src="entity05.png" >}}

※「組織形態」には “組織” という形態も存在します。これは組織が所有するエンティティとなるため、ユーザーやチームで所有するという概念がありません。そのため、割り当てや共有ができないエンティティとなります。Project Service Automation で利用される「組織単位」はこれにあたります。

この概念は、[エンティティの所有権](https://docs.microsoft.com/ja-jp/dynamics365/customer-engagement/developer/introduction-entities#entity-ownership)を読むと理解ができます。

※「活動エンティティとして定義します」にチェックをいれると、活動エンティティを作成します。活動エンティティは、ActivityPointer 配下のエンティティで、予定やタスク、メールなどがそれにあたります。

「このエンティティが表示される領域」は、サイトマップでエンティティを表示するかどうかです。作成時にチェックを入れておくと作成後、サイトマップ上にエンティティが表示されます。

「営業」にチェックをいれておきます。
<!-- Image= entity06.png -->
{{< imagedisplay src="entity06.png" >}}

「プロセス」以降は特に変更なくそのままにしておきます。なお、＋マークがついている箇所は、一度チェックを入れると、チェックを外すことができませんのでご注意ください。
<!-- Image= entity07.png -->
{{< imagedisplay src="entity07.png" >}}

「プライマリフィールド」タブを開きます。既定では「名前」（new_name）というフィールドがレコードのプライマリーフィールドとなっており、必須項目としてテキスト型で作成されます。
<!-- Image= entity08.png -->
{{< imagedisplay src="entity08.png" >}}

基本的にこの箇所は変更する必要はないのですが、例えば、名前ではなく、ID として管理したい場合や、開発要件で必須としたくない場合は、この箇所を変更します。データ型は変更できません。
<!-- Image= entity09.png -->
{{< imagedisplay src="entity09.png" >}}

保存して、エンティティを作成しました。この時点ではまだ公開しません。

## エンティティの編集
エンティティを編集します。

### アイコンの更新
保存後、メニューに「アイコンの更新」ボタンが表示されるのでクリックします。
<!-- Image= entity10.png -->
{{< imagedisplay src="entity10.png" >}}

アイコンのサイズは指定されているので、サイズに合わせてイメージを選択します。また、Webインターフェイスか統一インターフェイス (16×16ピクセル) で使われるアイコンもそれぞれ変更できます。
<!-- Image= entity11.png -->
{{< imagedisplay src="entity11.png" >}}

参照できるファイルは、「Webリソース」からなので、事前に Web リソースに画像をアップロードする必要があります。
<!-- Image= entity12.png -->
{{< imagedisplay src="entity12.png" >}}

### カスタマイズ可能とするか
「管理プロパティ」をクリックすると、そのエンティティをカスタマイズ可能とするかどうか設定できます。基本的にはそのままでOKです。開発が完了して、一切のカスタマイズを許可しない場合などはこの設定を変更します。
<!-- Image= entity13.png -->
{{< imagedisplay src="entity13.png" >}}

その他の変更はここでは行わず、保存して公開します。サイトマップで確認すると下記のようにエンティティが追加されています。
<!-- Image= entity14.png -->
{{< imagedisplay src="entity14.png" >}}


## エンティティの削除について
公式ページを確認すると、エンティティの削除について記載があります。

<!-- Quate Box -->
ユーザー定義エンティティを削除すると、そのエンティティのデータを保存しているデータベース テーブルが削除され、それらのテーブルに含まれるすべてのデータが失われます。 ユーザー定義エンティティと上位下位の関連付けのある関連レコードも削除されます。 上位下位の関連付けの詳細については、「エンティティ関係の作成と編集」を参照してください。

ユーザー定義エンティティを削除するには、その前に、他のソリューション コンポーネントに存在する依存関係を削除する必要があります。 たとえば、別のエンティティの検索フィールドがこのユーザー定義エンティティを使用するフォーム上にある場合、ユーザー定義エンティティを削除するには、その前に、そのフォームから検索フィールドを削除する必要があります。


引用元：[ユーザー定義エンティティの削除](https://docs.microsoft.com/ja-jp/dynamics365/customer-engagement/customize/delete-custom-entities)

上述を読むと、カスタムエンティティは、依存関係を削除してから削除するように記載があります。依存関係はエンティティの「依存関係を表示」で確認できます。
<!-- Image= entity15.png -->
{{< imagedisplay src="entity15.png" >}}

作成直後でも、「関連付け」や「サイトマップ」などと依存関係があり、削除できない関係もあります。
<!-- Image= entity16.png -->
{{< imagedisplay src="entity16.png" >}}

個人的には、エンティティの削除は**極力避けたほうがいい**かと思っています。以前、取引先企業などの主要なエンティティに紐づいた活動エンティティを削除した直後、取引先企業のデータにアクセスできなくなり、バックアップから復元することになりました。

開発環境ならまだしも、本番稼働している環境であればかなりリスクがあると思います。もしどうしても行う場合は、**バックアップを取得して十分な検証を行い、自己責任で対応してください。**削除しなくてもいいように、十分検討してからエンティティは作成してください。

エンティティの作成と編集については簡単ですが、ここまで。