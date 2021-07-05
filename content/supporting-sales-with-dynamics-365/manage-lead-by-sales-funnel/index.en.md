---
title:  "Managing Leads with Sales Funnels in Dynamics 365"
draft: false
weight: 15
datetitle: "2017.08.23 | "
image: "artical15.png"
Author: "Takafumi Noguchi"
authorimage: "authorimage.jpg"
showinhome: true
showinaccordian: true
rightMenu: "artical"
linkdin: ""
---
<!-- Intro  -->
In this article, I would like to talk about the "Sales Funnel", which I mentioned in the section ["Using Graphs in Dynamics 365"](#).

Let's start by understanding what a sales funnel is, and then let's actually create a sales funnel based on the data of potential customers called leads.


## What is a sales funnel?
Funnel means "funnel," and is a device used for pouring liquid or powder into a container with a small diameter.

The sales funnel is a funnel of customer information, as shown in the diagram below, and is used to classify customers as potential customers, prospective customers, and customers in order to highlight the current status and issues of the company's marketing strategy and sales activities.
<!-- Image= funnel1.png -->
{{< imagedisplay src="funnel1.png" >}}

When it comes to marketing, it usually starts with using MA tools (Marketing Automation) and other tools to make your company known to customers through customer attraction activities and to get them interested and concerned.

However, in this article, we will focus on managing the leads of customers who are interested in your company after attracting them, and using the information from those leads to create a sales funnel.

## Create a sales funnel.
This time, the method will be the same as the graphing method we wrote about in the previous graphing article.

As a preliminary preparation, we will first create a field for the lead that will be used as funnel material. In this case, we will create a field called "Willingness to Buy" as a set of 3 options (Willing to Buy Immediately, Comparing and Considering, and Interested).
<!-- Image= funnel2.png -->
{{< imagedisplay src="funnel2.png" >}}

Then, set up a field on the form for each lead and publish it. Let's also change the business process and add this field to the criteria. Go to "Settings", "Process", and click on "Sales Process from Lead to Sales Case".
<!-- Image= funnel3.png -->
{{< imagedisplay src="funnel3.png" >}}

To edit, deactivate the business process by clicking on the "Inactive" button.
<!-- Image= funnel4.png -->
{{< imagedisplay src="funnel4.png" >}}

Add a new step to the Lead Prospecting and Evaluation process by clicking the "+" button and then clicking "Add Step".
<!-- Image= funnel5.png -->
{{< imagedisplay src="funnel5.png" >}}

Save the data field of the additional step as "Willingness to Buy" with the "Apply" button.
<!-- Image= funnel6.png -->
{{< imagedisplay src="funnel6.png" >}}

Now click the "Save" button, and then click "Activate" to activate it.
<!-- Image= funnel7.png -->
{{< imagedisplay src="funnel7.png" >}}

Then, a new "Willingness to Buy" has been added to the lead's business process.
<!-- Image= funnel8.png -->
{{< imagedisplay src="funnel8.png" >}}

Now, let's create a sales funnel assuming that a purchase intent has been entered for the lead. In the Graph Designer, click the "+" button to start creating a new graph. Enter a name for the graph, and set the X-axis as Willingness to Buy and the Y-axis as Name.
<!-- Image= funnel9.png -->
{{< imagedisplay src="funnel9.png" >}}

Then, select the funnel in the graph.
<!-- Image= funnel10.png -->
{{< imagedisplay src="funnel10.png" >}}

Now save and close the designer with the X button. You will then see the results of the sales funnel.

For example, in the figure below, you can see that the largest number of leads are those who are comparing and considering, and the smallest number of leads want to buy immediately. In this case, the strategy would be, "What kind of approach and interest should we take in order for customers who are comparing and considering to choose our products and services?
<!-- Image= funnel11.png -->
{{< imagedisplay src="funnel11.png" >}}

In another pattern, there are many customers who want to buy immediately, as shown below.

In this case, it can be judged that there are many leads that have not been converted from leads to sales proposals (business negotiations), so it is necessary to "understand the causes and bottlenecks that prevent leads from being evaluated as potential sales proposals and take countermeasures.

<!-- Image= funnel12.png -->
{{< imagedisplay src="funnel12.png" >}}

In this way, you can use the sales funnel to clarify current issues and take immediate action.

The more leads and deals you manage, and the more complex they become, the more effective this function becomes. Therefore, try using sales funnels and graphs as models for your own data.

That's all for this article.