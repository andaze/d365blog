---
title:  "import-data-from-excel-online"
date:   2020-08-05T15:53:27+06:00
draft: false
datetitle: "2017.08.23 | Initialization of Dynamics 365 [More], Uncategorized /"
pageHeading: "Data import in Dynamics 365 Excel Online"
image: "images/artical9/artical9.jpg"
Author: "Takafumi Noguchi"
authorimage: "images/authorimage.jpg"
intro: ""
---
<!-- Intro  -->
In the previous article, we introduced the process of importing data using an import template. This method can be very useful when importing initial data. In this article, I will describe how to import data dynamically in Excel Online based on the view you have created instead of using a template.

Note that you do not need to have Excel client installed on your local PC to edit dynamically in Excel Online.

<!-- Table Of Content -->

* Create a view in advance.
* Importing Data in Excel Online

## Create a view in advance.
You can open the entity you want to import data dynamically in Excel Online and process it immediately, but if you have more than 5000 records stored in Dynamics 365, the process will take a long time. Therefore, we will show you how to create a view in advance and then edit or add new records to the records displayed in the view.

There are two types of views: system view and personal view. For flexibility, we will create a personal view. Click "Advanced Search" in the upper right corner of the screen.
<!-- Image= speakerpic_test.jpg -->

Click on the "New" button to create a new view.
<!-- Image- speakerpic_test1.jpg -->

Set the filter conditions. In this example, we have set the following conditions.
<!-- Image= speakerpic_test2.jpg -->

Next, click "Edit Columns" and select the columns you want to display. The selected columns will be the fields where you can edit and add values for importing in Excel Online, so select the columns you want. Once you have checked the required columns, click "OK".
<!-- Image= speakerpic_test3.jpg -->

After changing the order of the columns to be displayed, click "OK" again.
<!-- Image= speakerpic_test4.jpg -->

Click "Save Over", set the name of the view, and click "Save Over".
<!-- Image= speakerpic_test5.jpg -->

Your personal view has now been created.

## Importing Data in Excel Online
Now, let's open the trading partner company and use the view we just created.

When you open the view list, you will see that the view you just created is displayed in "My Views". Click on that view.
<!-- Image= speakerpic_test6.jpg -->

The results are now narrowed down to match the filter criteria. Now we will edit them in Excel Online. Click on "Export to Excel" from the menu, and then click on "Open in Excel Online".
<!-- Image= speakerpic_test7.jpg -->

You are now in the Excel editing screen. Enter the required values in each column. We will also add a new company.
<!-- Image= speakerpic_test8.jpg -->

Company name: Excel Import Co.
Representative number: 029-186-6930
Postal code: 305-0062
Address: 5-9-4 Akatsuka, Tsukuba City, Ibaraki Prefecture

When all edits and additions are complete, click "Save changes to DYNAMICS365" to import the data.
<!-- Image= speakerpic_test9.jpg -->

As the data is sent for import, check the status of the import process and confirm the result when it is complete.
<!-- Image= speakerpic_test10.jpg -->

The record has been updated as follows.
<!-- Image= speakerpic_test11.jpg -->

As you can see, Dynamcis 365 allows you to add and update records just as you would manage data in Excel.
This will be a useful feature, so please try to use it.