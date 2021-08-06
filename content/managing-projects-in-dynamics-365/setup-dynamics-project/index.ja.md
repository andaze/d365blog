---
title:  "Project Service のセットアップ"
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
<!-- Intro  -->
今回は Dynamics 365 for Project Service Automation (Project Service) について理解をしていきたいと思います。Dynamics 365 Customer Engagement Plan のライセンスを購入していると、Sales や Customer Service と同様に利用することができるアプリケーションですが、Project Service は Sales と比較するとあまりポピュラーではないという印象です。


## Project Service Automation とは？
Dynamics 365 for Project Service Automation は プロジェクト発足に必要な予算の見積もり、自社のリソースの最適化、スケジュールやプロジェクトの進捗状況の管理、経費や収益の計算など、プロジェクトに関わる業務を一括して管理するためのアプリケーションになります。プロジェクト単位で案件を請け負う SIer や製造関係のプロジェクトを管理する上で、有益なアプリケーションです。

さらに、Microsoft Project クライアントに[Project Service Automation  アドイン](https://www.microsoft.com/ja-JP/download/details.aspx?id=54299) をインストールすると、Dynamics 365 for Project Service Automation で作成したプロジェクトの WBS を、ローカル Project で管理できるようになります。これは結構便利機能です。

※ Dynamics 365 の [アプリケーション]()については以前の記事もご参考ください。

## Project Service Automation の構造
インストールを行う前に、Project Service Automation を構成する主なエンティティについて理解をします。Dynamics 365 for Sales では、リードがあり、そこから取引先企業と担当者、営業案件とつながっていました。Project Service Automation は、営業案件から見積もりが作成され、その見積もりが採用されると、プロジェクト契約が作られます。そのプロジェクト契約にプロジェクトを追加することでプロジェクト管理が開始されます。
<!-- Image= psa-001.png -->
{{< imagedisplay src="psa-001.png" >}}

プロジェクトは、以下のように様々なエンティティと関係しています。
<!-- Image= psa-02.png -->
{{< imagedisplay src="psa-02.png" >}}

上述の図の各エンティティについて、簡単な説明は以下の通りです。

|       |  |
| ----------- | ----------- |
| プロジェクト | プロジェクトを管理 |
| 取引先企業 | 顧客情報。for Sales と同じ |
| 組織単位 | 組織。自社、外注先企業や外国の部署などを管理 |
| リソース | 	主に人を管理。ユーザーやスタッフなどプロジェクトにアサインすることができる |
| リソースのロール | 	役割。PMやプログラマーなど |
| 能力モデル | スキルのレベル。(例) 3段階評価 (初心者 – 上級者)  |
| リソースのスキル | 技能。プログラミングやマネジメントなどのスキル、保有している資格 |
| 価格表 | リソースの価格。原価と営業価格を分けて作成 |
| ロール価格 | ロールの価格。PM、プログラマーは原価 XX万 などを設定 |

上述のエンティティについては、Project Service Automation をインストールして構成する際に細かく説明をしていきます。


## Project Service Automation をインストール
構築しているインスタンスに Dynamics 365 for Project Service Automation がインストールされていない場合は、この手順が必要になります。 [ Dynamics 365 管理センター](https://port.crm7.dynamics.com/) を開き、インストールしたいインスタンスの「ソリューション」をクリックします。
<!-- Image= psa-03.png -->
{{< imagedisplay src="psa-03.png" >}}

「プロジェクト サービス自動化」を選択して「インストール」をクリックします。 インストールが完了するまで、しばらく時間が必要ですのでお待ちください。
<!-- Image= psa-04.png -->
{{< imagedisplay src="psa-04.png" >}}

インストールが正常に完了すると、[Dynamics 365 のホーム画面](https://home.dynamics.com/) を表示して、Project Service Automation (バージョン 3 だと、Project Service）がアプリ一覧に表示されているのでクリックしてみます。
<!-- Image= psa-05.png -->
{{< imagedisplay src="psa-05.png" >}}

## Project Service Automation の設定
Project Service Automation を利用するための事前設定を行います。この作業はすべて管理者向けの作業です。

### ロールとスキルを作成する
最初にロールとスキル、能力レベルの作成から始めます。ロールとはプロジェクトでの役割を表します。スキルはプロジェクトのメンバーのスキルで、能力レベルはそのスキルの熟達度になります。

  * ロール：PM    
    スキル：プロジェクトマネジメントスキル (得意である)

  * ロール：プログラマー     
    スキル：C# (得意である）   
      
#### 能力モデルの設定     
能力モデルとはスキルの熟達度を表します。3段階評価や経験年数などを設定します。
メニューから「能力モデル」をクリックします。
<!-- Image= psa-06.png -->
{{< imagedisplay src="psa-06.png" >}}

既定のモデルがあるので、それを「熟達度」に名前を変えて保存します。
<!-- Image= psa-07.png -->
{{< imagedisplay src="psa-07.png" >}}

#### リソースのスキルを設定する
リソースの持つスキルや資格を定義しましょう。メニューから「リソースのスキル」をクリックします。
<!-- Image= psa-08.png -->
{{< imagedisplay src="psa-08.png" >}}

C# と プロジェクトマネジメントスキルをそれぞれ新規作成します。
<!-- Image= psa-09.png -->
{{< imagedisplay src="psa-09.png" >}}

#### リソースのロールを作成する
リソースのロールを定義しましょう。メニューから「リソースのロール」をクリックします。
<!-- Image= psa-10.png -->
{{< imagedisplay src="psa-10.png" >}}

既定では、「プロジェクト管理者」と「チームメンバー」が用意されていますので、これらを「PM」と「プログラマー」に変更します。
<!-- Image= psa-11.png -->
{{< imagedisplay src="psa-11.png" >}}

ロール名を開いて、名前を変更します。すでに作成した**スキルと能力モデル** をここで追加します。
<!-- Image= psa-12.png -->
{{< imagedisplay src="psa-12.png" >}}

プログラマーも同じように設定します。
<!-- Image= psa-13.png -->
{{< imagedisplay src="psa-13.png" >}}

### 組織単位を作成する
ロールを作成したら、次は組織単位を設定します。組織単位とは、会社や部署をあらわすことになるのですが、国や地域によって異なる場合や、外部の協力会社メンバーがプロジェクトに参画する場合など**作業の単価が変わる境目**で作成します。

今回は、以下の２つの組織単位を作成します。
  * DeMo 株式会社（自社）
  * アウトソースカンパニー（外部協力）
  
メニューを開いて、「組織単位」をクリックします。
<!-- Image= psa-14.png -->
{{< imagedisplay src="psa-14.png" >}}

既存で１つ組織単位（自社）があるので名前を編集しましょう。ここでは原価の設定は行いません。
<!-- Image= psa-15.png -->
{{< imagedisplay src="psa-15.png" >}}

同様に新規作成で外部協力会社を1社作成します。
<!-- Image= psa-16.png -->
{{< imagedisplay src="psa-16.png" >}}

これで組織単位はOKです。価格表を作成する際に、この組織単位やロールを設定することになります。

### 価格表を作成する
組織単位の次は価格表を設定します。価格表については、[Dynamics 365 の製品カタログ ]()でも触れましたが、商材の原価と営業価格を定義します。プロジェクトでは、基本的の人の**単価**を表すと思ってください。（例えば、マネージャーであれば、原価は xxx 円で、定価は ooo円 というような価格）

#### コストと営業の違い      
価格表では、コンテキストというフィールドで「営業」と「コスト」を選択する必要があります。これらは以下のような違いがあります。

<!-- Box -->
|       |  |
| ----------- | ----------- |
| 「営業」は顧客へ出す営業価格。価格表が関連するエンティティは **取引先企業**
「コスト」は原価。価格表が関連するエンティティは **組織単位**  |

作成した価格表によって、紐づけられるエンティティが異なることがポイントです。


#### 出荷単位を追加する      
なお、価格表については組織単位で作成することができるのですが、リソース＝人だとすると、時給だけでなく、1人月単位での出荷が多くのプロジェクトで行われます。そのため、事前に出荷単位の Time に、月単位を追加しておく必要があります。

「設定」メニューの「製品カタログ」から「出荷単位一覧」を開き、「Time」をクリックします。
<!-- Image= psa-17.png -->
{{< imagedisplay src="psa-17.png" >}}

Time の上部メニューから「出荷単位」をクリックします。
<!-- Image= psa-18.png -->
{{< imagedisplay src="psa-18.png" >}}

ここで Month を追加します。Month は 160 Hour (これは各社で異なると思いますが）として設定しました。
<!-- Image= psa-19.png -->
{{< imagedisplay src="psa-19.png" >}}

#### コストの価格表を作成する      
メニューから「価格表」をクリックします。
<!-- Image= psa-20.png -->
{{< imagedisplay src="psa-20.png" >}}

新規作成をします。名前を自社の価格表として、コストの価格表を作成します。「開始日」と「終了日」については有効期限になるので、例えば単価が変動するようなことがあれば、きちんと設定します。先ほど作成した出荷単位として、Month を設定して保存しています。これで、1人月単位での価格設定ができるようになりました。
<!-- Image= psa-21.png -->
{{< imagedisplay src="psa-21.png" >}}

#### ロール価格を追加する       
上記で作成した価格表に、ロール単位の価格を設定します。「ロール価格」の「＋」ボタンをクリックします。ここで、PM の原価を設定します。
<!-- Image= psa-22.png -->
{{< imagedisplay src="psa-22.png" >}}

さらにプログラマーのロール価格も設定しました。これで自社の原価の価格表が作成されました。
<!-- Image= psa-23.png -->
{{< imagedisplay src="psa-23.png" >}}

同じように外部協力会社の原価も作成しておきましょう。
<!-- Image= psa-24.png -->
{{< imagedisplay src="psa-24.png" >}}

#### 営業の価格表を作成する       
上記で作成したのはコスト（原価）の価格表なので、営業用の価格表も作成します。簡単に作成するために、価格表を開き、「コピー」をクリックします。
<!-- Image= psa-25.png -->
{{< imagedisplay src="psa-25.png" >}}

価格表をコピーできるので、「コンテキスト」の箇所を「営業」に切り替え、名前を更新したら保存します。
<!-- Image= psa-26.png -->
{{< imagedisplay src="psa-26.png" >}}

あとは、ロール価格を設定しましょう。ここでは、原価より高い価格を設定すると思いますので各々設定してください。
<!-- Image= psa-27.png -->
{{< imagedisplay src="psa-27.png" >}}

外部協力会社も同じように作成しておきましょう。これで価格表の設定は完了です。作成した価格表を組織単位と取引先企業にそれぞれ関連付けておきます。
<!-- Image= psa-28.png -->
{{< imagedisplay src="psa-28.png" >}}

### コスト価格表と組織単位を関連付ける
コスト価格表と組織単位を関連付けます。これで組織単位の価格（原価）を設定できるようになります。メニューから「組織単位」をクリックして、先ほど作成した組織単位を開きます。
<!-- Image= psa-29.png -->
{{< imagedisplay src="psa-29.png" >}}

外部協力会社の組織単位も同じように設定します。
<!-- Image= psa-30.png -->
{{< imagedisplay src="psa-30.png" >}}

### 営業価格表と取引先企業を関連付ける
次は、営業用の価格表と取引先企業を関連付けます。企業に関連付けることで、そこから発生した商談（営業案件）にその価格表が引き継がれます。メニューの「顧客」をクリックして、既存の取引先企業を開きます。
<!-- Image= psa-31.png -->
{{< imagedisplay src="psa-31.png" >}}

「プロジェクト価格表」があるのでそこで作成した価格表（営業）を追加します。
<!-- Image= psa-32.png -->
{{< imagedisplay src="psa-32.png" >}}

これで関連付けは完了です。

### リソースを作成する
最後にリソースを作成します。ここでは、Dynamics 365 の追加されているユーザーと、外部協力会社のメンバーをスタッフとして追加します。これらのリソースは後ほどプロジェクトにアサインされることになります。

#### リソースの種類     
リソースの種類は以下の通りです。備品という設備も作成できますが、基本的な人をリソースとして、そのリソース元を定義するようになっています。

|       |  |
| ----------- | ----------- |
| ユーザー | Dynamics 365 のユーザー |
| 取引先担当者 | Dynamics 365 の取引先担当者 |
| 取引先企業 | Dynamics 365 の取引先企業 |
| 備品 | 	設備や会議室など |
| グループ | 	リソースのグループ |
| 汎用 | その他（プロジェクトチームメンバー定義時に利用） |


&nbsp;

#### ユーザーでリソースを作成     
まずは Dynamics 365 ユーザーでリソースを作成します。メニューから「リソース」をクリックします。
<!-- Image= psa-33.png -->
{{< imagedisplay src="psa-33.png" >}}

新規追加で、以下のように「リソースの種類」をユーザーとして、ユーザーを追加します。タイムゾーンも忘れずに設定したら保存します。
<!-- Image= psa-34.png -->
{{< imagedisplay src="psa-34.png" >}}

次にリソースのロールとリソースのスキルをそれぞれ設定しましょう。
<!-- Image= psa-35.png -->
{{< imagedisplay src="psa-35.png" >}}

これで社内のPMのリソースは作成できました。

#### スタッフでリソースを作成
外部協力会社のスタッフも追加しましょう。上記と同様に新規作成画面を開きます。「リソースの種類」をスタッフとしてタイムゾーンを設定します。ここで重要なのが、画面下の「組織単位」を外部協力会社に設定することです。
<!-- Image= psa-36.png -->
{{< imagedisplay src="psa-36.png" >}}

これで外部協力会社のリソースも作成できました。

## プロジェクトを管理する準備はOK
長くなりましたが、これでプロジェクト管理を始める準備は整いました。Dynamics Project Service Automation を理解するために、まずは流れに沿った形でプロジェクトを作成していこうと思います。次回は、Project Service Automation における[リードから営業案件の作成手順]()をご紹介します。

それでは今回はここまで。   
&nbsp;