---
title:  "Dynamics 365 Excel Onlineでデータインポート"
draft: false
weight: 9
datetitle: "2017.08.23 | "
image: "artical9.jpg"
Author: "Takafumi Noguchi"
authorimage: "authorimage.jpg"
showinhome: true
showinaccordian: true
rightMenu: "artical"
linkdin: ""
---
<!-- Intro  -->
前回までの記事では、インポート用のテンプレートを利用してデータをインポートする処理についてご紹介しました。この方法は、初期データをインポートする際にとても便利な機能になります。そして今回は、テンプレートを利用するのでなく、作成したビューをもとに、Excel Online で動的にデータをインポートする方法について記載していきます。

なお、Excel Online で動的に編集する際、ローカルPCに Excel クライアントがインストールされている必要はありません。


## 事前にビューをつくっておく
Excel Online で動的にデータをインポートしたいエンティティを開いて、すぐに処理することも可能ですが、Dynamics 365 に5000件以上のレコードが格納されている場合、処理に時間を要することになります。そのため、事前にビューを作成して、そのビューに表示されるレコードを編集、もしくは新しいレコードを追加する方法をご紹介します。

ビューはシステムビューと個人用ビューの2種類がありますが、柔軟性を考慮して、個人用ビューを作成します。画面右上の「高度な検索」をクリックします。
<!-- Image= speakerpic_test.jpg -->
{{< imagedisplay src="speakerpic_test.jpg" >}}

「新規」ボタンをクリックして新しいビューを作成しましょう。
<!-- Image- speakerpic_test1.jpg -->
{{< imagedisplay src="speakerpic_test1.jpg" >}}


フィルター条件を設定します。ここでは、以下のような条件としました。
<!-- Image= speakerpic_test2.jpg -->
{{< imagedisplay src="speakerpic_test2.jpg" >}}


次に、「列の編集」をクリックして、表示させる列を選択します。選択された列が Excel Online でのインポートで値を編集、追加できるフィールドになるので、必要な列を選択します。必要な列にチェックを入れたら、「OK」をクリックします。
<!-- Image= speakerpic_test3.jpg -->
{{< imagedisplay src="speakerpic_test3.jpg" >}}


表示させる列の順番を変更したら、ここでも「OK」をクリックします。
<!-- Image= speakerpic_test4.jpg -->
{{< imagedisplay src="speakerpic_test4.jpg" >}}


「上書き保存」をクリックして、ビューの名前を設定後「上書き保存」をクリックします。
<!-- Image= speakerpic_test5.jpg -->
{{< imagedisplay src="speakerpic_test5.jpg" >}}


これで個人用ビューが作成されました。

## Excel Online でデータのインポートを行う
それでは、取引先企業を開いて、先ほど作成したビューを使いましょう。

ビュー一覧を開くと、「自分のビュー」に先ほど作成したビューが表示されていることがわかります。そのビューをクリックします。
<!-- Image= speakerpic_test6.jpg -->
{{< imagedisplay src="speakerpic_test6.jpg" >}}


すると結果がフィルター条件に合わせて絞られました。早速、Excel Online で編集します。メニューから「EXCEL にエクスポート」の ▼ をクリックして、「Excel Online で開く」をクリックします。
<!-- Image= speakerpic_test7.jpg -->
{{< imagedisplay src="speakerpic_test7.jpg" >}}


Excel 編集画面になりました。各列に必要な値を入力していきます。さらに新しい企業も追加します。
<!-- Image= speakerpic_test8.jpg -->
{{< imagedisplay src="speakerpic_test8.jpg" >}}     

&nbsp;

取引先企業名：株式会社エクセルインポート    
代表者番号：029-186-6930    
郵便番号：305-0062    
住所：茨城県つくば市赤塚5-9-4       
&nbsp;

すべての編集と追加が完了したら、「変更を DYNAMICS365 に保存」をクリックしてデータをインポートします。
<!-- Image= speakerpic_test9.jpg -->
{{< imagedisplay src="speakerpic_test9.jpg" >}}

インポート用にデータが送信されるので、インポート処理の状態を確認して完了したら結果を確認します。
<!-- Image= speakerpic_test10.jpg -->
{{< imagedisplay src="speakerpic_test10.jpg" >}}


以下のようにレコードが更新されています。
<!-- Image= speakerpic_test11.jpg -->
{{< imagedisplay src="speakerpic_test11.jpg" >}}


このように、Excel でデータを管理するように、Dynamcis 365 ではレコードの追加や更新を行うことができます。
便利機能になるので、ぜひ使いこなしてみてください。      
&nbsp; 