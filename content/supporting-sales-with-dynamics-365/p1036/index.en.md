---
title:  "Use Dynamics 365 activities to conduct business meetings."
draft: false
weight: 5
datetitle: "2017.08.23 | "
showinhome: true
showinaccordian: false
rightMenu: "artical"
indexImg: "artical5.jpg"
description: "In the [previous article](#), we created a sales case from a lead, and we need to keep track of the progress of the negotiation in the sales case. In this case, we can use an entity called **activity**."
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
In the [previous article](#), we created a sales case from a lead, and we need to keep track of the progress of the negotiation in the sales case. In this case, we can use an entity called **activity**.

## Type of activity entity
First, in Dynamics 365, there is an entity called **Activity (Activity Pointer).** These activities are associated with various entities such as client companies, contacts, sales projects, leads, support projects, etc., and can be used as activity data for each entity.

First, open "Activities" from the menu.
<!-- Image= activities.png -->
{{< imagedisplay src="activities.png" >}}

When you do so, you will see that the Activities menu is prepared with **Tasks, Emails, Appointments, Phone Calls, Letters,** and other activities.　
<!-- Image= activities1.png -->
{{< imagedisplay src="activities1.png" >}}

This is a structure in which entities such as tasks, e-mails, phone calls, etc. exist below the entity called activity, and are classified according to the type of each activity. To make it easier to understand, the positional relationship is as shown in the diagram below.

*There are more entities tied to the activity than the figure below, but it is just an example.
<!-- Image= activities2.png -->
{{< imagedisplay src="activities2.png" >}}

## Create a new activity
Let's take an example of a sales activity called phone call in a business meeting. Let's say you create a new phone call activity by clicking on the "Phone" activity.
<!-- Image= activities3.png -->
{{< imagedisplay src="activities3.png" >}}

In the phone activity entry form below, enter the "Subject" first. Then, enter the name of the company or individual that is associated with the "Calling Party". What you enter in this field will determine which entity this activity will be associated with.
<!-- Image= activities4.png -->
{{< imagedisplay src="activities4.png" >}}

Let's search for other records to determine the "calling party".
<!-- Image= activities5.png -->
{{< imagedisplay src="activities5.png" >}}

Then the record search dialog will appear, and if you check the search destination, you will be able to select the business partner, business partner person, user, etc. as shown below.
<!-- Image= activities6.png -->
{{< imagedisplay src="activities6.png" >}}

In this case, the recipient of the call is a company, so select the company you are dealing with and select the record. When you are done, click "Add".
<!-- Image= activities7.png -->
{{< imagedisplay src="activities7.png" >}}

Then the company name will be entered in the "Call to" field. Enter other information and save it.
<!-- Image= activities8.png -->
{{< imagedisplay src="activities8.png" >}}

When you check the activity in the data of the client company, you will see that the phone activity created earlier is associated with the list as shown below.
<!-- Image= activities9.png -->
{{< imagedisplay src="activities9.png" >}}

In the above figure, the activity is opened from the navigation menu of the client company. In this case, if there is no value in the "Due Date" field of the activity, the activity may not be displayed if **the filter is set** to "Within the next 30 days", which is the default setting. If the activity is not displayed in the list, please try switching the filter condition to "All".
<!-- Image= activities10.png -->
{{< imagedisplay src="activities10.png" >}}

Otherwise, you can also create a new one from the entities that it is related to. For example, if you want to create an activity that is related to a sales project, click "Activity" from the menu.
<!-- Image= activities11.png -->
{{< imagedisplay src="activities11.png" >}}

Click on "Add new activity" and then "Phone".
<!-- Image= activities12.png -->
{{< imagedisplay src="activities12.png" >}}

In the previous creation method, you searched for and entered the "Calling Party", but if you create it directly from a sales proposal, the data is automatically entered in the "Calling Party". Enter the subject and other information, save, and you are done creating.
<!-- Image= activities13.png -->
{{< imagedisplay src="activities13.png" >}}

## How to create a new activity entity
Activity entities can be created anew.

However, once an activity entity is created, its settings cannot be changed, so if you create an activity entity, do you really need to create that activity? Is it really necessary to create an activity entity, or can a default entity be used instead? When creating an activity entity, please consider whether you really need to create the activity or whether you can substitute it with a default entity.

In addition, it is not recommended to delete an entity once it has been created, because it is necessary to release all relationships and dependencies with other entities before deleting it, and there is a possibility that the related entities will stop working properly after the deletion.

*In the past, we have experienced the phenomenon that after deleting an activity entity, the trading partner company entity becomes unusable.

Therefore, it is recommended that entity creation be planned and implemented.

To set it as an activity entity, open the entity from "Settings" - "Customize System". Then, in the entity menu, there is a check mark "Define as activity entity. In the entity menu, there is a check box "Define as activity entity.
<!-- Image= activities14.png -->
{{< imagedisplay src="activities14.png" >}}

In this article, we have introduced the use of entities for activities. In the next article, we will discuss business partners and competitors.