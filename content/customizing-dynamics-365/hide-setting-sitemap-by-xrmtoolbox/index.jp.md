---
title:  "XRM ToolBox でサイトマップを非表示に設定"
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
 今回は、XRM ToolBox というサードパーティー製のカスタマイズツールを使って、「設定」のサイトマップを管理者権限をもっているユーザーのみに表示する方法をご紹介します。

**重要事項：** これからご紹介する XRM ToolBox は [ Japan Microsoft Dynamics 365 Team Blog](https://blogs.msdn.microsoft.com/crmjapan/2014/05/19/dynamics-crm-20112013/)でもご紹介されている Dynamics の開発ツールです。もし利用する場合は、**十分な検証**を行った上、自己責任でご利用ください。また、当サイトに掲載された内容によって生じた損害等の一切の責任を負いかねますので、ご了承ください。


## XRM ToolBox のダウンロード
XRM ToolBox は .exe の実行ファイルで、インストールは不要です。ダウンロードして、.zip ファイルを解凍して使います。    

XRM ToolBox の公式ページ でダウンロードします。

<!-- Image= xrm-hide01.png -->
{{< imagedisplay src="xrm-hide01.png" >}}


その後、.zip ファイルを解凍してください。フォルダ内に「XrmToolBox.exe」があるのでそれをダブルクリックで実行します。
<!-- Image= xrm-hide02.png -->
{{< imagedisplay src="xrm-hide02.png" >}}


## SiteMap Editor のインストール
XRM ToolBox を開くと、仕様なのか最初に Plugin Store が開きます。これは一度クローズしてください。

### Dynamics 365 環境へ接続
Dynamics 365 環境にツールからアクセスします。「Connect」ボタンをクリックします。「New connection」をクリックして、アクセスする Dynamics 365 の URL を入力したら「Next」をクリックします。
<!-- Image= xrm-hide03.png -->
{{< imagedisplay src="xrm-hide03.png" >}}


ここでアクセスするアカウント情報（※）を入力します。入力したら「Next」をクリックします。
<!-- Image= xrm-hide04.png -->
{{< imagedisplay src="xrm-hide04.png" >}}


（※）ここで入力するアカウント情報について、Office 365 で多要素認証を設定しているとうまく動作しません。また、利用するアカウントは下図のようなシステム管理者（CAL が “管理”）のユーザーでもアクセス可能です。アクセスモードについては、[CAL情報について]()をご参照ください。
<!-- Image= xrm-hide05.png -->
{{< imagedisplay src="xrm-hide05.png" >}}

正常に接続ができると下図のようなダイアログが表示されます。接続名を任意で入力して「Finish」をクリックします。
<!-- Image= xrm-hide06.png -->
{{< imagedisplay src="xrm-hide06.png" >}}


### Site Map Editor をインストール
「Tools」より「Plugin Store」をクリックします。「SiteMap Editor」を選択して「Install」をクリックします。
<!-- Image= xrm-hide07.png -->
{{< imagedisplay src="xrm-hide07.png" >}}


インストールが完了したら、Plugins を開き、SiteMap で検索をして SiteMap Editor をクリックします。
<!-- Image= xrm-hide08.png -->
{{< imagedisplay src="xrm-hide08.png" >}}


わかりづらいのですが、クリックすると、XRM ToolBox にタブが追加されるので、その SiteMap Editor のタブをダブルクリックします。
<!-- Image= xrm-hide09.png -->
{{< imagedisplay src="xrm-hide09.png" >}}


「Load SiteMap」をクリックして、”Default” のサイトマップを選択して「OK」をクリックします。これで Dynamics 365 のサイトマップを読み込めました。
<!-- Image= xrm-hide10.png -->
{{< imagedisplay src="xrm-hide10.png" >}}


## エンティティとセキュリティロール
SiteMap Editor は、セキュリティロールベースでサイトマップのアクセス権を制御します。つまり、エンティティのアクセス権とサイトマップのアクセス権を紐づける方法になります。

例えば、Account Manager というセキュリティ ロールは、「ソリューション」というエンティティへのアクセス権はありません。
<!-- Image= xrm-hide11.png -->
{{< imagedisplay src="xrm-hide11.png" >}}


そこで、SiteMap Editor で「設定」のサイトマップに 「ソリューション」エンティティへのアクセス権がないと表示されないという設定をします。すると、Account Manager  のセキュリティロールを設定されているユーザーは、「設定」のサイトマップが見えなくなる、ということになります。

サイトマップ表示・非表示のために新しくエンティティを作成して、SiteMap Editor で設定することもできますが、このためだけにエンティティを新規作成するのはあまり好ましくないので、システム管理者しか利用しないようなエンティティを選択して、そのエンティティを SiteMap Editor で設定しようと思います。

上述した「ソリューション」はそういった意味で最適です。今回は「ソリューション」のアクセス権で「設定」サイトマップの表示・非表示をコントロールします。
### サブエリアに Privilege を追加

サイトマップは、エリア ＞ グループ ＞ サブエリア という単位に分かれていますが、アクセス権を設定できるのは **サブエリア**です。

SiteMap Editor に戻り、「Area(Settings)」をサブエリアまで展開します。１つのサブエリアで右クリックして、「Add Privilege」をクリックします。
<!-- Image= xrm-hide12.png -->
{{< imagedisplay src="xrm-hide12.png" >}}


「ソリューション」エンティティ名（solution) を入力して、「Read」にチェックをいれたら「Save」をクリックします。
<!-- Image= xrm-hide13.png -->
{{< imagedisplay src="xrm-hide13.png" >}}

「Update SiteMap」をクリックすると、カスタマイズが反映されます。
<!-- Image= xrm-hide14.png -->
{{< imagedisplay src="xrm-hide14.png" >}}


Account Manager のロールが設定されているユーザーで確認すると、非表示にした「経営管理」がメニューから消えています。
<!-- Image= xrm-hide15.png -->
{{< imagedisplay src="xrm-hide15.png" >}}


## 設定のサイトマップを非表示にするには
上述のように「設定」のサブエリアに対してアクセス権を設定すると非表示にすることが可能です。
<!-- Image- xrm-hide16.png -->
{{< imagedisplay src="xrm-hide16.png" >}}


「設定」そのものを非表示にするには、「設定」にあるすべてのサブエリアに上述の作業を行うことで、メニューが見えなくなります。

<!-- Image= xrm-hide17.png -->
{{< imagedisplay src="xrm-hide17.png" >}}


作業自体はすごく手間なのですが、この設定を行うことで管理しやすくなるのではないでしょうか。XRM ToolBox はこの操作以外にもいくつか便利なカスタマイズが行えるので、他に使えるプラグインがあればご紹介します。

それでは今回はここまで。     
&nbsp;