---
title:  "Creating a Sales Case from a Lead in Dynamics 365"
draft: false
weight: 4
datetitle: "2017.08.23 | "
showinhome: true
showinaccordian: false
rightMenu: "artical"
indexImg: "artical4.jpg"
description: "In the [previous article](#), we talked about Leads in Dynamics 365. When a Lead becomes a Prospect, we will explain how to create a Client Company, a Client Representative, and a Sales Case from the Lead."
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
In the [previous article](#), we talked about Leads in Dynamics 365. When a Lead becomes a Prospect, we will explain how to create a Client Company, a Client Representative, and a Sales Case from the Lead.

## Assigning leads as potential.
First, open a lead that you plan to discuss in the future. Then click on the "Prospect and Evaluate" button.
<!-- Image= potential.png -->
{{< imagedisplay src="potential.png" >}}

A duplicate check dialog will appear. If you already have a business relationship with a company and the contact person is the same, you can enter the company name and contact person name here. If it is a new company, click "Continue".
<!-- Image= potential1.png -->
{{< imagedisplay src="potential1.png" >}}

You will then see that the lead has been automatically switched to a sales case. At this point, the information for the client company and the client contact person has been created.
<!-- Image= potential2.png -->
{{< imagedisplay src="potential2.png" >}}

When you check the information on the sales proposal, you will see that the company name and contact person information has been created. The name of the sales proposal is still based on the topic of the lead, so if you want to change the sales proposal subject, please change the topic of the sales proposal at this point.
<!-- Image= potential3.png -->
{{< imagedisplay src="potential3.png" >}}

## Business process flow for sales projects
When you create a sales proposal from a lead, the business process flow becomes "**evaluate as potential → create proposal → proposal → close**".

Note that the "**Evaluate as Potential**" process has already been checked, which means that the lead has been evaluated as potential and this process has been completed.
<!-- Image= projects.png -->
{{< imagedisplay src="projects.png" >}}

Clicking on "**Rate as Likely**" in a sales case will take you to the lead, which is very useful if you want to review the reasons why the case was rated as Likely.
<!-- Image= projects1.png -->
{{< imagedisplay src="projects1.png" >}}

## Edit the business process flow from lead to sales case.
To edit the process of closing a sales deal with a lead to a prospective customer, go to Settings > Process.
<!-- Image= case.png -->
{{< imagedisplay src="case.png" >}}

Select "**Lead to Sales Case Business Process**" whose process category is Business Process Flow.
<!-- Image= case1.png -->
{{< imagedisplay src="case1.png" >}}

This will open the business process flow editor as shown below. Here, you can select the steps you want to add, edit, and delete for each process, and build a flow that matches your company's sales process.
<!-- Image= case2.png -->
{{< imagedisplay src="case2.png" >}}

For example, let's add one more step called "Time to Purchase" to the sales project "Create Proposal" (labeled develop). First, click on the +Add button, and then click on the additional step.
<!-- Image= case3.png -->
{{< imagedisplay src="case3.png" >}}

Then you will see a + to decide which step to add before or after, as shown below. In this case, we will add it after step 4.
<!-- Image= case4.png -->
{{< imagedisplay src="case4.png" >}}

Step 5 will be added. Open the "Properties" tab in the right panel, select "Purchase Period" in the data field, and then click Apply
<!-- Image= case5.png -->
{{< imagedisplay src="case5.png" >}}

Now click on the "Update" button to update the business process flow. After that, when you check the sales project, you will see that the purchase time has been newly added as shown below.
<!-- Image= case6.png -->
{{< imagedisplay src="case6.png" >}}

You can create a business process flow tailored to your company to more accurately understand the status of business negotiations.

In the [next article](https://www.andaze.com/ja/dynamics365/supporting-sales-with-dynamics-365/p1036/), I will let you know how to link activities to sales projects to further promote business negotiations.