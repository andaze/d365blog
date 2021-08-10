---
title:  "Managing Goals in Dynamics 365"
draft: false
weight: 16
datetitle: "2017.08.23 | "
showinhome: true
showinaccordian: true
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
{{< detailTopImage src="artical16.jpg" >}}
{{< authorImage src="authorimage.jpg" name="Takafumi Noguchi" linkdin="https://www.linkedin.com/in/tnoguchi1123531" >}}
<!-- Intro  -->
In this article, we will talk about goals in Dynamics 365. In Dynamics 365, you can define goal indicators to manage your goals.

The following technical information is quoted as describing the function of goal management.

<!-- QuateBox -->
" The functions of goal management are as follows

Create a complex goal hierarchy. In this hierarchy, individual goal contributors or teams are assigned their own goals.    
Use goals in the hierarchy to track important business data (sales, customer service support cases, phone calls, etc.). You can also track data represented by user-defined entities.     
Roll up the sum of each goal (e.g. total sales or total shipping units) in a hierarchical tree.    
Measures the results of a roll-up on a target or extended target.    
Track the results of goals for an accounting period or custom period.   
Align the target period with the current fiscal year setting.    
Support different types of goals (e.g. amount, number, etc.).   
Tracks actual, in-progress, and user-defined data.    
Add a complex query to refine the rollup results.     
Overwrite the rollup results to include new or additional data.    
Incorporate the results of your goals into reports, graphs, and dashboards.    
It supports workflow and customization. "    
Reference: [https://msdn.microsoft.com/ja-jp/library/gg328577.aspx](https://msdn.microsoft.com/ja-jp/library/gg328577.aspx)


## About target indicators
<!-- Image= kpi.jpg -->
{{< imagedisplay src="kpi.jpg" >}}

Before we start creating goals, let's talk about target indicators. If you are a salesperson, you can use the number of appointments, visits, and closings as well as sales.     
For the support department, the number of support cases, customer satisfaction, etc. would be indicators.
<!-- Image= indicators.jpg -->
{{< imagedisplay src="indicators.jpg" >}}

In this article, we will create a simple goal using the Dynamics 365 default goal indicator "Sales". In this article, we will create a simple goal using the Dynamics 365 default goal metric "Sales".
<!-- Image= indicators1.jpg -->
{{< imagedisplay src="indicators1.jpg" >}}

When you open the "Sales" tab, you will see a screen like the one below. If you look at the "Type of indicator", you will see that it can be either "Amount" or "Number", but for sales, it will be "Amount".
<!-- Image= indicators2.jpg -->
{{< imagedisplay src="indicators2.jpg" >}}

If you look at the Rollup field, you will see that it is related to the Sales Case field. This refers to the field that will be used as a reference when automatically calculating the "Actuals" that will be displayed when you create a goal.
<!-- Image= indicators3.jpg -->
{{< imagedisplay src="indicators3.jpg" >}}

For example, the "Actual Sales" of a sales order is located in the dialog that appears when you "Close" the order, and the amount entered in the dialog is automatically added to the target performance.
<!-- Image= indicators4.jpg -->
{{< imagedisplay src="indicators4.jpg" >}}

As for the "Sales Forecast", the sales expected when the project is still open will be automatically calculated and entered in the target.
<!-- Image= indicators5.jpg -->
{{< imagedisplay src="indicators5.jpg" >}}

If you understand this much, you can start managing your goals. Let's start creating your goals.

## Create a goal
The target to be created this time is a sales target, the period is the first quarter of the fiscal year 2018 (01/01/2018 to 31/03/2018), the overall sales target is 5,000,000 yen, and the sales target will be distributed to each sales.

First, go to "Sales" - "Goals".
<!-- Image= indicators6.jpg -->
{{< imagedisplay src="indicators6.jpg" >}}

＋Click the + button to create a new one.
<!-- Image= indicators7.jpg -->
{{< imagedisplay src="indicators7.jpg" >}}

Create a sales target for the parent first. Make the following settings and save them.    

Name: <optional>    
Target Indicators: Sales     
Owner of the goal: <user who manages the parent goal>.     
Supervisor: <supervisor's user>.      
Type of target period: Accounting period     
Accounting period: First Quarter   
Fiscal year: FY2018      
Target value (amount): 5,000,000      
<!-- Image= indicators8.jpg -->
{{< imagedisplay src="indicators8.jpg" >}}

Now that we have created the parent's goals, let's set the goals for the section members. Set the previously created goal as the upper level goal, enter the person in charge as the goal owner, enter the value in the supervisor and goal management, and enter the target value (amount) and save it as shown below.
<!-- Image= indicators9.jpg -->
{{< imagedisplay src="indicators9.jpg" >}}

Create multiple subordinate goals like this. The subordinate goals are then listed in the parent goal. The "Goal to Achieve" for each goal is also displayed.
<!-- Image= indicators10.jpg -->
{{< imagedisplay src="indicators10.jpg" >}}

## Amount automatically calculated (rolled up) from sales projects
Once the upper and lower level goals are created, the actual and ongoing sales values are then updated as the owner of the goal makes sales in the sales projects.
<!-- Image= indicators11.jpg -->
{{< imagedisplay src="indicators11.jpg" >}}

This calculation is done automatically from the roll-up field of the sales form described above. The actual (amount) is based on the actual sales of the sales form, and the ongoing (amount) is based on the expected sales of the sales form.

The time period reflected in the target is determined by whether the actual close date for actual amounts and the projected close date for ongoing amounts fall within the target time period.
<!-- Image= indicators12.jpg -->
{{< imagedisplay src="indicators12.jpg" >}}

Let's make sure that the target values actually change by editing the sales projections and other information. First, set the fields of the sales form as follows. The owner is set to the sales person whose goal was set this time.
<!-- Image= indicators13.jpg -->
{{< imagedisplay src="indicators13.jpg" >}}

Then click the "Recalculate" button on the target.
<!-- Image= indicators14.jpg -->
{{< imagedisplay src="indicators14.jpg" >}}

You will then see that the "In progress (amount)" value of the target has been updated.
<!-- Image= indicators15.jpg -->
{{< imagedisplay src="indicators15.jpg" >}}

In this way, the records of entities related to the target will be linked. If you want to change the entity you want to link, please do so in the Goal Indicator.

That's all for this time.