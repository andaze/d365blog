---
title:  "Let's try to use Dynamics 365 leads."
draft: false
weight: 3
datetitle: "2017.08.23 | "
image: "artical3.jpg"
Author: "Takafumi Noguchi"
authorimage: "authorimage.jpg"
showinhome: true
showinaccordian: false
rightMenu: "artical"
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
Now, we will use the Dynamics 365 sales entity while weaving in the [previous scenario](#).

First, log in to Dynamics 365 and open Leads in the Sales area.
<!-- Image= leads.png -->
{{< imagedisplay src="leads.png" >}}

The following is a sample, but it shows the leads that are currently in progress (your open leads).
<!-- Image= leads1.png -->
{{< imagedisplay src="leads1.png" >}}

If you actually open one lead, you will see a screen like the one below. We will manage customer data, known as potential customers, in Leads. I have highlighted in red the parts of the screen below that you should pay attention to, and I will explain each of them.
<!-- Image= leads2.png -->
{{< imagedisplay src="leads2.png" >}}

You can distinguish if the lead is a prospect with the **Prospect and Evaluate** button, or if it is not a prospect with the **No Prospect and Evaluate** button. Clicking on the **Prospect and Evaluate** button **automatically converts the lead into a sales case**, allowing you to move forward in the sales stage.
(At the same time, information on the **client and the client's contact person** will be created.

<!-- Image= leads3.png -->
{{< imagedisplay src="leads3.png" >}}

Leads that have been identified as potential are stored as "read-only" records. This is so that if, for some reason, a meeting with a prospective customer goes back to the previous sales stage, the **lead can be reactivated.**
<!-- Image= leads4.png -->
{{< imagedisplay src="leads4.png" >}}

The **No Prospect and Evaluate** buttons allow you to evaluate the lead by selecting the reason why it was deemed as a no prospect.
<!-- Image= leads5.png -->
{{< imagedisplay src="leads5.png" >}}

This is the header of the form and can contain important information such as "How did you hear about us? and "(potential customer's) rating" can be placed in the upper right corner of the screen. This setting is done in the form.
<!-- Image= leads6.png -->
{{< imagedisplay src="leads6.png" >}}

This is called a **business process flow**, and it is an indicator of the stage of approach to potential customers. By standardizing the elements necessary to evaluate a potential customer, we can implement measures to ensure that all salespeople can achieve the same results.
<!-- Image= leads7.png -->
{{< imagedisplay src="leads7.png" >}}

If you want to customize the business process flow, go to Settings > Process > Business Process Flow and filter.
<!-- Image= leads8.png -->
{{< imagedisplay src="leads8.png" >}}

Then you need to change the **sales process from leads to sales deals.**
<!-- Image= leads9.png -->
{{< imagedisplay src="leads9.png" >}}

If you don't need this business process flow, don't worry, you can hide it from your security role.
<!-- Image= leads10.png -->
{{< imagedisplay src="leads10.png" >}}

If you want to add more information related to the lead, for example, you can also record the activities (emails and phone calls). When you open the menu, you can add other entities that are associated with the lead.

From the menu, click on "Activities".
<!-- Image= leads11.png -->
{{< imagedisplay src="leads11.png" >}}

In this way, it is possible to keep track of e-mail and telephone activities.
<!-- Image= leads12.png -->
{{< imagedisplay src="leads12.png" >}}

You can **add a new activity** by clicking Add new activity.
<!-- Image= leads13.png -->
{{< imagedisplay src="leads13.png" >}}

This is how many types of activities are available by default, and you can add more to the list by adding custom entities for activities. Just to note, once you create an activity entity and add it to this list of activities, you cannot delete it in any supported way. You will need to take this into consideration before adding a new activity.

In this article, we have discussed a bit about leads. Let's continue with a more in-depth understanding of the process of creating business partners, representatives, and sales deals from leads in the [next article](#).
