---
title:  "Dynamics 365ドキュメント SharePoint に保存する"
draft: false
weight: 1
datetitle: "2017.08.23 | "
image: "artical1.jpg"
Author: "Takafumi Noguchi"
authorimage: "authorimage.jpg"
showinhome: true
showinaccordian: false
rightMenu: "artical"
linkdin: ""
---
<!-- Intro  -->
Dynamics 365 はライセンス数に応じた記憶域を用意しています。試用版のDynamics 365 を利用すると５GB程度の記憶域しかないため、添付ファイルを取引先企業のレコードにアップロードするような運用を行うとあっという間にストレージが不足してしまいます。
そのため、Dynamics 365 では、SharePoint Online と連携することで、実ファイルの保存先を、Dynamics 365 から SharePoint Online に変更することができるようなります。これは少人数でDynamics 365 を運用する上ではなくてはならない外部システムの連携機能なので、ぜひ活用してください。


## SharePoint Online のセットアップ
まずは、保存先であるSharePoint Online 側のセットアップを行いましょう。Office 365 の契約でSharePoint Online が利用できるようになると思いますので、Office 365 のメニューから、SharePoint を開きます。※SharePoint Online の契約がない方は、まずはその準備を行ってください。
<!-- Image= SharePoint1.png -->
{{< imagedisplay SharePoint1 "290" "596" "796" >}}


SharePoint Online のトップページが開いたら、右上の歯車のマークをクリックして、「サイト コンテンツ」 をクリックします。
<!-- Image= SharePoint2.png -->
{{< imagedisplay SharePoint2 "290" "596" "796" >}}


「+新規」をクリックして、「サブサイト」をクリックします。
<!-- Image= SharePoint3.png -->
{{< imagedisplay SharePoint3 "290" "596" "796" >}}


タイトルを入力後、URLを設定します。テンプレートや権限などは既定のままで、「作成」をクリックします。
<!-- Image= SharePoint4.png -->
{{< imagedisplay SharePoint4 "290" "596" "796" >}}
<!-- Image= SharePoint5.png -->
{{< imagedisplay SharePoint5 "290" "596" "796" >}}

SharePoint Online に、Dynamics 365 のドキュメントを保存するサブサイトを作成しました。このURLは後ほど利用するので、覚えておきましょう。

例）https://<ドメイン名>.sharepoint.com/d365lists
<!-- Image= SharePoint6.png -->
{{< imagedisplay SharePoint6 "290" "596" "796" >}}


サイトの権限を調整します。右上の歯車マークをクリックして 「サイトの設定」をクリックします。
<!-- Image= SharePoint7.png -->
{{< imagedisplay SharePoint7 "290" "596" "796" >}}


「サイトの権限」 をクリックします。
<!-- Image= SharePoint8.png -->
{{< imagedisplay SharePoint8 "290" "596" "796" >}}


今回、Dynamic 365 と SharePoint Online の権限はそれぞれわけて考えて独自に権限設定を行いたいので、「権限の継承を中止」 をクリックします。
この設定により、SharePoint Online で設定されている権限設定とは別に独自で権限設定を行うことができるようになります。
<!-- Image= SharePoint9.png -->
{{< imagedisplay SharePoint9 "290" "596" "796" >}}


「このサイトのグループのセットアップ」 については、何も変更せず「OK」をクリックしてください。

 

それでは、ユーザーに権限を付与します。再度、「サイトの設定」 から 「サイトの権限」 を開きます。

「アクセス許可の付与」をクリックして、以下のようにユーザーに対して「投稿」の権限を付与しました。今回はユーザーに対して、SharePoint Online のURLを周知する必要がないので、「電子メール招待状を送信する」 から✔を外しています。
<!-- Image= SharePoint10.png -->
{{< imagedisplay SharePoint10 "290" "596" "796" >}}


ユーザーが追加されたことを確認できました。それでは不要なユーザーアクセスを削除します。ここでの注意点として、操作を行っている管理ユーザーが所属するチームを削除するとアクセスできなくなってしまうので、操作しているユーザーが所属するチームは残すようにしてください。今回は、「チーム サイト所有者」 以外は削除します。
<!-- Image= SharePoint11.png -->
{{< imagedisplay SharePoint11 "290" "596" "796" >}}


これでSharePoint Online 側の準備は完了です。
今後、Dynamics 365 側で、添付ファイルをアップロードする際は、ユーザーをまずSharePoint Online 側で追加する作業が必要となります。

## Dynamics 365 を SharePoint Online と連携させる
Dynamics 365 で SharePoint Online を有効化するには、以下の手順で進めていきます。

### SharePoint 統合の有効化を行う
Dynamics 365 を開き、「設定」 から 「ドキュメント管理」 をクリックします。「サーバーベースの SharePoint 統合の有効化」 をクリックします。
<!-- Image= SharePoint12.png -->
{{< imagedisplay SharePoint12 "290" "596" "796" >}}


ダイアログが表示されると「次へ」をクリックして、「SharePoint サイトの場所を選択してください」 で 「オンライン」 をクリックします。
<!-- Image= SharePoint13.png -->
{{< imagedisplay SharePoint13 "290" "596" "796" >}}


URL に SharePoint Online のURLを入力（作成したドキュメント ライブラリのURLではないです）して、「次へ」をクリックします。
<!-- Image= SharePoint14.png -->
{{< imagedisplay SharePoint14 "290" "596" "796" >}}


構成が完了したことを確認して、「完了」 をクリックします。
<!-- Image=  SharePoint15.png -->
{{< imagedisplay SharePoint15 "290" "596" "796" >}}


### ドキュメントの管理設定を行う
エンティティ単位で、SharePoint のドキュメント管理を行う場合に、この設定を行います。「設定」 の 「ドキュメント管理」 から、 「ドキュメント管理設定」 をクリックします。
<!-- Image= SharePoint16.png -->
{{< imagedisplay SharePoint16 "290" "596" "796" >}}


有効にしたいエンティティを選択して、上述で作成したSharePoint サイトのURL (例：https://<ドメイン名>.sharepoint.com/d365lists ) を追加したら、「次へ」をクリックします。
<!-- Image= SharePoint17.png -->
{{< imagedisplay SharePoint17 "290" "596" "796" >}}


URLが有効です というメッセージが表示されます。ここでフォルダ構造を設定しますが、「エンティティに基づく」にチェックを入れて、「次へ」 をクリックします。
<!-- Image= SharePoint18.png -->
{{< imagedisplay SharePoint18 "290" "596" "796" >}}


これで、SharePoint 側に取引先企業と取引先担当者のフォルダがそれぞれ作成されました。もし Dynamics 365 の取引先企業レコードで、ドキュメントをアップロードすると、SharePoint の account というフォルダに作成されることになります。
<!-- Image= SharePoint19.png -->
{{< imagedisplay SharePoint19 "290" "596" "796" >}}


SharePoint サイトを見ると、フォルダが作成されていることがわかります。
<!-- Image= SharePoint20.png -->
{{< imagedisplay SharePoint20 "290" "596" "796" >}}

### Dynamics 365 でファイルをアップロードする
取引先企業のレコードより、ドキュメントをアップロードしてみましょう。取引先企業のレコードを開いて、上部のメニュー（ナビゲーション）より 「ドキュメント」 をクリックします。※ もしドキュメントがない場合は、フォームの設定より、ナビゲーションに追加してください。
<!-- Image= SharePoint21.png -->
{{< imagedisplay SharePoint21 "290" "596" "796" >}}


「アップロード」 をクリックして、添付したいファイルを選択後 「OK」 をクリックします。
<!-- Image= SharePoint22.png -->
{{< imagedisplay SharePoint22 "290" "596" "796" >}}


アップロードが完了しました。「ドキュメントの場所」 が SharePoint になっていますね。
<!-- Image= SharePoint23.png -->
{{< imagedisplay SharePoint23 "290" "596" "796" >}}


SharePoint サイトを見ると、取引先企業のフォルダに、新しくフォルダが作成され、添付したらファイルがアップロードされています。
<!-- Image= SharePoint24.png -->
{{< imagedisplay SharePoint24 "290" "596" "796" >}}


このように、SharePoint との連携により、Dynamic 365 にファイルを多く格納することができることはとても便利ですね。
ぜひ今回設定したエンティティ以外でも、設定してみてください。     
&nbsp;