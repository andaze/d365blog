---
title:  "Dynamics 365 エンティティやオプションセットのカスタマイズ"
draft: false
weight: 10
datetitle: "2017.08.23 | "
image: "artical10.jpg"
Author: "Takafumi Noguchi"
authorimage: "authorimage.jpg"
showinhome: true
showinaccordian: true
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
Dynamics 365 メニューの「設定」-「システムのカスタマイズ」をクリックすると、下記の **ソリューションエクスプローラー** が開きます。

そして コンポーネント を展開するとカスタマイズ可能な一覧が表示されます。
<!-- Image= customiz1.png -->
{{< imagedisplay src="customiz1.png" >}}

ここで代表的なコンポーネントについて触れていきましょう。


## エンティティ
まずは **エンティティ** ですが、基本的なエンティティにかかわる設定はここで行うことができます。コンポーネントの「エンティティ」を展開すると、既定のエンティティがずらっと表示されます。（下記の画面左）

画面右上の 「ビュー」 を使えば、エンティティのフィルタリングをかけることができます。
<!-- Image= customiz2.png -->
{{< imagedisplay src="customiz2.png" >}}

ただ、見てのとおり、かなりの数のエンティティで既定の段階で作成されているので、目当てのエンティティを見つけることは容易ではありません。そのため、Ctrl + F の検索が一番便利な方法になります。

例えば、「取引先」 で検索すれば、すぐ確認できます。
<!-- Image= customiz3.png -->
{{< imagedisplay src="customiz3.png" >}}

エンティティの新規作成や削除、カスタマイズの公開はすべてボタンから行えます。またエンティティの依存関係を確認することもできます。
<!-- Image= customiz4.png -->
{{< imagedisplay src="customiz4.png" >}}

エンティティ内をさらに展開すると、エンティティに関する下記のカスタマイズが可能です。

* フォーム
* ビュー
* グラフ
* フィールド
* キー
* 関連付け（1:N, N:1, N:N）
* メッセージ
* 業務ルール
* 階層設定
* ダッシュボード

<!-- Image= customiz5.png -->
{{< imagedisplay src="customiz5.png" >}}

ここでは、ひとつひとつ具体的には触れませんが、エンティティのレコードを作成、表示、編集するためのページレイアウト（フォーム）のカスタマイズや、レコードを表示させるビュー、他のエンティティのレコードと関連付け、ある一定のルールに従い、必須項目や表示非表示を変化させる（業務ルール）ことなどを細かく設定できます。

## オプションセット
オプションセットとは、選択リストのマスター値を作成して利用できます。こちらも既定でかなりの数のオプションセットが用意されていますが、新規でオプションセットを作成して、複数個所で同じオプションセットを利用したい場合に便利です。
<!-- Image= customiz6.png -->
{{< imagedisplay src="customiz6.png" >}}

作成したオプションセットは、エンティティのフィールドで選択することができます。フィールドの新規作成画面で、オプションセットを新規作成もできます。
<!-- Image= customiz7.png -->
{{< imagedisplay src="customiz7.png" >}}

## クライアント拡張
ソリューションの機能や実用性を拡張するために使われるコンポーネントですが、プラグインなどを利用して本格的なカスタマイズを行わない限りはあまり利用しないかもしれません。ただ、[前回の記事](#) でふれたサイトマップの編集はここから行います。
<!-- Image= customiz8.png -->
{{< imagedisplay src="customiz8.png" >}}

上記 「サイト マップ」 をダブルクリックすると、サイトマップ エディタ が開きます。
<!-- Image= customiz9.png -->
{{< imagedisplay src="customiz9.png" >}}

サイトマップ エディタを使えば、エリア・グループ・サブエリアの細かい編集が可能です。（以前は、sitemap.xml ファイルをエクスポートしてから、編集する必要がありとても大変でした。）

例えば、エリアをクリックすれば、細かいプロパティを編集できます。アイコンを変えたい場合は、次に紹介する 4. Web リソース に画像ファイルを追加すれば、アイコンの変更も可能です。
<!-- Image= customiz10.png -->
{{< imagedisplay src="customiz10.png" >}}

なお、下記の参考情報の引用にあるように、アイコンのサイズは決まっていますのでご注意ください。

<!-- Quate Box -->
CRM 2015 SP1 より後では、< Area > (SiteMap) のアイコンは、不透明度 18% の白色の 85×71 (高さ x 幅) ピクセルのイメージです。< SubArea > (SiteMap) メニューでは、エンティティのアイコンとして、32×32 ピクセルのイメージが使用されます。

引用元： [SiteMap を使用したアプリケーション ナビゲーションの変更](https://msdn.microsoft.com/ja-jp/library/gg309259.aspx)

左上のボタンでは、追加、複製、削除ができます。
<!-- Image= customiz11.png -->
{{< imagedisplay src="customiz11.png" >}}

追加 では、「エリア・グループ・サブエリア」 を選択できます。それでは、ひとつサブエリアを作成してみます。

種類を 「エンティティ」 にして、エンティティを選択します。ここでカスタムのエンティティを事前に作成していたら、そのエンティティを選ぶこともできます。
<!-- Image= customiz12.png -->
{{< imagedisplay src="customiz12.png" >}}

あとは、タイトルや ID を入力してください。
<!-- Image= customiz13.png -->
{{< imagedisplay src="customiz13.png" >}}

編集が完了したら、右上の 「保存」 ボタンで保存をして、「公開」 ボタンで、新しく作成したサブエリアを公開します。
<!-- Image= customiz14.png -->
{{< imagedisplay src="customiz14.png" >}}

すると、メニューに新しく作成した テストサービス が表示されているはずです。
<!-- Image= customiz15.png -->
{{< imagedisplay src="customiz15.png" >}}

このように、カスタムで作成したエンティティを表示させたり、URLを設定して、このサブエリアをクリックするだけで目的のサイトに遷移させたりと様々なサイトマップのカスタマイズを行うことができます。もちろん、不要なエンティティをメニューから削除しておくこともできます。ぜひ活用してみてください。

 

さて、[次回](#)は Web リソースについて触れていきます。