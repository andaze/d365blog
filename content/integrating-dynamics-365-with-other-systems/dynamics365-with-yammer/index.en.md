---
title:  "Linking Dynamics 365 and Yammer for interactive information exchange"
draft: false
weight: 2
datetitle: "2017.08.23 | "
image: "artical2.jpg"
Author: "Takafumi Noguchi"
authorimage: "authorimage.jpg"
showinhome: true
showinaccordian: false
rightMenu: "artical"
linkdin: ""
---
<!-- Intro  -->
One of the features of Dynamics 365 for external system integration is the integration with Yammer; if you are using Yammer internally, you can use it with Dynamics 365 to actively exchange information about customers and business meetings internally.


## What is Yammer?
Yammer is, simply put, an internal social network. By setting access rights by company organizational unit, information can be exchanged securely. It can also be linked to SharePoint, so it is possible to share documents and minutes used in meetings across related departments within the company.

More than 85% of Fortune 500 companies use Yammer, and the service is available in 23 languages in over 150 countries worldwide. (Reference: https://products.office.com/ja-jp/yammer/yammer-overview )

## Linking Dynamics 365 and Yammer
Setting up Yammer integration in Dynamics is very easy. First, go to Settings, then Administration, then click Yammer Configuration.
<!-- Image= Yammer1.png -->
{{< imagedisplay Yammer1 "290" "596" "796" >}}


When you reach the Yammer disclaimer screen, click "Continue.
<!-- Image= Yammer2.png -->
{{< imagedisplay Yammer2 "290" "596" "796" >}}


Click "I accept the connection from Microsoft Dynamics 365 Online to Yammer" to proceed with the configuration.
<!-- Image= Yammer3.png -->
{{< imagedisplay Yammer3 "290" "596" "796" >}}


After logging in with your Yammer account and proceeding with the configuration, you will see a screen that tells you that the Yammer configuration is complete, as shown below.
You can change the Yammer group ID and security level as you wish.

<!-- Image= Yammer4.png -->
{{< imagedisplay Yammer4 "290" "596" "796" >}}


Let's take a look at the dashboard and see that a tab called Yammer has been added to the activity feed.

When you log in to Yammer, you can now see your posts in Yammer.
<!-- Image= Yammer5.png -->
{{< imagedisplay Yammer5 "290" "596" "796" >}}


Now, let's try to post to Yammer from Dynamics 365.
<!-- Image= Yammer6.png -->
{{< imagedisplay Yammer6 "290" "596" "796" >}}


Then you will see that it has been posted on the Yammer screen as well.
<!-- Image= Yammer7.png -->
{{< imagedisplay Yammer7 "290" "596" "796" >}}


## Configure Yammer integration
Once the Yammer integration is available, you can set whether or not to enable it for posts of any entity.
Under "Settings", click "Administration", and then click "Configure Yammer".
<!-- Image= Yammer8.png -->
{{< imagedisplay Yammer8 "290" "596" "796" >}}


At the bottom of the page, click "Edit message rules. at the bottom of the page.
<!-- Image= Yammer9.png -->
{{< imagedisplay Yammer9 "290" "596" "796" >}}


Here you can see the entities and their status; if you don't want to use Yammer for a post that has already been enabled, check the box and click "Disable Yammer" to disable it.
<!-- Image= Yammer10.png -->
{{< imagedisplay Yammer10 "290" "596" "796" >}}


That's how to work with Yammer.
The configuration itself is OK in this way, but if you use a domain name other than xxx.onmicrosoft.com for the alias of o365, it will not connect properly. Also, if you use Internet Explorer, you will need to register it as a trusted site. There are some cases that require detailed settings.

For more information, please also refer to the following websites

[Connect to Yammer](https://docs.microsoft.com/ja-jp/power-platform/admin/connect-yammer)    
&nbsp;