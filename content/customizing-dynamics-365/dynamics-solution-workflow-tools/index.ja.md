---
title:  "Dynamics 365 機能拡張 – Workflow Tools"
draft: false
weight: 4
datetitle: "2017.08.23 | "
showinhome: true
showinaccordian: false
rightMenu: "artical"
indexImg: "artical4.jpg"
description: "Dynamics 365 ワークフローの機能を大きく拡張する Dynamics 365 Workflow Tools をご紹介します。以前、[サードパーティ製のおすすめソリューションは何か]() でおススメしたソリューションの利用方法になります。"
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
{{< detailTopImage src="artical4.jpg" >}}
{{< authorImage src="authorimage.jpg" name="Takafumi Noguchi" linkdin="https://www.linkedin.com/in/tnoguchi1123531" >}}
<!-- Intro  -->
Dynamics 365 ワークフローの機能を大きく拡張する Dynamics 365 Workflow Tools をご紹介します。以前、[サードパーティ製のおすすめソリューションは何か]() でおススメしたソリューションの利用方法になります。

**重要事項：** これからご紹介する Dynamics 365 Workflow Tools はサードパーティー製ソリューションです。もしご自身の環境で利用される場合は、十分な検証を行った上、**自己責任**でご利用ください。また、当サイトに掲載された内容によって生じた損害等の一切の責任を負いかねますので、ご了承ください。



## Dynamics 365 Workflow Tools について
Dynamics 365 Workflow Tools は、Demian Raschovan 氏により開発された Dynamics のソリューションで、Dynamics 365 のワークフローの機能を大きく改善します。今回インポートするのは、バージョン 1.0.54.1 ですが、72 もの機能が追加されます。

その中でも、特定のユーザーやチームへの共有設定や、２つのフィールドの四則演算、レコードIDの取得などの機能は便利で私の環境でもよく利用しています。

### Workflow Tools 機能一覧 (1.0.54.1)
Dynamics 365 Workflow Tools の機能一覧になります。

<!-- Table -->

|       |  |  |
| ----------- | ----------- | ----------- |
| 1: Force Calculate Rollup Field | 31: Is Member Of Marketing List | 61: Translate Text |
| 2: Apply Routing Rules      | 32: Remove From All Marketing Lists      | 62: Currency Convert |
| 3: Query Values | are neat      | 63: Get Record ID |
| 4: Share Record With Team | 33: Numeric Functions      | 64: Retrieve User’s BU Default Team |
| 5: Share Record With User | 34: Email To Team      | 65 Get App Module ID |
| 6: Unshare Record With Team | 35: Set Process Stage      | 66 Get App Record Url |
| 7: Unshare Record With User | 36: Entity Mobile Deep Link      | 67 Is Member Of Team  |
| 8: Check If User is in Role | 37: Send Email      | 68 Count Child Entity Record  |
| 9: Check If User is in Team | 38: Geocode Address      | 69 Get Multi Select OptionSet |
| 10: Add To Marketing List | 39: Add User To Team      | 70 Map Multi Select OptionSet |
| 11: Remove From Marketing List | 40: Remove User From Team      | 71 Set Multi Select Option Set |
| 12: Clone Children | 41: Associate Entity      | 72 Delete Record Audit History |
| 13: Clone Record | 42: Goal Recalculate      |  |
| 14: Set Process | 43: Get Initiating User      |  |
| 15: Rollup Functions | 44: Encrypt Text      |  |
| 16: Entity Attachment To Email | 45: Check Associate Entity      |  |
| 17: Pick From Queue | 46: Set State      |  |
| 18: Queue Item Count | 47: Update Child Records      |  |
| 19: Add Role To User | 48: Disassociate Entity      |  |
| 20: Add Role To Team | 49: Insert Option Value      |  |
| 21: Remove Role From User | 50: Delete Option Value      |  |
| 22: Remove Role From Team | 51: Sales Literature To Email      |  |
| 23: Set User Settings | 52: Send Email From Template To Users In Role      |  |
| 24: String Functions | 53: Send Email To Users In Role      |  |
| 25: Delete Record | 54: Calculate Price      |  |
| 26: Entity Json Serializer | 55: Execute Workflow By ID Thanks to Steve Mordue      |  |
| 27: Qualify Lead | 56: JSON Parser      |  |
| 28: Add Marketing List To Campaign | 57: Date Functions      |  |
| 29: Copy Marketing List Members | 58: Calculate Agregate Date      |  |
| 30: Copy To Static List | 59: OrgDBSetting Update      |  |
|  | 60: OrgDBSetting Retrieve      |  |

引用元： [Dynamics 365 Workflow Tools (1.0.54.1)](https://github.com/demianrasko/Dynamics-365-Workflow-Tools/tree/1.0.54.1)

英語ですが各機能の説明は、上記のページがご確認ください。ここでは触れません。

## Dynamics 365 Workflow Tools のインポート
Dynamics 365 Workflow Tools をインポートします。Dynamics 365 Workflow Tools は、App Store で検索すると表示されますが、ここから「今すぐ入手する」をクリックしても、うまくインポートできません。
<!-- Image= wftool01.png -->
{{< imagedisplay src="wftool01.png" >}}

そのため、Dynamics 365 Workflow Tools の .zip ファイルがある GitHub へアクセスします。
<!-- Image= wftool02.png -->
{{< imagedisplay src="wftool02.png" >}}

URL はこちら： https://github.com/demianrasko/Dynamics-365-Workflow-Tools

まずは、バージョンですが、左側の 「Branch:master」を展開して、「Tags」より 1.0.54.1 をチェックします。
<!-- Image= wftool03.png -->
{{< imagedisplay src="wftool03.png" >}}

そして右側にある「Clone or download」で「Download ZIP」をクリックします。
<!-- Image= wftool04.png -->
{{< imagedisplay src="wftool04.png" >}}

Dynamics 365 のソリューションで「インポート」からダウンロードした .zip ファイルをアップロードします。
<!-- Image= wftool06.png -->
{{< imagedisplay src="wftool06.png" >}}

ファイルが正しければ、以下のような画面になるので「インポート」をクリックします。
<!-- Image= wftool07.png -->
{{< imagedisplay src="wftool07.png" >}}

正常に完了すれば、ソリューション一覧に Dynamics 365 Workflow Tools が表示されているはずです。
<!-- Image= wftool08.png -->
{{< imagedisplay src="wftool08.png" >}}

これでソリューションがインポートされました。

## Workflow Tools の利用
それでは、ワークフローを作成して、Dynamics 365 Workflow Tools を実際に使ってみます。「設定」の「プロセス」から新規にワークフローを作成します。そして「ステップの追加」を開くと、下図のように Workflow Tools がインポートされて利用できる状態になっていることがわかります。
<!-- Image= wftool09.png -->
{{< imagedisplay src="wftool09.png" >}}

それでは、以下のワークフローを作成してみます。

### レコードの共有設定と解除
この共有機能はどうしても必要だったので Dynamics 365 Workflow Tools で実現できることがわかった時、歓喜した記憶があります（笑）

**共有設定**

まずは「ステップの追加」で、所有ユーザーの部署が “営業部” なら という条件を設定して、さらに追加して、「msdyncrm Workflow Tools」の「Share Record With Team」を追加します。これでチームに対してレコードを共有するという設定ができます。
<!-- Image= wftool10.png -->
{{< imagedisplay src="wftool10.png" >}}

「プロパティの設定」をクリックします。
<!-- Image= wftool11.png -->
{{< imagedisplay src="wftool11.png" >}}

「Sharing Record URL」は対象のレコードですが、これは “レコード URL（動的）” を設定します。これでワークフローが実行されたレコードに対して共有を行うことができます。「Team」では共有したチームを選択して、Permission で必要な共有設定を行います。設定が完了したら保存して閉じます。
<!-- Image= wftool12.png -->
{{< imagedisplay src="wftool12.png" >}}

**共有解除**

共有解除を行う場合は「Unshare Record With Team」を使います。（ユーザーの場合は「Unshare Record With User」）
<!-- Image= wftool13.png -->
{{< imagedisplay src="wftool13.png" >}}

共有解除では、「Sharing Record URL」と「Team」のみを設定します。これで対象のレコードから共有解除ができます。
<!-- Image= wftool05.png -->
{{< imagedisplay src="wftool05.png" >}}

共有設定と解除は、1ステップで1チームもしくは1ユーザーなので、レコードに共有されているすべてのチームを解除してから共有設定を行う場合は、解除したいチーム数分、ステップを定義する必要があります。

この場合、共有解除のワークフローだけ別に作成して、子ワークフローとして呼ぶという手順でもいいかと思います。

### レコード ID を取得
レコードの ID を取得する作業も苦労しました。Javascript や Data Export Service で Azure SQL 上にデータをエクスポートすれば ID を取得してフィールドに格納できたのですが、レコード作成時に自動的にフィールドに ID をセットすることができませんでした。

Dynamics 365 Workflow Tools も古いバージョンだとなかったようですが、1.0.54.1 では「Get Record ID」でレコードの ID を取得できるようになりました。
<!-- Image= wftool14.png -->
{{< imagedisplay src="wftool14.png" >}}

「プロパティの設定」をクリックして、「Record URL」に  “レコード URL（動的）”  を設定します。
<!-- Image= wftool15.png -->
{{< imagedisplay src="wftool15.png" >}}

「Get Record ID」でレコードのURLからIDを取得して、それを別のフィールドにセットする場合は、「レコードの更新」を後のステップに追加します。右パネルの「検索」を展開すると、「ローカル値」に「Get Record ID」のステップ名が表示されています。
<!-- Image= wftool16.png -->
{{< imagedisplay src="wftool16.png" >}}

「Record ID」として「追加」から「OK」をクリックすれば、フィールドに設定できます。
<!-- Image= wftool17.png -->
{{< imagedisplay src="wftool17.png" >}}

これでレコードのIDをフィールドに、レコードの ID をワークフローで取得できるようになりました。ワークフローを動作させてみると、下図のように ID をテキストでセットしています。
<!-- Image= wftool18.png -->
{{< imagedisplay src="wftool18.png" >}}

レコード作成時に動作するワークフローとして作成して利用するといいと思います。

### 数値フィールドの四則演算
10進数のフィールド A と B を計算する「Numeric Functions」をステップとして追加します。
<!-- Image= wftool19.png -->
{{< imagedisplay src="wftool19.png" >}}

「プロパティの設定」をクリックすると、下図のように「Number 1」と 「Number 2」 の数値フィールドをセットできるようになっています。今回は、時価総額の計算として、株価 と 発行済株式数 をそれぞれセットしました。
<!-- Image= wftool20.png -->
{{< imagedisplay src="wftool20.png" >}}

先ほどと同じように、「Number 1」と 「Number 2」 の掛け算をして、その結果を「時価総額」というフィールドに入力するので、「レコードの更新」をステップに追加します。右パネルの「検索」を展開すると、「ローカル値」に「株価 と 発行済株式数 をセット」のステップ名が表示されています。
<!-- Image= wftool21.png -->
{{< imagedisplay src="wftool21.png" >}}

四則演算を選択できるので、”Multiply” を選択します。
<!-- Image= wftool22.png -->
{{< imagedisplay src="wftool22.png" >}}

「時価総額」のフィールドに追加します。
<!-- Image= wftool23.png -->
{{< imagedisplay src="wftool23.png" >}}

これでOKです。ワークフローをアクティブ化して実行すると、以下のように「時価総額」が計算されました。
<!-- Image= wftool24.png -->
{{< imagedisplay src="wftool24.png" >}}

## その他の機能も
Dynamics 365 Workflow Tools の一部の機能のみをご紹介しました。その他もかなりの機能が用意されているのでお時間がある際にお試しください。

今回はここまで。     
&nbsp;