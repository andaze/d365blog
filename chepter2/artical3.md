---
title:  "purchase-license-dynamics"
date:   2020-08-05T15:53:27+06:00
draft: false
datetitle: "2017.08.23 | Implementing Dynamics 365 /"
pageHeading: "Purchasing a Dynamics 365 license"
image: "images/artical2/artical2.jpg"
Author: "Takafumi Noguchi"
authorimage: "images/authorimage.jpg"
intro: ""
---
<!-- Intro  -->
So far, we have been preparing for the implementation of Dynamics 365.

Now that we have a schedule and a rough estimate of the cost, we would like to start using Dynamics 365. The first thing you need to do is to purchase a license. This is very basic, but if you don't purchase a license, you can't proceed.

* Purchase a license for Dynamics 365
* Access the Office 365 Management Center

## Purchase a license for Dynamics 365
First, proceed to purchase a license from the following website.

Dynamics 365 Pricing
(https://www.microsoft.com/ja-jp/dynamics365/pricing)[https://www.microsoft.com/ja-jp/dynamics365/pricing]

When you access the site, you will be taken to the following screen.

<!-- Image= accessSite.png -->

Click the "Purchase" button for Dynamics 365 Plan 1.
<!-- Image= Purchase.png -->
This will take you to the user registration screen, where you can register.

If you have already registered your Office 365 account (@xxxx.onmicrosoft.com), click "Sign In" to proceed to the purchase screen.
<!-- Image= signIn.png -->
Register your account name and password as shown below, and then proceed to [Next] to create your account.
<!-- Image= add-01.png -->

You can then purchase a license on the purchase screen.

Determine the number of licenses you need, and click [Next].
<!-- Image= licenses.png -->
After entering your payment information, place your order and make your purchase.
<!-- Image= payment.png -->

Once your purchase is complete, go to the next step.

## Access the Office 365 Management Center
After purchase, go to the Office 365 administrator site.

Office 365 Admin center
(https://portal.office.com/adminportal/home#/homepage)[https://portal.office.com/adminportal/home#/homepage]

You can check the information of the purchased license from "License" in Billing Information.
<!-- Image= Billing.png -->

Now you need to assign the license to the account that will be using Dynamics 365.
<!-- Image= account.png -->

Press "Edit" under "Product License".
<!-- Image= add-02.png -->

Turn on your Dynamics 365 license and click Save.
<!-- Image= add-03.png -->

Access from the Dynamics 365 admin center

Now you can access Dynamics 365 from the Management Center.
<!-- Image= Management.png -->

Edit the instance in the Dynamics 365 admin center (*the screen says it's already done).
<!-- Imnage= admin.png -->

In this way, you can set the URL of the instance and whether it should be a production environment or a sandbox. It is also possible to set security groups.
<!-- Image= sandbox.png -->

The application to be used for the instance (sales, marketing, service, etc.) can be configured from the solution.
<!-- Image= configured.png -->

You can see the applications that have been installed. In this case, the sales and customer service applications are installed. Please install any other solutions you need.

<!-- Image= add-04.png -->

When you are ready, try to access Dynamics 365.
<!-- Image= access.png -->

The actual Dynamics 365 screen is now displayed.
<!-- Image= screen.png -->

In the next article, I will explain a little about the admin center screen.