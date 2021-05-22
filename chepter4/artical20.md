---
title:  "create-quote-by-word-template"
date:   2020-08-05T15:53:27+06:00
draft: false
datetitle: "2017.08.23 | Dynamics 365 for Sales [More] /"
pageHeading: "Create a quote with Word template"
image: "images/artical20/artical20.jpg"
Author: "Takafumi Noguchi"
authorimage: "images/authorimage.jpg"
linkdin: ""
---
<!-- Intro  -->
Here is a summary of the steps to create your own quote using the Word template.
<!-- Table of Content -->
* advance preparation
* Create a quote template
  * Download the Word template
  * Editing a Word template
  * Create a table that repeats.
  * Uploading a Word template
* Create a quotation

## advance preparation
The first step is to create a sales case and add some products to be used in the quote. In this case, we added two products to the sales case and created a quote in advance with the tax amount added as well.
<!-- Image= wordtemp01.png -->

The total amount is as follows.
<!-- Image= wordtemp02.png -->

## Create a quote template
Now, let's start creating the template for the estimate.

### Download the Word template
First, go to "Settings," click "Templates," and then click "Document Templates.
<!-- Image= wordtemp03.png -->

Click on the "New" button.

Select the Word template, select Estimate under Filter by Entity, and then click Select Entity.
<!-- Image= wordtemp05.png -->
<!-- Image= wordtemp06.png -->

*If you have installed the Project Service, there are two quotes, but choose the quote one.


Now select an entity from the 1:N relationships.

In Estimate, the form says "Product" as shown below.
<!-- Image= wordtemp07.png -->

You can see that it is actually a sub-grid of an entity called Quote Request Details Row.
<!-- Image= wordtemp08.png -->

Therefore, select the Request for Quotation line from the 1:N association.
<!-- Imahe= wordtemp09.png -->

You can now configure the quote to show the selected products. Download the template.

### Editing a Word template
Open the Word document you downloaded, go to the Development tab, and click on the XML Mapping window.
*If it does not appear, check the "Development" tab in the Options ribbon settings.
<!-- Image= wordtemp10.png -->

In Custom XML, select urn:microsoft.... in your custom XML.
<!-- Image= wordtemp11.png -->

The internal names of the fields associated with the Quote and Request for Quote lines will be displayed. You can generate a templated document by fitting these fields into a Word document.
<!-- Image= wordtemp12.png -->

For example, we will assign fields to a simple estimate like the one below.
<!-- Image= wordtemp13.png -->

First, for the subject line, we will use the name in the quote, find name in the quote, right click on it, click on "Insert Content Control", and then click on "Rich Text Format".
<!-- Image= wordtemp14.png -->

You will then see that name has been inserted into the subject line.
<!-- Image= wordtemp15.png -->

In this way, insert fields in other places as well. If you have trouble checking the field names, you can use the Metadata Browser.
<!-- Image= wordtemp16.png -->

### Create a table that repeats.
Next, set the values of the quote request detail rows associated with the quote to the table.
First, add the product name, quantity, and price to the table.
<!-- Image= wordtemp17.png -->

Select all the fields in the row you want to repeat, and in the XML mapping, right-click on the quote_details entity name, and click Repeat in Insert Content Control.
<!-- Image= wordtemp18.png -->

The repeating lines are now marked with a + sign, as shown below.
<!-- Image= wordtemp19.png -->

Insert the rest of the subtotals, taxes, and totals, and you are done.
<!-- Image= wordtemp20.png -->

### Uploading a Word template
The last step is to upload the template. On the screen where you first downloaded the template, click "Upload Template" to create and upload the template.
<!-- Image= wordtemp21.png -->

It is now complete.

## Create a quotation
Go back to the quote you made in the sample, click "Word Template" from the top menu, and then click the name of the template you just uploaded.
<!-- Image= wordtemp22.png -->

When I opened the downloaded Word file, the quote was created exactly as I intended.
<!-- Image= wordtemp23.png -->

Also, with the recent update, it is now possible to save as PDF. Personally, I find this update to be quite helpful.
*We received a request from a user to make a PDF version of the document, because in Word, the person who downloads the document can freely change the values.

Click "Create PDF" from the top menu to select the template you uploaded and download it.
<!-- Image= wordtemp24.png -->

Looking at the PDF, it looks pretty good.
<!-- Image= wordtemp25.png -->

The above is the procedure for creating a quotation using a Word template. Once you have set up a template, you can use it many times, so it is very convenient.

We hope you will find it useful.