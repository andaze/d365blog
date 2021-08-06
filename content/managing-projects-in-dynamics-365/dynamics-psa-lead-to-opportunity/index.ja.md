---
title:  "Project Service でリードから営業案件を作成"
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
前回、Dynamics 365 for Project Service Automation (PSA) の[構造と設定まで完了]() させましたので、ここからプロジェクトを作成して管理をはじましょう。


## プロジェクト作成までの流れ
前回の復習になりますが、プロジェクト作成までの流れとして、リードから企業と担当者情報、営業案件が作成されます。営業案件から作成された見積りが採用となれば、プロジェクト契約が作成され、そこでプロジェクトが始まるというのが基本的な作業の流れになります。もちろん、プロジェクト単体で作成することも可能ですが、今回はリードから順番に作成する流れの第一弾で、営業案件までを作成する手順をご紹介します。
<!-- Image= psa-2nd2-1.png -->
{{< imagedisplay src="psa-2nd2-1.png" >}}

## リードから企業・担当者を作成する
ここの操作は Dynamics 365 for Sales とほとんど同じです。リードを作成した後、「見込みありと評価」ボタンで取引先企業と担当者情報を作成します。ただ、Project Service Automation を利用する上で、Sales と分けるための設定がいくつかあるので、そこを記載していきます。

### リードで見込みありと評価
リードで「見込みありと評価」をクリックします。これは、リードから見込みがあると判断された場合にクリックします。
<!-- Image= psa-2nd2-2.png -->
{{< imagedisplay src="psa-2nd2-2.png" >}}

企業と担当者情報が作成され、営業案件の作成画面になります。
<!-- Image= psa-2nd2-3.png -->
{{< imagedisplay src="psa-2nd2-3.png" >}}

## 種類の表示（エラー対応）
この際、注意すべきことがあるのですが、この流れでリードから営業案件を作成すると、この営業案件は **Dynamics 365 for Sales の営業案件**として作成されます。なぜそれがわかるかというと、利用しているフォームが “営業案件” になっています。これは Sales の営業案件フォームなので、後ほど作業で必要になるプロジェクトに関するサブグリッドなどが配置されていません。
<!-- Image= psa-2nd2-4.png -->
{{< imagedisplay src="psa-2nd2-4.png" >}}

Project Service Automation のフォームを利用するためには「種類」（もしくは 「受注の種類」）とよばれるフィールドを “**作業ベース**” という値にする必要があります。（Sales を利用する場合は、”品目ベース” を設定する)   
<!-- Image= psa-2nd2-5.png -->
{{< imagedisplay src="psa-2nd2-5.png" >}}

このフィールドは **既定で非表示**となっているため、表示させればいいのですが、困ったことに、リードのフォームで「種類」を表示させて “作業ベース” に値を変えた後「見込みありと評価」をクリックすると、価格表に関する**エラー**が出てしまいます。
<!-- Image= psa-2nd2-6.png -->
{{< imagedisplay src="psa-2nd2-6.png" >}}

現在、このエラーの対処方法についてはマイクロソフトのサポートにお問い合わせ中ですが、いつ解決するかわからないので、現時点での代替案をご紹介しておきます。※ サポートから正式に解決方法が提示されたら更新します。

### 営業案件の「種類」を表示させる
営業案件の「＋新規」ボタンで新規作成フォームを開くとわかるのですが、フォームが2種類あります。”**営業案件**” は Sales、”**プロジェクト情報**” は Project Service Automation のフォームで、「種類」の値によって自動でフォームが切り替わるような設定になっています。
<!-- Image= psa-2nd2-7.png -->
{{< imagedisplay src="psa-2nd2-7.png" >}}

今回はまず、”営業案件” のフォームを編集しましょう。フォーム内に「種類」というフィールドがあるので「プロパティの変更」をクリックします。
<!-- Image= psa-2nd2-8.png -->
{{< imagedisplay src="psa-2nd2-8.png" >}}

「既定で表示する」にチェックをいれて、「OK」をクリックします。
<!-- Image= psa-2nd2-9.png -->
{{< imagedisplay src="psa-2nd2-9.png" >}}

### 契約単位の配置
実はこれだけではだめで、「契約単位」というフィールドをフォーム上に表示させる必要があります。こちら、種類の下にでも配置してください。
<!-- Image= psa-2nd2-10.png -->
{{< imagedisplay src="psa-2nd2-10.png" >}}

あとはフォーム上で保存をしてカスタマイズを公開してください。これで、営業案件の下準備はOKです。

## Project Service Automation の営業案件を管理
下準備ができたので、Project Service Automation の営業案件になるように設定していきましょう。

### 営業案件の種類と契約単位を設定
先ほどリードから作成した営業案件の「種類」を “作業ベース” に切り替えます。「契約単位」も値をいれて保存します。
<!-- Image= psa-2nd2-11.png -->
{{< imagedisplay src="psa-2nd2-11.png" >}}

ページを更新してください。するとフォームが自動的に “プロジェクト情報” に切り替わりました。これで Project Service Automation の営業案件を管理できるようになります。 
<!-- Image= psa-2nd2-12.png -->
{{< imagedisplay src="psa-2nd2-12.png" >}}

### 取引先企業管理の設定
営業案件を管理するユーザーを設定しておきます。このプロジェクト案件の管理者にあたります。
<!-- Image= psa-2nd2-13.png -->
{{< imagedisplay src="psa-2nd2-13.png" >}}

### 製品価格表と売上の設定
「製品価格表」を自社の営業価格表と関連付けます。「売上」については “システムにより計算” に設定しておきます。なお、「売上」は「製品価格表」と後述の「営業案件品目」が設定されて、自動計算されます。※自身で入れる場合は、「売上」は “ユーザーにより指定” にしておきます。
<!-- Image= psa-2nd2-14.png -->
{{< imagedisplay src="psa-2nd2-14.png" >}}


### 営業案件品目の設定
営業案件品目のカテゴリを見ると、「プロジェクトベースの明細行」と「製品ベースの明細行」があります。これは Sales の時と同じように、**価格表をベースに営業案件に関連するサービスや製品を設定する**箇所です。この値を入力することで、**売上見込みが計算されます。**（「売上」を “システムにより計算” に設定した場合のみ）

今回はプロジェクトに配置するメンバーを追加しておきたいので、「プロジェクトベースの明細行」の ＋ ボタンで追加しましょう。
<!-- Image= psa-2nd2-15.png -->
{{< imagedisplay src="psa-2nd2-15.png" >}}

以下のように設定します。

|       |  |
| ----------- | ----------- |
| Product Type | Project-based services |
| Name | *Optional |
| Customer Budget	 | *Any |
| billing practice | Time and Materials |

画面ではこのように設定します。設定したら保存して閉じてください。
<!-- Image= psa-2nd2-16.png -->
{{< imagedisplay src="psa-2nd2-16.png" >}}

これで営業案件にプロジェクトベースの明細行が関連しました。画面上の「売上見込み」をみると自動的に計算された結果が表示されていると思います。
<!-- Image= psa-2nd2-17.png -->
{{< imagedisplay src="psa-2nd2-17.png" >}}

もしサービスだけでなく自社のパッケージ製品や自社製品のライセンスも付帯で必要な場合は、「製品ベースの明細行」に新規追加を行います。ここでは、”既存の製品” として追加します。
<!-- Image= psa-2nd2-18.png -->
{{< imagedisplay src="psa-2nd2-18.png" >}}

ここの操作は、Sales の製品を追加する手順と同じです。
<!-- Image= psa-2nd2-19.png -->
{{< imagedisplay src="psa-2nd2-19.png" >}}

※ここで製品が出てこない場合は、営業案件に関連している「製品価格表」の「価格表品目」に商品の情報がないことが原因です。
<!-- Image= psa-2nd2-20.png -->
{{< imagedisplay src="psa-2nd2-20.png" >}}

営業案件の作成については基本的には以上です。あとは、競合企業や営業チームを設定したり、ニーズや提案ソリューションを記載していきながら、営業案件に情報を集約していきましょう。


## 次のステップ
ここでは、リードから営業案件を作成するまでの手順をご紹介しました。Dynamics 365 for Sales と比べて少し手順が異なる点があったと思います。

次回の投稿ではその続きをご紹介します。営業案件から見積り・プロジェクト契約・請求書を作成した後、プロジェクトを作成します。     
&nbsp;