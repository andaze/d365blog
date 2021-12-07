---
title:  "Dynamics 365 アプリの設定"
draft: false
weight: 7
datetitle: "2017.08.23 | "
showinhome: true
showinaccordian: true
rightMenu: "artical"
indexImg: "artical7.jpg"
description: "ここでは、Dynamics 365 のアプリケーションについてすこし触れていきます。"
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
ここでは、Dynamics 365 のアプリケーションについてすこし触れていきます。

Dynamics 365 ではアプリケーションという機能が利用できるようになり、ユーザーのセキュリティロールによりアクセス可否を設定できるようになっています。

Dynamics 365 インストール直後だと、既定のアプリケーション、営業、サービスなどが作成されていますが、例えば、会社内の営業部隊には、営業というアプリケーションにアクセスさせることで、不要なエンティティやデータを事前に見せなくする、という管理も可能になります。

アプリケーションには、
* サイトマップ
* ダッシュボード
* フォーム
* ビューグラフ
* 業務プロセスフロー

が含まれています。

Dynamics 365 のメニューを開くと、下記のように利用できるアプリケーションが表示されます。
<!-- Image= menu.png -->
{{< imagedisplay src="menu.png" >}}


アプリケーションの表示名を変更する場合は、「設定」の「管理」より、「システムの管理」で変更することが可能です。
<!-- Image= menu1.png -->
{{< imagedisplay src="menu1.png" >}}

「システム管理」 を開きます。
<!-- Image= menu2.png -->
{{< imagedisplay src="menu2.png" >}}


「全般」 タブの 「既定のアプリ名」 で変更します。
<!-- Image= menu3.png -->
{{< imagedisplay src="menu3.png" >}}

各アプリケーションは、「システムのカスタマイズ」 にて設定が可能です。
<!-- Image= menu4.png -->
{{< imagedisplay src="menu4.png" >}}

「アプリ」 というコンポーネントがあるため、そこで既存のアプリケーションを変更することや、新規で作成することも可能になります。
<!-- Image= menu5.png -->
{{< imagedisplay src="menu5.png" >}}


「営業」 というアプリケーションを確認してみましょう。
<!-- Image= menu6.png -->
{{< imagedisplay src="menu6.png" >}}


ダブルクリックをすると、アプリ デザイナー が開きます。ここで、サイトマップやダッシュボード、エンティティの設定を行っていきます。

アプリケーションのサイトマップについては、下記の箇所から構成できます。サイトマップについては前回記載していますので、割愛します。
<!-- Image= menu7.png -->
{{< imagedisplay src="menu7.png" >}}


左下の ダッシュボード の「詳細」をドリルダウンすると、利用するダッシュボードが一覧化されています。営業のアプリケーションで利用するかどうかについては、右側のペインの 「コンポーネント」 にて設定が可能です。
<!-- Image= menu8.png -->
{{< imagedisplay src="menu8.png" >}}

業務プロセスにおいても同様です。
<!-- Image= menu9.png -->
{{< imagedisplay src="menu9.png" >}}

ここで少し話しを戻します。

そもそも なぜアプリケーションが必要なのか？ ということですが、これはある程度 Dynamics 365 を使って、社内外の CRM 開発を進めると実感するのですが、業務プロセスフローやダッシュボード、フォームやビューは、とにかくユーザーの要望に応じてどんどん増えていきます。

もし Dynamics 365 を複数の部署をまたいで利用する場合は、営業部門のビュー、マーケティング部のビューがビューのセレクターに一覧で表示されて、とても煩雑かつ使いづらくなってきます。

このようなことが起こることを事前に防ぐためにも、アプリケーションを利用して、各部署で利用するビューやダッシュボードだけを表示する工夫は事前に考慮が必要になります。

それでは、アプリ デザイナーに戻ります。

エンティティ では、現在のアプリケーションで利用されるエンティティが表示されています。新しくエンティティを追加する場合は、左上の ＋（追加）ボタン、もしくは、右ペインの 「コンポーネント」 から 「エンティティ」 をクリックすると、エンティティ追加画面になります。
<!-- Image= menu10.png -->
{{< imagedisplay src="menu10.png" >}}

基本はすでに作成されているエンティティを、新たに営業アプリケーションに追加するか、もしくは新しいエンティティを作成する、という作業になります。
<!-- Image= menu11.png -->
{{< imagedisplay src="menu11.png" >}}

ビューやグラフについても同様な作業になります。

下記の情報がとても参考になるので、あわせてご参照ください。

参考情報：Microsoft Dynamics 365 新機能: 新しいアプリケーション: アプリケーションデザイナー

[https://blogs.msdn.microsoft.com/crmjapan/2017/01/30/dynamics-365-dec-update-new-feature-business-application-2/](https://docs.microsoft.com/en-us/archive/blogs/crmjapan/dynamics-365-dec-update-new-feature-business-application-2)      
&nbsp;