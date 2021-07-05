---
title:  "Project Service 作業テンプレートの更新"
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
Dynamics 365 for Project Service Automation の作業テンプレートを更新する手順をご紹介します。[Project Service でプロジェクトを計画]() で作業テンプレートの作成手順をご紹介しましたが、これはすでに設定済みの作業テンプレートの休日や稼働時間などを変更したい場合の手順です。

## 作業テンプレートの更新方法
すでに作成した作業テンプレートをリソースやプロジェクトに設定後、様々な要因で休日を追加したり、稼働時間を変更するなどの更新が必要かと思います。

例えば 2019年は GW が 10連休となりました。このような変更を対応するために、新しく作業テンプレートを作成して、すべてのリソースやプロジェクトに最適用するのはとても手間です。しかも、変更のたびに作業テンプレートを作成していくのでデータ管理としてもあまり好ましくないでしょう。

この問題の解決策として、作業テンプレートの「テンプレート リソース」を更新する方法があります。
<!-- Image= tips01.jpg -->
{{< imagedisplay src="tips01.jpg" >}}

まずはリソース側を変更します。現在、作業テンプレートのリソースとなっているものとは別のリソースを１つ選択します。ここでは “テスト太郎” を選択しました。
<!-- Image= tips02.jpg -->
{{< imagedisplay src="tips02.jpg" >}}

上部メニューから「作業時間」を選択します。必要な休暇を1日追加しましょう。

※細かい手順は、[祝日の設定]() を参照してください。
<!-- Image= tips03.jpg -->
{{< imagedisplay src="tips03.jpg" >}}

次に作業テンプレートを開きます。そして「テンプレート リソース」を上記で作業時間を更新したリソースに切り替えて保存します。
<!-- Image= tips04.png -->
{{< imagedisplay src="tips04.png" >}}

これで自動的にリソースに変更内容を更新してくれればかなり優秀なんですが、まだその機能はないようなので、ここは手動で。その他のリソースを選択して「カレンダーの設定」をクリックします。
<!-- Image= tips05.png -->
{{< imagedisplay src="tips05.png" >}}

そして先ほど更新した作業テンプレートを選択して「適用」すれば、作業時間は更新されます。
<!-- Image= tips06.png -->
{{< imagedisplay src="tips06.png" >}}

これでほかのリソースも更新した作業時間が反映されていればOKです。
<!-- Image= tips07.jpg -->
{{< imagedisplay src="tips07.jpg" >}}

1年以上続くようなプロジェクトでは、この方法で対応すれば手間が省けます。

今回は以上です。    
&nbsp;