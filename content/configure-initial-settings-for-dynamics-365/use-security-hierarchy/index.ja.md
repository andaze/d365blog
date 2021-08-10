---
title:  "Dynamics 365 階層セキュリティ設定について"
draft: false
weight: 5
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
{{< detailTopImage src="artical5.jpg" >}}
{{< authorImage src="authorimage.jpg" name="Takafumi Noguchi" linkdin="https://www.linkedin.com/in/tnoguchi1123531" >}}
<!-- Intro  -->
Dynamics 365 には、エンティティ単位でのセキュリティを制御するセキュリティ ロール、フィールド単位の フィールド セキュリティ、ユーザーの所属を管理する 部署やチーム以外に、階層セキュリティ という発展したセキュリティ概念を持っています。


階層セキュリティの設定は、既定では有効になっていませんが、これからご紹介する手順によって、セキュリティ設定を行うことが可能になります。

## 階層セキュリティでできること
階層セキュリティを使うと、たとえそのユーザーのエンティティへのアクセス権限が「ユーザーのみ」（自分のレコードのみアクセス可能）となっていたとしても、自身の階層より下の階層のユーザーのデータを閲覧・編集することが可能になるため、セキュリティロールの設定はシンプルに留めつつ、アクセス範囲を広げることができる点が大きなメリットになります。

階層セキュリティは主に２つの階層のどちらかでユーザーのセキュリティ範囲を制御することが可能になります。１つは、「管理者階層」そしてもう１つは 「ポジション階層」 です。
 
管理者階層は、ユーザーにとっての上司部下の関係によるセキュリティ範囲の設定になり、ポジション階層は、上司部下の関係に関わらず、そのユーザーのポジション（例えば、プロジェクトマネージャー、チームリーダー、プロジェクトメンバー など）により範囲を制御します。 

以下の図では、管理者として、社長の下に部長や課長、そして課員がそれぞれ階層化されており、上司は部下のデータに対して閲覧や編集権限を保有するような構造となります。
<!-- Image= hierarchisetting.png -->
{{< imagedisplay src="hierarchisetting.png" >}}

もしポジション階層ということであれば、以下の図のようにプロジェクトマネージャーというポジション以下にリーダーや開発者などが階層構造となっています。この場合、上司部下という関係性は問われません。（業務委託で外部ベンダーが開発を担う場合などが想像しやすいのではないでしょうか）
<!-- Image= hierarchisetting1.png -->
{{< imagedisplay src="hierarchisetting1.png" >}}


## 階層セキュリティの設定を行う
階層セキュリティの設定を行いましょう。「設定」の「セキュリティ」を開いて、「階層セキュリティ」をクリックします。
<!-- Image= setting.png -->
{{< imagedisplay src="setting.png" >}}


### 管理者階層の設定
「階層モデルの有効化」にチェックをいれると階層セキュリティが有効になります。✔をいれたら、階層モデルを選択します。まずは「管理者階層」で設定をしましょう。
<!-- Image= administrative.png -->
{{< imagedisplay src="administrative.png" >}}


「階層の深さ」については、上述の図を見るとわかりますが、社長からみて１レベル下は、営業部長やシステム部長、２レベル下は営業および課長、３レベル下はエンジニア になります。この階層の深さを考慮するときは、社長のようなすべての権限を保持していてもいい階層で判断するよりも、ある程度のセキュリティ制御が必要な階層を軸に考えるといいです。

部長や課長レベルが、どの階層まで見えていいか、と考えると、深すぎると見える範囲が広がりすぎてしまうので、２や３くらいの深さが妥当ではないでしょうか。今回の例では２とします。

<!-- Image= level.png -->
{{< imagedisplay src="level.png" >}}


「階層から除外するエンティティを選択してください」では、階層セキュリティに該当させないエンティティを除外できます。これは、ある一部の部署の特定の特権をセキュリティ ロールにてあてられたエンティティがあるのであれば、除外しておくことができます。

今回は特に設定しませんので、そのまま「保存して閉じる」で管理者階層のセキュリティ設定を完了します。

 <!-- Image= administrative1.png -->
{{< imagedisplay src="administrative1.png" >}}



そして、管理者の設定を各ユーザーで行いましょう。「セキュリティ」の「ユーザー」を開いて、特定のユーザー情報を開きます。ユーザー情報にある「組織情報」の「上司」に上司となるべきユーザー名を設定したら保存してください。これで階層が完成しました。
<!-- Image= administrative2.png -->
{{< imagedisplay src="administrative2.png" >}}


## ポジション階層の設定
同じようにポジション階層の設定についても確認しましょう。先ほどの「階層セキュリティ」画面に戻り、「階層モデルの選択」を「カスタム ポジション階層」に設定します。
<!-- Image= administrative3.png -->
{{< imagedisplay src="administrative3.png" >}}


この時点ではまだポジションを作成していないので、「構成」をクリックします。するとポジションの画面に遷移するので「＋新規」ボタンをクリックして新規作成を行いましょう。
<!-- Image= administrative4.png -->
{{< imagedisplay src="administrative4.png" >}}


例えば以下のように設定しました。プロジェクトマネージャーというポジションは一番上にあたるので親ポジションは設定せず、ポジションのユーザーを追加しています。このポジションの下に 開発リーダー を作成する場合は、親ポジションを プロジェクトマネージャーに設定します。
<!-- Image= administrative5.png -->
{{< imagedisplay src="administrative5.png" >}}

すべて作成したら、先ほどの階層セキュリティの設定に戻り、保存して閉じてください。これでポジションによる階層の設定が完了しました。

より細かい解説や検証結果については、以下の技術情報やブログが参考になりますのであわせてご確認ください。


アクセスを制御する階層セキュリティ

[https://docs.microsoft.com/ja-jp/dynamics365/customer-engagement/admin/hierarchy-security])(https://docs.microsoft.com/ja-jp/power-platform/admin/hierarchy-security)

Dynamics CRM 2015/Online 2015 更新プログラム 階層セキュリティ : ポジション階層

[https://blogs.msdn.microsoft.com/crmjapan/2015/02/02/dynamics-crm-2015online-2015-3854/](https://docs.microsoft.com/en-us/archive/blogs/crmjapan/dynamics-crm-2015online-2015-3854)

それでは今回はここまで。    
&nbsp;