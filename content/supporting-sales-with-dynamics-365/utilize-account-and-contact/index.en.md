---
title:  "Leverage Dynamics 365 trading partners and trading counterparts"
draft: false
weight: 6
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
{{< detailTopImage src="artical6.jpg" >}}
{{< authorImage src="authorimage.jpg" name="Takafumi Noguchi" linkdin="https://www.linkedin.com/in/tnoguchi1123531" >}}
<!-- Intro  -->
Now that I have told you about the sales projects and related activities, I will mention the parent entity, the **client company and the client representative.**

## Relationships between client companies and upper and lower levels
The client company, or company name, is the parent entity (higher-level entity) for client personnel, sales projects, and activities. In other words, based on the information of the client company, the information of the child entities (subordinate entities) is created and associated with it.

You can find out more about the hierarchical relationship by going to Settings > Customize System and checking the **1:N association** settings for your trading partners.
<!-- Image= levels.png -->
{{< imagedisplay src="levels.png" >}}

As shown in the figure above, a contact person has a subordinate relationship with a client company, and the "Company Name" field plays a role in the association. If you look at the form of the contact person, you will see that the "Company Name" field is filled with the name of the associated company.
<!-- Image= levels1.png -->
{{< imagedisplay src="levels1.png" >}}

As a feature of the trading partner entity, it is possible to have multiple (N) subordinate entities, and the trading partner entity information (parent company) can be held in the upper level if there is only one in the upper level of the trading partner entity.
<!-- Image= levels2.png -->
{{< imagedisplay src="levels2.png" >}}

It can also be managed as information that is not related to any other entity.

## Business partner personnel and sales projects
The person in charge of the business partner is also treated as a higher-level entity (except for the business partner company).

In some cases, a single client company may have multiple contact persons and roles. In such a case, it is possible to associate a company and a contact person on a 1:N basis, and furthermore, to manage the contact person by role in a sales case.

For example, as shown in the figure below, there is a company A that has three persons in charge. There are two people in charge of the current business meeting with the company (sales project X), and the roles of each person are managed.

Based on the information in the diagram below, we can see that our own sales staff should proceed with sales projects by contacting person (1) for final decisions such as contracts and settlements, and person (2) for technical issues.
<!-- Image= levels3.png -->
{{< imagedisplay src="levels3.png" >}}

## Sales projects and competitors
When you are managing the companies and people associated with a sales project, the information you need to pay attention to is the "competition". Each deal has different competitors. Dynamics 365 can help you manage these **competitors**.

Using the diagram above, there is a competitor P for sales project X. Competitor P and your company's services are at the same level and so are the products you handle. However, you have a history of losing several business negotiations with competitor P because its price is 5% lower than yours, although the quality of its products is better than yours.
<!-- Image= levels4.png -->
{{< imagedisplay src="levels4.png" >}}

In this case, we will manage the information of competitor P in Dynamics 365. We can create a new record from the Competitors entity, but since we want to associate it with a sales case, we will create a new record directly from the Sales Case Competitors.
<!-- Image= levels5.png -->
{{< imagedisplay src="levels5.png" >}}

A simple creation screen will appear, where you can write the name of your competitor, its strengths and weaknesses, and save it.
<!-- Image= levels6.png -->
{{< imagedisplay src="levels6.png" >}}

In this way, the company is managed as a competitor for the sales project and can proceed with business negotiations while keeping an eye on the competitor's movements.
<!-- Image= levels7.png -->
{{< imagedisplay src="levels7.png" >}}

It is also possible to manage competitors for each sales case and group them together to understand the win/loss ratio of business meetings and analyze what strategy the company should adopt against those competitors. Of course, it is also possible to associate multiple competitors to a sales proposal.

In the next article, I will let you know when the sales case process has progressed to the process of creating a quote or invoice.