---
title:  "電子メールトラッキング機能を使う"
draft: false
weight: 7
datetitle: "2017.08.23 | "
image: "artical7.jpg"
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
<!-- Intro  -->
Dynamics 365 for Sales には、顧客へ送付したメールの開封・リンククリック・添付開封を追跡する機能がついています。Salesforce では Pardot を別途購入して利用する必要がある機能が、追加費用なしで利用できるのは素晴らしいことです！

**参考技術情報**

[電子メール エンゲージメントを使用してメッセージの対話を表示する](https://docs.microsoft.com/ja-jp/dynamics365/ai/sales/email-engagement)

設定はとても簡単なので、手順をまとめます。

## 電子メールプロファイルの設定
Dynamics 上でメールの送信ができるように、メールプロファイルの設定を行います。

なお、この設定は、1テナント上、1インスタンスのみで設定できます。
複数インスタンスでの設定はできないので注意が必要です。

Dynamics 365 の「設定」から 「電子メールアクセス」をクリックします。
<!-- Image= track1.png -->
{{< imagedisplay src="track1.png" >}}

メールボックスを開きます。
<!-- Image= track2.png -->
{{< imagedisplay src="track2.png" >}}

メールを有効にしたいメールボックスを開きます。

まず「同期方法」を以下のように設定して保存します。
<!-- Image= track3.png -->
{{< imagedisplay src="track3.png" >}}

上部メニューの「電子メールの承認」をクリックして

ダイアログで「OK」とします。
<!-- Image= track4.png -->
{{< imagedisplay src="track4.png" >}}

上部メニューの「メールボックスのテストと有効化」をクリックして

ダイアログのチェックを入れて、「OK」とします。
<!-- Image= track5.png -->
{{< imagedisplay src="track5.png" >}}

左パネルの「通知」をクリックして、しばらく待ちます。

更新ボタンをクリックして、下図のように送信、受信、同期において成功すれば完了です。
<!-- Image= track6.png -->
{{< imagedisplay src="track6.png" >}}

### 複数アカウントのメールを有効にする場合
１つずつメールを有効にすると時間がかかるので、複数アカウント同時に行います。

設定したいメールボックスすべてにチェックをいれて、「編集」ボタンをクリックします。
<!-- Image= track7.png -->
{{< imagedisplay src="track7.png" >}}

同期方法は、前述通りに設定します。
<!-- Image= track8.png -->
{{< imagedisplay src="track8.png" >}}

あとは、「電子メールの承認」と「メールボックスのテストと有効化」を

順番通りに設定すれば完了です。
<!-- Image= track9.png -->
{{< imagedisplay src="track9.png" >}}


## 電子メール追跡機能の有効化
Sales Insights の機能に電子メールの追跡があるので設定します。

8.2 では、プレビュー版だったものが、9に変わって使えるようになりましたね。


「設定」の 「Sales Insights」をクリックします。
<!-- Image= track10.png -->
{{< imagedisplay src="track10.png" >}}

「電子メールエンゲージメント」下にある 

サービス利用条件の「同意します」をクリックします。
<!-- Image= track11.png -->
{{< imagedisplay src="track11.png" >}}

「電子メールエンゲージメント」の「アクセス許可を付与」をクリックします。
<!-- Image= track12.png -->
{{< imagedisplay src="track12.png" >}}

要求されているアクセス許可で「承諾」をクリックします。
<!-- Image= track13.png -->
{{< imagedisplay src="track13.png" >}}

以下のような画面表示になれば成功です。
<!-- Image= track14.png -->
{{< imagedisplay src="track14.png" >}}

前画面に戻り、「電子メールエンゲージメント」の「設定」をクリックします。
<!-- Image= track15.png -->
{{< imagedisplay src="track15.png" >}}

「電子メールエンゲージメントが有効」になっていない場合は、スイッチを入れて

有効化します。
<!-- Image= track16.png -->
{{< imagedisplay src="track16.png" >}}
これですべての設定は完了です。簡単だったでしょう？

## 動作確認
それでは動作を確認してみます。

電子メールを１つ作成してみます。

 

※ 実際にメールが送付されてしまうので、

実際の顧客情報でテストを行うのはやめましょう。

 

取引先担当者（テスト用）に新規で 電子メールを作成します。
<!-- Image= track17.png -->
{{< imagedisplay src="track17.png" >}}
件名や本文を埋めて送信します。

この時、画面右下のように「電子メールエンゲージメント」が表示されているか確認します。

※表示されていないと正しく追跡ができません。
<!-- Image= track18.png -->
{{< imagedisplay src="track18.png" >}}

メールを受信したメールボックスでメールが届いたことを確認（開封）します。
<!-- Image= track21.png -->
{{< imagedisplay src="track21.png" >}}
数分後に、送信した電子メールのレコードを開くと、

下図のように追跡結果が表示されていることがわかります。
<!-- Image= track20.png -->
{{< imagedisplay src="track20.png" >}}
正しく動作していましたね！

 

その他にも、メール本文にリンクをつけたり、

添付ファイルを開いたことの追跡も可能ですので試してみてください。