---
title:  "Project Service リソースの割り当てと出荷単位"
draft: false
weight: 6
datetitle: "2017.08.23 | "
showinhome: true
showinaccordian: false
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
{{< detailTopImage src="artical6.jpg" >}}
{{< authorImage src="authorimage.jpg" name="Takafumi Noguchi" linkdin="https://www.linkedin.com/in/tnoguchi1123531" >}}
<!-- Intro  -->
Dynamics 365 for Project Service Automation でプロジェクトを作成して、チームメンバーをアサインする際に、アサインされたメンバーの割り当て時間の計算が少し複雑なので、その動作についてご紹介します。

## リソースの”割り当て方法”
プロジェクトのチームメンバーとしてリソースを割り当てる際、「割り当て方法」というフィールドに選択肢があります。
<!-- Image= psa-assign01.png -->
{{< imagedisplay src="psa-assign01.png" >}}

公式ページを確認すると下記のような意味であることがわかります。

<!-- Quate box -->
* **全キャパシティ** は、指定されている開始日と終了日のリソースの全キャパシティを予約します。
* **キャパシティの割合**は、指定されている開始日と終了日のリソースのキャパシティの割合でリソースを予約します。
* **時間別 – 均等分布** は、指定された開始日から終了日まで 1 日あたりに等しく分散して、指定された時間数のリソースを予約します。
* **時間別 – 前倒し** は、指定された開始日から終了日まで 1 日あたりの前倒し時間で、指定された時間数のリソースを予約します。
* **なし** は、チームに対してリソースを追加しますが、このキャパシティを吸収する予約は作成されません。


引用元： [タスクにリソースを割り当てる方法を教えてください](https://docs.microsoft.com/ja-jp/dynamics365/project-operations/psa/FAQ-assign-resources-to-tasks)

上記の説明だけでは少しわかりづらいので、図で表現してみました。
<!-- Image= psa-assign02.png -->
{{< imagedisplay src="psa-assign02.png" >}}

上図は、2019/02/07 – 02/08 の 2日間 ( 8時間 x 2 = 16 時間）リソースをそれぞれの割り当て方法で予約したものです。※この8時間という時間は[作業テンプレート]()にて設定しています。

この 16時間という時間が影響するのは「全キャパシティ」と「キャパシティの割合」です。
  * 「全キャパシティ」の場合は、100% 予約することになるので、**2日間で 8時間**をそれぞれ1つのプロジェクトで予約されています。
  * 「キャパシティの割合」の場合は、その割合を設定しますが、ここでは50%としているため、**2日間で 4時間**が予約されています。

「時間別 – 均等分布」と「時間別 – 前倒し」は設定の際に「期間」（これは時間の意味）を設定します。上図では期間を12時間としています。
  * 「時間別 – 均等分布」の場合は、12時間を2日間で均等に分布するため、**12時間 / 2日間 = 6時間** が均等に割り当てられます。
  * 「時間別 – 前倒し」の場合は、前日の **2/7 に 8時間**を先に割り当て、余った **4時間を 2/8** に割り当てています。

このように割り当て方法の設定により、リソースで予約される時間が異なるので、うまく使い分けてください。

## WBS の出荷単位について
上記のようにプロジェクトのメンバーとしてある一定の時間を予約したら、その時間を WBS でタスクに割り当てていきます。その際に、下図のような「出荷単位」という項目があります。
<!-- Image= psa-assign03.png -->
{{< imagedisplay src="psa-assign03.png" >}}

この「出荷単位」は、WBSの「工数」と「期間」と連動しています。例えば、下図のような「工数」が 40時間、「期間」が 5日で「出荷単位」が100% の開発タスクがあるとします。
<!-- Image= psa-assign04.png -->
{{< imagedisplay src="psa-assign04.png" >}}

この開発タスクに2名の別会社からのプログラマーをアサインする場合、「追加」ボタンで2名のプログラマを「出荷単位」100％で追加すると、「工数」が50％毎に割り当てられます。
<!-- Image= psa-assign05.png -->
{{< imagedisplay src="psa-assign05.png" >}}

もし2名のプログラマの作業負担が、80:20 の場合はどうするのでしょうか？「出荷単位」の％を変更します。
<!-- Image= psa-assign06.png -->
{{< imagedisplay src="psa-assign06.png" >}}

このように割り当ててられているタスクに複数のリソースがアサインされているのであれば、「出荷単位」で各リソースの割り当て時間を調整できます。

### 50% のみ割り当てられているリソースの出荷単位について
1つのプロジェクトに100％のリソースを割り当てることが基本かと思いますが、PM のように複数のプロジェクトを兼任している場合は、リソースの割り当て率を分配する必要があります。例えば、下図のような PMで「割合」が 50% のリソースを WBS のタスクに割り当てるとします。
<!-- Image= psa-assign07.png -->
{{< imagedisplay src="psa-assign07.png" >}}

WBS の「フィット＆ギャップ」タスクの「工数」は40時間で、「出荷単位」を100％でアサインすると、本来 40時間が割り当てられるはずです。
<!-- Image= psa-assign08.png -->
{{< imagedisplay src="psa-assign08.png" >}}

ただ、ここは Dynamics 365 for Project Service Automation のいいところで、プロジェクトのチームを確認すると「割り当てられた時間」は20時間 (40時間 x 50% ) と自動で計算されています。
<!-- Image= psa-assign09.png -->
{{< imagedisplay src="psa-assign09.png" >}}

リソースのプロジェクト参画割合を気にすることなく、タスクにアサインできます。これは個人的によくできた機能だなと思っています。

プロジェクトメンバーのリソース割り当てや出荷単位については動作が少しわかりづらいので、参考になればと思います。今回はここまで。    
&nbsp;