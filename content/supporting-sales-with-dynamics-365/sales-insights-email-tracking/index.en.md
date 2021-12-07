---
title:  "Use the email tracking feature"
draft: false
weight: 7
datetitle: "2017.08.23 | "
showinhome: true
showinaccordian: false
rightMenu: "artical"
indexImg: "artical7.jpg"
description: "Dynamics 365 for Sales includes the ability to track opens, link clicks, and attachments to emails sent to customers, which is great because Salesforce requires you to purchase Pardot separately, but it's available at no extra cost!"
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
Dynamics 365 for Sales includes the ability to track opens, link clicks, and attachments to emails sent to customers, which is great because Salesforce requires you to purchase Pardot separately, but it's available at no extra cost!

**Reference Technical Information**

[Using Email Engagement to View Message Interactions](https://docs.microsoft.com/ja-jp/dynamics365/ai/sales/email-engagement)

The setup is very simple, so I will summarize the steps.

## Setting up an email profile
Set up an email profile so that you can send emails in Dynamics.

Note that this setting can only be configured for one instance on one tenant.
Note that it is not possible to set this up on multiple instances.

In Dynamics 365, go to "Settings" and click "Email Access.
<!-- Image= track1.png -->
{{< imagedisplay src="track1.png" >}}

Open your mailbox.
<!-- Image= track2.png -->
{{< imagedisplay src="track2.png" >}}

Open the mailbox you want to enable mail for.

First, set the "Sync Method" as follows and save it.
<!-- Image= track3.png -->
{{< imagedisplay src="track3.png" >}}

Click on "Approve E-mail" in the top menu, and then

OK" in the dialog.
<!-- Image= track4.png -->
{{< imagedisplay src="track4.png" >}}

Click "Test and Activate Mailboxes" in the top menu, and then

Check the checkbox in the dialog and say "OK".
<!-- Image= track5.png -->
{{< imagedisplay src="track5.png" >}}

Click "Notifications" in the left panel and wait for a while.

Click the "Update" button, and if the transmission, reception, and synchronization are successful as shown below, you are done.
<!-- Image= track6.png -->
{{< imagedisplay src="track6.png" >}}

### To enable email for multiple accounts
Activating emails one by one will take a long time, so do it for multiple accounts at the same time.

Check all the mailboxes you want to configure, and click the "Edit" button.
<!-- Image= track7.png -->
{{< imagedisplay src="track7.png" >}}

Set the synchronization method as described above.
<!-- Image= track8.png -->
{{< imagedisplay src="track8.png" >}}

Now you need to "Approve Emails" and "Test and Activate Mailboxes".

Follow the steps in the order and you are done.
<!-- Image= track9.png -->
{{< imagedisplay src="track9.png" >}}


## Enable email tracking.
There is an email tracking feature in Sales Insights that you can set up.

In 8.2, it was a preview version, and now it's available in 9.

Click on "Sales Insights" under "Settings".
<!-- Image= track10.png -->
{{< imagedisplay src="track10.png" >}}

It's under "Email Engagement. 

Click "I agree" in the Terms of Service.
<!-- Image= track11.png -->
{{< imagedisplay src="track11.png" >}}

Click "Grant permission" under "Email Engagement.
<!-- Image= track12.png -->
{{< imagedisplay src="track12.png" >}}

Click "Accept" with the requested permissions.
<!-- Image= track13.png -->
{{< imagedisplay src="track13.png" >}}

If the screen looks like the one below, you have succeeded.
<!-- Image= track14.png -->
{{< imagedisplay src="track14.png" >}}

Go back to the previous screen and click "Settings" under "Email Engagement.
<!-- Image= track15.png -->
{{< imagedisplay src="track15.png" >}}

If email engagement is not enabled, turn it on.
Enable it.
<!-- Image= track16.png -->
{{< imagedisplay src="track16.png" >}}
Now you are all set. That was easy, wasn't it?

## operation check
Now let's see how it works.

Let's create one e-mail.

*The mail will actually be sent to you.

Don't test with actual customer information.

Create a new e-mail to your business partner (for testing).
<!-- Image= track17.png -->
{{< imagedisplay src="track17.png" >}}
Fill in the subject and body of the message and send it.

At this point, make sure that "Email Engagement" is displayed as shown in the lower right corner of the screen.

*If it is not displayed, it cannot be tracked properly.
<!-- Image= track18.png -->
{{< imagedisplay src="track18.png" >}}

Confirm that the mail has been received (opened) in the mailbox where you received it.
<!-- Image= track21.png -->
{{< imagedisplay src="track21.png" >}}
A few minutes later, I open the email record you sent.

You can see that the tracking results are displayed as shown in the figure below.
<!-- Image= track20.png -->
{{< imagedisplay src="track20.png" >}}
You were working correctly!


You can also add links to the body of the email, and

It is also possible to track the opening of attachments, so give it a try.