---
title:  "サードパーティ製のおすすめソリューション"
draft: false
weight: 12
datetitle: "2017.08.23 | "
image: "artical12.jpg"
Author: "Takafumi Noguchi"
authorimage: "authorimage.jpg"
showinhome: true
showinaccordian: true
linkdin: ""
---
<!-- Intro  -->
Dynamics 365 には、機能を補助・補強するようなソリューションが多く提供されていることが魅力ですが、どのようなソリューションが Dynamics 365 の機能をさらに拡張してくれるのでしょうか。

今まで利用したソリューションで特にインストール後の効果が高かったものを今回はご紹介します。

 

(※注意) サードパーティ製ソリューションは、マイクロソフトが必ずしも動作保証をしているソリューションではありません。本ブログではあくまでも情報共有となりますので、ご自身の環境でインポートされる際は、十分な検証のもと、自己責任にてインポートを行ってください。


## Metadata Browser
[https://docs.microsoft.com/ja-jp/dynamics365/customer-engagement/developer/browse-your-metadata](https://docs.microsoft.com/ja-jp/dynamics365/customer-engagement/developer/browse-your-metadata)

このソリューションを活用すると、Dynamics 365 にあるすべてのエンティティとフィールドの詳細情報を簡易に確認することができます。特にフィールドを検索する場合は、Metadata Browser なしでは作業効率が明らかに異なります。
<!-- Image= metadata1.png -->
{{< imagedisplay src="metadata1.png" >}}

例えば、以下のように取引先企業のフィールドが一覧で表示されて、検索もできますし、左のパネルにはフィールドのデータ型や制限なども記載されています。「Edit Attribute」をクリックすれば、フィールドのプロパティ画面へ遷移できることも便利な理由です。
<!-- Image= metadata2.png -->
{{< imagedisplay src="metadata2.png" >}}

## Ribbon Workbench
[https://www.develop1.net/public/rwb/ribbonworkbench.aspx](https://www.develop1.net/public/rwb/ribbonworkbench.aspx)

リボンワークベンチは、Dynamics 365 のボタンのカスタマイズには欠かせないソリューションです。カスタマイズの知識は多少必要になりますが、ボタンの非表示・非表示、名前の変更、ボタンを追加やアクションの追加を行うことが可能になります。    

Dynamics 365 は多くのボタンがメニューに表示されており、表示・非表示の柔軟性はあまりないので、このソリューションはぜひとも追加したいところです。
<!-- Image= metadata3.png -->
{{< imagedisplay src="metadata3.png" >}}

さらにRibbpn Workbenchは、Smart Buttons という追加ソリューションを Github に公開しています。

### Smart Buttons v1.2.88.1
[https://github.com/scottdurow/RibbonWorkbench/releases](https://github.com/scottdurow/RibbonWorkbench/releases)

この機能はとても便利で、Dynamics 365 で作成したプロセス（ワークフロー）をボタンに設定して、クリック時にオンデマンドで起動させることや、Javascript や レポートを起動させることも可能になります。

<!-- Image= metadata4.png -->
{{< imagedisplay src="metadata4.png" >}}

## Dynamics 365 Workflow Tools
[https://archive.codeplex.com/?p=msdyncrmworkflowtools](https://archive.codeplex.com/?p=msdyncrmworkflowtools)

これはすでにCodePlex　でアーカイブされていますが、ワークフローの機能を拡張できる便利なソリューションです。通常ワークフローでは、レコードに対してチームやユーザーの共有設定を行うことができません。それをこのソリューションは可能にします。

また、フィールドの加算や積算、オプションセットの値の追加・削除、データの複製など、もっとこんな機能があれば、プロセスは便利なのに！という要望をかなりの範囲で網羅しています。

ソリューションをインポートすると、ステップの追加で利用できるようになります。
<!-- Image= metadata5.png -->
{{< imagedisplay src="metadata5.png" >}}

## crm2011distributewf
[https://archive.codeplex.com/?p=crm2011distributewf](https://archive.codeplex.com/?p=crm2011distributewf)

こちらも、すでにCodePlexでアーカイブされているソリューションですが、1:N や　N:N の下位のエンティティに対してプロセスが実行できる優れものです。

例えば、テスト企業に、太郎、次郎、三郎　という担当者が3名いる会社情報があったとします。テスト企業の住所が変わると、その下位である太郎、次郎、三郎のレコードの勤め先住所というフィールドを更新したいと考えたとき、通常のプロセスでそれを実現することは不可能でした。

しかしこのソリューションは、1:N の関連付けもしくは　N:N 関連の関連付けのスキーマ名（account_master_account　など）と、下位のプロセスがあれば上記のような、上位エンティティから下位エンティティへのプロセスを実行することが可能になります。

ソリューションをインポートすると、ステップの追加に　AG Utilities が追加されます。
<!-- Image= metadata6.png -->
{{< imagedisplay src="metadata6.png" >}}

## Change Tracking Solution (Batch Process)
このソリューションは、アプリストアからインストールできます。
<!-- Image= metadata7.png -->
{{< imagedisplay src="metadata7.png" >}}

主に　Dynamics 365 でシステムや管理者が行った変更をトラックするという機能なのですが、便利なのはこの機能ではなく、ソリューションに付随している　Batch Process という機能です。これは、Change Tracking Solution をインスタンスにインストールすると、プロセスとして追加されます。

以下の３つのプロセスでバッチ処理を利用できるようになります。このプロセスでは、
1.  プロセスでバッチ処理を行える。
2. 高度検索結果から FetchXML　を取得すれば、特定のレコードのみにプロセスを、指定した時間と頻度で実行することができる。
3. バッチが失敗すれば、担当者にメールを送付する
というような機能を備えています。

<!-- Image= metadata8.png -->
{{< imagedisplay src="metadata8.png" >}}

ちなみに [Codeplex](https://archive.codeplex.com/?p=mscrm2015asynchronousbatchprocess) の情報には、詳細な設定手順も載っています。

これらのソリューションを駆使してDynamics 365 を構成すると、

カスタマイズレスの状態でリッチな機能を実現することが可能になります。ぜひ活用してみてください。