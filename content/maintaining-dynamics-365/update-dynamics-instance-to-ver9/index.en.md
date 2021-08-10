---
title:  "Update your Dynamics 365!"
draft: false
weight: 3
datetitle: "2017.08.23 | "
showinhome: true
showinaccordian: false
rightMenu: "artical"
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
{{< authorImage src="authorimage.jpg" name="Takafumi Noguchi" linkdin="https://www.linkedin.com/in/tnoguchi1123531" >}}
<!-- Intro  -->
It has been a while since Dynamcis 365 version 9 (July 2017 update) was released in July 2017. The trial version of Dynamcis 365 is now version 9, and those who are using version 8 may be in the minority. I think the number of people using version 8 is getting smaller.

As a matter of fact, my client's Dynamics 365 was running on version 8 until recently. The main reason for this was that they were applying scripts, APIs, and other 3rd party solutions, so it took time to plan and execute updates.

As we will see later, updating Dynamics 365 systematically is very important to protect customer information. So, in this article, I will introduce the steps to update Dynamics 365.

## Updates to Dynamics 365

First, let's talk about how often Dynamics 365 gets major updates. The last update was the July 2017 update and now there is an announcement that the Spring 2081 update will be released.

Introducing the Dynamics 365 Spring 18 update!

[https://cloudblogs.microsoft.com/dynamics365/2018/03/28/introducing-the-dynamics-365-spring-18-update/](https://cloudblogs.microsoft.com/dynamics365/2018/03/28/introducing-the-dynamics-365-spring-18-update/)

The latest current updates are listed in the technical information below. As of June 2018, the latest update is 9.0.2.0743.

Microsoft Dynamics 365 Online Release

[https://support.microsoft.com/ja-jp/help/2925359/microsoft-dynamics-crm-online-releases](https://support.microsoft.com/ja-jp/help/2925359/microsoft-dynamics-crm-online-releases)

## Is a major update to Dynamics 365 required?
There are major updates twice a year, and it has quite an impact on the major updates of the systems that are actually in operation. As you can see from the technical information below, there are some features that will be added or removed by the update. If you are using scripted customization, portal functions, solutions, etc. in Dynamics 365, there are some features that will not work due to the update. You will need to verify this.

What's New in Dynamics 365 (Online) Version 9 (Customer Engagement)

[https://docs.microsoft.com/ja-jp/dynamics365/get-started/whats-new/customer-engagement/new-in-version-9](https://docs.microsoft.com/ja-jp/dynamics365/get-started/whats-new/customer-engagement/new-in-version-9)

Important changes planned for Dynamics 365 Customer Engagement

[https://docs.microsoft.com/ja-jp/dynamics365/get-started/whats-new/customer-engagement/important-changes-coming](https://docs.microsoft.com/ja-jp/dynamics365/get-started/whats-new/customer-engagement/important-changes-coming)

According to the Dynamics 365 update policy below, you can only skip two updates, and if you are using an earlier version, you will receive a warning from Microsoft to upgrade, and you will need to set the date and time of the upgrade.

If you are currently on version 8.1, you need to plan to upgrade to version 9.0 as soon as possible.

Service Incident Policy and Communication

[https://docs.microsoft.com/ja-jp/dynamics365/customer-engagement/admin/policies-communications](https://docs.microsoft.com/ja-jp/dynamics365/customer-engagement/admin/policies-communications)

Dynamics 365 is a tool for managing customer information, which is a treasure trove of personal information and an important asset for the company. In order to protect this information or to use the system more effectively, it is necessary to update the system to major updates on a regular basis.

## Let's update Dynamics 365.
Now, I would like to describe the specific steps on how to update the software.

1. Access the Dynamics 365 Administration Center.

Office 365 management screen

[https://portal.office.com/adminportal/home](https://portal.office.com/adminportal/home)

and select Dynamicis 365 from the Management Center.
<!-- Image= management1.jpg -->
{{< imagedisplay src="management1.jpg" >}}

2. In the Dynamics 365 Management Center, open the Update tab and you will see the instances that are available for update.
<!-- Image= management2.jpg -->
{{< imagedisplay src="management2.jpg" >}}

The current version is 8.2. Click on "Set Update Schedule.
<!-- Image= management3.jpg -->
{{< imagedisplay src="management3.jpg" >}}

3. Set the update schedule. You can select a candidate date at least one week from now, and a proxy date at least one week after that. Once you have made your selection, click "Next".
<!-- Image= management4.jpg -->
{{< imagedisplay src="management4.jpg" >}}

4. approve the update. You are now scheduled.
<!-- Image= management5.jpg -->
{{< imagedisplay src="management5.jpg" >}}

As stated in the notes, the update will be performed somewhere between the specified time (6am - 6pm) and Dynamics 365 will not be available during the update. Therefore, you need to make an announcement to your users in advance.

It is also recommended to verify the update in the sandbox before implementing it in the actual environment.