---
title:  "Project Service でプロジェクトを作成"
draft: false
weight: 3
datetitle: "2017.08.23 | "
showinhome: true
showinaccordian: false
rightMenu: "artical"
indexImg: "artical3.jpg"
description: "前回の続きです。Dynamics 365 for Project Service Automation (Project Service) で[リードから営業案件を作成]()したら、今度はプロジェクトを作成するところまでを行っていきます。"
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
前回の続きです。Dynamics 365 for Project Service Automation (Project Service) で[リードから営業案件を作成]()したら、今度はプロジェクトを作成するところまでを行っていきます。
<!-- Image= psa-3rd-01.png -->
{{< imagedisplay src="psa-3rd-01.png" >}}


## 営業案件から見積りを作成
見込み顧客との商談を重ねて、商談において最後の見積もりフェーズに入りました。営業案件内で見積もりを作成します。これは Sales の場合と同じです。なお、商談においても見積もりは何パターンか作成して顧客の状態に臨機応変に対応すると思いますが、同じことが営業案件の見積もりでも可能です。

### 見積もりの作成
営業案件を開き、「見積もり」から ＋ボタンで新規に追加します。※ダイアログ表示に少し時間がかかるかもしれませんが、お待ちください。
<!-- Image= psa-3rd-02.png -->
{{< imagedisplay src="psa-3rd-02.png" >}}

見積もりが作成されます。ここでもしサービスを追加する必要があれば、＋ボタンで追加してください。例えば、保守サービスを追加するのであれば、ここに追加します。
<!-- Image= psa-3rd-03.png -->
{{< imagedisplay src="psa-3rd-03.png" >}}

### 見積書のダウンロード
見積もりが作成できたら、見積書として顧客向けにダウンロードできます。Project Service Automation のバージョン２では、Word テンプレートを使ってダウンロードします。

メニューの・・・より、「Word テンプレート」から「顧客向け見積もりの印刷」をクリックします。
<!-- Image= psa-3rd-04.png -->
{{< imagedisplay src="psa-3rd-04.png" >}}

するとWordがダウンロードされますので、開いてみましょう。Dynamics 365 既定で用意されているテンプレートを使った見積書が作成されているのでこちらを必要に応じて編集して顧客に提出できます。
<!-- Image= psa-3rd-05.png -->
{{< imagedisplay src="psa-3rd-05.png" >}}

※もし 自社のフォーマットに合わせた Word テンプレートを利用したい場合は、Word 2016 以上のクライアント環境で作業をする必要があります。詳しくは[ Word テンプレートを自社に合わせて作成する]()をご参考ください。

## プロジェクト契約からプロジェクトを作成
見積もりを作成したら受注とします。このタイミングでProject Service Automationでは、”プロジェクト契約” が自動で作成されます。

### 見積もりを受注とする
まずは先ほど作成した見積もりを「受注としてクローズ」をクリックします。
<!-- Image= psa-3rd-06.png -->
{{< imagedisplay src="psa-3rd-06.png" >}}

ダイアログが表示されるので「OK」とします。すると見積もりだったものが、プロジェクト契約に変わります。これは、メニューの「プロジェクト契約」を開くと、先ほどの見積もりからプロジェクト契約が作成されて一覧に表示されているのでわかります。
<!-- Image= psa-3rd-07.png -->
{{< imagedisplay src="psa-3rd-07.png" >}}

### プロジェクトの作成
プロジェクト契約とプロジェクトを関連付けるために、プロジェクト契約からプロジェクトを作成しましょう。上部メニューを開くと、「プロジェクト」とあります。
<!-- Image= psa-3rd-08.png -->
{{< imagedisplay src="psa-3rd-08.png" >}}

ここで「＋新規プロジェクトの追加」をクリックします。
<!-- Image= psa-3rd-09.png -->
{{< imagedisplay src="psa-3rd-09.png" >}}

プロジェクトの詳細を入力したら保存します。
<!-- Image= psa-3rd-10.png -->
{{< imagedisplay src="psa-3rd-10.png" >}}

これで、プロジェクトの作成は完了です。ここでほとんどの場合は、プロジェクト管理がスタートしますので、[Project Service でプロジェクトを計画する]() を参考に作業を進めていきましょう。

なお、後述の内容は、プロジェクト契約と請求書のクローズの手順になります。ほとんど場合は、プロジェクト完了後に行う作業だと思いますが、もし先に支払いが発生するタイプの案件であれば、手順通りに進めてみてください。

## 契約確認から請求書まで
プロジェクト契約から請求書を作成して、その請求書を顧客へ送付します。そして請求書通り支払いが完了されたら “支払い済み” として処理を行います。

### 契約の確認処理
プロジェクト契約を顧客が確認したら、「確認」としておきます。
<!-- Image= psa-3rd-11.png -->
{{< imagedisplay src="psa-3rd-11.png" >}}

これで、いつ顧客がきちんと契約内容を把握したかがわかります。必要に応じて、契約の概要を Word テンプレートを使って印刷して用意しておくことも大切です。
<!-- Image= psa-3rd-12.png -->
{{< imagedisplay src="psa-3rd-12.png" >}}

### 請求書を作成と印刷
請求書を作成する場合は、プロジェクト契約の「請求書の作成」をクリックします。
<!-- Image= psa-3rd-13.png -->
{{< imagedisplay src="psa-3rd-13.png" >}}

請求書が作成されました。ここで、請求書を再度 Word テンプレートを使って印刷しておきましょう。メニューの・・・より、「Word テンプレート」から「請求書」をクリックします。
<!-- Image= psa-3rd-14.png -->
{{< imagedisplay src="psa-3rd-14.png" >}}

少し手編集が必要でしたが、必要な情報は入っています。請求書の Word テンプレートも必要に応じてカスタマイズしましょう。
<!-- Image= psa-3rd-15.png -->
{{< imagedisplay src="psa-3rd-15.png" >}}

※請求書の「合計金額」について、プロジェクトベースの明細行の値が反映されておらず、製品のみの合計となっています。これは明細行の請求方法が “固定金額” でも同様の動作となることを確認しています。

この合計金額については、現在**マイクロソフトにお問い合わせ中**です。必要に応じてプロジェクト用の請求書フォームでは、新規フィールドを作成する手順になるかもしれませんが、回答待ちということで。もし回答があれば更新します。

請求書をプリントしたら、メニューの「確認」をクリックして、請求書を内部で確認済みとしておきます。
<!-- Image= psa-3rd-16.png -->
{{< imagedisplay src="psa-3rd-16.png" >}}

もし顧客から支払いを受けたら、こちらは「請求書を支払い済みとしてマーク」とします。
<!-- Image= psa-3rd-17.png -->
{{< imagedisplay src="psa-3rd-17.png" >}}

※多くのプロジェクトは、納品物を検収されて支払いが発生すると思いますので、このプロセスはプロジェクト管理が完了した後になると思います。

## 最後に
ここでは、営業案件から作成された見積もりからプロジェクトを作成しました。次回は作成したプロジェクトでのWBS作成やチームのアサイン方法をご紹介します。   
&nbsp;