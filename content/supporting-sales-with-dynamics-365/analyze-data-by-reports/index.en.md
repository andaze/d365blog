---
title:  "Analyze data with Dynamics 365 reporting functions"
draft: false
weight: 18
datetitle: "2017.08.23 | "
showinhome: true
showinaccordian: true
rightMenu: "artical"
indexImg: "artical18.jpg"
description: "Dynamics 365 allows users to generate fetch-based reports using the Report Wizard. This feature can be used by users to collect and analyze data in a simplified manner."
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
Dynamics 365 allows users to generate fetch-based reports using the Report Wizard. This feature can be used by users to collect and analyze data in a simplified manner.

## How to create a report
Creating a report is simple. First, click "Reports" from the menu.
<!-- Image= report1.jpg -->
{{< imagedisplay src="report1.jpg" >}}

Click the "+ New" button to create a new report.
<!-- Image= report2.jpg -->
{{< imagedisplay src="report2.jpg" >}}

Click "Report Wizard" to start creating a report.
<!-- Image= report3.jpg -->
{{< imagedisplay src="report3.jpg" >}}

If you want to create a new report, check the "Start a new report" box and click "Next".
<!-- Image= report4.jpg -->
{{< imagedisplay src="report4.jpg" >}}

If you want to create another report based on an existing report, check the "Start from existing report" checkbox and click "Next". This is useful if you want to create multiple similar reports, for example, a report for each province, or the same report for each department separately.
<!-- Image= report5.jpg -->
{{< imagedisplay src="report5.jpg" >}}

After entering the report name and description, select the Primary Record Type. This is the item where you decide which entity you want to create a report for.

In the "Related record types" section, you can select other entities that are related to the entity you selected for the primary.

For example, suppose you select the "Activity" entity and the Activity entity is related to the Trading Partner Entity in the "Related Company Name" search field. In this case, you can report "Trading Partner Companies" under "Related Record Types" using the field "Related Company Name. This would allow you to create a report with activity and company data.

In this step, select only the "Primary Record Type" and click "Next".
<!-- Image= report6.jpg -->
{{< imagedisplay src="report6.jpg" >}}

Select the filter criteria. In this example, we only want the results to show data where the "Activity Type" of the activity is "Letter". In this filter condition, you can add fields from either upper or lower level entities related to the activity to the condition.
<!-- Image= report7.jpg -->
{{< imagedisplay src="report7.jpg" >}}

Create a layout. In the "Tasks" section of the right panel, you can also change the position of the added columns, change the sort of the columns (descending or ascending), change the width of the columns, and add or delete columns.

First, let's add an entity field to the report column. Click "Click here to add a column" to add a column.
<!-- Image= report8.jpg -->
{{< imagedisplay src="report8.jpg" >}}

Here, we will add a "Subject" field for "Activity" in the column, with 100 pixels.
<!-- Image= report9.jpg -->
{{< imagedisplay src="report9.jpg" >}}

When you have finished adding all the columns, click "Next".
<!-- Image= report10.jpg -->
{{< imagedisplay src="report10.jpg" >}}

Check the "Show only tables" checkbox and click "Next.
<!-- Image= report11.jpg -->
{{< imagedisplay src="report11.jpg" >}}

Click "Next" on the confirmation screen, and then click "Finish" to complete the wizard.

Then, a report of the activity was created. I will discuss the details around the settings another time, but the report has now been created. To view the results, click on "Run Report".
<!-- Image= report12.jpg -->
{{< imagedisplay src="report12.jpg" >}}

The results of the report are now displayed.
<!-- Image= report13.jpg -->
{{< imagedisplay src="report13.jpg" >}}

The report will now be available for you to use.

## Limitations of reporting functions
Reports created by the Report Wizard are useful because they can be easily created by non-developers, but there are some limitations.

### The entities that can be added to a column are up to the top-level entities
What this means is that if you have three levels of entities: (1) client company (person in charge) > (2) sales case > (3) activity, and if you use activity as the primary report, you can only get data up to (2) sales case.

However, in the case of an activity, the field "Related to" is also a field where you can set (1) the company you are dealing with (the person in charge), so if you refer directly to the company you are dealing with in the activity, you can get it in the report. This is because, from the perspective of the activity, the client company is an entity one level higher.

For example.
* Company name: Test Co.
* Sales Case Name: Subscription Sales - Test Co.     
  → In the field named Company Name, refer to Test Corporation.
* Activity: Telephone    
  → In the "Related Parties" field, browse to Subscription Sales - Test Co.

(3) Create a report based on the activity. In this case, when you add a column to the report, you can refer to the (2) Sales Proposal Subject field and set it as a column in the report. However, the (1) Company Name field cannot be set as a column because it is two levels higher.

However, in the following example, the
* Company name: Test Corporation 2
* Activity: Send an email

→ In the "Related to" field, refer to Test Corporation 2.

From the activity's point of view, one level higher is (1) the name of the company, so you can add a field for the client company as a column in the activity's report.

### Report column widths can be up to 960 pixels
I can add multiple columns in the report and set the column width, but there is a limit of 960 pixels for the maximum column width in the report. Therefore, if you exceed 960 pixels, the column width will be adjusted automatically.
<!-- Image= report14.jpg -->
{{< imagedisplay src="report14.jpg" >}}

### Cannot output a report with more than 50,000 lines
This is a limitation of the report, but if you try to output a report with more than 50,000 lines, you will get the message "The maximum number of records has been exceeded. Please reduce the number of records. If you try to output a report with more than 50,000 rows, an error message will appear. In this case, it is necessary to divide the number of records by the filter condition of the report.

Similarly, when "exporting" after outputting the report, exporting in Excel format may not be processed in the same way. In this case, you need to export the data in csv format.

For more information, please refer to the following     
[Microsoft Dynamics 365 (Online) Reporting Considerations](https://technet.microsoft.com/ja-jp/library/dn792525.aspx)

If you want to generate advanced reports...

If you want to generate reports in Dynamics 365 that exceed the above limits, you will need to customize the reports using SQL Server data tools and Visual Studio, or perform data analysis using Power BI.

[Creating a new report using SQL Server Data Tools](https://technet.microsoft.com/ja-jp/library/dn531151.aspx)

[Using Power BI with Microsoft Dynamics 365](https://technet.microsoft.com/ja-jp/library/dn708055.aspx)

I would like to cover this method in a future article.

That's it for this time.