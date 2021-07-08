---
title:  "メジャーアップデート適用方法の変更【2019.08】"
draft: false
weight: 14
datetitle: "2017.08.23 | "
image: "artical14.jpg"
Author: "Takafumi Noguchi"
authorimage: "authorimage.jpg"
showinhome: true
showinaccordian: true
linkdin: ""
---
<!-- Intro  -->
正直に言うと、Dynamics 365 メジャーアップデートは運用・保守部門泣かせなアップデートだと思っています。

アップデートに対応するために
* インスタンスがアップデート対象になるのを待ち
* インスタンスがアップデート対象になれば、サンドボックスで検証するためにアップデート候補日を設定。
* 候補日が予定通り実行されないケースを想定して、スケジュールを２つ作って備える
* サンドボックスアップデート後、検証開始。検証が無事に終われば、本番適用。
* ユーザー利用の少ない土日を使って、アップデート後の検証作業を実施
* アップデート後は、ヘルプデスクに運用を移管。必要に応じてユーザー対応

少なくともこれだけの準備とリソースが必要な上、年に2回もアップデートがある。これはもう “イベント” です。

しかし気づけば、このメジャーアップデートの方法がいつの間にか変更されました。今までのようにユーザーでスケジュールを計画してアップデートを実行するのではなく、有無を言わさず実行されるようになりました。

なぜこのような変更がされたのか？公式ドキュメントでは、今回の変更の理由をこのように述べています。

<!-- Quate Box -->
**これらの変更を行う理由は何ですか?**    
すべての顧客のエクスペリエンスがさらに一貫し、予期可能で、シームレスなものになるように、Dynamics 365 の更新プログラムの配布方法を最適化しています。 新しい定期更新では、アップグレードのコストを下げ、すべてのユーザーが最新の製品機能にアクセスできるようにしてパフォーマンスを向上させ、サポート エクスペリエンスを改善することを目指しています。

引用元： [Dynamics 365 の更新ポリシーに関する FAQ](https://docs.microsoft.com/ja-jp/dynamics365/get-started/faq-update-policy)

…と言われても、運用・保守からすると不安です（笑）

カスタマイズレスな環境でも、アップデート直後は問題なく使用できるという保証はないですし、スクリプトなどで少しでもカスタマイズを入れている場合は影響範囲の検査は必須です。さらに、ちょっとした見た目の変化や操作感に、ユーザー部門は敏感なため、「見た目がいつもと違う」などの細かいお問い合わせが増えることも想定しておく必要があります。

ただ、不満ばかり述べても意味がなく、この変更は決定事項なので、「どのように対処するか」について今回はご紹介しようと思います。


## メジャーアップデートについて
まずは Dynamics 365 のメジャーアップデートに関する基本的な情報です。

### メジャーアップデートとは何か？
メジャーアップデートは年に2回 (4月と10月) にあり、Dynamics 365 Customer Engagement アプリケーション（Sales, CS, Field Service, PSA, Marketing) が対象になっています。バージョン 8.2 から 9へのアップデートもこのメジャーアップデートでした。

参考情報： [Dynamics 365 の更新ポリシーに関する FAQ](https://docs.microsoft.com/ja-jp/dynamics365/get-started/faq-update-policy)

### いつアップデートされるか？
公式ドキュメントのスケジュールによると、2019 年 10 月 1 日から一般公開になっており、日本は **2019年10月11日 から 10月13日 の間**に実行されるようです。

参考情報： [Early opt in to 2019 release wave 2（FAQ）](https://docs.microsoft.com/ja-jp/power-platform/admin/preview-october-2019-updates#faq)

### アップデートされる機能は？
今回のメジャーアップデートに含まれる機能は [2019 release wave 2 features available for early access.](https://docs.microsoft.com/ja-jp/dynamics365-release-plan/2019wave2/features-ready-early-access) に記載があります。（英文ですがクリックすると日本語の記事に遷移します）Dynamics 365 の各アプリケーションに加え、PowerApps と Flow のアップデートも含まれています。（CDS ほぼイコール Dynamics なので当たり前かもしれませんが）

アプリケーション単位で確認したい場合は、左のタイトル一覧からアプリケーション名を展開して、「新機能と予定されている機能」をクリックします。

<!-- Image= update05.png -->
{{< imagedisplay src="update05.png" >}}

### 今後のリリース計画を確認するには？
現在は  [ Dynamics 365 および Power Platform のリリース計画](https://docs.microsoft.com/ja-jp/dynamics365/release-plans/index#pivot=pp-relplan&panel=pprelplan)に今後の計画が記載されているので、ここを定期的に確認していくといいかと思います。

## 事前テストについて
10月11日 から 10月13日の間にいきなり本番環境にメジャーアップデートが適用されるのはリスクと伴います。マイクロソフトも事前にテストすることを奨励しています。

<!-- Quate Box -->
We highly recommend that you create a copy of your Production environment as a Sandbox environment to try out the 2019 release wave 2 updates. After enabling the 2019 release wave 2 update, it can’t be turned off. Therefore, it’s necessary to first test out the updates in Sandbox environment, prior to enabling it in Production environment which could impact your users in the organization.

引用元： [Early opt in to 2019 release wave 2（How do I enable the 2019 release wave 2 updates）](https://docs.microsoft.com/ja-jp/power-platform/admin/preview-october-2019-updates#how-do-i-enable-the-2019-release-wave-2-updates)

早期アクセス（Early Access）は 2019 年 8 月 2 日から提供されており、サンドボックス環境に適用すると、アップデート後の環境でテストすることができます。

管理者であれば、下図のようなメールが届くと思います。
<!-- Image= update01.png -->
{{< imagedisplay src="update01.png" >}}

メール内容に沿って [ Power Platform 管理センター](https://admin.powerplatform.microsoft.com/)でサンドボックスにアップデートを適用しましょう。

左パネルの「環境」をクリックしてテストしたいインスタンスのバージョンを確認して、クリックします。
<!-- Image= update02.png -->
{{< imagedisplay src="update02.png" >}}

更新に「2019 release wave 2」とあるのを確認して「管理」をクリックします。
<!-- Image= update03.png -->
{{< imagedisplay src="update03.png" >}}

「今すぐ更新」をクリックして、「確認」をクリックします。これでアップデートが開始されます。
<!-- Image= update04.png -->
{{< imagedisplay src="update04.png" >}}

アップデートが完了すると下図のようになります。
<!-- Image= update06.png -->
{{< imagedisplay src="update06.png" >}}

## アップデート後の確認
アップデートが完了しているか確認します。ここで運用・保守だとテスト項目にそって、実装している機能が正常動作することや見た目やフォームの配置などが変わっていないかをチェックするかと思いますが、今回はそのようなデモ環境は用意していません。

そのため、アップデートで新しく追加された機能を１つ確認してみます。Dynamics 365 for Sales の 「簡素化されたリード管理エクスペリエンス」にある機能をチェックします。

<!-- Quate Box -->
営業担当がリードを評価して、販売サイクルの次のステージにすばやく移動し、必要に応じて、リード作成エクスペリエンスに対して管理者によって構成された組織レベルの設定に基づいて、営業案件、取引先企業、または取引先担当者のレコードを作成できるようにします。 既定の設定ははいで、リードを見込みありと評価するときに取引先企業、取引先担当者、および営業案件が自動的に作成されます。

引用元：[簡素化されたリード管理エクスペリエンス](https://docs.microsoft.com/ja-jp/dynamics365-release-plan/2019wave2/dynamics365-sales/simplified-lead-management-experience)

見込みありとした際、営業案件まで自動で作成されていましたが、既存の顧客が別のチャネルでリードとして登録されることは運用では多々あり、自動的に営業案件が作成されることに抵抗がありました。これは便利な新機能です。

Dynamics 365 の「設定」から「システムの設定」をクリックします。
<!-- Image= update08.png -->
{{< imagedisplay src="update08.png" >}}

「営業」タブの「リードを見込みありと評価するエクスペリエンス」で「いいえ」を選択してOKします。
<!-- Image= update07.png -->
{{< imagedisplay src="update07.png" >}}

リードで「見込みありと評価」をクリックしました。するとダイアログが表示されてどのレコードを作成するか選択肢が出ました！
<!-- Image= update09.png -->
{{< imagedisplay src="update09.png" >}}

無事にアップデートされていたようです。

アップデート後の検査は手間ですが、このような新機能も実装されているのでぜひお試しください。

今回はここまで！