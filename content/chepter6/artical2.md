---
title:  "dynamics365-with-yammer"
date:   2020-08-05T15:53:27+06:00
draft: false
datetitle: "2017.08.23 | Cooperation with other systems /"
pageHeading: "Linking Dynamics 365 and Yammer for interactive information exchange"
image: "images/artical2/artical2.jpg"
Author: "Takafumi Noguchi"
authorimage: "images/authorimage.jpg"
linkdin: ""
---
<!-- Intro  -->
One of the features of Dynamics 365 for external system integration is the integration with Yammer; if you are using Yammer internally, you can use it with Dynamics 365 to actively exchange information about customers and business meetings internally.

<!-- Table Of Content -->
* What is Yammer?
* Linking Dynamics 365 and Yammer
* Configure Yammer integration

## What is Yammer?
Yammer is, simply put, an internal social network. By setting access rights by company organizational unit, information can be exchanged securely. It can also be linked to SharePoint, so it is possible to share documents and minutes used in meetings across related departments within the company.

More than 85% of Fortune 500 companies use Yammer, and the service is available in 23 languages in over 150 countries worldwide. (Reference: https://products.office.com/ja-jp/yammer/yammer-overview )

## Linking Dynamics 365 and Yammer
Setting up Yammer integration in Dynamics is very easy. First, go to Settings, then Administration, then click Yammer Configuration.
<!-- Image= Yammer1.png -->

When you reach the Yammer disclaimer screen, click "Continue.
<!-- Image= Yammer2.png -->

Click "I accept the connection from Microsoft Dynamics 365 Online to Yammer" to proceed with the configuration.
<!-- Image= Yammer3.png -->

After logging in with your Yammer account and proceeding with the configuration, you will see a screen that tells you that the Yammer configuration is complete, as shown below.
You can change the Yammer group ID and security level as you wish.

<!-- Image= Yammer4.png -->

Let's take a look at the dashboard and see that a tab called Yammer has been added to the activity feed.

When you log in to Yammer, you can now see your posts in Yammer.
<!-- Image= Yammer5.png -->

Now, let's try to post to Yammer from Dynamics 365.
<!-- Image= Yammer6.png -->

Then you will see that it has been posted on the Yammer screen as well.
<!-- Image= Yammer7.png -->

## Configure Yammer integration
Once the Yammer integration is available, you can set whether or not to enable it for posts of any entity.
Under "Settings", click "Administration", and then click "Configure Yammer".
<!-- Image= Yammer8.png -->

At the bottom of the page, click "Edit message rules. at the bottom of the page.
<!-- Image= Yammer9.png -->

Here you can see the entities and their status; if you don't want to use Yammer for a post that has already been enabled, check the box and click "Disable Yammer" to disable it.
<!-- Image= Yammer10.png -->

That's how to work with Yammer.
The configuration itself is OK in this way, but if you use a domain name other than xxx.onmicrosoft.com for the alias of o365, it will not connect properly. Also, if you use Internet Explorer, you will need to register it as a trusted site. There are some cases that require detailed settings.

For more information, please also refer to the following websites

Connect to Yammer