---
title:  "Let's take advantage of the sales functions of Dynamics 365."
draft: false
weight: 2
datetitle: "2017.08.23 | "
image: "artical2.jpg"
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
So far, I have explained the features for administrators, but now I would like to introduce the features for sales and marketing.


First of all, in Dynamics 365 for sales, there are two default entities, one for sales and one for marketing. Depending on the stage of your business, the entities you use will differ depending on whether you are focusing on marketing activities to acquire potential customers or sales activities to potential customers to advance the sales process to a contract.


The advantage of Dynamics 365 and other SFA (sales force automation) systems is that the process from marketing activities to sales activities can be performed consistently, and customer data can be linked and analyzed in detail.

Let's first touch on the entities related to sales.

When performing sales activities, Dynamics 365 entities mainly use the following (* Leads are also used in marketing.)

* read
* Business partners
* Business partner representative
* Sales projects
* competing companies
* activity
* goal management
* estimate
* orders received
* bill

Here is a screenshot of Dynamics 365.
<!-- Image= screenshot.png -->
{{< imagedisplay src="screenshot.png" >}}

For example, a sales activity using Dynamics 365 can be assumed to be a business flow like this.


Scenario

1. If your company has a list of potential customers who have exchanged business cards at a social event or seminar, you can record the information of the list and the conversations that took place during the exchange of business cards in Dynamics 365 **Leads.**
   
    The lead information is managed as a **lead** (potential customer), and the lead's activities are recorded through phone calls, emails, and in-person conversations.
<!-- Image= screenshot1.png -->
{{< imagedisplay src="screenshot1.png" >}}

2. Create and manage multiple leads from a list of potential customers and approach potential customers. Make appointments with customers who show interest in your products and services by telephoning them.

    At this point, the customer is **rated as a prospect**, and the information from the visit is entered into the **sales case** created from the lead. Unfortunately, customers who are not interested are marked as unprospectable, and the reason for the rating is added and the approach as a potential customer is put on hold for a while.
<!-- Image= screenshot2.png -->
{{< imagedisplay src="screenshot2.png" >}}

3. Customers who are rated as potential are managed in the sales case. When a lead is created, information about the **company and the person** in charge of the company is automatically created, so you can include information about the company that you have researched, and if there is more than one main person in charge of the company, you can link them to the company and manage them.
<!-- Image= screenshot3.png -->
{{< imagedisplay src="screenshot3.png" >}}

In business negotiations, it is possible to standardize sales activities in the **business process flow**. The business process flow can be used to standardize sales activities.
<!-- Image= screenshot4.png -->
{{< imagedisplay src="screenshot4.png" >}}

In addition, since lead information is linked to the sales project, it is possible to check the chronological order of how a potential customer became a prospective customer and the activities conducted by the sales team.


4. When you have a business meeting with a prospective customer, they are very interested in your product and want to install it. Then, you need to prepare a **quotation** based on the **product list and price list** that you have created in Dynamics 365.
<!-- Image= screenshot5.png -->
{{< imagedisplay src="screenshot5.png" >}}

However, I remembered that I had heard at the last business meeting that there was also an offer from a **competitor** at this business meeting, and I had recorded it in my sales project.

You may need to offer better terms than your competitor's quote and prepare a **discounted** quote as a hidden gem in order to get a better deal.

So we **entered the discount rate in the price list** and prepared two quotes for the business meeting. After the business meeting, we were able to secure a three-year contract thanks to the discounted quote. After the business meeting, enter the business meeting information in the sales case record and create an order record from the quotation.

The order record contains the shipping date, shipping conditions, and discount rate. Then, create an **invoice** record based on the orders. Based on the information in the invoice record, **download and print the invoice created in the Word template,** and submit the invoice to the customer.

A few days later, after confirming the payment from the customer, you will complete the invoice record. This completes the sales case, so we will **close the sales case as an order.**
<!-- Image= screenshot6.png -->
{{< imagedisplay src="screenshot6.png" >}}

What do you think? If you take full advantage of the sales related entities in Dynamics 365, you can keep track of all your daily sales activities, and this is available from the day you configure Dynamics 365 for sales. Wouldn't you like to use it right now?

In the following article, I will explain in detail how to set up the scenario described above in [Dynamics 365.](#)