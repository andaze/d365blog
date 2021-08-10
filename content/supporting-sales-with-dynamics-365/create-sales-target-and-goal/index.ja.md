---
title:  "Dynamics 365 で目標を管理する"
draft: false
weight: 16
datetitle: "2017.08.23 | "
showinhome: true
showinaccordian: true
rightMenu: "artical"
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
{{< detailTopImage src="artical16.jpg" >}}
{{< authorImage src="authorimage.jpg" name="Takafumi Noguchi" linkdin="https://www.linkedin.com/in/tnoguchi1123531" >}}
<!-- Intro  -->
今回は、Dynamics 365 の目標についてです。目標を管理することで、営業活動、マーケティングやサーポート・サービスなどの向上につなげていくことが可能となります。Dynamics 365 では、目標指標を定義して、目標の管理を行うことができます。

以下の技術情報に、目標管理の機能について述べてあるため引用します。

<!-- QuateBox -->
“目標管理の機能は次のとおりです。

複雑な目標階層を作成します。この階層において、個々の目標の投稿者またはチームにそれぞれの目標が割り当てられます。     
階層内の目標を使用して、重要な業務データ (売上、顧客サービスのサポート案件、電話など) を追跡します。 また、ユーザー定義エンティティで表されるデータを追跡することもできます。      
それぞれの目標の合計 (売上や出荷単位の合計など) を階層ツリーでロールアップします。     
対象または拡大対象に対するロールアップの結果を測定します。    
会計期間またはカスタム期間の目標の結果を追跡します。    
目標期間を現在の会計年度の設定に合わせます。     
さまざまな目標の種類 (金額や件数など) をサポートします。     
実際のデータ、進行中のデータ、およびユーザー定義データを追跡します。    
ロールアップの結果を絞り込むための複雑なクエリを追加します。    
ロールアップの結果を上書きして、新しいデータまたは追加のデータを含めます。    
目標の結果をレポート、グラフ、およびダッシュボードに組み込みます。     
ワークフローとカスタマイズをサポートします。“    
引用元：[https://msdn.microsoft.com/ja-jp/library/gg328577.aspx](https://msdn.microsoft.com/ja-jp/library/gg328577.aspx)


## 目標指標について
<!-- Image= kpi.jpg -->
{{< imagedisplay src="kpi.jpg" >}}

まず目標を作成する前に、目標指標 について説明しておきます。目標指標とは、目標を管理する上での指標になり、営業であれば売上はもちろんのこと、アポ件数、訪問件数、クロージングをとった件数なども指標になるでしょう。      
サポート部門であれば、サポート案件数、顧客満足度などが指標になると思います。
<!-- Image= indicators.jpg -->
{{< imagedisplay src="indicators.jpg" >}}

今回は、Dynamics 365 既定の目標指標である 「売上」 を使用した簡単な目標を作成していきます。ではこの 「売上」 について詳細に解説します。
<!-- Image= indicators1.jpg -->
{{< imagedisplay src="indicators1.jpg" >}}

「売上」 を開くと、以下のような画面になっています。「指標の種類」 を見ると、金額や件数とありますが、売上のため、金額 となっています。
<!-- Image= indicators2.jpg -->
{{< imagedisplay src="indicators2.jpg" >}}

「ロールアップ フィールド」 を見ると、営業案件のフィールドに関連していることがわかります。これは何かというと、目標を作成する際に表示される 「実績」 を自動計算する際に、その参考元となるフィールドを指しています。
<!-- Image= indicators3.jpg -->
{{< imagedisplay src="indicators3.jpg" >}}

例えば、営業案件の 「実売上」 は、営業案件を 「受注してクローズ」 する際に表示されるダイアログにあり、そこに入力された金額が目標の実績に自動で追加されるようになっています。
<!-- Image= indicators4.jpg -->
{{< imagedisplay src="indicators4.jpg" >}}

また、「売上見込み」 については、営業案件がまだオープンの状態の時に見込まれる売上が自動で集計され、目標に記載されます。
<!-- Image= indicators5.jpg -->
{{< imagedisplay src="indicators5.jpg" >}}

まずはこれだけを理解すれば、目標の管理は始められます。さっそく目標を作成してみましょう。

## 目標を作成する
今回作成する目標は、売上目標として、期間は会計年度で 2018年度の第 1 四半期（2018/01/01 to 2018/03/31）、全体の売上目標を 5,000,000円として、各営業へ売上目標を分配していきます。

まず 「営業」 － 「目標」 に移動します。
<!-- Image= indicators6.jpg -->
{{< imagedisplay src="indicators6.jpg" >}}

＋ボタンで新規に作成をします。
<!-- Image= indicators7.jpg -->
{{< imagedisplay src="indicators7.jpg" >}}

親の売上目標をまず作成します。以下の設定をして保存します。   

名前：＜任意＞     
目標指標：売上     
目標の所有者：＜親の目標を管理するユーザー＞    
上司：＜上司のユーザー＞    
目標期間の種類：会計期間   
会計期間：第１四半期    
会計年度：年度2018    
目標値（金額）：5,000,000    
<!-- Image= indicators8.jpg -->
{{< imagedisplay src="indicators8.jpg" >}}

親の目標を作成したので、次は、課員の目標を設定しましょう。以下のように、上位目標に事前に作成した目標を設定、目標の所有者 に担当者、上司や目標管理に値を入力して、目標値（金額）を入力して保存します。
<!-- Image= indicators9.jpg -->
{{< imagedisplay src="indicators9.jpg" >}}

このように下位の目標を複数作成します。すると親の目標に、下位の目標がリスト化されます。各目標で掲げた 「達成目標」 も表示されています。
<!-- Image= indicators10.jpg -->
{{< imagedisplay src="indicators10.jpg" >}}

## 営業案件から自動計算（ロールアップ）される金額
上位下位の目標を作成したら、あとはその目標の所有者が、営業案件で売上を上げることで、実績と進行中の売上の値が更新されていきます。
<!-- Image= indicators11.jpg -->
{{< imagedisplay src="indicators11.jpg" >}}

この計算は、上述した営業案件のロールアップ フィールドから自動計算されます。実績（金額）については、営業案件の 実売上、進行中（金額）については、営業案件の 売上見込み が反映されるようになっています。

また目標に反映される期間については、実績（金額） は 実際のクローズ日、 進行中（金額） は 予測クローズ日  が目標の期間内であるかどうかで判断されます。
<!-- Image= indicators12.jpg -->
{{< imagedisplay src="indicators12.jpg" >}}

営業案件の売上見込みなどを編集して、実際に目標の値が変化することを確認しましょう。まず、営業案件のフィールドを以下のように設定します。所有者は、今回、目標を設定された営業に設定されています。
<!-- Image= indicators13.jpg -->
{{< imagedisplay src="indicators13.jpg" >}}

そして、目標の「再計算」ボタンをクリックします。
<!-- Image= indicators14.jpg -->
{{< imagedisplay src="indicators14.jpg" >}}

すると、目標の 「進行中（金額）」 の値が更新されたことがわかります。
<!-- Image= indicators15.jpg -->
{{< imagedisplay src="indicators15.jpg" >}}

このように、目標と関連するエンティティのレコードの連動が行われます。もし連動させたいエンティティを変えたい場合などは、目標指標 で行ってください。

今回は以上になります。