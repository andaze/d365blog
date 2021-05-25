---
title:  "Instructions for using the Dynamics 365 free trial version [as of 2018]."
draft: false
weight: 6
datetitle: "2017.08.23 | "
image: "artical6/artical6.jpg"
Author: "Takafumi Noguchi"
authorimage: "authorimage.jpg"
showinhome: true
showinaccordian: false
rightMenu: true
linkdin: ""
--- 
<!-- Intro  -->
If you are still considering to introduce Dynamics 365, I recommend you to try the **free trial version** to get a better understanding of the usability and operation. In particular, the Dynamics 365 blog provides detailed information about the functions, uses, and setup procedures of each Dynamics 365 application, so it is an important step to deepen your understanding by actually touching it with your own hands.


## About the free trial version of Dynamics 365
The Dynamics 365 application is provided with a free 30-day trial version. The details can be found in the [official documentation](https://docs.microsoft.com/ja-jp/power-platform/admin/try-powerapps-dynamics-365), but some of the operations are a bit confusing, so I would like to summarize the details here as well.

### Before using the free trial version
There are three points to note before using the free trial version.

* You will need a company email address. Please note that you cannot register with a personal email address.
* To ensure that you are not a robot, please provide an SMS-enabled cell phone number.
* If you read the official documentation, you will see that the operation is different depending on the partner, new or existing. If you try to create a free trial as per the official document, it will create a free trial for an existing tenant, which may cause problems if the partner who resides at the customer does this work without permission. If you are going to do this work, please make sure to verify it in a different tenant (for development) than the customer's tenant.

In this case, we want to build an environment on an independent tenant, so we will create a new Dynamics 365 tenant for development purposes.

## Create a free trial of Dynamics 365
First, access the [free trial version of Dynamics 365](https://trials.dynamics.com/Dynamics365/Signup/). Then you will see a list of available applications. Since we are here for development purposes, click on "Sign up here".
<!-- Image =  d-setup-01.png-->

A dialog box will appear. Click "No, I want to continue signing up.
<!-- Image =  d-setup-02.png-->

You will be taken to a screen to enter your personal information, please enter your information. For the e-mail address, enter the address of the corporation.
<!-- Image =  d-setup-03.png-->

This is where you set the tenant information and the Dynamics administrator's email address and password. If the account is already in use, it cannot be set, so make sure it is unique. Click "Create My Account" to start the creation process.
<!-- Image =  d-setup-04.png-->

Now enter your cell phone number to confirm that you are not a robot. Since you are in Japan, set it to (+81) and send a text message via SMS.
<!-- Image =  d-setup-05.png-->

You will receive a six-digit number that you will need to enter.
<!-- image= d-setup-06.png -->

Then the tenant creation will start. The expiration date is 30 days, so please remember the creation date. Click "Set Up" and you're good to go.
<!-- image= d-setup-07.png -->

Log in at the sign-in dialog.
<!-- image= d-setup-08.png -->

This brings you to the setup screen. Set the language to "Japanese" and select only "Sales" this time. (If you want all, check All on the far right.) "Setup Complete" completes the setup of the free trial version.
<!-- image= d-setup-09.png -->

You can now access the free trial version of Dynamics 365. You can now start using it.

## Finally.
The free trial version is highly recommended for those who want to try out the features as soon as possible, as it is basically the latest version with preview features. Also, if you create a development tenant with this procedure, you can build and test several trial versions, so please give it a try.    
&nbsp;
