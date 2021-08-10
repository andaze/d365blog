---
title:  "Dynamics 365 製品のクロスセル・アップセルを活用する"
draft: false
weight: 12
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
{{< detailTopImage src="artical12.png" >}}
{{< authorImage src="authorimage.jpg" name="Takafumi Noguchi" linkdin="https://www.linkedin.com/in/tnoguchi1123531" >}}
<!-- Intro  -->
営業活動においては、顧客収益性を上げるために必要な活動としてアップセル、およびクロスセルがあります。

アップセルは、自社の製品やサービスをより上位で高価なものとして販売する営業活動で、クロスセルは、販売している製品やサービスに関連したものを組み合わせて販売する営業活動です。

オンライン専用ライセンスのプロパティにて、セグメントを設定したことを前回までに作成していました。

例えば、Standard から Enterprise にセグメントを変更して、より高機能な製品として販売することがアップセルならば、オンライン製品ライセンスに、Office 365 や、Dynamics のオンラインライセンスを組み合わせて販売する方法はクロスセルとなります。

## 製品にアップセル・クロスセルの設定を行う
それでは、アップセルの設定を行います。まず事前に、アップグレード版の製品をひとつ作成しておきます。「設定」-「製品カタログ」から「製品およびファミリ」を開きます。
<!-- Image= sell1.png -->
{{< imagedisplay src="sell1.png" >}}

ここで、製品を追加します。今回は、オンライン専用ライセンス Lite のアップグレード版、Professional を作成します。まずこの製品を複製しましょう。製品にチェックをいれます。
<!-- Image= sell2.png -->
{{< imagedisplay src="sell2.png" >}}

「複製」ボタンをクリックします。
<!-- Image= sell3.png -->
{{< imagedisplay src="sell3.png" >}}

製品の作成画面にて、Professional のアップグレード製品を作成します。
<!-- Image= sell4.png -->
{{< imagedisplay src="sell4.png" >}}

また、価格表品目において、価格を決めておきます。この設定をしておかないと、営業案件で製品を選択することができません。
<!-- Image= sell5.png -->
{{< imagedisplay src="sell5.png" >}}

今回は Professional なので、15,000 円の固定金額にしておき、値引き表は設定せずに保存します。
<!-- Image= sell6.png -->
{{< imagedisplay src="sell6.png" >}}

次は、このオンライン専用ライセンス Lite を開き、「製品の関連付け」にて「＋」ボタンで新規に関連付けを作成します。
<!-- Image= sell7.png -->
{{< imagedisplay src="sell7.png" >}}

ここで、「関連製品」に オンライン製品ライセンス Professionalを選択して、「販売関連付けの種類」を アップセル、「方向」 を一方向 として保存します（アップセルの方向は一方向のみ設定可能）。
<!-- Image= sell8.png -->
{{< imagedisplay src="sell8.png" >}}

そうすると、以下のように製品に関連付けがされました。
<!-- Image= sell9.png -->
{{< imagedisplay src="sell9.png" >}}

では、クロスセルも同時に設定します。同様に「＋」ボタンで追加画面に遷移して、「関連製品」 に CRMオンラインライセンスを選択して、「販売関連付けの種類」を クロスセル、「方向」 を双方向 として保存します。
<!-- Image= sell10.png -->
{{< imagedisplay src="sell10.png" >}}

これで、設定は完了しました。
<!-- Image= sell11.png -->
{{< imagedisplay src="sell11.png" >}}

##

## 営業案件にある製品に関連したアップセル・クロスセルの製品を利用する
それでは、設定したアップセル・クロスセルの製品を、営業案件に設定していきましょう。営業案件を開き、「製品品目」 で「＋」ボタンをクリックします。そこでまず、オンライン製品ライセンスLiteを設定します。プロパティの設定も事前に完了させておきます。
<!-- Image= sell12.png -->
{{< imagedisplay src="sell12.png" >}}

ここで、右側の列に「推奨事項」とあるので、そこをクリックします。
<!-- Image= sell13.png -->
{{< imagedisplay src="sell13.png" >}}

クロスセル、およびアップセルに設定した製品が表示されています。

追加したいアイテムの 「ピック」 という箇所をクリックすると、画面左下の 「選択済み」 のカウントが「1」になります。クリックした分だけ、カウントアップします。選択が完了したら、「リストに追加」ボタンをクリックします。
<!-- Image= sell14.png -->
{{< imagedisplay src="sell14.png" >}}

これで、クロスセルやアップセルに設定した関連製品を提案に追加することが可能になります。
<!-- Image= sell15.png -->
{{< imagedisplay src="sell15.png" >}}

この関連性の設定は、製品やサービスを複数管理している企業ではとても有効です。関連製品を設定することで、クロスセルやアップセルの活動を見落とすことがなく、営業活動の収益性向上を期待できるでしょう。

今回の記事はここまでです。