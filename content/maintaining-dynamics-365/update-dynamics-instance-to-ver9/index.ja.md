---
title:  "Dynamics 365 をアップデートしよう"
draft: false
weight: 3
datetitle: "2017.08.23 | "
showinhome: true
showinaccordian: false
rightMenu: "artical"
indexImg: ""
description: "2017年7月に Dynamcis 365 version 9 (July 2017 update)  がリリースされてしばらく経ちました。すでに試用版の Dynamcis 365 は version 9 になっており、version 8 を利用されている方は少数派？になってきているのではないかと思います。"
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
{{< authorImage src="authorimage.jpg" name="Takafumi Noguchi" linkdin="https://www.linkedin.com/in/tnoguchi1123531" >}}
<!-- Intro  -->
2017年7月に Dynamcis 365 version 9 (July 2017 update)  がリリースされてしばらく経ちました。すでに試用版の Dynamcis 365 は version 9 になっており、version 8 を利用されている方は少数派？になってきているのではないかと思います。

実のところ、私の担当する顧客の Dynamics 365 は、つい最近まで version 8 で運用されていました。大きな理由として、スクリプトやAPI、その他サードパーティー製のソリューションなどを適用しているため、アップデートを計画的に実行するのに時間を要しました。

後述していますが、Dynamics 365 を計画的にアップデートすることは、顧客情報を守る上でとても重要な意味をもっています。そこで今回は、Dynamics 365 のアップデートの手順などについてご紹介していきます。

## Dynamics 365 のアップデートについて

まず、Dynamics 365 のメジャーアップデートはどのくらいの頻度で行われるのか、についてですが、公式には年に2回、春と秋に行われます。正式な月についてはリリースされるまで明示されませんが、最後のアップデートは July 2017 update であり、現在は、Spring 2081 update がリリースされるというアナウンスがされています。

Introducing the Dynamics 365 Spring 18 update!

[https://cloudblogs.microsoft.com/dynamics365/2018/03/28/introducing-the-dynamics-365-spring-18-update/](https://cloudblogs.microsoft.com/dynamics365/2018/03/28/introducing-the-dynamics-365-spring-18-update/)

現在の最新アップデートについては、以下の技術情報に記載されています。ここには、年に2回のメジャーアップデートと、年間に数回、自動で実施されるマイナーアップデートの情報が記載されいています。2018年6月時点では、9.0.2.0743 が最新となります。

Microsoft Dynamics 365 オンライン リリース

[https://support.microsoft.com/ja-jp/help/2925359/microsoft-dynamics-crm-online-releases](https://support.microsoft.com/ja-jp/help/2925359/microsoft-dynamics-crm-online-releases)

## Dynamics 365 のメジャーアップデートは必須なのか？
年に2回もメジャーアップデートがありますが、実際に運用を始めているシステムのメジャーアップデートについては結構なインパクトがあります。以下の技術情報を読んでもわかる通り、アップデートによって追加される機能・廃止される機能があり、Dynamics 365 にスクリプトでのカスタマイズやポータル機能、ソリューションなどを利用している場合、アップデートにより動作しなくなる機能がないとも言えません。十分な検証が必要になります。

Dynamics 365 (オンライン) バージョン 9 の新機能 (Customer Engagement)

[https://docs.microsoft.com/ja-jp/dynamics365/get-started/whats-new/customer-engagement/new-in-version-9](https://docs.microsoft.com/ja-jp/dynamics365/get-started/whats-new/customer-engagement/new-in-version-9)

Dynamics 365 Customer Engagement で予定されている重要な変更点

[https://docs.microsoft.com/ja-jp/dynamics365/get-started/whats-new/customer-engagement/important-changes-coming](https://docs.microsoft.com/ja-jp/dynamics365/get-started/whats-new/customer-engagement/important-changes-coming)

以下、Dynamics 365 のアップデートポリシーによると、アップデートをスキップできるのは2回までになり、それ以前のバージョンを利用している場合は、アップグレードを促す警告がマイクロソフトから届くので、アップグレードの日時を設定する必要があります。

現在 version が 8.1 の方は、早急に version 9.0 にアップグレードする計画を立てていく必要があります。

サービス インシデントのポリシーおよびコミュニケーション

[https://docs.microsoft.com/ja-jp/dynamics365/customer-engagement/admin/policies-communications](https://docs.microsoft.com/ja-jp/dynamics365/customer-engagement/admin/policies-communications)

Dynamics 365 は、顧客情報を管理するツールであり、個人情報の宝庫、会社の重要な資産になります。その情報を守るため、もしくはシステムによりより効果的に活用するためにもメジャーアップデートへの定期更新は必要な作業になるため、ぜひ計画的な運用を心掛けたいです。

## Dynamics 365 をアップデートしてみよう
それでは、具体的にどうやってアップデートするかの手順を記載していきたいと思います。

1. Dynamics 365 の管理センターへアクセスします。

Office 365 の管理画面

[https://portal.office.com/adminportal/home](https://portal.office.com/adminportal/home)

にアクセスして、管理センターより Dynamicis 365 を選択します。

<!-- Image= management1.jpg -->
{{< imagedisplay src="management1.jpg" >}}

2. Dynamics 365 管理センターにおいて、「更新」タブを開くと、更新可能なインスタンスが表示されています。
<!-- Image= management2.jpg -->
{{< imagedisplay src="management2.jpg" >}}

現在のバージョンは 8.2 ですね。「更新スケジュールの設定」をクリックします。
<!-- Image= management3.jpg -->
{{< imagedisplay src="management3.jpg" >}}

3. 更新スケジュールを設定します。候補日は現時点から最短でも一週間後、代理日はそのさらに一週間後から選択できます。選択したら「次へ」をクリックします。
<!-- Image= management4.jpg -->
{{< imagedisplay src="management4.jpg" >}}

4. 更新を承認します。これでスケジュールされたことになります。
<!-- Image= management5.jpg -->
{{< imagedisplay src="management5.jpg" >}}

注意書きに記載がある通り、アップデートは指定時間 (6am – 6 pm) のどこかで実行されるということになり、アップデート中は Dynamics 365 は利用できません。そのため、事前にユーザーへのアナウンスを行う必要があります。

またアップデートについては、事前にサンドボックスで検証してから実機環境に実施することをお勧めします。