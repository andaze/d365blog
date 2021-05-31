---
title:  "Dynamics 365 バッチでプロセスを起動させる"
draft: false
weight: 3
datetitle: "2017.08.23 | "
image: "artical3.jpg"
Author: "Takafumi Noguchi"
authorimage: "authorimage.jpg"
showinhome: true
showinaccordian: false
rightMenu: "artical"
linkdin: ""
---
<!-- Intro  -->
今回は Microsoft Labs のソリューションを使って、
Dynamics 365 のワークフローをバッチ処理で指定した時間に実行する手順をご紹介します。

**重要事項：** これからご紹介する Change Tracking Solution をご自身の環境で利用される場合は、**十分な検証**を行った上、自己責任でご利用ください。また、当サイトに掲載された内容によって生じた損害等の一切の責任を負いかねますので、ご了承ください。


## ソリューションのインポート
Dynamics 365 のワークフローは既定でバッチ処理を行うことができないのですが、Microsoft Labs が提供している 「**Change Tracking Solution**」をインポートすることで、バッチ処理が実現できます。

### Change Tracking Solution のインポート
「設定」から「App Store」を開きます。
<!-- Image= appstr01.png -->
{{< imagedisplay appstr01 "290" "596" "796" >}}

アプリ検索で、Change Tracking Solution と検索して「今すぐ入手する」をクリックします。
<!-- Image= appstr02.png -->
{{< imagedisplay appstr02 "290" "596" "796" >}}


必要な情報を入力して「続行」をクリックします。
<!-- Image= appstr03.png -->
{{< imagedisplay appstr03 "290" "596" "796" >}}

マーケットプレイスのページが開くので、インポートするインスタンスを選択して、
チェックをいれたら「同意」をクリックします。
<!-- Image= appstr04.png -->
{{< imagedisplay appstr04 "290" "596" "796" >}}

Change Tracking のインストールが始まるのでしばらくお待ちください。インストール完了となればOKです。
<!-- Image= appstr05.png -->
{{< imagedisplay appstr05 "290" "596" "796" >}}

## ワークフローにバッチ処理を設定する
それでは検証用のワークフローを作成します。ここでは、「イニシャルコミュニケーション」が “連絡済み” となった場合、「説明」に “詳細を記載” というメモを残すようなワークフローを1時間ごとに実行する方法を記載します。

### 高度検索結果より Fetch XML を取得する
バッチ処理はターゲットとなるレコードに対してのみ実行されるように設定されています。そのターゲットを指定する手段として Fetch XML が利用されるため、高度検索結果を使って Fetch XML を事前に準備しておきます。

今回は「イニシャルコミュニケーション」に値が設定されたレコードだけにワークフローを実行するので、下図のようなフィルター条件としています。

「Fetch XML のダウンロード」をクリックして Fetch XML をダウンロードしましょう。
<!-- Image= appstr06.png -->
{{< imagedisplay appstr06 "290" "596" "796" >}}

### ワークフローを作成する
「設定」から「プロセス」でワークフローを作成します。
<!-- Image= appstr07.png -->
{{< imagedisplay appstr07 "290" "596" "796" >}}

Change Tracking Solution がインポートされると、ワークフローの左パネルに「Batch Processes」が表示されているのが確認できます。これがワークフローのバッチ処理を可能にします。
<!-- Image= appstr08.png -->
{{< imagedisplay appstr08 "290" "596" "796" >}}

まずはプロセスを設定します。下図のようにオンデマンドプロセスとして作成しました。
※バッチ処理の実行時間を設定すれば自動的にプロセスが待機状態になるので、この設定は必須ではありません。
<!-- Image= appstr09.png -->
{{< imagedisplay appstr09 "290" "596" "796" >}}

上書き保存をします。次はバッチ処理の設定です。

### バッチプロセスを設定する
「Batch Processes」をクリックして「新しい Batch Processes」をクリックします。
<!-- Image= appstr10.png -->
{{< imagedisplay appstr10 "290" "596" "796" >}}

「Name」に任意の名前、「Process」に上述のワークフロー名を入力します。

「Activation Frequency」(頻度) は下図のように設定できます。最小単位は 1時間ごと（Hourly）です。ここでは Hourly を選択します。
<!-- Image= appstr11.png -->
{{< imagedisplay appstr11 "290" "596" "796" >}}

「Status Reason」を “Scheduled” として、「Hours Interval」(時間間隔) は “１”としました。
「Next Activation」では次の実行時間を入力しておきます。
<!-- Image= appstr12.png -->
{{< imagedisplay appstr12 "290" "596" "796" >}}

「Target Records」は 高度検索結果から得られた XML ファイルの内容を張り付けることで、レコードをフィルターして、対象を絞ったワークフロー処理が可能になります。上述で取得した Fetch XML の値をコピペします。
<!-- Image= appstr13.png -->
{{< imagedisplay appstr13 "290" "596" "796" >}}

Batch Processes を保存して閉じます。そして プロセスを「アクティブ化」します。
<!-- Image= appstr14.png -->
{{< imagedisplay appstr14 "290" "596" "796" >}}

これで準備はOKです。

作成したワークフローをまずオンデマンドで実行してみます。リードを開くと以下のような 3レコードを事前に用意していました。「イニシャルコミュニケーション」が未設定のレコードが２つあります。
<!-- Image= appstr15.png -->
{{< imagedisplay appstr15 "290" "596" "796" >}}

これらをすべて選択して、上記で作成したワークフローをオンデマンドで実行します。
<!-- Image= appstr16.png -->
{{< imagedisplay appstr16 "290" "596" "796" >}}

オンデマンドワークフローにより「説明」の箇所が更新されました。
<!-- Image= appstr17.png -->
{{< imagedisplay appstr17 "290" "596" "796" >}}

### バッチ処理実行確認
「設定」の「システムジョブ」をクリックします。
<!-- Image= appstr18.png -->
{{< imagedisplay appstr18 "290" "596" "796" >}}

確認すると、Batch Processes Scheduling が “タイマーの待機中” となっていますが、これは Batch Processes を設定したタイミングでシステムジョブが作成されています。上記で作成したワークフローは 1 時間ごとに処理されます。
<!-- Image= appstr19.png -->
{{< imagedisplay appstr19 "290" "596" "796" >}}

プロセスが実行される前に、１つのレコードの「イニシャルコミュニケーション」の値を変更しました。
<!-- Image= appstr20.png -->
{{< imagedisplay appstr20 "290" "596" "796" >}}

これで時間が来れば、値の入っているレコード２つのみにワークフローが実行されるはずです。

システムジョブの「ステータス」が “成功しました” となったことを確認して、「プロセスセッション」を確認します。対象の2レコードのみにワークフローが実行されていることを確認しました。
<!-- Image= appstr21.png -->
{{< imagedisplay appstr21 "290" "596" "796" >}}

レコードを確認すると、先ほど「イニシャルコミュニケーション」を変更したレコードの「説明」が更新されていました。
<!-- Image= appstr22.png -->
{{< imagedisplay appstr22 "290" "596" "796" >}}

## オンデマンドでの実行はなくてもいい
上記ではわかりやすくするため、レコードに対してオンデマンドでワークフローを実行していますが、オンデマンドで実行しなくても、Batch Processes を作成したタイミングで、「システム ジョブ」が起動して “待機中” となります。

もしバッチ処理を止める場合は、「Status Reason」を “Suspended” に変更して保存すればOKです。
<!-- Image= appstr23.png -->
{{< imagedisplay appstr23 "290" "596" "796" >}}

それでは、今回はここまで。    
&nbsp;