---
title:  "Dealing with inability to send and receive Marketing emails (free version)"
draft: false
weight: 3
datetitle: "2017.08.23 | "
showinhome: true
showinaccordian: true
rightMenu: "artical"
indexImg: "artical3.jpg"
description: "I have found a problem in sending and receiving marketing emails using Dynamics 365 for Marketing free version."
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
I have found a problem in sending and receiving marketing emails using Dynamics 365 for Marketing free version.


## Test transmissions are not received.
When I created a marketing email in Dynamics 365 for Marketing and clicked "Test Send", the email was not received by the appropriate email address.
<!-- Image= mail01.jpg -->
{{< imagedisplay src="mail01.jpg" >}}


### Check your Dynamics 365 email settings.
As a basic rule of thumb, make sure that you can send and receive emails in Dynamics 365.
Click on "Settings", then "Email Access", then "Mailboxes".
<!-- Image= mail02.png -->
{{< imagedisplay src="mail02.png" >}}


If your mailbox shows "Success" for both incoming and outgoing messages as shown below, there is no problem.
<!-- Image= mail03.png -->
{{< imagedisplay src="mail03.png" >}}


"Don't run" means it is unconfigured, so click on the mailbox. After setting the "Sync Method" as shown below, click "Accept Email.
<!-- Image= mail04.png -->
{{< imagedisplay src="mail04.png" >}}


After approval, now click on "Test and Activate Mailbox", check the box in the dialog and click "OK".
<!-- Image= mail05.png -->
{{< imagedisplay src="mail05.png" >}}


After a while, both sending and receiving emails are "successful" and you can now send and receive emails from Dynamics 365.
<!-- Image= mail06.png -->
{{< imagedisplay src="mail06.png" >}}

## Email Tracking with Exchange Online
If you have enabled email in Dynamics 365 as described above, but you cannot receive marketing emails in Outlook, the problem is on the Exchange side.

So I checked with Microsoft support and they said that the domain name "onmicrosoft.com" is blocked by Exchange. So I checked with Microsoft Support.

Try email tracking in Exchange Online from Office 365.

### Accessing Exchange Online
First, access the[Office 365 admin center](https://admin.microsoft.com/AdminPortal/Home). From the left panel "Administration Center", click "Exchange".

When you open the Exchange Management Center, you will find "Mail Flow", click on it, then click on "Add Message" and then "Go to New Message Tracking Now".
<!-- Image= mail07.png -->
{{< imagedisplay src="mail07.png" >}}


In the left panel, under "Mail Flow," click "Message Tracking.
<!-- Image= mail08.png -->
{{< imagedisplay src="mail08.png" >}}


Click "Start Tracking," leave the source and destination as the default all, and click "Search.
<!-- Image= mail09.png -->
{{< imagedisplay src="mail09.png" >}}

When I checked the results, I found that the email I had just sent as a marketing email was marked as spam as "FilteredAsSpam".
<!-- Image= mail10.png -->
{{< imagedisplay src="mail10.png" >}}


If you check Outlook on the receiving end, you will see that it is indeed in junk mail. Right-click on it and click on "Do not junk mail".
<!-- Image= mail11.png -->
{{< imagedisplay src="mail11.png" >}}


Refresh the Exchange Mail Tracking and you will see that it has been Delivered as Not Junk Mail.
<!-- Image= mail12.png -->
{{< imagedisplay src="mail12.png" >}}


I tried sending the marketing email again.
<!-- Image= mail13.png -->
{{< imagedisplay src="mail13.png" >}}


This time, confirm that it was received correctly.
<!-- Image= mail14.png -->
{{< imagedisplay src="mail14.png" >}}


Now, the email marketing function will work properly even in the free version.

## If the problem persists, contact MS Support.
I was trying to isolate the phenomenon when I confirmed that the emails were not being received, but the normal emails of the free version or the marketing emails of the actual operation were being received correctly. Why only the free version of marketing e-mails? But once you have done this, please try to track the emails and make sure they are not in your junk mail.

If this does not resolve the issue, please contact Microsoft Support. (Please note that we cannot investigate this issue on this blog.

That's all for now.    
&nbsp;