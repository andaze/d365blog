---
title:  "Dynamics 365 で見積もりから請求書まで管理する"
draft: false
weight: 13
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
{{< detailTopImage src="artical13.png" >}}
{{< authorImage src="authorimage.jpg" name="Takafumi Noguchi" linkdin="https://www.linkedin.com/in/tnoguchi1123531" >}}

<!-- Intro  -->
これまで、営業案件と製品について詳しく説明をしてきました。商談が順調に進むと、顧客に向けた見積もりを作成します。その見積もりをもとに商談が受注となると、営業案件を “受注” という状態にして、請求書を作成し、顧客へ提出します。

この一連の流れを Dynamics 365 for Sales で行うための手順をこれからご紹介します。


## 営業案件から見積もりを作成する
見積もりは、既定セールスメニューの「見積もり」から新規作成することができます。
<!-- Image= estimate1.png -->
{{< imagedisplay src="estimate1.png" >}}

ただ、商談を進める上で、新規に作成する場合は営業案件から作成するほうが簡単です。そのため、まず営業案件を開きます。そして、「見積もり」より「＋」ボタンにて新規で見積もりを作成します。
<!-- Image= estimate2.png -->
{{< imagedisplay src="estimate2.png" >}}

そうすると、下の図のように必要な情報（製品、金額、顧客名など）が入力された状態で見積もりが作成されます。あとは、住所などに必要な情報を入力します。
<!-- Image= estimate3.png -->
{{< imagedisplay src="estimate3.png" >}}

見積もりの作成が完了したら、「見積もりのアクティブ化」をクリックします。
<!-- Image= estimate4.png -->
{{< imagedisplay src="estimate4.png" >}}

## 受注の作成
見積もりを顧客に提出後、受注となったら商談は成功です。それでは、さっそく受注のプロセスを行いましょう。まず作成した見積もりを開き、メニューから 「受注の作成」をクリックします。
<!-- Image= estimate5.png -->
{{< imagedisplay src="estimate5.png" >}}

この際、「受注の作成」のダイアログが出るため、受注日を入力します。関連する営業案件をクローズするため、「営業案件のクローズ」にチェックを入れてOKをクリックします。
<!-- Image= estimate6.png -->
{{< imagedisplay src="estimate6.png" >}}

これで、営業案件はクローズとなり状態が「受注」となります。
<!-- Image= estimate7.png -->
{{< imagedisplay src="estimate7.png" >}}

また、先ほどの見積もりは「受注」のレコードとなり、これから受注の処理を行っていきます。
<!-- Image= estimate8.png -->
{{< imagedisplay src="estimate8.png" >}}

顧客の製品やサービスのデリバリーが完了したら、受注の処理をします。まずは、メニューの「受注の処理」ボタンをクリックします。
<!-- Image= estimate9.png -->
{{< imagedisplay src="estimate9.png" >}}

そして、受注の処理として「発送日」と「説明」を入力し、「ステータス」を完了します。
<!-- Image= estimate10.png -->
{{< imagedisplay src="estimate10.png" >}}

これで、受注のレコードが完了、というステータスとなりました。
<!-- Image= estimate11.png -->
{{< imagedisplay src="estimate11.png" >}}

## 受注から請求書を作成する
受注のプロセスが完了したので、さっそく請求書を作成していきます。先ほどの受注のレコードのメニューから 「請求書の作成」をクリックします。
<!-- Image= estimate12.png -->
{{< imagedisplay src="estimate12.png" >}}

そうすると、下記のような請求書のレコードが作成されます。この時点では、ステータスは新規です。請求書の内容を確認したら、「請求書の確認」をクリックして請求書の確認を完了させます。
<!-- Image= estimate13.png -->
{{< imagedisplay src="estimate13.png" >}}

そうすると、ステータスが請求済みとなります。これで顧客への請求が完了していることになりました。さらに、顧客からの支払いを確認した場合には「請求書の支払い完了」をクリックし、ステータスを 完了に変換します。
<!-- Image= estimate14.png -->
{{< imagedisplay src="estimate14.png" >}}

これで、リードから始まった営業案件は無事に受注され、支払いまで完了しました。 Dynamics 365のレコード上では、1つの商談が完了したことになります。

このように、Dynamics 365では営業活動の情報管理をスムーズに行うことができますので、ぜひ活用してください。今回の記事は以上です。