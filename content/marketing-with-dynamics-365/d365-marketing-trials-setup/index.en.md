---
title:  "Dynamics 365 for Marketing Free Edition Setup [2019.04]"
draft: false
weight: 2
datetitle: "2017.08.23 | "
showinhome: true
showinaccordian: false
rightMenu: "artical"
indexImg: "artical2.jpg"
description: "We have already explained how to use the free version of Dynamics 365. In the past, Marketing was listed in this list of free versions, but now it is not."
jsonld: {
      "@context": "https://schema.org",
      "@type": "NewsArticle",
      "headline": "Article headline",
      "image": [
        "https://example.com/photos/1x1/photo.jpg",
        "https://example.com/photos/4x3/photo.jpg",
        "https://example.com/photos/16x9/photo.jpg"
       ],
      "datePublished": "2015-02-05T08:00:00+08:00",
      "dateModified": "2015-02-05T09:20:00+08:00",
      "author": {
        "@type": "Person",
        "name": "John Doe"
       },
       "publisher": {
        "@type": "Organization",
        "name": "Google",
        "logo": {
          "@type": "ImageObject",
          "url": "https://google.com/logo.jpg"
         }
       }
    }
---
{{< detailTopImage >}}
{{< authorImage src="authorimage.jpg" name="Takafumi Noguchi" linkdin="https://www.linkedin.com/in/tnoguchi1123531" >}}
<!-- Intro  -->
We have already explained how to use the free version of Dynamics 365. In the past, Marketing was listed in this list of free versions, but now it is not. I contacted Microsoft, and they seem to be offering the free version of Marketing at a different URL, so here is the procedure.

The free version of the Marketing URL is a temporary measure and may become unavailable without announcement.


## Set up a free trial version of Office 365 E3
First, set up the free version of Office 365 E3. if you are using the free version of Dynamics 365 for Marketing, you will need a corporate email address as it cannot be set up for development purposes like the for Sales shown below.
<!-- Image= d-setup-01.png -->
{{< imagedisplay src="d-setup-01.png" >}}


Go to [Office 365 E3](https://www.microsoft.com/ja-jp/microsoft-365/enterprise/office-365-e3) and click "Free Trial".
<!-- Image= d-setup-02.jpg -->
{{< imagedisplay src="d-setup-02.jpg" >}}

Enter the required information and click "Next".
<!-- Image= d-setup-03.png -->
{{< imagedisplay src="d-setup-03.png" >}}


Set the ID and password for your Office 365 tenant. Click "Create Account" with any name and password.
<!-- Image= d-setup-04.png -->
{{< imagedisplay src="d-setup-04.png" >}}


You will be asked to verify that you are not a robot, so enter your own phone number and get a code via SMS, then enter it and proceed.
<!-- Image= d-setup-05.png -->
{{< imagedisplay src="d-setup-05.png" >}}


After the setup is complete, you will be taken to the Office 365 screen. Click on "Manage".
<!-- Image= d-setup-06.png -->
{{< imagedisplay src="d-setup-06.png" >}}


In this article, we will set up this Office 365 account as an administrator for Dynamics 365 for Marketing.
<!-- Image= d-setup-07.png -->
{{< imagedisplay src="d-setup-07.png" >}}


## Set up a free version of Dynamics 365 for Marketing
Access the [free version of Dynamics 365 for Marketing](https://trials.dynamics.com/Dynamics365/marketing). (This is still valid as of April 2019)

For the email address, use the Office 365 address you created above. Click on "Getting Started".
<!-- Image= d-setup-08.png -->
{{< imagedisplay src="d-setup-08.png" >}}


After checking the two checkboxes, click "Create".
<!-- Image= d-setup-09.png -->
{{< imagedisplay src="d-setup-09.png" >}}


Setup will begin, a dialog box will appear requesting permission to access Dynamics 365 for Marketing, click "Accept".
<!-- Image= d-setup-10.png -->
{{< imagedisplay src="d-setup-10.png" >}}


A dialog box will appear requesting permission to access Voice of Customer Services, click "Accept".
<!-- Image= d-setup-11.png -->
{{< imagedisplay src="d-setup-11.png" >}}

The setup of Dynamics 365 for Marketing will begin.
Since Marketing will be using the functionality of the portal, we will set up the portal.
<!-- Image= d-setup-12.png -->
{{< imagedisplay src="d-setup-12.png" >}}


After checking the checkbox for providing your current location and other information and entering your address, click "Setup".
<!-- Image= d-setup-13.png -->
{{< imagedisplay src="d-setup-13.png" >}}

It will take a while to set up, so wait.
<!-- Image= d-setup-14.png -->
{{< imagedisplay src="d-setup-14.png" >}}


Once the setup is complete, click "Go to Apps" and you are now on the top screen of Dynamics 365 for Marketing.
<!-- Image= d-setup-15.png -->
{{< imagedisplay src="d-setup-15.png" >}}


If you go to the [Dynamics 365 Home](https://home.dynamics.com/), you will see that there is an app for Marketing.
<!-- Image= d-setup-16.png -->
{{< imagedisplay src="d-setup-16.png" >}}


## How to add a user (free version only)
I would like to describe how to add users in Dynamics 365 for Marketing free version, as it is different from Dynamics 365 for Sales.

*This operation is only required for the **free version**.

If you create an account in Office 365 and license Dynamics 365 for Marketing as shown in the figure below, the user will not be automatically added to Dynamics 365 for Marketing.
The user will not be automatically added to Dynamics 365 for Marketing.
<!-- Image= d-setup-17.png -->
{{< imagedisplay src="d-setup-17.png" >}}


In order to add the created account to Dynamics 365 for Marketing, you need to register a user in the [free version of Dynamics 365 for Marketing](https://trials.dynamics.com/Dynamics365/marketing) for each created account. Register the account with the account ID you created as shown in the figure below.
<!-- Image= d-setup-18.png -->
{{< imagedisplay src="d-setup-18.png" >}}


Click "Sign In" when you are asked to sign in.
<!-- Image= d-setup-19.png -->
{{< imagedisplay src="d-setup-19.png" >}}


Sign in with your newly created account.
<!-- Image= d-setup-20.png -->
{{< imagedisplay src="d-setup-20.png" >}}

Click "Confirmed.
<!-- Image= d-setup-21.png -->
{{< imagedisplay src="d-setup-21.png" >}}


When the Dynamics 365 for Marketing free version tenant appears, click "Join".
<!-- Image= d-setup-22.png -->
{{< imagedisplay src="d-setup-22.png" >}}


Check "Marketing" in the application selection and click "Continue".
<!-- Image= d-setup-23.png -->
{{< imagedisplay src="d-setup-23.png" >}}


Now an approval email will be sent to the administrator from the account you want to join. When you open the Ourlook of the first Marketing admin account you created, you will see the following email and click "Approve".
<!-- Image= d-setup-24.png -->
{{< imagedisplay src="d-setup-24.png" >}}

If you check the users in Dynamics 365 for Marketing, you will see that the account you created has been added.

The process is a bit tedious, but now you can add the necessary accounts.
<!-- Image= d-setup-25.png -->
{{< imagedisplay src="d-setup-25.png" >}}


That's it for this time.     
&nbsp;