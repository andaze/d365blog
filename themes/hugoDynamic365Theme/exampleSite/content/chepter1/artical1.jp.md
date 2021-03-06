---
title:  "CRMシステムの理解"
date:   2020-08-05T15:53:27+06:00
draft: false
weight: 1
heading: "CRMシステムの理解"
datetitle: "2017.08.23 | "
image: "images/chepter1/a1.jpg"
Author: "Takafumi Noguchi"
authorimage: "images/chepter1/au.jpg"
showinhome: true
showinaccordian: false
rightMenu: true
---
Microsoft が提供している Dynamics 365 をご存知でしょうか？ Microsoft Dynamics 365 は、営業・マーケティング・経理・総務・人事などの各部署のデータを1つに統合して活用することができるビジネスアプリケーションです。

以前は、Dynamics CRM という顧客関係管理が必要とされる営業・サービス・マーケティング向けの製品と、Dynamics AX・NAV と呼ばれる ERP  (会計・サプライチェーン・プロジェクト・人事管理) の製品に分かれていました。

現在は、それらの機能をすべて Dynamics 365 という1つのアプリケーションに統合し、クラウドとオンプレミスの両方で利用可能なビジネスアプリケーションに進化しています。

Microsoft といえば、Office 製品のイメージが強いのですが、ERP および CRM システムにおいても高いシェアを誇っています。本稿では CRM システムとしての Dynamics 365 に触れる前に、まず CRM システムの歴史と必要性を理解いただければと思います。



## CRM とは何か
- - -
CRM とは Customer Relationship Management の略です。日本語だと顧客関係管理という意味になります。顧客との関係を構築・管理・分析し、顧客満足度向上を通して、企業の売上と収益性アップを目的とした経営戦略・マネジメント手法を意味しています。

## CRM のシステム化

実は CRM という言葉は 1990 年代からあります。製品ありきの企業戦略から、社会や顧客との関係性をより重要視するような時代の変化と共に生まれた手法でした。

CRM がシステム化したのは 2000年代です。パソコン・インターネットなどのテクノロジーの発達に伴い、膨大なデータの集積・分析・そして活用のためにシステム化に対するニーズが高まりました。そこで、まずコンサルティングファームを中心として、マイクロソフトや SAP, Oracle などの ERPシステムの導入を進め、ERP に連携する形で、CRM システムが導入されるようになりました。

## 情報が一元化されることの価値

CRM が顧客管理システムとして導入されることで、顧客情報が１つのシステムで管理されるようになります。すると、顧客情報は決して１つのチャネルから入ってくるわけではないことがわかります。営業活動（飛び込み・名刺交換・架電・紹介など）や、マーケティング（セミナー・メール・CM・広告など）、カスタマーサポートやサービスなど、様々な経路から顧客情報は追加・更新されます。

今までは、組織の部署や部門で各自に管理していた顧客情報が、１つのCRMシステムでマスター管理されるようになる最大のメリットは、部門の担当者が「顧客の現状を把握でき、そこから将来どう行動するべきか」を正確に把握することができることです。

例えば、以下のような状況の場合を考えてみましょう。

### 例：商品に不満のある既存顧客の対応

ある顧客は長年取引がある顧客の紹介で、新規顧客として商品を購入しました。しかし、購入した商品に不備がありカスタマーサポート部門にお問い合わせをして、商品の交換の対応をしている最中です。顧客は少なからず商品に対する不満を感じています。

この顧客に対して、営業部門の担当者が、新しい商品の紹介のために商談のアポイントをとった場合、事前に確認しておくべきことがあります。それはカスタマーサポート部門での対応履歴を確認して、顧客からいただいた不満と対応状況を把握することです。

営業担当者がこのサポート部門の担当者にリアルタイムで状況を確認できればいいのですが、顧客訪問日にサポート部門の担当者が不在だったらどうでしょうか？状況を知らない営業担当者が、商品の不満に対するお詫びがなく、顧客の心をつかむことはできないでしょう。もしかしたら、今後の取引そのものがなくなってしまうかもしれません。

CRM システムで顧客の「今」を管理していれば、少なくとも営業担当者は、サポート部門の対応状況を確認することは可能です。そうすれば、営業担当者は「次」のアクションを適切に判断できるようになります。

## CRM システムはなぜ必要なのか

上述の例のような場合、CRM システムを活用しなくても営業部門とサポート部門のコミュニケーションが行われていればいいのではないかという意見もあると思います。確かにその通りかもしれません。ただ、人と人のみのコミュニケーションには間違いが起こりやすいものです。メモや付箋を置いたとしてもなくなるリスクや書いてあることを間違って理解されるリスクも考えられるでしょう。

Excel で顧客情報を管理して、担当者が確認できるように共有フォルダに入れておくという手段があります。複雑な設定も不要な上、使い慣れた Excel での情報管理は、未だに多くの企業で行われています。

では一体、何が問題なのでしょうか？

### 例：営業部と商品管理部のジレンマ

営業担当者が営業活動で収集した顧客に関する細かな情報は、営業事務が担当者からヒアリングをしてその情報をすべて Excel で管理していました。顧客の基本情報、家族構成、趣味嗜好、取引先や経営状況、そしてどの商品を勧めているか、細かく記載されています。

一方、商品については管理部が別の Excel で管理していました。商品の名前や特徴、原価と売値、在庫に加えて、クロスセルやアップセルに関する情報が細かく管理されています。商品情報は、商品を開発する部門により毎年新しいバージョンが更新されるので、その度に Excel の情報は更新されます。

毎年決算期は、営業は目標達成に向けて忙しくなります。アップセル・クロスセル・セールを駆使して、自社の商品を次から次に売り上げていきます。同じタイミングで商品管理部も目が回るような忙しさが押し寄せます。商品の在庫確認やセール価格の調整など、営業からの情報を常に更新し続けて、最新の情報を営業に正しく提供する必要があるからです。

商品管理部では、繁忙期に合わせて増員して備えています。しかしどんなに増員をしても、必ず価格や在庫管理にミスが起こってしまい、営業部からクレームを言われてしまいます。営業部もせっせと商品を売るのですが、在庫不足でいつも一部の顧客に対して謝罪をする必要が出てしまいます。

## Excel での情報管理は管理とは言わない

上述のような事象は本当に多くみられます。Excel での情報管理は本当の意味の管理ではないのです。情報のマスター管理が行われていないと不整合が発生し、データの不整合は必ずトラブルにつながるのです。

さらに、トラブルは顧客との間だけではありません。Excel 管理では、データを間違って変更・削除しても履歴が残らないので復旧できませんし、不正アクセスによる情報漏洩を防ぐことができません。内部統制の仕組みをシステムで補うことが組織には必要不可欠なのです。

## どの CRM システムがおすすめか

顧客・商品・社員・サービスと様々な情報の関係を管理するため、そして企業の「今」と「これから」を把握するための役割を果たす CRM システムについては理解ができました。それでは、どの CRM システムがおすすめなのでしょうか？

2大 CRM システムとして、Salesforce と Dynamics 365 が挙げられます。そしてここでは Dynamics 365 の魅力について深堀りしたいと思っています。