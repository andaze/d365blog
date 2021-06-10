---
title:  "Using the Dynamics 365 Portal Add-on"
draft: false
weight: 6
datetitle: "2017.08.23 | "
image: "artical6.jpg"
Author: "Takafumi Noguchi"
authorimage: "authorimage.jpg"
showinhome: true
showinaccordian: false
rightMenu: "artical"
linkdin: "aa"
---
<!-- Intro  -->
The Dynamics 365 Customer Engagement Plan application comes standard with one portal add-on.

The advantages of using a portal include the following
<!-- QuateBox -->
* Provide services and information using Dynamics 365 data to users outside the organization who do not have a license to use Dynamics 365.
* Web services can be easily built by simply creating and editing Dynamics 365 records.
You can easily build web services by simply creating and editing Dynamics 365 records.

Quote from: [Microsoft Dynamics 365 New: Portal Add-ons Part 1](https://docs.microsoft.com/en-us/archive/blogs/crmjapan/introduction-of-portal-01)
In this article, I will show you the steps to configure a contact form using the Dynamics 365 portal.


## Setting up the Dynamics 365 portal
The Dynamics 365 portal feature is described in detail in the Microsoft blog mentioned above, so I won't go into it here.
Note that we have set up a customer self-service portal as shown in the figure below.
<!-- Image= portaldemo01.png -->
{{< imagedisplay src="portaldemo01.png" >}}


### Page Views and Licenses
The following are the limitations of using the portal function in Dynamics 365 Customer Engagement Plan.
* Requires a total of 10 seats of Dynamics 365 Customer Engagement Plan or application (Sales, CS, FS, PSA) licenses
* 1 million page views per month
* Available in the cloud only. Not available on-premise.

Reference: [Dynamics 365 Licensing Guide](https://go.microsoft.com/fwlink/?LinkId=866544&clcid=0x411)     
If you are using the free version of Dynamics 365 for validation, you do not need to worry about the above limitations.

### Precautions for using Marketing
If the above portal setup procedure is performed in an environment where Dynamics 365 for Marketing has already been set up, it may interfere with the marketing functions. If you want to use the portal function in an environment where Dynamics 365 for Marketing is set up, you will need to purchase a separate license.

## Access the portal management screen
First, go to the portal management screen. Click "Portal Details" in the left panel to see the detailed information of the portal.
<!-- Image= portaldemo02.png -->
{{< imagedisplay src="portaldemo02.png" >}}


Clicking on "Portal Actions" will allow you to restart the portal, change the URL, or reset it.
<!-- Image= portaldemo03.png -->
{{< imagedisplay src="portaldemo03.png" >}}


You can enable diagnostic logging, but this requires Azure Blob separately, so I won't mention it here.

## Portal account
When you access the portal you have created, you will see "Sign In" in the upper right corner, click on it.
<!-- Image= portaldemo04.png -->
{{< imagedisplay src="portaldemo04.png" >}}

Here, there are two types of sign-in: "Local Account" and "External Account".
<!-- Image= portaldemo05.png -->
{{< imagedisplay src="portaldemo05.png" >}}

* Local accounts are accounts that are managed in the portal, and once registered, the ID and password are managed in the portal.
* An external account is a sign-in with an account that is managed by Azure AD or another external system.

The following is a definition from the technical information.

<!-- QuateBox -->
**Local Authentication:** Local authentication is a common form-based authentication that uses the Dynamics 365 for Customer Engagement organization's trading partner record for authentication. To build a custom authentication experience, developers use the ASP.NET Identity API to create custom login pages and tools.   
**External Authentication:** External authentication is provided by the ASP.NET Identity API. In this case, account credentials and password management are handled by a third party identity provider. This includes provider-based OpenIDs such as Yahoo! as well as provider-based Google and OAuth 2.0, such as Twitter, Facebook, and Microsoft. The user signs up for the portal by selecting an external ID to register with the portal. Once registered, the external ID can access the same features as the local account.

Quote: [Configure Dynamics 365 for Customer Engagement portal authentication](https://docs.microsoft.com/ja-jp/powerapps/maker/portals/configure/configure-portal-authentication)

The account here will be managed as a "**Trading Partner**" record in Dynamics 365.


## Disable open registration.
The **Open Registration** feature, which allows users to freely register their accounts on the portal, is turned on by default, and allows users to freely register their email address, ID, and password from the Registration tab of Sign In. This is useful for sites such as My Page, which are freely available to users who access them.
<!-- Image= portaldemo06.png -->
{{< imagedisplay src="portaldemo06.png" >}}

If you want to deactivate this open enrollment, open the Dynamics 365 "Portal".
<!-- Image= portaldemo07.png -->
{{< imagedisplay src="portaldemo07.png" >}}

Click "Site Settings".
<!-- Image= portaldemo11.png -->
{{< imagedisplay src="portaldemo11.png" >}}

Find and click on the setting **"Authentication/Registration/OpenRegistrationEnabled."**
<!-- Image= portaldemo08.png -->
{{< imagedisplay src="portaldemo08.png" >}}

Set the value to "false" and save it.
<!-- Image= portaldemo09.png -->
{{< imagedisplay src="portaldemo09.png" >}}

Go back to the portal and click "Sign In". You will then see that the "Registration" tab has disappeared.
<!-- Image= portaldemo10.png -->
{{< imagedisplay src="portaldemo10.png" >}}

For technical information on other authentication methods, please refer to the following\
Technical Information: [Configuring Authentication ID for Portal](https://docs.microsoft.com/ja-jp/powerapps/maker/portals/configure/set-authentication-identity)     
We want to use open registration, so we will **set the value back to true.**

## Send invitations and sign in
If you want to limit the number of users who can sign in, you can use "invitation" to register users.
In order to send invitations, the mailbox of the user to be operated must be enabled.

The procedure is described in [Checking your Dynamics 365 email settings.](https://dynamics365.andaze.com/cannot-send-email-from-trial/#Dynamics_365)

### Preliminary work: Update Send Invitation process
In order to add the URL with the code for redemption to the invitation, edit the process called "Send Invitation". Open the "Send Invitation" process. Click "Deactivate" to deactivate it, and then click "Set properties" under "Create an email to act as an email template".
<!-- Image= portal1.png -->
{{< imagedisplay src="portal1.png" >}}

Rewrite the URL for the portal login in the body of the email here, as this is a sample, and replace the first part of the URL with the URL of the portal you created, leaving only /register/?returnurl=%2f&invitation=, and then add "The first part of the URL is rewritten to the URL of the portal you created, leaving only /register/?returnurl=%2f&invitation=, and then add the value of the (dynamic) invitation code you got in the previous step of the process, "Encode Invitation Code.
<!-- Image= portal3.png -->
{{< imagedisplay src="portal3.png" >}}

The URL is as follows.    
**<portal URL here>/register/?returnurl=%2f&invitation=<Encode invitation code here>.**

<!-- Image= portal004.png -->
{{< imagedisplay src="portal004.png" >}}

Now you are ready to run the process.

### Send invitations and sign in
Open one of your business contacts in Dynamics 365. Make sure that the email to which the invitation will be sent has a value in it, and click
Click on Send Invitation from the menu.
<!-- Image= portaldemon01.png -->
{{< imagedisplay src="portaldemon01.png" >}}


When the Create New Invitation screen appears, enter a name and other information, and overwrite the file. Then expand "Flow" from the ... menu, and click "Send Invitation" from "Run Workflow.
<!-- Image= portaldemon02.png -->
{{< imagedisplay src="portaldemon02.png" >}}


Click "OK" in the dialog to finish.
<!-- Image= portaldemon03.png -->
{{< imagedisplay src="portaldemon03.png" >}}

Once it is executed, you will receive an email. Copy the URL below.
<!-- Image= portal005.png -->
{{< imagedisplay src="portal005.png" >}}

When the portal brings you to the invitation code redemption screen, click "Register.
<!-- Image= portal006.png -->
{{< imagedisplay src="portal006.png" >}}

Enter your User Name and Password, and click "Register.
<!-- Image= portal007.png -->
{{< imagedisplay src="portal007.png" >}}


Now, users who have been sent invitations will be able to use the portal with their own page.

### Check your portal account.
The settings of the portal account registered in the invitation can be viewed in a separate form for the business partner representative. Click "Portal Contacts" from the form selector.
<!-- Image= portal008.png -->
{{< imagedisplay src="portal008.png" >}}

Open the "Web Authentication" tab and you will see the settings you have just made.
<!-- Image= portal009.png -->
{{< imagedisplay src="portal009.png" >}}


* User name" is the login name of the portal.
* Determine if "Login enabled" allows the user to log in (uncheck to disable)
* Whether to lock out users for a while if they log in multiple times with "Lockout enabled".
* If you are locked out by the "lockout end date," when will you be released?

and other settings can be checked.

## Contact us through the portal
Now we will make an inquiry on the portal while signed in with an invitation. Click on "Create a support case" at the bottom of the page.
<!-- Image= port1.png -->
{{< imagedisplay src="port1.png" >}}

This will open a new contact form where you can fill in the title and description.
<!-- Image= portal11.png -->
{{< imagedisplay src="portal11.png" >}}


There are no attachments, so just click "Send".
<!-- Image= portal12.png -->
{{< imagedisplay src="portal12.png" >}}


Verify that your inquiry has been received: In Dynamics 365, go to Services.
<!-- Image= portal13.png -->
{{< imagedisplay src="portal13.png" >}}


When you open the "Support case", the inquiry you have just made will be created.
<!-- Image= portal14.png -->
{{< imagedisplay src="portal14.png" >}}

You can now create a support case from the portal. If you want to cancel or close the inquiry, you can also set that from the portal.
<!-- Image= portal15.png -->
{{< imagedisplay src="portal15.png" >}}

So much for a simple setup of the portal.     
&nbsp;