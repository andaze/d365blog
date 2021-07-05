---
title:  "Wordテンプレートで見積書を作成"
draft: false
weight: 20
datetitle: "2017.08.23 | "
image: "artical20.jpg"
Author: "Takafumi Noguchi"
authorimage: "authorimage.jpg"
showinhome: true
showinaccordian: true
rightMenu: "artical"
linkdin: ""
---
<!-- Intro  -->
Word テンプレートを使い、自社の見積書を作成する手順をこちらにまとめます。

## 事前準備
まずは、営業案件を作成し、見積りで使用する製品をいくつか追加しておきます。今回は、営業案件に製品を２つ追加し、税額分も追加した見積もりを事前に作成しました。
<!-- Image= wordtemp01.png -->
{{< imagedisplay src="wordtemp01.png" >}}

合計金額はこの通りです。
<!-- Image= wordtemp02.png -->
{{< imagedisplay src="wordtemp02.png" >}}

## 見積りテンプレートの作成
それでは、見積りのテンプレートの作成にはいります。

### Word テンプレートのダウンロード
まずは「設定」から「テンプレート」をクリックし、「ドキュメント テンプレート」をクリックします。
<!-- Image= wordtemp03.png -->
{{< imagedisplay src="wordtemp03.png" >}}

「新規」ボタンをクリックして、

Word のテンプレートを選択、「エンティティ別にフィルター」で 見積り を選択したら「エンティティの選択」をクリックします。
<!-- Image= wordtemp05.png -->
{{< imagedisplay src="wordtemp05.png" >}}

<!-- Image= wordtemp06.png -->
{{< imagedisplay src="wordtemp06.png" >}}

※ Project Service をインストールしていると、見積りが２つありますが **quote** のほうを選択します。


ここで 1:N の関連性からエンティティを選択します。

見積り では、下図のように 「製品」とフォーム上で表記されていますが
<!-- Image= wordtemp07.png -->
{{< imagedisplay src="wordtemp07.png" >}}

実際は **見積依頼明細行** というエンティティのサブグリッドであることがわかります。
<!-- Image= wordtemp08.png -->
{{< imagedisplay src="wordtemp08.png" >}}

そのため、1:N の関連付け より **見積依頼明細行** を選択します。
<!-- Imahe= wordtemp09.png -->
{{< imagedisplay src="wordtemp09.png" >}}

これで見積もり上で、選択された製品が表示されるように設定可能となります。テンプレートをダウンロードしましょう。

### Word テンプレートの編集
ダウンロードした Word を開き、「開発」タブから **XML マッピングウィンドウ** をクリックします。

※ 表示されない場合は、オプションでリボンの設定から「開発」タブにチェックをいれて表示させます。
<!-- Image= wordtemp10.png -->
{{< imagedisplay src="wordtemp10.png" >}}

カスタム XML で urn:microsoft…. を選択します。
<!-- Image= wordtemp11.png -->
{{< imagedisplay src="wordtemp11.png" >}}

見積りと見積依頼明細行 に関連するフィールド内部名が表示されます。これらのフィールドを、Word ドキュメントに当て込むことで、テンプレート化されたドキュメントを生成できます。
<!-- Image= wordtemp12.png -->
{{< imagedisplay src="wordtemp12.png" >}}

たとえば、下図のような簡単な見積りにフィールドを割り当てていきます。
<!-- Image= wordtemp13.png -->
{{< imagedisplay src="wordtemp13.png" >}}

まず 件名 の個所に、見積りでは 名前 (name) をあてます。name を quote から探し、右クリックで 「コンテンツコントロールの挿入」から「リッチテキスト形式」をクリックします。
<!-- Image= wordtemp14.png -->
{{< imagedisplay src="wordtemp14.png" >}}

すると、件名 に **name が挿入されたこと**がわかります。
<!-- Image= wordtemp15.png -->
{{< imagedisplay src="wordtemp15.png" >}}

この要領で、他の個所もフィールドを挿入します。※フィールド名を確認するのが大変な場合は、[Metadata Browser](https://docs.microsoft.com/ja-jp/dynamics365/customerengagement/on-premises/developer/browse-your-metadata). を活用すると便利です。 
<!-- Image= wordtemp16.png -->
{{< imagedisplay src="wordtemp16.png" >}}

### リピートする表をつくる
次に、見積りに関連付けられている **見積依頼明細行** の値を表に設定します。

まずは表に、製品名や数量、価格を追加します。
<!-- Image= wordtemp17.png -->
{{< imagedisplay src="wordtemp17.png" >}}

リピートしたい行のフィールドをすべて選択して、XML マッピングで、見積依頼明細行 (quote_details) エンティティ名上で右クリックから「コンテンツ コントロールの挿入」 で **繰り返し** をクリックします。
<!-- Image= wordtemp18.png -->
{{< imagedisplay src="wordtemp18.png" >}}

これで、繰り返しする行は以下のように ＋ が表示されました。
<!-- Image= wordtemp19.png -->
{{< imagedisplay src="wordtemp19.png" >}}

残りの小計や税額、合計を挿入したら完成です。Word テンプレートに適当な名前を入れて保存しておきます。
<!-- Image= wordtemp20.png -->
{{< imagedisplay src="wordtemp20.png" >}}

### Word テンプレートのアップロード
最後にテンプレートをアップロードします。最初にテンプレートをダウンロードした画面で、「テンプレートのアップロード」をクリックして作成してテンプレートをアップロードします。
<!-- Image= wordtemp21.png -->
{{< imagedisplay src="wordtemp21.png" >}}

これで完成です。

## 見積書の作成
サンプルで作った見積りに戻り、上部メニューの ・・・ より「Word テンプレート」をクリックして、先ほどアップロードしたテンプレート名をクリックします。
<!-- Image= wordtemp22.png -->
{{< imagedisplay src="wordtemp22.png" >}}

ダウンロードされた Word を開くと、意図した通りに見積書ができました。
<!-- Image= wordtemp23.png -->
{{< imagedisplay src="wordtemp23.png" >}}

また、最近のアップデートで PDF として保存も可能になりました。個人的にはこのアップデートはかなり助かります。
※ユーザーから、Word だとダウンロードした人が自由に値を変えられてしまうので、PDF 化してほしい、という要望がありました。

上部メニューから「PDFの作成」をクリックするとアップロードしたテンプレートを選択できるので、ダウンロードします。
<!-- Image= wordtemp24.png -->
{{< imagedisplay src="wordtemp24.png" >}}

PDF を見ると、なかなかいい感じですね。
<!-- Image= wordtemp25.png -->
{{< imagedisplay src="wordtemp25.png" >}}

以上が、Word テンプレートで見積書を作成する手順でした。一度設定すると使いまわしができるので、とても便利です。

ぜひご活用ください。