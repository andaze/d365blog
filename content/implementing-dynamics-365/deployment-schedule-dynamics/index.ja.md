---
title:  "Dynamics 365の導入スケジュールと手順を考えよう"
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
CRM および Dynamics 365 の導入目的が明確になれば、次はどのくらいのスケジュールで導入していくかが検討しやすくなります。

Dynamics 365 の導入目的を明確にしていく過程で、実現 “できる必要がある” 業務、実現 “したい” 業務の両方がリストアップされたのではないでしょうか。

導入スケジュールを検討する上で重要になってくるのが
* 要件定義と要求定義
* 業務分析

になるでしょう。

これらの作業は Dynamics 365 の導入にかかわらず、すべてのプロジェクトで必要不可欠な作業です。Dynamics 365 を導入することで実現しなくてはいけないこと（要件）と、実現できたらいいという要望（要求）の定義を行い、優先順位をつけていきます。

 

そして現状の業務は具体的にどのようにオペレートされているか。UML を利用して視覚化していき、現在の課題や改善すべきポイント、業務やシステムの As-Is と To-Be を分析して、現状と目標のギャップを明確にします。

その上で、「いつまでに」「どこまでの業務を」「どの機能で実現するか」を決めて、全体的なプロジェクトのスケジュールと実現に必要なリソースを明確化していきます。

一般的なのプロジェクトではこのように順序を追って進めていき、Dynamics 365 の導入スケジュールと手順を具体化していく流れになるでしょう。

 

ただ、プロジェクトによっては、スケジュールだけ決まっており、Dynamics 365 の導入も検討されている状況で、実装と要件定義を同時進行で行う必要がある、などというイレギュラーケースもあります。(実際に経験したことがあります。）

そのような場合、通常の開発手法だとどうしても間に合わず、導入実現は難しいため、通常のウォーターフォール開発ではなく、アジャイル開発やかんばんなどを駆使して、Dynamics 365 導入を進めることも検討できるでしょう。

参照：アジャイルソフトウェア開発       
[https://ja.wikipedia.org/wiki/アジャイルソフトウェア開発](https://ja.wikipedia.org/wiki/アジャイルソフトウェア開発)

<!-- Quate Box -->
アジャイルソフトウェア開発 (アジャイルソフトウェアかいはつ、英: agile software development) は、ソフトウェア工学において迅速かつ適応的にソフトウェア開発を行う軽量な開発手法群の総称である。 近年、アジャイルソフトウェア開発手法が数多く考案されている。 ソフトウェア開発で実際に採用される事例も少しずつではあるが増えつつある。

かんばん (ソフトウェア開発)         
[https://ja.wikipedia.org/wiki/かんばん_(ソフトウェア開発)](https://ja.wikipedia.org/wiki/かんばん_(ソフトウェア開発))

<!-- Quate Box -->
かんばんはソフトウェア製品を開発するための方法である。さらに、かんばんは、ソフトウェア開発者に過剰な負荷をかけずに、ジャスト・イン・タイムでのソフトウェアリリースを強調したプロセスでもある。このアプローチでは、顧客へのデリバリーに必要なタスクの定義を行い、そのタスクをソフトウェア開発プロジェクトの関係者が理解するために、プロセスを視覚化する。そして、タスクの作業者は、作業をキューから引っ張って（プル）していく。



実際に私たちが、Dynamics 365 の導入を短納期で行った際は、マイクロソフト社が提供する Visual Studio の Team Foundation Server (TFS) を使用して、アジャイル開発とかんばんツールで開発を進めました。

TFS でのかんばんの例
<!-- image= tfs.png -->
{{< imagedisplay src="tfs.png" >}}


現在では、Visual Studio Community (※) という無償版が提供されているので、プロジェクトを TFS で管理しながら、2週間などの短い間隔で反復しながら開発サイクル (イテレーション) を回し、開発されたアウトプットを元に顧客と要件のすり合わせを行っていく。Dynamics 365 の開発において、アジャイルという手法はすごく相性がよいと思えます。

（※） Visual Studio Community

[https://www.visualstudio.com/ja/vs/community/?rr=https://www.microsoft.com/ja-jp/dev/products/team-foundation-server.aspx](https://visualstudio.microsoft.com/ja/vs/community/?rr=https://www.microsoft.com/ja-jp/dev/products/team-foundation-server)

ただ、開発の人数や規模、スケジュールにより適切な開発手法を選び、プロジェクトを成功へ導くことがなにより大切です。ウォーターフォール開発かアジャイルや DevOps のような開発を選択するかについては、プロジェクト全体を見て選定していきましょう。     
&nbsp;