---
title:  "Dynamics 365 for Marketing 無償版のセットアップ【2019.04】"
draft: false
weight: 2
datetitle: "2017.08.23 | "
image: "artical2.jpg"
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
Dynamics 365 の無償版利用手順についてはご紹介しました。以前はこの 無償版の一覧に Marketing が表示されていましたが、現在表示されていません。マイクロソフトにお問い合わせをしたところ、Marketing においては別の URL で無償版を提供しているようなので、その手順をご紹介します。

※ ご紹介する無償版 Marketing の URL は一時的な措置のため、アナウンスなく利用できなくなる可能性があります。


## Office 365 E3 の無料試用版をセットアップ
まず、Office 365 E3 の無償版をセットアップします。Dynamics 365 for Marketing の無償版を利用する場合、下図の for Sales のような開発を目的としたセットアップができないので、企業のメールアドレスが必要になります。
<!-- Image= d-setup-01.png -->
{{< imagedisplay src="d-setup-01.png" >}}


[Office 365 E3](https://www.microsoft.com/ja-jp/microsoft-365/enterprise/office-365-e3) へアクセスして、「無料試用版」をクリックします。
<!-- Image= d-setup-02.jpg -->
{{< imagedisplay src="d-setup-02.jpg" >}}

必要な情報を入力して、「次へ」をクリックします。
<!-- Image= d-setup-03.png -->
{{< imagedisplay src="d-setup-03.png" >}}


Office 365 テナントのIDとパスワードを設定します。任意の名前とパスワードで「アカウントの作成」をクリックします。
<!-- Image= d-setup-04.png -->
{{< imagedisplay src="d-setup-04.png" >}}


ロボットでないことの認証があるので、自身の電話番号を入力してSMSでコードを取得したら入力して先に進みます。
<!-- Image= d-setup-05.png -->
{{< imagedisplay src="d-setup-05.png" >}}


セットアップが完了すると、Office 365 の画面に移動できます。「管理」をクリックします。
<!-- Image= d-setup-06.png -->
{{< imagedisplay src="d-setup-06.png" >}}


今回は、この Office 365 のアカウントを Dynamics 365 for Marketing の管理者としてセットアップします。
<!-- Image= d-setup-07.png -->
{{< imagedisplay src="d-setup-07.png" >}}


## Dynamics 365 for Marketing の無償版セットアップ
[Dynamics 365 for Marketing の無償版](https://trials.dynamics.com/Dynamics365/marketing)へアクセスします。(2019年4月時点はまだ有効です）

電子メールアドレスは上記で作成した Office 365 のアドレスを使います。「はじめに」をクリックします。
<!-- Image= d-setup-08.png -->
{{< imagedisplay src="d-setup-08.png" >}}


チェックボックスに２つチェックをいれたら、「作成」をクリックします。
<!-- Image= d-setup-09.png -->
{{< imagedisplay src="d-setup-09.png" >}}


セットアップが始まります。Dynamics 365 for Marketing のアクセス許可を要求するダイアログが表示されるので「承諾」をクリックします。
<!-- Image= d-setup-10.png -->
{{< imagedisplay src="d-setup-10.png" >}}


Voice of Customer Services のアクセス許可を要求するダイアログが表示されるので「承諾」をクリックします。
<!-- Image= d-setup-11.png -->
{{< imagedisplay src="d-setup-11.png" >}}

Dynamics 365 for Marketing のセットアップが始まります。
Marketing はポータルの機能を使用するので、ポータルのセットアップを行います。
<!-- Image= d-setup-12.png -->
{{< imagedisplay src="d-setup-12.png" >}}


現在地情報などの提供について、チェックをいれて住所を入力したら「セットアップ」をクリックします。
<!-- Image= d-setup-13.png -->
{{< imagedisplay src="d-setup-13.png" >}}

セットアップにはしばらく時間がかかるので待ちましょう。
<!-- Image= d-setup-14.png -->
{{< imagedisplay src="d-setup-14.png" >}}


セットアップが完了したら、「アプリへ移動」をクリックします。Dynamics 365 for Marketing のトップ画面にアクセスできました。
<!-- Image= d-setup-15.png -->
{{< imagedisplay src="d-setup-15.png" >}}


[Dynamics 365 ホーム](https://home.dynamics.com/)へアクセスすると、Marketing のアプリがあることがわかります。
<!-- Image= d-setup-16.png -->
{{< imagedisplay src="d-setup-16.png" >}}


## ユーザーの追加方法（無償版のみ）
Dynamics 365 for Marketing 無償版でユーザーを追加する方法が、Dynamics 365 for Sales とは異なるので記載しておきます。

※ この操作が必要なのは**無償版のみ**です。

下図のように Office 365 でアカウントを作成して、Dynamics 365 for Marketing のライセンスを付与しても、
Dynamics 365 for Marketing には自動的にそのユーザーは追加されません。
<!-- Image= d-setup-17.png -->
{{< imagedisplay src="d-setup-17.png" >}}


作成したアカウントを Dynamics 365 for Marketing に追加するには、作成したアカウント毎に、[Dynamics 365 for Marketing の無償版](https://trials.dynamics.com/Dynamics365/marketing) でユーザーを登録する必要があります。下図のように作成したアカウントIDで登録します。
<!-- Image= d-setup-18.png -->
{{< imagedisplay src="d-setup-18.png" >}}


サインインを求められるので「サインイン」をクリックします。
<!-- Image= d-setup-19.png -->
{{< imagedisplay src="d-setup-19.png" >}}


新しく作成したアカウントでサインインします。
<!-- Image= d-setup-20.png -->
{{< imagedisplay src="d-setup-20.png" >}}

「確認しました」をクリック。
<!-- Image= d-setup-21.png -->
{{< imagedisplay src="d-setup-21.png" >}}


Dynamics 365 for Marketing 無償版テナントが表示されるので、「参加」をクリックします。
<!-- Image= d-setup-22.png -->
{{< imagedisplay src="d-setup-22.png" >}}


アプリケーションの選択で「マーケティング」にチェックをいれて「続行」をクリックします。
<!-- Image= d-setup-23.png -->
{{< imagedisplay src="d-setup-23.png" >}}


これで参加したいアカウントから、管理者へ承認のメールが飛びます。最初に作成した Marketing の管理アカウントの Ourlook を開くと以下のようなメールが届いているので、「承認」をクリックしましょう。
<!-- Image= d-setup-24.png -->
{{< imagedisplay src="d-setup-24.png" >}}

Dynamics 365 for Marketing のユーザーを確認すると、作成したアカウントが追加されていることがわかります。

作業が少しだけ面倒ですが、これで必要なアカウントを追加してください。
<!-- Image= d-setup-25.png -->
{{< imagedisplay src="d-setup-25.png" >}}


今回はここまで。     
&nbsp;