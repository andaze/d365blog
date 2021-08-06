---
title:  "Visualize information in the Dynamics 365 dashboard"
draft: false
weight: 17
datetitle: "2017.08.23 | "
image: "artical17.jpg"
Author: "Takafumi Noguchi"
authorimage: "authorimage.jpg"
showinhome: true
showinaccordian: true
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
I have been informing you about the sales features of Dynamics 365. Now that you understand graphs, funnels, and goal management, let's touch on dashboards. 

There are two types of dashboards in Dynamics 365: system dashboards and user dashboards. The user dashboard allows you to visualize information by editing records that you have permissions for in graphs, grids, and lists.

In addition, system administrators can create system dashboards, which can be made public and configured for company-wide or departmental use.

The dashboard can be viewed from "Dashboard" in "Sales". 
<!-- Image= dashboard1.jpg -->
{{< imagedisplay src="dashboard1.jpg" >}}

As shown below, the default dashboard arranges graphs, funnels, and comments in Yammer. 
<!-- Image= dashboard2.jpg -->
{{< imagedisplay src="dashboard2.jpg" >}}


## Edit an existing dashboard 
Now, let's edit the existing dashboard. First, go to "Settings" and click "Customize". 
<!-- Image= dashboard3.jpg -->
{{< imagedisplay src="dashboard3.jpg" >}}

Open "Customize System" and select "Dashboard".
<!-- Image= dashboard4.jpg -->
{{< imagedisplay src="dashboard4.jpg" >}}

When you open the appropriate dashboard, it should look like this 
<!-- Image= dashboard5.jpg -->
{{< imagedisplay src="dashboard5.jpg" >}}

Dashboards can visualize useful information for users and businesses by incorporating graphs, lists, web resources, IFrames, and social insights (Social Engagement features) into areas of the page. 
<!-- Image= dashboard6.jpg -->
{{< imagedisplay src="dashboard6.jpg" >}}

For example, let's edit an existing graph. Double-click on the graph that is displayed as a funnel on the left.       
*Alternatively, click on the Edit Component button. 
<!-- Image= dashboard7.jpg -->
{{< imagedisplay src="dashboard7.jpg" >}}

Looking at the properties, we can see that this graph only shows the Sales Pipeline graph, which is based on the sales case data. 
<!-- Image= dashboard8.jpg -->
{{< imagedisplay src="dashboard8.jpg" >}}

Now, set the Default Chart to the top sales form and click OK. 
<!-- Image= dashboard9.jpg -->
{{< imagedisplay src="dashboard9.jpg" >}}

Then, the graph has changed. In this way, you can easily visualize your data by creating the graphs you need and pasting them in the dashboard. 
<!-- Image= dashboard10.jpg -->
{{< imagedisplay src="dashboard10.jpg" >}}

## Add a personal wall to the dashboard 
The Wall feature allows you to post information from your Activity Feed.

The Activity Feed, which I will explain in detail in a later article, is a feature that allows you to track and manage user comments, conversations, information on updates to business partners and sales deals, and the user's follow-up history. Updates to that information can be immediately displayed on your wall. 

For example, let's say that members of the same section are following each other and make a comment on a project that each salesperson is working on. The content of the comment will be immediately reflected in the wall added to the dashboard, so they can quickly grasp the current status and follow up with each other. 

To set up that wall in the dashboard, you can use the web resource. 
<!-- Image= dashboard11.jpg -->
{{< imagedisplay src="dashboard11.jpg" >}}

To set up your personal wall, enter "msdyn_/PersonalWall.htm" in Web Resources, enter values for "Name" and "Label", and click "OK". Then, click "Save" to publish the saved content. 
<!-- Image= dashboard12.jpg -->
{{< imagedisplay src="dashboard12.jpg" >}}

Then, in the dashboard, you will see the following update of what has been posted by the system. 
<!-- Image= dashboard13.jpg -->
{{< imagedisplay src="dashboard13.jpg" >}}

As you can see, a dashboard can expand useful information on a single page by using graphs, lists, and activity feeds. Just a note, if you set up a large number of graphs in a dashboard, it will take a long time to load the results. It would be more effective to set up a dashboard by properly determining which information is needed, so that you can get only the information you need. 

That's all for this time. 