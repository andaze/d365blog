---
title:  "Dynamics 365 と Power Bi を連携させて、ダッシュボードを強化する"
draft: false
weight: 3
datetitle: "2017.08.23 | "
image: "artical3.jpg"
Author: "Takafumi Noguchi"
authorimage: "authorimage.jpg"
showinhome: true
showinaccordian: false
rightMenu: "artical"
linkdin: ""
---
<!-- Intro  -->
Dynamics 365 にはダッシュボード機能が既存で存在していますが、Power BI を連携させると、より情報をグラフィカルに確認することができるようになります。

Power BI は、マイクロソフトが提供するビジネスインテリジェンスツールで、大規模なデータを加工し、ビジネスに効果的な情報として、視覚化して提供するツールです。

詳細については、[Power BI とは?](https://powerbi.microsoft.com/ja-jp/)  をご参考ください。          
また、[Power BI Pro が無料試用版](https://powerbi.microsoft.com/ja-jp/pricing/)で提供されているので、ぜひ利用してみてください。

今回は、この Power BI で加工したグラフを、Dynamics 365 のダッシュボードに追加してみようと思います。

## ダッシュボードに Power BI を組み込む設定をする
まずは、「設定」の「管理」をクリックします。
<!-- Image= Power1.png -->
{{< imagedisplay Power1 "290" "596" "796" >}}

そして、「システムの管理」をクリックしましょう。
<!-- Image= Power2.png -->
{{< imagedisplay Power2 "290" "596" "796" >}}


「レポート」タブを開き、「Power BI のビジュアル化の埋め込みを許可する」にて “はい” にチェックをいれたら、「OK」をクリックします。
<!-- Image= Power3.png -->
{{< imagedisplay Power3 "290" "596" "796" >}}


これで設定は完了です。

## ダッシュボードに Power BI のグラフを組み込む
それでは、ダッシュボードを新規に作成してみます。ダッシュボードから「新規」ボタンをクリックします。任意のダッシュボードレイアウトを選択して「作成」ボタンをクリックすればOKです。
<!-- Image= Power4.png -->
{{< imagedisplay Power4 "290" "596" "796" >}}


ダッシュボードのメニューを開くと、図のように「Power BI タイル」が表示されているので、早速クリックして利用してみます。
<!-- Image= Power5.png -->
{{< imagedisplay Power5 "290" "596" "796" >}}


すると Power BI のワークスペースを選択する必要がでてきます。
<!-- Image= Power6.png -->
{{< imagedisplay Power6 "290" "596" "796" >}}


ここで、Power BI 側の設定をしていないと表示されないので注意です。もしすでに、Power BI のライセンスを有効にしているのであれば、Office 365 のメニューから、Power BI へアクセスします。
<!-- Image= Power7.png -->
{{< imagedisplay Power7 "290" "596" "796" >}}


今回はすでに作成しているワークスペースを利用します。もしまだ作成していない場合は、「アプリのワークスペースの作成」ボタンをクリックして、ワークスペースを作成してみてください。
<!-- Image= Power8.png -->
{{< imagedisplay Power8 "290" "596" "796" >}}


それでは、Dynamics 365 のダッシュボードに戻ります。Power BI のワークスペース名を指定して、どのグラフを表示するかを設定します。設定をしたら「OK」をクリックします。
<!-- Image= Power9.png -->
{{< imagedisplay Power9 "290" "596" "796" >}}


するとダッシュボードに Power BI のグラフが一部追加されました。この要領でいくつかのグラフを追加してみましょう。
<!-- Image= Power10.png -->
{{< imagedisplay Power10 "290" "596" "796" >}}


最後に、ダッシュボード名を入力したら、「上書き保存」をしましょう。
<!-- Image= Power11.png -->
{{< imagedisplay Power11 "290" "596" "796" >}}



ダッシュボードは以下のように表示されます。
<!-- Image= Power12.png -->
{{< imagedisplay Power12 "290" "596" "796" >}}


Power BI のグラフはこのように、ダッシュボードに表示できるようになります。
今回は、サンプルの Power BI のグラフを使ったので、Dynamics 365 のデータとの連動はありませんが、Power BI のワークスペースで、Dynamics 365 のデータとインタラクティブに動作するように設定すれば、より効果のあるダッシュボードを作成できるはずです。

それでは、今回はここまで。