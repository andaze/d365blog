---
title:  "How to deal with Dynamics 365 import errors"
draft: false
weight: 8
datetitle: "2017.08.23 | "
image: "artical8.jpg"
Author: "Takafumi Noguchi"
authorimage: "authorimage.jpg"
showinhome: true
showinaccordian: true
rightMenu: "artical"
linkdin: ""
---
<!-- Intro  -->
In the previous article, we have shown you how to import data using Excel template, but if an error occurs during data import, what should you do?


## When do I get an error?
<!-- Image= error.jpg -->
{{< imagedisplay src="error.jpg" >}}

First of all, the most common error in the template is due to duplicate data, as you can see in the Excel template, the value of the reference field is entered based on the display name.

For example, what happens if you import an Excel template with a contact person for each of your different client companies with the same name?

line 1     
Name of the person in charge of the business partner: Taro Test    
Name of client company: Test Co.      
&nbsp;


Line 2    
Name of contact person: Jiro Test     
Name of client company: Test Co.      
&nbsp;


This "Test Corporation" is a completely different company. Normally, in a case like this, you should be able to determine the internal ID of the company you are referring to, etc., but since you only look at the normal display name, you will get the following error when importing.
<!-- Image= error1.jpg -->
{{< imagedisplay src="error1.jpg" >}}

How can we deal with this case?

### 1. Use the mapping function on import to deal with the problem.
The easiest way to do this is to change the field to be associated with the import to a different field instead of the company name. For example, if you want to use the stock code of the company, enter the stock code of each stock in the Excel template file instead of the company name.
<!-- Image= error2.jpg -->
{{< imagedisplay src="error2.jpg" >}}


Then, let the Excel template file be imported again. At this point, we need to display the field mapping editor, so we will add the appropriate columns to the Excel template beforehand. (See the previous article)

In the Mapping Editor, search for "Company Name", which was showing a duplicate error this time, and click the magnifying glass button.
<!-- Image= error3.jpg -->
{{< imagedisplay src="error3.jpg" >}}



Then you can add the references to be mapped. In this case, check the new "Stock Code" checkbox, and click "OK".
<!-- Image= error4.jpg -->
{{< imagedisplay src="error4.jpg" >}}

Now, complete the import process to the end. Then, the part that gave us an error earlier was successful this time.
<!-- Image= error5.jpg -->
{{< imagedisplay src="error5.jpg" >}}


You have created the data correctly.
<!-- Image= error6.jpg -->
{{< imagedisplay src="error6.jpg" >}}


### 2. Get the ID of the record and import it.
While method 1 above is very effective, it can be implemented without using the mapping editor. It is a way to get the ID of each company record and import it.

Check the list of companies that have duplicate errors this time. Then click on "Email link" from the menu.
<!-- Image= error7.jpg -->
{{< imagedisplay src="error7.jpg" >}}

The URL for each record should then be displayed in the body of the mailer's compose screen.
Here, the URL from id= becomes the ID of the record. (Ignore the leading %7b).

<!-- Image= error8.jpg -->
{{< imagedisplay src="error8.jpg" >}}


Now, enter the ID in the "Company Name" field of the Excel template, and then import the file as usual.
<!-- Image= error9.jpg -->
{{< imagedisplay src="error9.jpg" >}}

This method is very convenient because it does not require a mapping editor, so there is no need to add custom columns to the template beforehand.

## About other errors
Most of the errors during import are related to duplicates, but other errors can be solved by using the following community sites.

Dynamics 365 Community     
[https://community.dynamics.com/](https://community.dynamics.com/)   
&nbsp;

If this does not solve the problem, try contacting [Microsoft Support](https://dynamics.microsoft.com/ja-jp/support/) with your subscription.     
&nbsp;