---
title:  "Dynamics 365 for Outlook を使用する"
draft: false
weight: 5
datetitle: "2017.08.23 | "
showinhome: true
showinaccordian: false
rightMenu: "artical"
indexImg: "artical5.jpg"
description: "Dynamics 365 の便利な機能として、Outlook との連携があります。"
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
{{< detailTopImage >}}
{{< authorImage src="authorimage.jpg" name="Takafumi Noguchi" linkdin="https://www.linkedin.com/in/tnoguchi1123531" >}}
<!-- Intro  -->
Dynamics 365 の便利な機能として、Outlook との連携があります。

Outlook ユーザーであれば、Outlook から直接 Dynamics の顧客情報や案件情報を確認し、
活動情報を更新することもできるので、Office 365 をすでに利用されている方であれば使わない手はないです。   


Dynamics 365 for Outlook を利用する上で必要なことがあります。

<!-- HighLighted Box -->
ユーザーが Dynamics 365 App for Outlook の利用資格を満たすために必要なこと
  * 受信電子メール、予定、取引先担当者、
タスクのサーバー側同期をユーザーのメールボックスに設定します。
  * メールボックスのテストと有効化が済んでいることを確認します。
Dynamics 365 App for Outlook User のセキュリティ ロールを持っていること

セットアップ手順をまとめてみました。１つずつ設定していきましょう。

 
## 事前準備
Outlook のセットアップをする前に、いくつか事前準備があります。

### セキュリティロールをユーザーに割り当てる
上記２つの設定より先に、
Dynamics 365 for Outlook を使用したいユーザーにセキュリティロールの設定が必要です。

ここで必要な権限としては、
[Dynamics 365 for Outlook タスクに必要なアクセス許可](https://docs.microsoft.com/ja-jp/dynamics365/outlook-addin/admin-guide/permissions-required-tasks)に記載があるような特権が必要です。

  * オフラインにする
  * 保存されているビューの読み取り
  * “取引先担当者” レコードの 書き込み、追加先

まずは、Dynamics 365 の [ホーム画面](https://home.dynamics.com/)を開きます。
表示されている Dynamics 365 の適当なアプリを開きます。
<!-- Image= d365outlook-01.png -->
{{< imagedisplay src="d365outlook-01.png" >}}

右上歯車ボタンから、「詳細設定」をクリックします。
<!-- Image= d365outlook-02.png -->
{{< imagedisplay src="d365outlook-02.png" >}}


「設定」から「セキュリティ」を開きます。

そして「セキュリティロール」をクリックします。

今回は、**Account Manager** という既定のロールを少し変更します。
<!-- Image= d365outlook-03.png -->
{{< imagedisplay src="d365outlook-03.png" >}}

「コアレコード」タブで、取引先担当者、営業案件、活動などに権限があることを確認します。
<!-- Image= d365outlook-04.png -->
{{< imagedisplay src="d365outlook-04.png" >}}

「経営管理」タブの、Outlook の特権も付与しておきます。 
<!-- Image= d365outlook-05.png -->
{{< imagedisplay src="d365outlook-05.png" >}}


これで、セキュリティロールの設定は完了です。保存して閉じましょう。

あとは、このロールをユーザーに割り当てます。「ユーザー」をクリックします。
<!-- Image= d365outlook-06.png -->
{{< imagedisplay src="d365outlook-06.png" >}}


利用するユーザーに先ほどの **Account Manager**  ロールを割り当てます。
<!-- Image= d365outlook-07.png -->
{{< imagedisplay src="d365outlook-07.png" >}}


### Dynamics 365 for Outlook のアプリにロールを割り当てる
次は、アプリに先ほどの  **Account Manager**  ロール を割り当てておきます。
Outlook から表示される Dynamics 365 の画面はこのアプリになるため、アクセス権がないとエラーになります。

「設定」の「マイアプリ」を開きます。
そして、**Dynamics 365 App for Outlook**の … をクリックして、「ロールの管理」をクリックします。
 **Account Manager**  にチェックをいれて、「無視して保存」をクリックします。
<!-- Image= d365outlook-08.png -->
{{< imagedisplay src="d365outlook-08.png" >}}


これで事前準備はOKです。

## 電子メール アクセスの設定
Dynamics 365 と Exchange の連携を行います。
なお、Dynamics 365 １テナント内で Exchange 連携できるのは１インスタンスのみです。

「設定」より「電子メール アクセ…」 をクリックします。
<!-- Image= d365outlook-09.png -->
{{< imagedisplay src="d365outlook-09.png" >}}


「メールボックス」をクリックします。
<!-- Image= d365outlook-10.png -->
{{< imagedisplay src="d365outlook-10.png" >}}


１つの電子メールを選択して「編集」ボタンをクリックします。
<!-- Image= d365outlook-11.png -->
{{< imagedisplay src="d365outlook-11.png" >}}

サーバープロファイルを下図のように、     
**受信メール・送信メール・予定、取引先担当者、タスク** を 「サーバー同期」に設定して保存します。
<!-- Image= d365outlook-12.png -->
{{< imagedisplay src="d365outlook-12.png" >}}


「電子メールの承認」をクリックします。
<!-- Image= d365outlook-13.png -->
{{< imagedisplay src="d365outlook-13.png" >}}


「メールボックスのテストと有効化」をクリックし、☑をいれて、「OK」 とします。
<!-- Image= d365outlook-14.png -->
{{< imagedisplay src="d365outlook-14.png" >}}


しばらく待つと、左パネルの「通知」を開いて正常に完了したと確認できます。
<!-- Image= d365outlook-15.png -->
{{< imagedisplay src="d365outlook-15.png" >}}


先ほどの一覧画面でも、すべて成功になれば完了です。
<!-- Image= d365outlook-16.png -->
{{< imagedisplay src="d365outlook-16.png" >}}


## Dynamics 365 App for Outlook の構成
最後に、Dynamics 365 App for Outlook を構成します。
「設定」に戻り、「Dynamics 365 App for Outlook」を開きます。
<!-- Image= d365outlook-17.png -->
{{< imagedisplay src="d365outlook-17.png" >}}


資格があるすべてのユーザーに設定したユーザーが表示されるので、☑をいれて
「OUTLOOK へのアプリの追加」ボタンをクリックします。
<!-- Image= d365outlook-18.png -->
{{< imagedisplay src="d365outlook-18.png" >}}


しばらくは保留中（15分ほど）ですが、完了すれば以下の通りになります。
<!-- Image= d365outlook-19.png -->
{{< imagedisplay src="d365outlook-19.png" >}}

これで Dynamics 365 側の設定は完了しました。

## Outlook から Dynamics 365 へアクセスする
Outlook を開き、予定表を１つ追加しましょう。

件名や時間を追加します。
右上の … から「Dynamics 365」 が表示されると連携は完了してます。クリックしてみます。
<!-- Image- d365outlook-23.png -->
{{< imagedisplay src="d365outlook-23.png" >}}


Dynamics 365 の取引先担当者で、事前に テスト 太郎 と作成していたので、検索してみます。
クリックして予定を作成します。Dynamics 365 に登録されている情報が確認できました。
<!-- Image= d365outlook-24.png -->
{{< imagedisplay src="d365outlook-24.png" >}}


担当者名右の … をクリックして、「活動の追加」から「予定の追加」をクリックします。
<!-- Image= d365outlook-25.png -->
{{< imagedisplay src="d365outlook-25.png" >}}


必要な個所を入力したら、保存して閉じる をクリックします。
<!-- Image= d365outlook-26.png -->
{{< imagedisplay src="d365outlook-26.png" >}}


Dynamics 365 側でも確認すると、担当者に予定の活動が追加されていることがわかります。
<!-- Image= d365outlook-27.png -->
{{< imagedisplay src="d365outlook-27.png" >}}

以上、Dynamics 365 App for Outlook のセットアップ手順まとめでした。    
&nbsp;