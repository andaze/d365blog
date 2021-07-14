---
title:  "Dynamics 365 プロセスの基本操作"
draft: false
weight: 5
datetitle: "2017.08.23 | "
image: "artical5.jpg"
Author: "Takafumi Noguchi"
authorimage: "authorimage.jpg"
showinhome: true
showinaccordian: false
rightMenu: "artical"
linkdin: ""
---
<!-- Intro  -->
前回の記事「[Dynamics 365 プロセスの作成](#)」は、プロセスのワークフローを作成する手順について触れてきましたが、今回はすこし応用編ということで、様々な用途について触れていきます。

## レコードの更新をする
前回の記事では、レコードの更新を行う簡易な方法をお伝えしたので、今回は応用になります。

### 関連するレコードの値を更新する
これは、レコードの更新のステップを追加後、更新するエンティティを変更して行います。以下の例だと、営業案件（下位エンティティ）から見て、取引先企業（上位エンティティ）のレコードを更新するステップになります。

手順は以下の通りです。
  * 「ステップの追加」をクリックして、「レコードの更新」を選択
  * 「更新：」にて “見込み顧客（取引先企業）” を選択
  * 「プロパティの設定」をクリックして、取引先企業のフィールドで更新したい箇所を設定する。

<!-- Image= procedure1.jpg -->
{{< imagedisplay src="procedure1.jpg" >}}

なお、関連エンティティの更新は、下位エンティティから、上位エンティティに対して更新を行うものになります。つまり、営業案件から、取引先企業や担当者の項目を更新できますが、企業から見て、営業案件へ更新を行うことはできない。ということです。

※ もし変更する場合は、サードパーティー製のソリューションを利用する必要があります。

### 動的な値をフィールドにセットする
動的な値、例えば最終更新者やレコードのURLなどをフィールドに設定することも可能です。その場合は、プロパティの設定で、右側にある「フォーム アシスタント」から選択します。

手順は以下の通りです。

  * 「プロパティの設定」ボタンをクリックして、動的な値を入れたいフィールドをクリック
  * 「フォーム アシスタント」の「検索」にて、動的な値を利用したいエンティティとフィールドを選択
  * 「追加」ボタンをクリックすると、値を下のボックスに記載されるので、「OK」をクリックしてフィールドに動的な値を追加。黄色の塗りつぶしで｛<フィールド名>(エンティティ名)｝ となれば、動的な値の設定が完了。
<!-- Image= procedure2.jpg -->
{{< imagedisplay src="procedure2.jpg" >}}

もしレコードのURLを取得したい場合は、「レコードURL」を選択します。
<!-- Image= procedure3.png -->
{{< imagedisplay src="procedure3.png" >}}

### 設定した値をクリアする
これは、「フォーム アシスタント」の「演算子」で クリア を選択することで設定が可能です。設定すると｛クリア｝となります。
<!-- Image= procedure4.jpg -->
{{< imagedisplay src="procedure4.jpg" >}}

この場合、値は NULL になることは注意が必要です。もし はい/いいえ のリストで、いいえ を設定したい場合は、既定値で設定する必要があります。すると、｛いいえ｝という値が設定されます。
<!-- Image= procedure5.jpg -->
{{< imagedisplay src="procedure5.jpg" >}}


## レコードの割り当て
「レコードの割り当て」というステップを追加すれば、そのレコードの所有者をワークフローで制御できます。
<!-- Image= procedure6.jpg -->
{{< imagedisplay src="procedure6.jpg" >}}

特定のユーザーを指定することもできますし、最終更新者 のような動的なユーザーを設定することも可能です。動的な値を設定する場合は、「プロパティの設定」を開き、「フォーム アシスタント」にて動的な値を設定します。
<!-- Image= procedure7.jpg -->
{{< imagedisplay src="procedure7.jpg" >}}

## メールの送信
ステップの追加で、「電子メールの送信」を選択すると、顧客エンティティもしくはユーザーに対してメールを送信することができます。以下のように、差出人や宛先に、顧客エンティティやユーザーの情報を設定して、本文を設定することで、ワークフロー実行時に自動でメールが送付されるようになります。
<!-- Image= procedure8.jpg -->
{{< imagedisplay src="procedure8.jpg" >}}

差出人・宛先などについては、固定値も動的な値も設定が可能です。本文にメールのテンプレートを挿入することもできます。
<!-- Image= procedure9.jpg -->
{{< imagedisplay src="procedure9.jpg" >}}

なお、Dynamics 365 のメール送信は、メールアドレスを差出人に指定するのではなく、担当者やユーザーを差出人に設定して、そのレコードのメールアドレスにメールが送信されます。そのため、メールの送り先は、Dynamics 365 に登録されている顧客もしくはユーザー情報に限られますので、特定のメールアドレスに個別に送付、などの操作はできません。
<!-- Image= procedure10.jpg -->
{{< imagedisplay src="procedure10.jpg" >}}

## 子プロセスの実行
子プロセスの実行とは、同じエンティティで動く別のワークフローを呼び出して実行することができる機能です。このステップを利用する場合は、事前に同じエンティティで作成したワークフローが必要で、「子プロセスとして」のオプションを有効にしておく必要があります。
<!-- Image= procedure11.jpg -->
{{< imagedisplay src="procedure11.jpg" >}}

ステップにて、「子ワークフローの実行」をクリックします。
<!-- Image= procedure12.jpg -->
{{< imagedisplay src="procedure12.jpg" >}}

そして、事前に準備している子プロセスを選択します。（子プロセス、子ワークフロー、と表記が異なる理由は不明です。）
<!-- Image= procedure13.jpg -->
{{< imagedisplay src="procedure13.jpg" >}}

なお、子プロセスとして、操作しているプロセス自身を呼び出すことができます。これについては後述します。

## Wait を利用した時間式ワークフローの実行
バッチ処理のように、毎時間もしくは毎日ワークフローを実行したい場合は、「待機時間」というステップを利用します。

 
これは、指定した期間、ワークフローの動作を待機させて、期間が過ぎると実行するようなステップになっており、さらのそのステップ後、同じプロセスを「子ワークフローの実行」で呼び出せば、手動で停止するまで、ワークフローが定期的に実行されるようになります。
 

なお、この手順の最初のトリガーは、オンデマンドで実行（手動実行）する必要があります。もし自動実行ができるような、まさにバッチ処理のような機能を求める場合は、サードパーティ製のソリューションが必要になります。


まず、「子プロセスとして」と「オンデマンド プロセスとして」のオプションを有効にします。
<!-- Image= procedure14.jpg -->
{{< imagedisplay src="procedure14.jpg" >}}

ステップで「待機状態」を追加します。
<!-- Image= procedure15.jpg -->
{{< imagedisplay src="procedure15.jpg" >}}

条件の設定において、以下のように設定します。

「プロセス」ー 「タイムアウト」ー 「が次の値と等しい」

値：「フォーム アシスタント」で、”期間” を選択して、「時間」を “1” とします。（1時間ごとに実行）
<!-- Image= procedure16.jpg -->
{{< imagedisplay src="procedure16.jpg" >}}

1時間後にタイムアウトするように設定されました。

そこでさらにステップとして「子ワークフローの実行」を追加します。そして、呼び出すプロセスは自身を呼び出します。もし検索できない場合は、一度プロセスを保存してみてください。

<!-- Image= procedure17.jpg -->
{{< imagedisplay src="procedure17.jpg" >}}

これで、1時間ごとに動作するプロセスは完成です。実際は、この「待機時間」と「子ワークフローの実行」のステップの間に、「レコードの更新」や「電子メールの送信」など様々なステップを追加していきます。あとは、保存して「アクティブ化」すれば利用できます。

 
実行する場合は、特定のレコードを選択して、「プロセスの実行」からこのプロセスを呼び出してしまえばOKです。
<!-- Image= procedure18.jpg -->
{{< imagedisplay src="procedure18.jpg" >}}

このように様々な用途に対応できるプロセスは、理解を深めるほど利用価値が高まります。

ぜひ自社の問題を解決するソリューションとして、活用してみてください。

 
ちなみに、サードパーティ製のソリューションをインストールするとさらに幅が広がりますが、ここについては、またどこかで触れていきます。
 

それでは今回はここまで。