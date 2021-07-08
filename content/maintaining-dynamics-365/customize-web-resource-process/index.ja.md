---
title:  "Dynamics 365 のWebリソースやプロセスのカスタマイズ"
draft: false
weight: 11
datetitle: "2017.08.23 | "
image: "artical11.jpg"
Author: "Takafumi Noguchi"
authorimage: "authorimage.jpg"
showinhome: true
showinaccordian: true
linkdin: ""
---
<!-- Intro  -->
前回の記事では、システムのカスタマイズより「エンティティ」や「オプションセット」についてふれてきました。その他のカスタマイズはどのようなことができるのでしょうか？

今回は、Webリソース、プロセス、ダッシュボード、レポートについて概要をご紹介します。


## Webリソース
Web リソースでは、Dynamics 365 で利用するアイコンなどの画像ファイルから、HTML ファイル、Javascript、CSS、XML や Silverlight アプリケーションなどを作成することができます。Web リソースで作成したコンテンツについては、各エンティティのフォームやサイトマップなどで利用することができます。
<!-- Image= resources1.png -->
{{< imagedisplay src="resources1.png" >}}

実際に、新規作成画面を開いてみましょう。
<!-- Image= resources2.png -->
{{< imagedisplay src="resources2.png" >}}

Web リソースの名前や表示名を設定していきます。Dynamics 365 では、Web リソースやフィールドをカスタムで作成するとき、必ず名前の頭に “new_” がつきます。下記の画面の通り、Web リソースとして登録できるコンテンツの種類は決まっています。(※)
<!-- Image= resources3.png -->
{{< imagedisplay src="resources3.png" >}}

**(※) コンテンツの種類**     
   Web ページ (HTML)：        .htm, .html         
   スタイル シート (CSS)：         .css    
   スクリプト (JScript) ：           .js    
   データ (XML)：                    .xml     
   イメージ (PNG)：                 .png    
  イメージ (JPG)：                  .jpg     
  イメージ (GIF)：                   .gif     
  Silverlight (XAP)：            .xap       
  スタイルシート (XSL)：          .xsl, .xslt  
  イメージ (ICO)：                  .ico    

制限事項として、Webリソースで作成できるコンテンツは上記以外なく、ASP.NET(.aspx) ページは登録できません。また、アップロードできるファイルの最大サイズは、既定で 5MB と決まっています。詳しくは、下記の参考情報をご確認ください。

<!-- Quate Box -->
**サイズ制限**     

アップロードできる最大ファイル サイズは、Organization.MaxUploadFileSize プロパティによって決まります。 このプロパティは、Dynamics 365 アプリケーションの [システム設定] の [電子メール] タブで設定します。 この設定で電子メール メッセージ、メモ、および Web リソースに添付できるファイルのサイズを制限します。 既定の設定は 5 MB です。    
引用元: [Microsoft Dynamics 365 の Web リソース](https://msdn.microsoft.com/ja-jp/library/gg309473.aspx)

例えば、Webリソースで登録した JavaScript をフォームで利用したい場合は、フォームのプロパティ にてフォーム全体に対して JavaScript を実行するように設定することができます。
<!-- Image= resources4.png -->
{{< imagedisplay src="resources4.png" >}}

イベント タブの フォームライブラリに Web リソースで作成した JavaScript を追加します。
<!-- Image= resources5.png -->
{{< imagedisplay src="resources5.png" >}}

フォームライブラリに JavaScript を追加したら、イベント ハンドラー　でファンクションとイベントを設定します。
<!-- Image= resources6.png -->
{{< imagedisplay src="resources6.png" >}}

こちらの設定については、また別の記事にてご紹介する予定です。

## プロセス
Dynamics 365 のプロセスを利用してビジネス手法のモデル化を行うことができます。
<!-- Image= resources7.png -->
{{< imagedisplay src="resources7.png" >}}

プロセスで設定できる手法は下記の通りです。

* ワークフロー：ビジネス プロセスをモデル化および自動化します。プロセスは、バックグラウンド実行はもちろんフィールドの作成・変更・削除が発生したタイミングでリアルタイムに実行されるような設定が可能です。
* アクション：Dynamics 365 標準ではない操作や複数の操作を組み合わせた処理を行うことができます。
* 業務プロセス フロー：業務プロセス フローのビジュアル化を作成します。既定で営業案件に作成されている業務プロセス フローをカスタムで別エンティティにも作成することが可能です。
* ダイアログ：ユーザー入力を促す段階的のデータ入力フォームを作成します。

各々の設定方法については、今後触れていく予定です。

参考情報：[Dynamics 365 のプロセス カテゴリ](https://msdn.microsoft.com/ja-jp/library/gg309471.aspx)

## ダッシュボード
Dynamics 365 を開くと最初に開く画面がダッシュボードです。ダッシュボードを利用することで、営業データやマーケティング施策効果などをビジュアル化することができます。既定で用意されているダッシュボードは複数あるため、そのダッシュボードを編集してもいいですし、新規作成することもできます。
<!-- Image= resources8.png -->
{{< imagedisplay src="resources8.png" >}}

## レポート
ダッシュボード同様、データの分析に使用されるレポートも作成できます。Dynamics 365 では、ダッシュボード、レポート、Office 365 用 Power BI を活用してデータ分析を行うことが可能です。
<!-- Image= resources9.png -->
{{< imagedisplay src="resources9.png" >}}

参考情報：[Dynamics 365のレポートと分析](https://technet.microsoft.com/ja-jp/library/dn531183.aspx)


システムのカスタマイズでは、その他にも様々なカスタマイズが実現可能ですが、それらについても今後の記事で触れていることとします。