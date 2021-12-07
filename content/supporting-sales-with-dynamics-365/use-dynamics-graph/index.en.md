---
title:  "Using Graphs in Dynamics 365"
draft: false
weight: 14
datetitle: "2017.08.23 | "
showinhome: true
showinaccordian: true
rightMenu: "artical"
indexImg: "artical14.png"
description: "By using Dynamics 365 and continuing to effectively manage your sales activities, you will accumulate enough data in Dynamics 365 to consider your sales strategy."
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
By using Dynamics 365 and continuing to effectively manage your sales activities, you will accumulate enough data in Dynamics 365 to consider your sales strategy.

You can use the data to help you determine what activities and sales talks are effective, research ways to approach different types of customers, and offer new products and services to win business.

What is even more remarkable is that Dynamics 365 allows you to process and visualize the data in reports, graphs, and dashboards based on the accumulated corporate data.

Of course, some data processing functions are implemented in regular CRM products, but I think the strength of Dynamics 365 is that it can not only process data by itself, but also provide more advanced data processing functions by linking with Power BI.

In this article, we will discuss graphs, one of the data processing functions.

## Creating a Graph
Let's create a graph right away.

First of all, I would like to check the status of the negotiation in the sales form. Go to "Sales" and open "Sales Forms". On the right side of the record list of the sales form, you will see "Graph", expand it.
<!-- Image= graph1.png -->
{{< imagedisplay src="graph1.png" >}}

When you expand the Graph window, you will probably already see the default graph (System Graph). Now let's create a new graph by clicking the "+" button.
<!-- Image= graph2.png -->
{{< imagedisplay src="graph2.png" >}}

Then the graph designer will appear. Enter the name of the graph first, and then select the fields that will be the X-axis and Y-axis of the graph.
<!-- Image= graph3.png -->
{{< imagedisplay src="graph3.png" >}}

Let's keep it simple this time by selecting the client company on the Y-axis and the sales forecast on the X-axis.
<!-- Image= graph4.png -->
{{< imagedisplay src="graph4.png" >}}

And set the graph type to Vertical Bar.
<!-- Image= graph5.png -->
{{< imagedisplay src="graph5.png" >}}

You will then see the completed image of the graph. If you are satisfied with the graph you see, click the Save button to save the graph, and then click the X button to close the Graph Designer.
<!-- Image= graph6.png -->
{{< imagedisplay src="graph6.png" >}}

Let's look at the completed graph. For example, let's click on the sales forecast of ¥25,000. You will see that the two sales proposals are filtered out in the screen on the left.
<!-- Image= graph7.png -->
{{< imagedisplay src="graph7.png" >}}

In this sample, the number of records is small, so it doesn't look very effective. However, if the number of records is huge (10,000 to 100,000, for example), it is possible to visualize and filter out those with high sales potential for efficient search.

It is also easy to understand how many sales projects you own, and how much sales potential you have in total.

In the next article, we will use the sales funnel to manage your leads.