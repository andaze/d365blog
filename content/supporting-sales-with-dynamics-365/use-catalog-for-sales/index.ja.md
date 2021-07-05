---
title:  "Dynamics 365 の製品カタログで営業力を高める"
draft: false
weight: 8
datetitle: "2017.08.23 | "
image: "artical8.jpg"
Author: "Takafumi Noguchi"
authorimage: "authorimage.jpg"
showinhome: true
showinaccordian: true
rightMenu: "artical"
linkdin: ""
---
<!-- Intro  -->
これまで、リードから「見込みあり」と評価された営業案件を管理する方法について述べてきました。

今回はその営業案件を進める上で重要になる製品について、どのように Dynamics 365 上で管理するかをお知らせします。

営業案件を進める上で重要になる製品は**製品カタログ**といわれ、どのような製品があり (**製品ファミリ**)、どの単位で出荷し (**出荷単位一覧**)、どれほどの割引率 (**値引き表と価格表**) をもって見積もりや請求書を作成するか、までを管理することができます。

Dynamics 365 の製品カタログは、製品のコレクションと価格設定情報とで定義され、企業の営業力を高め、商談の質を効率的に管理するために利用されます。

例えば、自社で提供するサービスや製品を出荷単位一覧で管理し、製品の価格や値引き表を準備します。また、競合のない案件では製品の価格を正規料金で見積もり、自社の利益を最大化します。

さらに、将来性はあるが競争の激しい案件では、値引き表を活用して勝ち取る戦略をとります。

それらの情報をすべて営業案件に記録することで営業戦略を立てやすくなり、自社の営業力強化につながっていくことになるのです。


## 製品カタログの作成
それでは、Dynamics 365 の製品カタログを利用してみます。製品カタログの作成は下記の順番で行われます。
* 値引き表の作成
* 出荷単位一覧の作成
* 製品ファミリの作成
* 価格表の作成

### 値引き表の作成
まずは値引き表を作成します。メニューの「設定」から「製品カタログ」をクリックします。
<!-- Image= discount1.png -->
{{< imagedisplay src="discount1.png" >}}

「値引き表」をクリックします。
<!-- Image= discount2.png -->
{{< imagedisplay src="discount2.png" >}}

「＋新規」ボタンから値引き表を新規に作成します。名前と種類を設定して保存します。
<!-- Image= discount3.png -->
{{< imagedisplay src="discount3.png" >}}

種類で「金額」を選択し、通貨型 を選択します。
<!-- Image= discount4.png -->
{{< imagedisplay src="discount4.png" >}}

値引きを追加します。値引き表の左ペインから「値引き」をクリックして、「新しい値引きの追加」をクリックします。
<!-- Image= discount5.png -->
{{< imagedisplay src="discount5.png" >}}

下記のように、100アイテム以上200アイテム以下、5% OFF と設定して保存します。
<!-- Image= discount6.png -->
{{< imagedisplay src="discount6.png" >}}

### 出荷単位一覧の作成
次に、出荷単位一覧を作成します。製品カタログの 「出荷単位一覧」 をクリックします。
<!-- Image= discount7.png -->
{{< imagedisplay src="discount7.png" >}}

下記のように出荷単位を 「＋新規」 ボタンより作成します。
<!-- Image= discount8.png -->
{{< imagedisplay src="discount8.png" >}}

「出荷単位」 の「新しい出荷単位」 をクリックします。
<!-- Image= discount9.png -->
{{< imagedisplay src="discount9.png" >}}

名前と数量を決めます。ここでは、パッケージとして、最低でも5ライセンスと設定します。
<!-- Image= discount10.png -->
{{< imagedisplay src="discount10.png" >}}

さらに、出荷単位として、パッケージを20としたプレミアムパッケージも作成しました。
<!-- Image= discount11.png -->
{{< imagedisplay src="discount11.png" >}}

単位が下記のようになりました。
<!-- Image= discount12.png -->
{{< imagedisplay src="discount12.png" >}}

保存して閉じます。

### 製品の作成
製品および製品ファミリを作成します。製品カタログから「製品およびファミリ」をクリックします。
<!-- Image= discount13.png -->
{{< imagedisplay src="discount13.png" >}}

まず、「製品の追加」をクリックして、製品を作成します。
<!-- Image= discount14.png -->
{{< imagedisplay src="discount14.png" >}}

名前、IDなどを入力して、「出荷単位一覧」と「既定の出荷単位」に上記で作成した出荷単位を入力します。そして「上書き保存」をクリックして変更を保存します。
<!-- Image= discount15.png -->
{{< imagedisplay src="discount15.png" >}}

そうすると、下記のような警告が表示されます。
<!-- Image= discount16.png -->
{{< imagedisplay src="discount16.png" >}}

既定の価格表 が設定されていないため、価格表を作成します。
<!-- Image= discount17.png -->
{{< imagedisplay src="discount17.png" >}}

### 価格表の作成
最後に価格表を作成します。「製品カタログ」の「価格表」をクリックします。
<!-- Image= discount18.png -->
{{< imagedisplay src="discount18.png" >}}

「＋新規」ボタンより新規作成をします。名前や通貨型をまず入力して「上書き保存」をクリックします。
<!-- Image= discount19.png -->
{{< imagedisplay src="discount19.png" >}}

画面下にある、「価格表品目」で「＋」ボタンより新規に価格表品目を作成します。
<!-- Image= discount20.png -->
{{< imagedisplay src="discount20.png" >}}

価格表に名前を入力して、製品と出荷単位は、出荷単位一覧から設定します。今回は値引き表を利用せず、金額を設定して保存します。
<!-- Image= discount21.png -->
{{< imagedisplay src="discount21.png" >}}

そうすると、作成した価格表が前述で作成した製品に関連付けされています。
<!-- Image= discount22.png -->
{{< imagedisplay src="discount22.png" >}}

まずはここまでの作成について紹介しました。次回では、さらに応用して、値引き表の利用や製品ファミリを作成していきます。