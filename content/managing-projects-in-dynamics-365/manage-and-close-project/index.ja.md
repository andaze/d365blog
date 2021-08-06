---
title:  "Project Service プロジェクトの管理とクローズ"
draft: false
weight: 5
datetitle: "2017.08.23 | "
image: "artical5.jpg"
Author: "Takafumi Noguchi"
authorimage: "authorimage.jpg"
showinhome: true
showinaccordian: false
rightMenu: "artical"
linkdin: ""
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
      "dateModified": "2015-02-05T09:20:00+08:00"
    }
---
<!-- Intro  -->
Dynamics 365 for Project Service Automation でプロジェクトの計画を立てる手順を Project Service でプロジェクトを計画 でご紹介しました。計画を立てたらプロジェクトが開始されます。ここでは、プロジェクトを管理する手順をご紹介します。


## 見積りコストの管理
プロジェクトメンバーをリソースから選定して、WBS にそれぞれ割り当てた後、WBS に合わせた見積りの労務コストが自動的に計算されます。この労務コストの計算は、「契約単位」に設定されている組織単位の**価格表**を元に計算されています。


<!-- Image= manage01.png -->
{{< imagedisplay src="manage01.png" >}}

ただ、下図のように一部のメンバーを外部協力の会社から調達している場合は価格表に追加の設定が必要です。
<!-- Image= manage02.png -->
{{< imagedisplay src="manage02.png" >}}

この場合、開発メンバーは外部協力の会社から調達しているので、プロジェクトに関連している組織単位の価格表に外部協力会社の価格を反映させておく必要があります。

### コスト価格表の更新
「契約単位」を開くと、「原価価格表」があるので開きます。
<!-- Image= manage03.png -->
{{< imagedisplay src="manage03.png" >}}

下図のように「ロール価格」に外部協力会社の原価を追加して保存します。
<!-- Image= manage04.png -->
{{< imagedisplay src="manage04.png" >}}

これで WBS の「予定労務コスト」の計算が正しく行われるようになります。

### 営業価格表の更新
WBS の 「予定売上」も反映させる必要があるので営業の価格表も同じように更新します。「価格表」より上記で変更したコスト価格表と対になる営業価格表を開きます。
<!-- Image= manage05.png -->
{{< imagedisplay src="manage05.png" >}}

同じように外部協力の営業価格を「ロール価格」に追加しました。
<!-- Image= manage06.png -->
{{< imagedisplay src="manage06.png" >}}

### 外部協力会社分のコストと売上を確認
プロジェクトに戻って WBS を開きます。ここで「列を選択」で “予定労務コスト” と “予定売上” にチェックを入れます。列を確認すると、外部協力会社のメンバー2名分の “予定労務コスト” と “予定売上” が自動的に計算されていることがわかります。

※もし反映されていなかったら、「工数」などの列を少し変更して「最新の情報に更新」ボタンをクリックしてください。
<!-- Image= manage07.png -->
{{< imagedisplay src="manage07.png" >}}

プロジェクトの画面に戻ると、「予定労務コスト」も反映されています。
<!-- Image= manage08.png -->
{{< imagedisplay src="manage08.png" >}}

## プロジェクトを進行する
労務コストの見積もりが出たので早速プロジェクトを進めていきましょう。プロジェクトの更新と作業者の日々のタスクを入力します。

### 予約とタスク
メニューから「予約とタスク」をクリックすると、自分がチームメンバーとして参加しているプロジェクトと一週間の稼働時間が記載されています。
<!-- Image= manage09.png -->
{{< imagedisplay src="manage09.png" >}}

このタスク部分をクリックすると、下図のようにタスクの進捗状況を入力できます。
<!-- Image= manage10.png -->
{{< imagedisplay src="manage10.png" >}}

### 時間入力
リソースが「ユーザー」の場合は、プロジェクトに対する自分の作業時間や作業内容を「時間入力」で追加します。カレンダー形式になっているので、＋ボタンで作業を入力します。
<!-- Image= manage11.png -->
{{< imagedisplay src="manage11.png" >}}

「時間エントリ」を追加します。「期間」には作業時間、「種類」は作業として、プロジェクトの作業内容や詳細を記載したら、「保存」をクリックします。
<!-- Image= manage12.png -->
{{< imagedisplay src="manage12.png" >}}

この時点では、まだ下書きです。この作業をプロジェクトのリソースマネージャー（管理者）に送付して承認を得るために「送信」ボタンをクリックします。
<!-- Image= manage13.png -->
{{< imagedisplay src="manage13.png" >}}

一週間の作業が一覧化されます。「メモ」に承認者へコメントをいれて、「送信」をクリックします。
<!-- Image= manage14.png -->
{{< imagedisplay src="manage14.png" >}}

これで作業が送信されました。
<!-- Image= manage15.png -->
{{< imagedisplay src="manage15.png" >}}

### 作業の承認
メンバーから送信された作業内容を確認するために「プロジェクトの承認」をクリックします。「承認待ちの時間エントリ」という既定のビューで、承認依頼の作業があることが確認できます。チェックをいれてみましょう。
<!-- Image= manage16.png -->
{{< imagedisplay src="manage16.png" >}}

「編集」というボタンをクリックすると、作業内容の詳細が確認できます。
<!-- Image= manage17.png -->
{{< imagedisplay src="manage17.png" >}}

「承認」と「拒否」というボタンがあります。承認できる作業内容であれば「承認」ボタンをクリックします。もし作業内容が受け入れられない場合は、「拒否」をクリックします。ここでは「承認」します。
<!-- Image= manage18.png -->
{{< imagedisplay src="manage18.png" >}}

承認されたかどうかは、先ほどの「時間入力」で確認できます。
<!-- Image= manage19.png -->
{{< imagedisplay src="manage19.png" >}}

### 実際の労務コスト
承認が完了した時点で、プロジェクトの労務コストは消費されます。プロジェクトに戻って確認してみます。

「実際の労務コスト」に値が入っています。「コスト消費 ％」も上がっていることがわかります。
<!-- Image= manage20.png -->
{{< imagedisplay src="manage20.png" >}}

「状態」を確認するとグラフでコストと進行状況の ％ が表示されています。
<!-- Image= manage21.png -->
{{< imagedisplay src="manage21.png" >}}

このように各リソースが作業を申請して、それをリソースマネージャーが承認することでコストが消費され、プロジェクトのタスクが進行していきます。


## プロジェクトのクローズ
プロジェクトが順調に進捗して、最後はクローズします。プロジェクトをクローズするためには業務プロセスフローのステージを進めて「クローズ」します。業務プロセスフローのステージを進めるには、「次の段階」をクリックします。
<!-- Image= manage22.png -->
{{< imagedisplay src="manage22.png" >}}

最後「クローズ」のステージで「完了」をクリックすればプロジェクトはクローズです。
<!-- Image= manage23.png -->
{{< imagedisplay src="manage23.png" >}}

この時点のプロジェクトは「ステージ」は Close ですが状態はアクティブです。「非アクティブ」をクリックします。
<!-- Image= manage24.png -->
{{< imagedisplay src="manage24.png" >}}

ここで状態を選べます。「非アクティブ」を選択して「非アクティブ化」をクリックします。もし上述した業務プロセスをクローズしていないのであれば、「クローズ済み」を選択して非アクティブ化することもできます。
<!-- Image= manage25.png -->
{{< imagedisplay src="manage25.png" >}}

これでプロジェクトはクローズしました。「クローズされたプロジェクト」というビューで確認できます。
<!-- Image= manage26.png -->
{{< imagedisplay src="manage26.png" >}}

基本的なプロジェクト管理は以上です。

## 最後に
これまで Dynamics 365 for Project Service Automation のプロジェクト作成から管理までを一通りご紹介してきました。現時点（2019年2月）では Project Service はバージョン２で、評価版を利用すると バージョン３と新しいバージョンがすでに利用可能になっています。

バージョン３になって、今までご紹介した WBS や Web インターフェイスなどの機能が変わっていますが、それらもバージョンアップ後に随時ご紹介できたらと思います。

それでは今回はここまで。     
&nbsp;