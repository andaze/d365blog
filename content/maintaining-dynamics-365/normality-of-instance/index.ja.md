---
title:  "Dynamics 365 インスタンスの正常性"
draft: false
weight: 1
datetitle: "2017.08.23 | "
image: "artical1.jpg"
Author: "Takafumi Noguchi"
authorimage: "authorimage.jpg"
showinhome: true
showinaccordian: false
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
Dynamics 365 の管理センターを操作して、インスタンスの管理を行ってきましたが、今度はインスタンスを運用する際に、そのインスタンスが正常に動作しているかどうかを管理する方法をご紹介します。

## インスタンスの正常性確認
インスタンスの正常性確認を行う場合は、サービス正常性 を開きます。正常性　の列が「正常なサービス」となっていれば、インスタンスの正常性が保たれています。
<!-- Image= Integrity1.png -->
{{< imagedisplay src="Integrity1.png" >}}

### インスタンスの記憶域の確認
使用記憶域についても確認できます。契約したサブスクリプション数により最初に利用可能な記憶域は異なりますが(※1)、足りない場合は追加購入することも可能です。(※2)
<!-- Image= instance1.jpg -->
{{< imagedisplay src="instance1.jpg" >}}

(※1) 初期の記憶域について

Dynamics 365 ライセンスガイドによると、既定では、10 GB が提供されており、フルユーザー (※1.1) が増えるにつれ、無償利用できる記憶域も増えます。(20 フルユーザーで 5GB の割合)

(※1.1) フルユーザー：Dynamics 365 Planまたは アプリケーション サブスクリプション (Dynamics 365 for Talent を除く) のライセンスを付与されたユーザー。Team Member は含みません。

参考情報：

**Microsoft Dynamics 365 Enterprise エディション ライセンス ガイド**

[http://download.microsoft.com/download/5/6/0/560C4744-EF9F-4401-A620-12B5E9A520CB/Dynamics_365_Enterprise_edition_Licensing_Guide.pdf](https://download.microsoft.com/download/5/6/0/560C4744-EF9F-4401-A620-12B5E9A520CB/Dynamics_365_Enterprise_edition_Licensing_Guide.pdf)


(※2) 記憶域の追加購入について

記憶域の追加購入は、Office 365 管理センターから行います。下記の参考情報の手順を引用します。

<!-- Quate Box -->
**記憶域の Dynamics 365 (オンライン) への追加**   
1  Office 365 管理センターを参照し、Office 365 グローバル管理者資格情報を使用してサインインします。   
2  [請求] > [サービスの購入] の順にクリックする。     
3  [サブスクリプションの追加] セクションまでスクロールし、[Dynamics 365 – 追加データベース ストレージ] タイルの上にマウス ポインターを移動します。    
4  追加のオンライン ストレージの購入    
5  [今すぐ購入] をクリックし、注文プロセスに移動します。   
 

引用元：**Microsoft Dynamics 365 (オンライン) の記憶域の管理**

[https://technet.microsoft.com/ja-jp/library/jj191611.aspx](https://technet.microsoft.com/ja-jp/library/jj191611.aspx)
### インスタンスに異常が確認されたら？
インスタンスの正常性が「サービスの中断」や「サービスの低下」になっていた場合、まずはそのインスタンスにアクセスできるかどうか確認してみてください。

そして、インスタンス内に組織インサイトをインストールしていれば、組織インサイトや監査機能より異常の原因を確認してみてください。
<!-- Image= instance2.jpg -->
{{< imagedisplay src="instance2.jpg" >}}

※組織インサイトはアプリストアからインストールが必要です。

もし問題が解決しないようであれば、

マイクロソフトもしくはご契約されているマイクロソフトパートナーへお問い合わせをする必要があります。

最後は、[インスタンスのバックアップとリストア](#)について触れていきます。

それでは！