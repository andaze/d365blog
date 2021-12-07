---
title:  "Marketing メール送受信不可の対応【無償版】"
draft: false
weight: 3
datetitle: "2017.08.23 | "
showinhome: true
showinaccordian: true
rightMenu: "artical"
indexImg: "artical3.jpg"
description: "Dynamics 365 for Marketing 無償版を利用して、マーケティングメールを送信する際、うまく送受信できない現象が確認できたので、そのトラブルシュート方法について記載しておきます。"
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
Dynamics 365 for Marketing 無償版を利用して、マーケティングメールを送信する際、うまく送受信できない現象が確認できたので、そのトラブルシュート方法について記載しておきます。


## テスト送信が受信されない
Dynamics 365 for Marketing のマーケティング電子メールを作成して、「テスト送信」をクリックしても、該当のメールアドレスにメールが受信されませんでした。
<!-- Image= mail01.jpg -->
{{< imagedisplay src="mail01.jpg" >}}


### Dynamics 365 のメール設定を確認する
基本中の基本ですが、Dynamics 365 でメールが送受信できるかどうかの確認をします。

「設定」から「電子メールアクセス」で「メールボックス」をクリックします。
<!-- Image= mail02.png -->
{{< imagedisplay src="mail02.png" >}}


自分のメールボックスが下図のように、送受信とも  “成功” となっていると問題はありません。
<!-- Image= mail03.png -->
{{< imagedisplay src="mail03.png" >}}


”実行しない” となっていると未設定のため、メールボックスをクリックします。「同期方法」で下図のように設定したら、「電子メールの承認」をクリックします。
<!-- Image= mail04.png -->
{{< imagedisplay src="mail04.png" >}}


承認後、今度は「メールボックスのテストと有効化」をクリックして、ダイアログでチェックをいれて「OK」をクリックします。
<!-- Image= mail05.png -->
{{< imagedisplay src="mail05.png" >}}


しばらくすると、送受信とも “成功” となり、Dynamics 365 からメールの送受信が可能になりました。
<!-- Image= mail06.png -->
{{< imagedisplay src="mail06.png" >}}

## Exchange Online でメール追跡
上記のように Dynamics 365 でメールを有効にしている状態でも、マーケティングメールを Outlook で受信ができない場合は、Exchange 側が怪しい。

そこで、マイクロソフトサポートに確認したところ、どうやら “onmicrosoft.com” というドメイン名が Exchange 側でブロックされているのではないか？とのこと。

Office 365 から Exchange Online でメール追跡を行ってみます。

### Exchange Online へアクセス
まず、[Office 365 管理センター](https://admin.microsoft.com/AdminPortal/Home)へアクセス。左のパネル「管理センター」より「Exchange」をクリックします。

Exchange 管理センターを開くと、「メールフロー」があるのでクリックして、「メッセージの追加」から「新しいメッセージ追跡に今すぐ移動する」をクリックします。
<!-- Image= mail07.png -->
{{< imagedisplay src="mail07.png" >}}


左パネルの「メール フロー」で「メッセージ追跡」をクリックします。
<!-- Image= mail08.png -->
{{< imagedisplay src="mail08.png" >}}


「追跡の開始」をクリックして、送信元と送信先を既定のすべてのままにして「検索」をクリックします。
<!-- Image= mail09.png -->
{{< imagedisplay src="mail09.png" >}}

結果を確認すると、先ほどマーケティングメールで送信したメールが “FilteredAsSpam” としてスパム判定されていました。
<!-- Image= mail10.png -->
{{< imagedisplay src="mail10.png" >}}


受信側の Outlook を確認すると、確かに迷惑メールに入っています。右クリックで「迷惑メールにしない」をクリックしておきます。
<!-- Image= mail11.png -->
{{< imagedisplay src="mail11.png" >}}


Exchange メール追跡を更新すると、Not Junk Mail として Delivered されたことがわかります。
<!-- Image= mail12.png -->
{{< imagedisplay src="mail12.png" >}}


もう一度マーケティングメールを送信してみました。
<!-- Image= mail13.png -->
{{< imagedisplay src="mail13.png" >}}


今度は正しく受信されたことを確認。
<!-- Image= mail14.png -->
{{< imagedisplay src="mail14.png" >}}


これで、無償版でもメールマーケティング機能が正しく動作するようになりました。

## 解消しない場合はMSサポートへ
メールが届かない現象確認時に現象の切り分けをしていたのですが、無償版の通常のメール、もしくは実稼働のマーケティングメールは正しく受信されていました。なぜ無償版のマーケティングメールだけ？と疑問は残りましたが、いったんはこの方法でメールの追跡をして、迷惑メールに入っていないかご確認ください。

それでも解消しない場合は、マイクロソフトサポートへお問い合わせをお願いします。（本ブログでの調査は出来かねますので、ご了承ください）

それでは今回はここまで。    
&nbsp;