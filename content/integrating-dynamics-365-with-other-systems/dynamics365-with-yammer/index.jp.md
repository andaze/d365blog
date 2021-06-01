---
title:  "Dynamics 365 と Yammer を連携してインタラクティブに情報交換を行う"
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
---
<!-- Intro  -->
Dynamics 365 の外部システム連携の機能として、Yammer との連携があります。Yammer を社内で利用しているのであれば、Dynamics 365 と連携することで、顧客や商談の情報交換を社内でアクティブに行うことができるようになります。


## Yammer とは？
Yammer は簡単に言うと、社内ソーシャルです。アクセス権を会社の組織単位で設定することで、安全に情報交換を行うことができます。また、SharePoint との連携もできるため、社内の関連部署をまたがる会議などで使用された資料や議事録を共有することも可能です。

フォーチュン500社の 85% 以上がYammer を利用しており、全世界で 150 か国以上、23 言語で展開されているサービスになります。 (参考: https://products.office.com/ja-jp/yammer/yammer-overview )

## Dynamics 365 と Yammer を連携させる
Dynamics で Yammer 連携を設定することはとても簡単です。まず、「設定」 の 「管理」 から、「Yammerの構成」をクリックします。
<!-- Image= Yammer1.png -->
{{< imagedisplay Yammer1 "290" "596" "796" >}}


Yammer の免責事項画面になるので、「続行」 をクリックします。
<!-- Image= Yammer2.png -->
{{< imagedisplay Yammer2 "290" "596" "796" >}}


「Microsoft Dynamics 365 Online から Yammer への接続を承認します」 をクリックして構成を進めます。
<!-- Image= Yammer3.png -->
{{< imagedisplay Yammer3 "290" "596" "796" >}}


Yammer のアカウントでログインして構成を進めると、以下のように Yammer の構成が完了したことを告げる画面になります。Yammer グループ ID や セキュリティ レベルは任意で変更してください。
<!-- Image= Yammer4.png -->
{{< imagedisplay Yammer4 "290" "596" "796" >}}


ダッシュボードを見てみましょう。Yammer というタブがアクティビティフィードに追加されています。

Yammer にログインすると、Yammer での投稿が表示されるようになりました。
<!-- Image= Yammer5.png -->
{{< imagedisplay Yammer5 "290" "596" "796" >}}


では、Dynamics 365 から Yammer に投稿してみます。
<!-- Image= Yammer6.png -->
{{< imagedisplay Yammer6 "290" "596" "796" >}}


すると、Yammer の画面にも投稿されたことがわかります。
<!-- Image= Yammer7.png -->
{{< imagedisplay Yammer7 "290" "596" "796" >}}


## Yammer 連携を構成する
Yammer 連携ができるようになれば、どのエンティティの投稿に対して有効にするかどうかを設定します。

「設定」の「管理」より「Yammer の構成」をクリックします。
<!-- Image= Yammer8.png -->
{{< imagedisplay Yammer8 "290" "596" "796" >}}


ページ下の「メッセージルールを編集します。」をクリックします。
<!-- Image= Yammer9.png -->
{{< imagedisplay Yammer9 "290" "596" "796" >}}


ここで、エンティティとその状態が表示されています。Yammer がすでに有効になっている投稿について不要であれば、チェックをいれてから「YAMMER の無効化」をクリックして無効にしてください。
<!-- Image= Yammer10.png -->
{{< imagedisplay Yammer10 "290" "596" "796" >}}


以上が、Yammer との連携でした。
構成自体はこの方法でOKですが、o365 のエイリアスを、xxx.onmicrosoft.com 以外のドメイン名を利用するとうまくつながらなかったり、Internet Explorer だと信頼済みサイトに登録する必要があるなど、細かな設定が必要なケースはあるようです。

詳細は、以下のサイトもご参考ください。

[Yammer に接続する](https://docs.microsoft.com/ja-jp/power-platform/admin/connect-yammer)    
&nbsp;