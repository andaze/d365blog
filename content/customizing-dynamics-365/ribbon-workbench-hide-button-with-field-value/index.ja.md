---
title:  "Ribbon Workbench：フィールド値でボタンを表示・非表示にする"
draft: false
weight: 6
datetitle: "2017.08.23 | "
showinhome: true
showinaccordian: true
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
{{< detailTopImage src="artical6.jpg" >}}
{{< authorImage src="authorimage.jpg" name="Takafumi Noguchi" linkdin="https://www.linkedin.com/in/tnoguchi1123531" >}}
<!-- Intro  -->
Ribbon Workbench を使って、ボタンの表示・非表示の設定をすることができます。

ただ、単純に不要なボタンを非表示にするのであれば、**セキュリティロールで権限**を調整すればできます。
そこで、今回はフィールドの値により表示・非表示を変えるという設定を加えてみます。


## advance preparation
カスタマイズを行う前に、事前準備をしましょう。

### Ribbon Workbench のインポート
Ribbon Workbench は  [RIBBON WORKBENCH](https://www.develop1.net/public/rwb/ribbonworkbench.aspx)からダウンロードできます。

ダウンロード先のメールアドレスを登録したら、メールに届くリンクからダウンロードしてください。
※詳細手順は割愛します。

<!-- Quate Box -->
  <!-- Image= rb-01.png -->
{{< imagedisplay src="rb-01.png" >}}

  引用元： [RIBBON WORKBENCH](https://www.develop1.net/public/rwb/ribbonworkbench.aspx)

Dynamics 365 の ソリューション からダウンロードした Ribbon Workbench をインポートしましょう。
<!-- Image= rb-02.png -->
{{< imagedisplay src="rb-02.png" >}}

もしインポートが完了したら、上部にこのように表示されます。
<!-- Image= rb-03.png -->
{{< imagedisplay src="rb-03.png" >}}

### ２つのオプションセットフィールドをつくる
はい、いいえ の値によりボタンの表示・非表示を変えるので、
カスタムフィールドを１つ作成しておきます。
<!-- Image= rb-04.png -->
{{< imagedisplay src="rb-04.png" >}}

営業案件のフォームにフィールドを配置しておきます。
<!-- Image= rb-05.png -->
{{< imagedisplay src="rb-05.png" >}}

### ボタンカスタマイズ用のソリューションをつくる

ボタンをカスタマイズしたいエンティティの必要最低限の情報を含んだソリューションを作成します。

Ribbon Workbench はかなり重いソリューションです。

 

ボタンカスタマイズするソリューションに、エンティティを含みすぎると

公開するときにサービス全体が低下するため、本番環境に実施する場合は注意が必要です。

今回は、営業案件のフォームを１つだけ含んだソリューションを作成しました。
 * 既存のエンティティから **営業案件** を選び、
 * **すべての資産を追加** からチェックを外した状態で
 * **営業案件** のフォームだけ選択して 完了 としました。
 * 必須コンポーネントは含みません。

<!-- Image= rb-06.png -->
{{< imagedisplay src="rb-06.png" >}}

作成したソリューションは以下の通り
<!-- Image= rb-07.png -->
{{< imagedisplay src="rb-07.png" >}}

## Lソリューションをロードする
それでは、Ribbon Workbench で先ほど作成したソリューションをロードします。

先ほどの上部のボタンをクリックします。
<!-- Image= rb-08.png -->
{{< imagedisplay src="rb-08.png" >}}

そして、先ほどのソリューションを選択して OK します。
<!-- Image= rb-09.png -->
{{< imagedisplay src="rb-09.png" >}}

ロードされたら、以下の画面になります。

Home （ホーム画面のボタン）Subgrid（サブグリッド画面のボタン）、Form （フォーム画面のボタン）とエリアが分かれ
Entity でどのエンティティのボタンをカスタマイズするか設定できます。
<!-- Image= rb-10.png -->
{{< imagedisplay src="rb-10.png" >}}

※ 補足：単純にボタンを非表示にする場合は、
ボタン上で右クリックをして **Hide** をクリックすればいいです。
<!-- Image= rb-11.png -->
{{< imagedisplay src="rb-11.png" >}}

今回は **受注としてクローズ** ボタンをカスタマイズします。
<!-- Image= rb-12.png -->
{{< imagedisplay src="rb-12.png" >}}

内部名は、F12 で開発者モードにして、確認すればわかります。
MarkAsWon ですね。
<!-- Image= rb-13.png -->
{{< imagedisplay src="rb-13.png" >}}

Form エリアの MarkAsWon ボタン上で、
右クリックから **Customize Command** をクリックします。
<!-- Image= rb-14.png -->
{{< imagedisplay src="rb-14.png" >}}

COMMANDS 以下の MarkAsWon をクリックして

右パネルの **Display Rules** で **Add Display Rule** をクリックします。
<!-- Image= rb-15.png -->
{{< imagedisplay src="rb-15.png" >}}

Id で適当な名前をいれます。
<!-- Image= rb-16.png -->
{{< imagedisplay src="rb-16.png" >}}

**Add Step** で **Value Rule** をクリックします。
<!-- Image= rb-17.png -->
{{< imagedisplay src="rb-17.png" >}}

作成したフィールド名を入れ、Value に **true** を入力する。
※ True や TRUE とすると正しく動作しないので、小文字で正しく入力
<!-- Image= rb-18.png -->
{{< imagedisplay src="rb-18.png" >}}

あとは **Publsih** ボタンで公開します。
<!-- Image= rb-19.png -->
{{< imagedisplay src="rb-19.png" >}}

## 動作確認 ① 
それでは、動作確認をしてみます。

営業案件を１つ開き、フォームを確認すると **受注としてクローズ**  が表示されていません。
<!-- Image= rb-20.png -->
{{< imagedisplay src="rb-20.png" >}}

ここで、フィールドを はい （true） に変更して保存しました。

すると、 **受注としてクローズ** が表示されました。うまく動作していますね。
<!-- Image= rb-21.png -->
{{< imagedisplay src="rb-21.png" >}}

## もう一歩踏み込む
２つのオプションセットフィールドだとシンプルなので、

**予測カテゴリ （msdyn_forecastcategory）**で、”**確定済み**” となったら、

 **受注としてクローズ**  を表示するというカスタマイズも実施してみます。
<!-- Image= rb-22.png -->
{{< imagedisplay src="rb-22.png" >}}

確定済みは、100000003 が値ですね。
<!-- Image= rb-23.png -->
{{< imagedisplay src="rb-23.png" >}}

それを先ほどの Ribbon Workbench の **Display Rules** に Step を追加します。
<!-- Image= rb-24.png -->
{{< imagedisplay src="rb-24.png" >}}

あとは Publish します。

## 動作確認 ②
それでは動作確認をします。

先ほどのカスタムフィールドは はい ですが、 **受注としてクローズ**  が表示されていません。
<!-- Image= rb-25.png -->
{{< imagedisplay src="rb-25.png" >}}

**予測カテゴリ**  を “**確定済み**” に変更しました。

 **受注としてクローズ**  が表示されました。うまく動作していますね。
<!-- Image= rb-26.png -->
{{< imagedisplay src="rb-26.png" >}}

以上、Ribbon Workbench のちょっと深堀りした使い方でした。

 

COMMANDS で JS を呼んで処理を実行したり、

Smart Button をインポートすると、プロセスをボタンクリックで実行できるので、

ぜひ他の使い方もチャレンジしてみてください。