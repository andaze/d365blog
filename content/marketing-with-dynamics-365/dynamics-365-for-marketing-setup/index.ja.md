---
title:  "Dynamics 365 for Marketing のセットアップ"
draft: false
weight: 1
datetitle: "2017.08.23 | "
showinhome: true
showinaccordian: false
rightMenu: "artical"
indexImg: "artical1.jpg"
description: "**Dynamics 365 for Marketing** というマーケティング支援のアプリケーションをご存知でしょうか？"
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
**Dynamics 365 for Marketing** というマーケティング支援のアプリケーションをご存知でしょうか？

会社のホームページやブログ、メルマガなどの情報受信者や、セミナーやイベントに参加いただいた方を自社の見込み顧客に対して行ったマーケティング施策が、どれくらい効果があり、次に何を行えば商談につながるのかを分析できるアプリケーションが、Dynamics 365 for Marketing です。

もともと Marketing は、Sales に付随するマーケティング機能として、キャンペーンメール送信をメインとして利用することができていましたが、近年 MA（Marketing Automation）ツールの必要性が高まり、Dynamics 365 for Marketing というアプリケーションに進化しました。 Customer Engagement Plan のライセンスを利用しているのであれば、ぜひとも活用したいアプリケーションです。


## 何ができるのか？
Dynamics 365 for Marketing には以下のような機能が含まれています。

<!-- Quate Box -->
* **コア マーケティング**
電子メール マーケティング、顧客体験、行動追跡、リード スコアリング、マーケティング ページ、その他を提供します。 これらの機能は、Marketing アプリの中核をなす機能であり、Dynamics 365 for Marketing に固有です。

* **イベント管理**
対面イベントまたはウェビナー イベントを企画して主催します。これには、出席者がイベントのスケジュールやスピーカーの確認およびイベントの登録に使用できるオンライン ポータルが含まれます。 現在、この機能は Dynamics 365 for Marketing でのみ利用できます。

* **お客様の声**
オンライン調査を作成し、結果を分析します。 この機能は Marketing アプリにバンドルされていますが、他の Dynamics 365 製品のアドオンとして別に利用することもできます。

* **Dynamics 365 Connector for LinkedIn Lead Gen Forms**
LinkedIn のリード ツールで生成されたリードを、Dynamics 365 にインポートします。 この機能は Marketing アプリにバンドルされていますが、他の Dynamics 365 製品のアドオンとして別に利用することもできます。

* **Dynamics 365 ポータル**
Marketing アプリは Dynamics 365 ポータルを使って、イベント、マーケティング ページ、オンライン調査を公開します。 ポータルは Marketing アプリにバンドルされていますが、他の Dynamics 365 製品のアドオンとして別に利用することもできます。 すぐに使える機能豊富なイベント ポータルも含まれています。これは、イベント管理機能に固有のものです。


  引用元： [Dynamics 365 for Marketing に含まれるもの](https://docs.microsoft.com/ja-jp/dynamics365/marketing/overview)


## ライセンスについて
Dynamics 365 for Marketing のライセンスについては、参考情報の通りになります。

<!-- Image= ma_1.png  -->
{{< imagedisplay src="ma_1.png" >}}

引用元: [価格について](https://dynamics.microsoft.com/ja-jp/marketing/overview/#pricing)

なお、現在 **Dynamics 365 Customer Engagement Plan を 10 ライセンス以上**利用中であれば、Dynamics 365  for Marketing を今すぐにでも利用することが可能です。
<!-- Image= ma_2.png -->
{{< imagedisplay src="ma_2.png" >}}


そのため、本記事では、Dynamics 365 Customer Engagement Plan をすでに 10 ライセンス以上利用中であるという前提で、for Marketing のセットアップについてご紹介します。

## セットアップの前提条件
Dynamics 365 for Marketing をセットアップする前に、以下の前提条件をご確認ください。

セットアップ ウィザードを実行するには、次の要件をすべて満たす必要があります。

<!-- Quate Box -->
* Office 365 テナントを既に所有している必要があります。
* Dynamics 365 for Customer Engagement アプリ バージョン 9.0 またはそれ以降を実行している必要があります (ほとんどの試用版およびスタンドアロンの Marketing セットアップと共に提供されます)。
* 以下のすべてを備えたユーザー アカウントを使用して、Office 365 テナントにサインインする必要があります。
* Office 365 テナントで割り当てられた Dynamics 365 ライセンス。
* Marketing をインストールする Dynamics 365 インスタンスでの管理者特権 。
* Azure でアプリケーションを登録するためのアクセス許可。 グローバル管理者はこの権限を常に持っていますが、 他のアカウントも持つことができます。 自分のアカウントでこの設定を確認する方法については「Azure にアプリケーションを登録するアクセス許可はありますか」を参照してください。
* テナントで未構成の Dynamics 365 for Marketing アプリが使用可能になっている必要があります。
*テナントで未構成のポータル アプリが使用可能になっている必要があります。 選択した Dynamics 365 for Marketing ライセンス計画によっては、ライセンスに無料のポータルが含まれる場合 (テナントで他の無料ポータルが既に使用されていない場合)、または Marketing アプリをインストールする前にポータル ライセンスを購入する必要がある場合があります。 
* 製品がサポートされている国/地域に居住している必要があります。 Dynamics 365 for Marketing を使用できる国/地域の最新の一覧を見るには、Microsoft Dynamics 365 の各国での利用可能性に関するドキュメント (PDF) をダウンロードしてください。
* 始める前に、他のブラウザー ウィンドウやタブをすべて閉じます。
* 始める前にブラウザーのキャッシュをクリアします。

引用元： [セットアップ ウィザードの実行](https://docs.microsoft.com/ja-jp/dynamics365/marketing/purchase-setup)

多くの条件がありますが、特に重要なのが、**Dynamics 365 for Customer Engagement アプリ バージョン 9.0** であること、**テナントで未構成のポータル アプリが使用可能になっている必要がある、**という点でしょうか。この2点でセットアップに躓いて検証が遅れた経験もあるので、もし検証レベルであれば試用版を利用することをお勧めします。


## Dynamics 365 for Marketing の機能を有効にする
まずは、Dynamics 365 管理センターへアクセスします。インスタンスを選択して「ソリューション」のボタンをクリックします。
<!-- Image= ma_3.png -->
{{< imagedisplay src="ma_3.png" >}}


Dynamics 365 for Marketing を選択して、「インストール」をクリックします。
<!-- Image= ma_4.png -->
{{< imagedisplay src="ma_4.png" >}}


「要求されているアクセス許可」において「承諾」をクリックします。
<!-- Image= ma_5.png -->
{{< imagedisplay src="ma_5.png" >}}


接続先の組織名と Dynamics 365 for Marketing で利用する Web ポータルの URL を追加後

「続行」をクリックします。Web ポータルの URL は自由に設定します。
<!-- Image= ma_6.png -->
{{< imagedisplay src="ma_6.png" >}}


チェック項目にチェックをいれ、Dynamics 365 for Marketing を利用する住所を入力したら「セットアップ」をクリックしてください。これでアプリケーションのセットアップが開始されます。セットアップは70分ほどかかりますので気長にお待ちください。
<!-- Image= ma_7.png -->
{{< imagedisplay src="ma_7.png" >}}


インストールが完了したことを確認しましょう。
<!-- Image= ma_8.png -->
{{< imagedisplay src="ma_8.png" >}}


## Dynamics 365 for Marketing にアクセスする
通常通り、Dynamics 365 のインスタンスにアクセスをします。アプリ一覧を開くと
「マーケティング」が表示されているのでクリックします。
<!-- Image= ma_9.png -->
{{< imagedisplay src="ma_9.png" >}}


Dynamics for Marketing のトップ画面です。
<!-- Image= ma_10.png -->
{{< imagedisplay src="ma_10.png" >}}


左パネルを開くと、Dynamics for Marketing の機能が表示されています。

<!-- Image= ma_11.png -->
{{< imagedisplay src="ma_11.png" >}}


それぞれについては、1つずつ触れていこうと思いますが、
今回はインストールまでということで。それでは、また次回に。    
&nbsp;