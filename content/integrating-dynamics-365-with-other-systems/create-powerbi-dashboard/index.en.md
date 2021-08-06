---
title:  "Integrate Dynamics 365 and Power Bi to enhance dashboards"
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
      "dateModified": "2015-02-05T09:20:00+08:00"
    }
---
<!-- Intro  -->
Dynamics 365 has an existing dashboard function, but if you integrate Power BI, you will be able to check information more graphically.

Power BI is a business intelligence tool provided by Microsoft. It is a tool that processes large amounts of data and provides visualized information that is effective for business.

For more information, see [What is Power BI?](https://powerbi.microsoft.com/ja-jp/)  for more information.     
Also, [Power BI Pro is available as a free trial](https://powerbi.microsoft.com/ja-jp/pricing/) version, so please take advantage of it.

In this article, I would like to add the graphs processed by Power BI to the dashboard of Dynamics 365.


## Configuring Power BI for Dashboards
First, click on "Settings" and then "Manage".
<!-- Image= Power1.png -->
{{< imagedisplay src="Power1.png" >}}

Then click on "Manage System".
<!-- Image= Power2.png -->
{{< imagedisplay src="Power2.png" >}}


Open the "Reports" tab, check "Yes" under "Allow Power BI visualizations to be embedded", and click "OK".
<!-- Image= Power3.png -->
{{< imagedisplay src="Power3.png" >}}


The configuration is now complete.

## Incorporating Power BI Graphs into Dashboards
Now, let's create a new dashboard. From the dashboard, click on the "New" button. You can select any dashboard layout and click the "Create" button.
<!-- Image= Power4.png -->
{{< imagedisplay src="Power4.png" >}}


When you open the dashboard menu, you will see "Power BI Tile" as shown in the figure, so click on it to use it.
<!-- Image= Power5.png -->
{{< imagedisplay src="Power5.png" >}}


You will then need to select a workspace in Power BI.
<!-- Image= Power6.png -->
{{< imagedisplay src="Power6.png" >}}


Note that if you have not set up the Power BI side here, it will not be displayed. If you have already activated your Power BI license, you can access Power BI from the Office 365 menu.
<!-- Image= Power7.png -->
{{< imagedisplay src="Power7.png" >}}


This time we will use a workspace that we have already created. If you haven't created one yet, try clicking on the "Create App Workspace" button to create one.
<!-- Image= Power8.png -->
{{< imagedisplay src="Power8.png" >}}


Now let's go back to the Dynamics 365 dashboard, specify the Power BI workspace name, and configure which graph to display. Once you have configured the settings, click "OK".
<!-- Image= Power9.png -->
{{< imagedisplay src="Power9.png" >}}


Now some Power BI graphs have been added to the dashboard. Let's add some more graphs in this way.
<!-- Image= Power10.png -->
{{< imagedisplay src="Power10.png" >}}


Finally, once you have entered a dashboard name, click "Save Over".
<!-- Image= Power11.png -->
{{< imagedisplay src="Power11.png" >}}



The dashboard will look something like this
<!-- Image= Power12.png -->
{{< imagedisplay src="Power12.png" >}}


This is how Power BI graphs can be displayed in dashboards.
In this article, I used a sample Power BI graph, so there is no interaction with Dynamics 365 data, but if you set up the Power BI workspace to work interactively with Dynamics 365 data, you should be able to create a more effective dashboard.

Okay, that's it for this time.