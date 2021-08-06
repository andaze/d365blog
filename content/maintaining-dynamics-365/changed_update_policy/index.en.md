---
title:  "Changes to the method of applying major updates [2019.08]"
draft: false
weight: 14
datetitle: "2017.08.23 | "
image: "artical14.jpg"
Author: "Takafumi Noguchi"
authorimage: "authorimage.jpg"
showinhome: true
showinaccordian: true
linkdin: ""
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
<!-- Intro  -->
To be honest, I think the major update of Dynamics 365 is an update that makes the operation and maintenance department cry.

To support the update
* Wait for the instance to become eligible for updates.
* Once an instance is eligible for an update, set a candidate update date for verification in the sandbox.
* Make two schedules to prepare for the case that the proposed date does not run as planned.
* After the sandbox update, start verification. Once the verification is completed successfully, we will apply it to production.
* Conducted verification work after the update using weekends when users are less likely to use the system.
* After the update, the operation is transferred to the help desk. User support as needed.

It takes at least this much preparation and resources, and there are updates twice a year. This is already an "event".

However, if you notice, the way this major update is done has been changed somehow. Instead of users planning their own schedule and executing the update as before, it is now done with or without them.

Why was this change made? In the official documentation, the reason for this change is stated like this.

<!-- Quate Box -->
**What are the reasons for making these changes?**    
To make the experience for all customers even more consistent, predictable, and seamless, we're optimizing the way we deliver updates for Dynamics 365. The new regular updates aim to lower the cost of upgrades, improve performance by ensuring that all users have access to the latest product features, and improve the support experience.

Reference: [FAQ about Dynamics 365 update policy](https://docs.microsoft.com/ja-jp/dynamics365/get-started/faq-update-policy)

...but from an operation and maintenance perspective, I'm worried (laughs).

Even in a customization-less environment, there is no guarantee that the system will work without problems immediately after the update, and if you have added even a little customization through scripts, etc., it is essential to inspect the scope of influence. Furthermore, since the user department is sensitive to small changes in appearance and feel, it is necessary to anticipate an increase in detailed inquiries such as "the appearance is different from usual.

However, there is no point in complaining all the time, and since this change has been decided, I would like to share with you "how to deal with it".


## About Major Updates
First, some basic information about major updates to Dynamics 365.

### What is a major update?
Major updates occur twice a year (April and October) and cover the Dynamics 365 Customer Engagement applications (Sales, CS, Field Service, PSA, Marketing). The update from version 8.2 to 9 was also a major update.

Reference: [FAQ about Dynamics 365 update policy](https://docs.microsoft.com/ja-jp/dynamics365/get-started/faq-update-policy)

### When will it be updated?
According to the schedule in the official documentation, it will be open to the public starting October 1, 2019, and Japan will run between **October 11 and October 13, 2019.**

Reference Information: [Early opt in to 2019 release wave 2（FAQ）](https://docs.microsoft.com/ja-jp/power-platform/admin/preview-october-2019-updates#faq)

### What features will be updated?
The features included in this major update are listed in the [2019 release wave 2 features available for early access.](https://docs.microsoft.com/ja-jp/dynamics365-release-plan/2019wave2/features-ready-early-access) In addition to the Dynamics 365 applications, PowerApps and Flow are also included in the update. (This may be obvious since CDS is almost equal to Dynamics.

If you want to check by application, expand the application name from the title list on the left and click "New and Planned Features".

<!-- Image= update05.png -->
{{< imagedisplay src="update05.png" >}}

### How can I check the future release plan?
Currently, the [release plans for Dynamics 365 and Power Platform](https://docs.microsoft.com/ja-jp/dynamics365/release-plans/index#pivot=pp-relplan&panel=pprelplan) are listed in the Release Plans section, so it is a good idea to check this section periodically.

## About pre-testing
It is risky to suddenly apply a major update to a production environment between October 11 and October 13. Microsoft encourages you to test in advance.

<!-- Quate Box -->
We highly recommend that you create a copy of your Production environment as a Sandbox environment to try out the 2019 release wave 2 updates. After enabling the 2019 release wave 2 update, it can’t be turned off. Therefore, it’s necessary to first test out the updates in Sandbox environment, prior to enabling it in Production environment which could impact your users in the organization.

Reference: [Early opt in to 2019 release wave 2（How do I enable the 2019 release wave 2 updates）](https://docs.microsoft.com/ja-jp/power-platform/admin/preview-october-2019-updates#how-do-i-enable-the-2019-release-wave-2-updates)

Early Access is available starting August 2, 2019, and can be applied to sandbox environments to test in the updated environment.

If you are an administrator, you will receive an email similar to the one shown below.
<!-- Image= update01.png -->
{{< imagedisplay src="update01.png" >}}

Follow the instructions in the email to apply the update to your sandbox in the [Power Platform Management Center](https://admin.powerplatform.microsoft.com/).

Click on "Environment" in the left panel to check the version of the instance you want to test, and then click on it.
<!-- Image= update02.png -->
{{< imagedisplay src="update02.png" >}}

Make sure the update says "2019 release wave 2" and click "Manage".
<!-- Image= update03.png -->
{{< imagedisplay src="update03.png" >}}

Click "Update Now" and then click "Confirm. This will start the update.
<!-- Image= update04.png -->
{{< imagedisplay src="update04.png" >}}

When the update is complete, it will look like the figure below.
<!-- Image= update06.png -->
{{< imagedisplay src="update06.png" >}}

## Confirmation after update
Check if the update is complete. In the case of operation and maintenance, you would probably check that the implemented functions are working properly and that the appearance and arrangement of the forms have not changed according to the test items.

So, let's check out one of the new features added in the update: Dynamics 365 for Sales under "Simplified Lead Management Experience".

<!-- Quate Box -->
Allows sales reps to evaluate leads, quickly move them to the next stage of the sales cycle, and if necessary, create records for sales deals, client companies, or client representatives based on the organization-level settings configured by the administrator for the lead creation experience. The default setting is Yes, which will automatically create Deals, Contacts, and Sales Proposals when a lead is evaluated as a prospect.

Quotes from: [Simplified Lead Management Experience](https://docs.microsoft.com/ja-jp/dynamics365-release-plan/2019wave2/dynamics365-sales/simplified-lead-management-experience)

However, there are many cases in operations where existing customers are registered as leads in other channels, and there was resistance to the automatic creation of sales cases. This is a useful new feature.

In Dynamics 365, go to "Settings" and click "System Settings.
<!-- Image= update08.png -->
{{< imagedisplay src="update08.png" >}}

In the "Sales" tab, select "No" for "Experience to rate leads as prospects" and OK.
<!-- Image= update07.png -->
{{< imagedisplay src="update07.png" >}}

I clicked on "which prospects and ratings" in the leads. The dialog box appears and I get a choice to choose which to create a record, which record is!
<!-- Image= update09.png -->
{{< imagedisplay src="update09.png" >}}

It seems to have been updated successfully.

Inspection after the update is a hassle, but these new features have been implemented, so please give it a try.

That's all for now!