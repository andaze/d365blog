---
title:  "Dynamics 365 に Javascript のコードを埋め込んでみる"
draft: false
weight: 1
datetitle: "2017.08.23 | "
showinhome: true
showinaccordian: false
rightMenu: "artical"
indexImg: "artical1.jpg"
description: "Dynamics 365 のフォームには、Web リソースを挿入することができます。Webリソースは、HTML、Javascript、画像ファイルや Silverlight アプリケーションを追加できるので、フォームで比較的柔軟にカスタマイズを行うことが可能です。"
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
Dynamics 365 のフォームには、Web リソースを挿入することができます。Webリソースは、HTML、Javascript、画像ファイルや Silverlight アプリケーションを追加できるので、フォームで比較的柔軟にカスタマイズを行うことが可能です。

[Customer Engagement の Web リソース](https://docs.microsoft.com/ja-jp/dynamics365/customerengagement/on-premises/developer/web-resources)

今回は、フォームに Javascript のコードを埋め込み、もし「電話」フィールドが空白の場合は、「Fax」を読み取り専用にしてみます。このくらい簡単なことであれば、業務ルールですぐできてしまうのですが、今回はテストということで、やってみます。


## フォームに javascript を追加しよう
まずは、取引先企業のレコードを開いて、フォームの編集画面を開いてみます。
<!-- Image= javascript1.png -->
{{< imagedisplay src="javascript1.png" >}}

フォームの編集画面は、「設定」－「システムのカスタマイズ」からも遷移できますが、このようにレコードを開いて、フォームを編集するほうが楽です。
<!-- Image= javascript2.png -->
{{< imagedisplay src="javascript2.png" >}}

右上の「フォームのプロパティ」をクリックします。
<!-- Image= javascript3.png -->
{{< imagedisplay src="javascript3.png" >}}

「イベント」タブの「フォーム ライブラリ」がフォーム上で追加されている Webリソース一覧です。ここに新たに Javascript を追加すると、フォームを開いた時（OnLoad）、保存時（OnSave）、フィールドの値を変更した時（OnChange）などをトリガーにスクリプトを実行することができるようになります。
<!-- Image= javascript4.png -->
{{< imagedisplay src="javascript4.png" >}}

それでは、新規追加をしてみましょう。「フォーム ライブラリ」の「＋追加」ボタンをクリックします。
<!-- Image= javascript5.png -->
{{< imagedisplay src="javascript5.png" >}}

今回は新しく、Webリソースを追加するので、「新規」をクリックします。
<!-- Image= javascript6.png -->
{{< imagedisplay src="javascript6.png" >}}

「名前」や「表示名」を任意の値で入力して、「種類」を “スクリプト（JScript）” とします。そして「テキスト エディター」をクリックします。
<!-- Image= javascript7.png -->
{{< imagedisplay src="javascript7.png" >}}

ここで、通常の javascript コードを入力するのですが、Dynamics 365 のフィールドに対して読み取り専用に設定するコントロールは、setDisabled を利用します。

[setDisabled (クライアント API 参照)](https://docs.microsoft.com/ja-jp/powerapps/developer/model-driven-apps/clientapi/reference/controls/setDisabled)

今回は、以下のようにしてみました。

<!-- Background Box -->
function LockFaxNumber()
{ 
   var Phone = Xrm.Page.getAttribute("telephone1").getValue(); //phone

  if(Phone == null && Phone != "undefined")
   {
     Xrm.Page.getControl("fax").setDisabled(true);
    } 
  else{
     Xrm.Page.getControl("fax").setDisabled(false);
   }    
  console.log("filed lock is done");
}

スクリプト設定が完了したので、「OK」をクリックします。
<!-- Image= javascript8.png -->
{{< imagedisplay src="javascript8.png" >}}

フォームのプロパティ画面で、作成した javascript が表示されているので、「追加」をクリックして、フォームにスクリプトを追加します。
<!-- Image= javascript9.png -->
{{< imagedisplay src="javascript9.png" >}}

これでフォームに追加されました。
<!-- Image= javascript10.png -->
{{< imagedisplay src="javascript10.png" >}}

## 追加した javascript をページ起動時に実行させる

フォームに追加した javascript をページ起動時（OnLoad）で実行してみます。まず、「イベント ハンドラー」で「＋追加」ボタンをクリックします。
<!-- Image= javascript11.png -->
{{< imagedisplay src="javascript11.png" >}}

「ライブラリ」に今回作成した javascript の Web リソース名、「関数」にスクリプトの function 名 を設定します。
<!-- Image= javascript12.png -->
{{< imagedisplay src="javascript12.png" >}}

「依存関係」のタブをクリックして、スクリプト内で利用しているフィールドを選択します。今回は、「FAX」と「代表電話」を選択しています。そして「OK」をクリックします。
<!-- Image= javascript13.png -->
{{< imagedisplay src="javascript13.png" >}}

この依存関係を設定されたフィールドは、フォーム上でロックされます。これは、間違ってフォーム上からフィールドを削除して、スクリプトエラーが発生することを防ぎます。
<!-- Image= javascript14.png -->
{{< imagedisplay src="javascript14.png" >}}

これですべての準備が整いましたので、「OK」をクリックして、「フォームのプロパティ」を閉じます。そして、「下書きとして保存」からの「公開」をクリックしましょう。
<!-- Image= javascript15.png -->
{{< imagedisplay src="javascript15.png" >}}

それでは、取引先企業のページを更新してみます。「電話」が空白なので、「Fax」にロックがかかっています。
<!-- Image= javascript16.png -->
{{< imagedisplay src="javascript16.png" >}}

「電話」に値をいれて、もう一度ページを更新してみましょう。「Fax」が入力できるようになりました。成功ですね。
<!-- Image= javascript17.png -->
{{< imagedisplay src="javascript17.png" >}}

今回は、イベントハンドラーを 「OnLoad」のみで設定したので、ページの更新が必要でしたが、たとえば、値が変わったタイミングでスクリプトが動作するようにしたい場合は、フィールドのプロパティを開いて、「OnChange」のイベントで、上記手順と同様に「＋追加」ボタンからスクリプトを追加してください。
<!-- Image= javascript18.png -->
{{< imagedisplay src="javascript18.png" >}}
 

この記事では、 javascript の基本設定をご紹介しました。もう少し凝ったことを、また別の記事でやってみようと思うので、お楽しみに。

それでは！    
&nbsp;