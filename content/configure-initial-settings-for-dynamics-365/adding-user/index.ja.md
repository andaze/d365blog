---
title:  "Dynamics 365 ユーザーを追加する"
draft: false
weight: 1
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
{{< detailTopImage src="artical1.jpg" >}}
{{< authorImage src="authorimage.jpg" name="Takafumi Noguchi" linkdin="https://www.linkedin.com/in/tnoguchi1123531" >}}
<!-- Intro  -->
Dynamics 365 のテナント・インスタンスの作成が完了したら、Dynamics 365 にユーザーを追加する手順をご紹介します。
Dynamics 365 は **Office 365 のユーザー情報を同期**しているため、基本的には Office 365 でユーザー情報を更新することになります。

## Office 365 でユーザーを追加する
まずは [ Office 365 (2019年1月時点では Microsoft 365 ) 管理センター](https://admin.microsoft.com/)へログインします。
左パネルより「ユーザー」を開き「アクティブなユーザー」をクリックして、「＋」をクリックします。

<!-- Image= adduser-01.png -->
{{< imagedisplay src="adduser-01.png" >}}


任意の名前やメールアドレスを設定します。
<!-- Image= adduser-02.png -->
{{< imagedisplay src="adduser-02.png" >}}


「製品ライセンス」において、Dynamics 365 のライセンスにチェックをいれたら、「追加」をクリックします。
<!-- Image= adduser-03.png -->
{{< imagedisplay src="adduser-03.png" >}}

これでユーザーが作成されました。このユーザーはある程度の時間待つと Dynamics 365 でも反映されます。
以下公式ドキュメントでは、数分程度との記載があります。

<!-- QuteBox -->
Office 365 管理センター でユーザーを作成し、ライセンスを割り当てると、Dynamics 365 (online) にもユーザーが作成されます。 Office 365 管理センター と Dynamics 365 (online) 間の **同期処理が完了するまでに数分かかる場合** があります。

ユーザー ID とパスワードを入力することによって、ユーザーは Office 365 管理センター にアクセスして、サービスに関する情報を表示できます。 ただし、このユーザーに少なくとも Dynamics 365 (online) の 1 種類のセキュリティ ロールを割り当てるまで、ユーザーは Dynamics 365 (online) にアクセスできません。

引用元： [Dynamics 365 (online)でのユーザーの作成およびセキュリティ ロールの割り当て](https://docs.microsoft.com/ja-jp/power-platform/admin/create-users-assign-online-security-roles)

※もし反映されない場合は、一度 Dynamics 365 のライセンスを外して、再付与で改善されるかで試してみてください。
それでも反映されない場合は、同期がうまくいっていない可能性があるので、Office 365 管理センターの「サポート」より「新規のお問い合わせ」でカスタマーサポートへお問い合わせをしてください。同期の不整合をリセットする処理を行ってくれるはずです。

<!-- Image= adduser-04.png -->
{{< imagedisplay src="adduser-04.png" >}}


## Dynamics 365 でユーザーを確認する
Dynamics 365 にユーザーが追加されたかどうかを確認します。「設定」を開き、「セキュリティ」をクリックします。
<!-- Image= Settings-1.png -->
{{< imagedisplay src="Settings-1.png" >}}


「ユーザー」 にアクセスします。
<!-- Image= Users.png -->
{{< imagedisplay src="Settings-1.png" >}}


ライセンスを付与されたアカウントが 「有効なユーザー」の一覧に自動で反映されます。
先ほど追加したユーザーが反映されていることがわかります。
<!-- Image= adduser-05.png -->
{{< imagedisplay src="adduser-05.png" >}}


ユーザー名をクリックしてみます。すると先ほど Office 365 管理センターで設定した氏名やユーザー名、メールアドレスが設定されています。これらの項目は、Dynamics 365 では変更はできませんので、ユーザー名の変更などがある場合は、Office 365 管理センターで変更をしてください。
<!-- Image= adduser-06.png -->
{{< imagedisplay src="adduser-06.png" >}}


## CAL情報について
「クライアント アクセス ライセンス情報」のセクションを確認すると、「アクセスモード」が既定では **“読み取り/書き込み”** となっていると思います。
<!-- Image= adduser-07.png -->
{{< imagedisplay src="adduser-07.png" >}}


このアクセスモードに設定されているユーザーはライセンスが必要な Dynamics 365 の一般ユーザーを意味します。多くのユーザーはこの設定が規定のため、”読み取り/書き込み” を利用して Dynamics 365 にアクセスすることになりますが、アクセスモードには２種類の特殊なモードが存在します。

### アクセスモード：管理
管理モードは、システムの管理者としてアクセスすることができる設定です。
これは Office 365 管理センターでユーザーを追加する際に、「役割」で「カスタム管理者」を選択して、
「Dynamics 365 サービス管理者」にチェックを入れることで利用できるようになります。
<!-- Image= adduser-08.png -->
{{< imagedisplay src="adduser-08.png" >}}


管理モードで追加されたユーザーは、Dynamics 365 の管理者として利用できます。
この管理ユーザーにおいては、**Dynamics 365 のライセンス付与は必要ありません。**
詳細は以下の公式ドキュメントをご参照ください。

<!-- QuteBox -->
既定では、Dynamics 365 (online) ライセンスを所有していないすべての Office 365 グローバル管理者と Office 365 サービス管理者には、次の 2 つのレベルの Dynamics 365 (online) アクセス許可が付与されます。

* システム管理者セキュリティ ロール
* 管理アクセス モード
システム管理者セキュリティ ロールは、Dynamics 365 管理者に対して付与され、Dynamics 365 の機能を管理および構成するために使用される管理 (設定) 領域への無制限のアクセスを可能にします。

引用元: [グローバル管理者とサービス管理者はライセンスなしで管理できる](https://docs.microsoft.com/ja-jp/power-platform/admin/global-service-administrators-can-administer-without-license)

なお、上述の公式ドキュメントの **“グローバル管理者”** とは、「役割」で「全体管理者」にチェックが入ったユーザーを意味します。

<!-- Image= adduser-09.png -->
{{< imagedisplay src="adduser-09.png" >}}

なお、管理ユーザーは Dynamics 365 の**設定のみアクセスすることができます。**営業やマーケティング、サービスなどのデータへのアクセスは制御されているので、システムを管理するだけのアカウントに割り当てることで営業データへの不要なアクセスを防ぐことができます。


### アクセスモード：非対話型
非対話型というアクセス モードは、アプリケーション間でプログラムを実行する時の双方（アプリケーションとDynamics 365）のアクセスを行う際に利用できます。例えば、Web API を使って Dynamics 365 からデータを取得して、Azure サーバー上の SQL にデータを書き込む際のアクセスユーザーとして利用することができます。非対話型ユーザーも、管理ユーザーと同様に **Dynamics 365 のライセンスを付与する必要がありません。**

管理ユーザーと異なる点は、
* Dynamics 365 のユーザー一覧に表示させるために一度ライセンスを付与する必要があること
* 非対話型ユーザーで、Dynamics 365 にログインすることはできないこと

になります。

それでは、先ほどライセンスを付与して確認したユーザーを非対話型のアクセスモードに切り替えてみます。
ユーザー情報の「クライアント アクセス ライセンス情報」にて “非対話型” を選択して保存します。

<!-- Image= adduser-10.png -->
{{< imagedisplay src="adduser-10.png" >}}


**Office 365 管理センター**に戻り、先ほどのユーザーの Dynamics 365 のライセンスを無効にして「保存」をクリックします。
<!-- Image= adduser-11.png -->
{{< imagedisplay src="adduser-11.png" >}}


これでOKです。先ほどの Dynamics 365 の「アクティブなユーザー」一覧を確認しても、
ライセンスを無効化したユーザーは表示されたままです。

<!-- Image= adduser-12.png -->
{{< imagedisplay src="adduser-12.png" >}}


なお、非対話型モードを利用できる**最大数は５ユーザー**です。

<!-- quate Box -->
非対話型ユーザーは一般的な意味の “ユーザー” ではありません – 非対話型ユーザーは人ではなく、**ユーザー アカウントで作成されるアクセス モード**です。 非対称型ユーザーは、アプリケーション間で、プログラムによる Dynamics 365 との双方向のアクセスに使用されます。 非対話型ユーザー アカウントにより、Dynamics 365/ERP コネクタなどのアプリケーションやツールは、Dynamics 365 (online)のライセンスなしで、Dynamics 365 (online)の認証とそれに対するアクセスが可能になります。 Dynamics 365 (online)の各インスタンスについて、**最大 5 個の非対話型ユーザー アカウントを作成できます。**

引用元: [Dynamics 365 (online)でのユーザーの作成およびセキュリティ ロールの割り当て](https://docs.microsoft.com/ja-jp/power-platform/admin/create-users-assign-online-security-roles)

## 次に行うこと
Dynamics 365 のユーザーを追加する手順はここまでです。管理ユーザーについてはこの状態でもログインすることは可能ですが、通常のユーザーについては、ここから**セキュリティ設定**を行い、アクセス権を付与する作業が必要です。詳しくは次回にご紹介します。      
&nbsp;