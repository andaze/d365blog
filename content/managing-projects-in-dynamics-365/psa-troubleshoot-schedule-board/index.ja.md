---
title:  "PSAスケジュールボードのトラブルシュート"
draft: false
weight: 7
datetitle: "2017.08.23 | "
image: "artical7.jpg"
Author: "Takafumi Noguchi"
authorimage: "authorimage.jpg"
showinhome: true
showinaccordian: true
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
Dynamics 365 for Project Service Automation (PSA) でプロジェクトを計画した際に少し触れましたが、インターフェイスやバージョンの差異により、Project Service の動作が異なるようで、今回は、統一インターフェイスでスケジュールボードが正しく表示できない事象を確認しました。

バージョンアップにより改善する可能性もあるかもしれませんが、まずバージョン２で対処した手順をご紹介します。

※ 2019年 1月時点での対応になります。


## 背景：統一インターフェイスへ移行
Dynamics 365 バージョン 8 で慣れ親しんだ メニューは Web インターフェイスと呼ばれていましたが、バージョン 9 よりモバイルにも対応した **統一インターフェイス** という新しいインターフェイスが追加されました。

<!-- Center -->
**Webインターフェイス**
<!-- Image= psa-trouble01.png -->
{{< imagedisplay src="psa-trouble01.png" >}}

**統一インターフェイス**
<!-- Image= psa-trouble02.png -->
{{< imagedisplay src="psa-trouble02.png" >}}


※バージョン9 へアップデートされた方は、アプリメニューに「顧客サービス ハブ」や「営業ハブ」というアプリが追加されていると思いますが、これらは統一インターフェイスで構成されたアプリです。
<!-- Image= psa-trouble03.png -->
{{< imagedisplay src="psa-trouble03.png" >}}


 [Dynamics 365 Community](https://community.dynamics.com/crm/b/bringyourcode2life/posts/dynamics-365-app-designer-web-interface-is-going-to-be-already-deprecated)の情報によると、アプリを新規に作成する際、バージョン 9.0.2.2279 までは Web か 統一インターフェイスを選択できたようですが、マイナーアップデート後のバージョン 9.1.0.33 移行は、**統一インターフェイス のみ**の選択肢になりました。

※ Web か 統一インターフェイスかは、「設定」の「マイアプリ」から確認可能です。
<!-- Image= psa-trouble04.png -->
{{< imagedisplay src="psa-trouble04.png" >}}


これにより、新しくユーザー向けに作成したアプリ（統一インターフェイス）において以下のトラブルシュートを行いました。

## 現象：スケジュールボードが表示されない
アプリを新しく作成する際、サイトマップデザイナーで表示させるエンティティ （サブエリア）を選択します。リソースの空きを把握するために必要な「スケジュール ボード」は、Web リソース (ScheduleBoard.html) であるため、サブエリアの 「URL」に値を入力して保存・公開します。
<!-- Image= psa-trouble05.png -->
{{< imagedisplay src="psa-trouble05.png" >}}


しかし統一インターフェイスのメニューに「スケジュール ボード」が表示されることはなぜかありません。
メニューを開いても表示されていないことがわかります。これはシステム管理者で確認しても同じ結果でした。
<!-- Image= psa-trouble06.png -->
{{< imagedisplay src="psa-trouble06.png" >}}


## 対策：ダッシュボードでスケジュールボードを利用する
対策として**ダッシュボード**を利用することにしました。
ダッシュボードであれば、ページ内に Web リソースを挿入できますし、サイトマップで簡単に追加できます。

### システムダッシュボードの作成
まず「設定」の「カスタマイズ」から「システムのカスタマイズ」を開き、「ダッシュボード」から「新規」をクリックします。
<!-- Image= psa-trouble07.png -->
{{< imagedisplay src="psa-trouble07.png" >}}


ダッシュボードのタイプなどは任意として、セクションに Web リソースを追加します。
<!-- Image= psa-trouble08.png -->
{{< imagedisplay src="psa-trouble08.png" >}}


リソースを ***ScheduleBoard.html** で検索してみます。msdn で始まる Webリソースがあるので、選択します。
<!-- Image= psa-trouble09.png -->
{{< imagedisplay src="psa-trouble09.png" >}}


名前やラベルは任意で、「OK」をクリックします。
<!-- Image= psa-trouble10.png -->
{{< imagedisplay src="psa-trouble10.png" >}}


必要に応じて、メニューの「・・・」より幅や高さを拡大させてください。
<!-- Image= psa-trouble11.png -->
{{< imagedisplay src="psa-trouble11.png" >}}


「上書き保存」で保存してから「閉じる」でダッシュボード編集を完了します。あとはカスタマイズを公開してください。
<!-- Image= psa-trouble12.png -->
{{< imagedisplay src="psa-trouble12.png" >}}


### サイトマップにダッシュボードを追加する
次に作成したダッシュボードをサイトマップエディターでメニューに追加しましょう。先ほど開いていたサイトマップエディターのサブエリアで、「種類」を “ダッシュボード”、「既定のダッシュボード」を作成したダッシュボードに設定したら、保存して公開します。
<!-- Image= psa-trouble13.png -->
{{< imagedisplay src="psa-trouble13.png" >}}


作成したアプリのメニューを開くと、先ほどは表示されていなかった「スケジュールボード」が表示されています。
<!-- Image= psa-trouble14.png -->
{{< imagedisplay src="psa-trouble14.png" >}}


クリックして表示をすると、ダッシュボード上でスケジュールボードが表示されていると思います。もし表示されていない場合は、ダッシュボード一覧から選択してください。
<!-- Image= psa-trouble15.png -->
{{< imagedisplay src="psa-trouble15.png" >}}


別途、WBS が統一インターフェイスだと表示されない現象は、バージョンアップで解消するとマイクロソフトサポートより回答いただいたので、さっそくそちらも検証してみようと思います。

もしバージョンアップにより、スケジュールボードの現象も改善していたら、こちらに記載します。     
&nbsp;