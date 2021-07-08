---
title:  "設定のサイトマップを調整する"
draft: false
weight: 15
datetitle: "2017.08.23 | "
image: "artical15.png"
Author: "Takafumi Noguchi"
authorimage: "authorimage.jpg"
showinhome: true
showinaccordian: true
linkdin: ""
---
<!-- Intro  -->
Dynamics 365 のアプリを作成すると、現在は Power Apps との統合もあり、統一インターフェイス （モバイル駆動アプリ）として作成されます。ここで、詳細設定を一般ユーザーも開くことができるのですが、この「設定」について細かな調整ができることがわかったので記載しておきます。


## 一般ユーザーでも見えてしまう設定メニュー
ほとんど権限のないような一般ユーザーでも、

ページ右上の歯車から「詳細設定」をクリックすると、
<!-- Image= settingsitemap1.png -->
{{< imagedisplay src="settingsitemap1.png" >}}

「設定」のメニューが表示されてしまいます。
<!-- Image= settingsitemap2.png -->
{{< imagedisplay src="settingsitemap2.png" >}}

特に「セキュリティ」は、一般ユーザーが見えなくていい箇所なのですが、見えないようにするにはセキュリティロールのユーザーや部署などの権限を調整しなくてはいけないのでそれなりに面倒です。
<!-- Image= settingsitemap3.png -->
{{< imagedisplay src="settingsitemap3.png" >}}

セキュリティロール設定で歯車を非表示にできればいいんですが、そういった手法はサポートに確認してもできないという回答だったので、「設定」内の表示自体を更新する必要があります。

## サブエリアに特権を追加する
この問題については、サイトマップとエンティティへの特権で解決できます。

まず、カスタマイズのクライアント拡張より「サイトマップ」を開きます。
<!-- Image= settingsitemap4.png -->
{{< imagedisplay src="settingsitemap4.png" >}}

サイトマップの「設定」のエリアまで移動して、現在一般ユーザーに表示されているサブエリアをクリックします。ここでは「セキュリティ」をクリックします。
<!-- Image= settingsitemap5.png -->
{{< imagedisplay src="settingsitemap5.png" >}}

右側のプロパティが開くので、詳細設定の「特権」を開き、エンティティで “SettingsSiteMap” を検索して、横の ＋ ボタンをクリックします。
<!-- Image= settingsitemap6.png -->
{{< imagedisplay src="settingsitemap6.png" >}}

すると対象エンティティに、SettingsSiteMap が追加されます。ここで必要な権限にチェックを入れていきます。今回は「すべて」の状態で保存して公開しました。
<!-- Image= settingsitemap7.png -->
{{< imagedisplay src="settingsitemap7.png" >}}

これはつまり、ユーザーが設定されているセキュリティロールの「SettingsSiteMap」において、作成から割り当てまですべての権限を持っている必要がある設定になります。

サイトマップの設定はこれでOKです。

## 動作確認
セキュリティロールを１つ選択して、「ユーザー定義エンティティ」タブを開き、SettingsSiteMap を探します。SettingsSiteMap は “選択なし” か “組織全体” の２択です。まずは “選択なし” で動作確認をします。
<!-- Image= settingsitemap8.png -->
{{< imagedisplay src="settingsitemap8.png" >}}

一般ユーザーで確認してみると、「設定」に “セキュリティ” が表示されなくなりました。
<!-- Image= settingsitemap9.png -->
{{< imagedisplay src="settingsitemap9.png" >}}

セキュリティロールに戻り、すべてを “組織全体” にして保存しました。
<!-- Image= settingsitemap10.png -->
{{< imagedisplay src="settingsitemap10.png" >}}

確認すると、セキュリティ… 以外も見えるようになりました（笑）

「設定」のサブエリアで上記と同じような特権の設定がされていたものがあったようです。
<!-- Image= settingsitemap11.png -->
{{< imagedisplay src="settingsitemap11.png" >}}

意外と知らない機能だったので簡単にまとめてみました。

今回はここまで！