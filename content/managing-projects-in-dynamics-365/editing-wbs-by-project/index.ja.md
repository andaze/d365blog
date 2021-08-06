---
title:  "Project Service と Microsoft Project で WBS を編集"
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
      "dateModified": "2015-02-05T09:20:00+08:00"
    }
---
<!-- Intro  -->
Dynamics 365 for Project Service Automation と Microsoft Project を連携することで、WBS をクライアント端末上で編集できるようになります。今回は連携方法をご紹介します。

※ この記事ではすでに Microsoft Project が端末にインストールされている前提で手順をご紹介します。もしまだインストールしていない場合は、下記の通り Microsoft 365 管理センターよりインストールをしてください。


## Microsoft Project のインストール
Office 365 を契約している環境であれば、Office 365 から Microsoft Project をインストールすることができます。

Microsoft 365 管理センターにアクセスします。ホームにある Office ソフトウェア にて「ソフトウェアのインストール」をクリックします。
<!-- Image= psa-project01.jpg -->
{{< imagedisplay src="psa-project01.jpg" >}}

左メニューの「Project」をクリックして、「インストール」をクリックします。
<!-- Image= psa-project02.png -->
{{< imagedisplay src="psa-project02.png" >}}

これでクライアント端末に、Project のインストーラーをダウンロードできます。インストーラーに従って Microsoft Project をインストールしてください。

## アドインのインストール
まずは、公式サイトより [ Microsoft Project 用 Microsoft Dynamics 365 Project Service Automation アドイン](https://www.microsoft.com/ja-JP/download/details.aspx?id=54299)でアドインをダウンロードします。
<!-- Image= psa-project03.png -->
{{< imagedisplay src="psa-project03.png" >}}

x32 か x64 ビット版を選択してダウンロードしたら、インストーラーを起動します。「次へ」をクリックします。
<!-- Image= psa-project04.png -->
{{< imagedisplay src="psa-project04.png" >}}

使用許諾契約書とインストール先で「次へ」をクリックして、「インストール」でアドインをインストールします。
<!-- Image= psa-project05.png -->
{{< imagedisplay src="psa-project05.png" >}}

インストール完了であればOKです。Project を開きます。

## Project から Dynamics 365 へ接続する
Project を起動させて、新しいプロジェクトを作成します。タブに 「プロジェクト サービス」が追加されていますのでクリックします。
<!-- Image= psa-project06.png -->
{{< imagedisplay src="psa-project06.png" >}}

「接続」をクリックします。ダイアログで接続したい Dynamics 365 の URL を入力して「接続」をクリックします。
<!-- Image= psa-project07.png -->
{{< imagedisplay src="psa-project07.png" >}}

認証情報を入力して「サインイン」をクリックします。
<!-- Image= psa-project08.png -->
{{< imagedisplay src="psa-project08.png" >}}

これで Microsoft Project と Dynamics 365 が接続されました。

## WBSを編集して公開する
Project に Dynamics 365 for Project Service Automation のプロジェクトを読み込んで、WBS を編集し、最後は公開します。

### プロジェクトの読み込み
Project に Dynamics 365 プロジェクトの WBS を読み込みます。メニューの「読み込み」をクリックして「PSA プロジェクト」をクリックします。
<!-- Image= psa-project09.png -->
{{< imagedisplay src="psa-project09.png" >}}

連携させたいプロジェクトを選択し、「プロジェクト計画をプロジェクト サービス自動化にリンクする」にチェックをいれて、「開く」をクリックします。
<!-- Image= psa-project10.png -->
{{< imagedisplay src="psa-project10.png" >}}

これで Project に WBS が連携されました。

### Project ファイルをアップロード
ここで WBS を編集する前に、「アップロード」で「PSA Project ドキュメントへ」をクリックします。
<!-- Image= psa-project11.png -->
{{< imagedisplay src="psa-project11.png" >}}

※ 「アップロード」は事前に Dynamics 365 と SharePoint の連携を設定していないと表示されません。SharePoint との連携手順は、[Dynamics 365ドキュメント SharePoint に保存する]() をご参照ください。

ダイアログで「はい」をクリックします。
<!-- Image= psa-project12.png -->
{{< imagedisplay src="psa-project12.png" >}}

Project から Dynamics 365 のプロジェクトに .msp ファイルがアップロードされたと思います。該当のプロジェクトの上部メニューを開き「ドキュメント」をクリックします。
<!-- Image= psa-project13.png -->
{{< imagedisplay src="psa-project13.png" >}}

Project ファイルがアップロードされていることがわかります。これで、Dynamics 365 プロジェクトの WBS は Microsoft Project とリンクされて、今後 Project で開けるようになりました。
<!-- Image= psa-project14.png -->
{{< imagedisplay src="psa-project14.png" >}}

### アップロードできない場合
もし「アップロード」をクリックした際、アクセス権が不足してエラーが表示された場合は、下記2点の権限を確認します。

  * SharePoint アクセス権
  * Project Web App アカウント

#### SHAREPOINT アクセス権
これは、Dynamics 365 と連携している SharePoint サイトで、プロジェクトエンティティ専用のフォルダが作成されていると思います。このフォルダへのアクセス権があるかどうかを確認してください。

右上の歯車より、「ライブラリの設定」をクリックします。
<!-- Image= psa-project15.png -->
{{< imagedisplay src="psa-project15.png" >}}

「権限と管理」の「このドキュメント ライブラリに対する権限」をクリックして、アクセスするユーザーに権限があるかどうかを確認してください。もし権限がない場合は、編集権限を付与します。
<!-- Image= psa-project16.png -->
{{< imagedisplay src="psa-project16.png" >}}

#### PROJECT WEB APP アカウント
Microsoft Project から Project Web App へアクセスするアカウントに権限があるかどうかも重要です。既定では「コンピューター」となっています。利用するクライアント端末で複数の Office 365 アカウントを管理する場合は、ここを設定する必要があります。

Project の「ファイル」タブを開きます。
<!-- Image= psa-project17.png -->
{{< imagedisplay src="psa-project17.png" >}}

「情報」より「アカウントの管理」をクリックします。
<!-- Image= psa-project18.png -->
{{< imagedisplay src="psa-project18.png" >}}

「追加」ボタンでPWAのアカウントを追加します。
<!-- Image= psa-project19.png -->
{{< imagedisplay src="psa-project19.png" >}}

「アカウント名」に Dynamics 365 for Project Service Automation にアクセスするアカウント、「Project Server の URL」には Project Web App の URL（※）を入力します。

必要に応じて、「既定のアカウントとして設定する」のチェックを外して「OK」をクリックします。
<!-- Image= psa-project20.png -->
{{< imagedisplay src="psa-project20.png" >}}

（※）Project Web App の URL は、Office 365 のアプリ一覧から Project を開き、「Project Web App に移動」をクリックすると、以下のような URL が取得できますので、その URL を入力します。

**https://<テナント名>.sharepoint.com/sites/pwa**
<!-- Image= psa-project21.png -->
{{< imagedisplay src="psa-project21.png" >}}

「開始時」にて「アカウントを選択する」にチェックをいれて「OK」をクリックします。Project を再起動させて、上述したアップロード手順を再度試してください。
<!-- Image= psa-project22.png -->
{{< imagedisplay src="psa-project22.png" >}}

### WBS を編集して公開
Project で WBS を編集します。「公開」ボタンをクリックして Dynamics 365 に変更を更新します。
<!-- Image= psa-project23.png -->
{{< imagedisplay src="psa-project23.png" >}}

Dynamics 365 のプロジェクトでも確認してみます。「最新の情報に更新」をクリックすると、WBS の情報が更新されていることがわかります。
<!-- Image= psa-project24.png -->
{{< imagedisplay src="psa-project24.png" >}}

このように Project で WBS を更新して、Dynamics 365 へ更新します。

## Project とのリンクを切る
Dynamics 365 のプロジェクト上で、WBS を再度編集したい場合は、一度 Project とのリンクを切りましょう。Dynamics 365 のプロジェクトを開き、メニューボタンの「MS Project からリンク解除」をクリックします。
<!-- Image= psa-project25.png -->
{{< imagedisplay src="psa-project25.png" >}}

これで解除されるので、WBS を Dynamics 365 上で編集できます。もし Project で再度編集したい場合は、上述の手順を繰り返してください。

## 使い慣れたほうを選ぶといい？
Microsoft Project を使い慣れた方であれば、Project 連携は便利な機能です。ただ、Project で設定できる WBS の列のすべてが Dynamics 365 に反映されるわけではないので、Dynamics 365 上で WBS を編集するのも決して不便ではありません。

ここまで手順をご紹介してなんですが、どちらを使うかはご自身の好みで選んでみてください。     
&nbsp;