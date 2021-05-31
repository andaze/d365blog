---
title:  "Try to embed Javascript code in Dynamics 365"
draft: false
weight: 1
datetitle: "2017.08.23 | "
image: "artical1.jpg"
Author: "Takafumi Noguchi"
authorimage: "authorimage.jpg"
showinhome: true
showinaccordian: false
rightMenu: "artical"
linkdin: ""
---
<!-- Intro  -->
Forms in Dynamics 365 allow you to insert web resources, which allow you to add HTML, Javascript, image files and Silverlight applications, giving you relative flexibility in customizing your forms.

[Customer Engagement Web Resources](https://docs.microsoft.com/ja-jp/dynamics365/customerengagement/on-premises/developer/web-resources)

This time, we will embed a Javascript code in the form and if the "Phone" field is blank, we will make the "Fax" field read-only. Something as simple as this could be done quickly by business rules, but this time we'll do it as a test.


## Let's add javascript to the form.
First, let's open a record of a client company and open the form's edit screen.
<!-- Image= javascript1.png -->
{{< imagedisplay javascript1 "290" "596" "796" >}}

The form editing screen can be accessed from "Settings" - "Customize System", but it is easier to open the record and edit the form like this.
<!-- Image= javascript2.png -->
{{< imagedisplay javascript2 "290" "596" "796" >}}

Click "Form Properties" in the upper right corner.
<!-- Image= javascript3.png -->
{{< imagedisplay javascript3 "290" "596" "796" >}}

In the "Events" tab, the "Form Library" is a list of web resources that have been added to the form. By adding new Javascript here, you can execute scripts triggered when the form is opened (OnLoad), when it is saved (OnSave), or when the value of a field is changed (OnChange).
<!-- Image= javascript4.png -->
{{< imagedisplay javascript4 "290" "596" "796" >}}

Now, let's add a new one. Click the "+Add" button in the "Form Library".
<!-- Image= javascript5.png -->
{{< imagedisplay javascript5 "290" "596" "796" >}}

This time, we are going to add a new web resource, so click "New".
<!-- Image= javascript6.png -->
{{< imagedisplay javascript6 "290" "596" "796" >}}

Enter any value for "Name" or "Display Name", and set "Type" to "Script (JScript)". Then click "Text Editor".
<!-- Image= javascript7.png -->
{{< imagedisplay javascript7 "290" "596" "796" >}}

Here, we will enter the usual javascript code, but the control to set read-only for Dynamics 365 fields is setDisabled.

[setDisabled (see Client API)](https://docs.microsoft.com/ja-jp/powerapps/developer/model-driven-apps/clientapi/reference/controls/setDisabled)

This time, I did the following.

<!-- Background Box -->
function LockFaxNumber()
{ 
   var Phone = Xrm.Page.getAttribute("telephone1").getValue(); //phone

  if(Phone == null && Phone != "undefined")
   {
     Xrm.Page.getControl("fax").setDisabled(true);
    } 
  else{
     Xrm.Page.getControl("fax").setDisabled(false);
   }    
  console.log("filed lock is done");
}

Now that the script settings are complete, click "OK".
<!-- Image= javascript8.png -->
{{< imagedisplay javascript8 "290" "596" "796" >}}

In the form properties screen, you will see the javascript you have created, click "Add" to add the script to the form.
<!-- Image= javascript9.png -->
{{< imagedisplay javascript9 "290" "596" "796" >}}

It has now been added to the form.
<!-- Image= javascript10.png -->
{{< imagedisplay javascript10 "290" "596" "796" >}}

## Make the added javascript run on page startup.
Let's try to execute the javascript we added to the form on page launch (OnLoad). First, click the "+Add" button in the "Event Handler" section.
<!-- Image= javascript11.png -->
{{< imagedisplay javascript11 "290" "596" "796" >}}

Set the name of the javascript web resource you have created in "Library" and the function name of the script in "Function".
<!-- Image= javascript12.png -->
{{< imagedisplay javascript12 "290" "596" "796" >}}

Click on the "Dependencies" tab and select the fields that you are using in the script. In this case, we select "Fax" and "Representative Phone". Then click "OK".
<!-- Image= javascript13.png -->
{{< imagedisplay javascript13 "290" "596" "796" >}}

The fields with this dependency set will be locked on the form. This prevents you from accidentally deleting a field from the form, resulting in a script error.
<!-- Image= javascript14.png -->
{{< imagedisplay javascript14 "290" "596" "796" >}}

Now that everything is ready, click "OK" to close the "Form Properties". Then click "Publish" from "Save as Draft".
<!-- Image= javascript15.png -->
{{< imagedisplay javascript15 "290" "596" "796" >}}

Now, let's try to update the page for the company we do business with. The "Phone" field is blank, and the "Fax" field is locked.
<!-- Image= javascript16.png -->
{{< imagedisplay javascript16 "290" "596" "796" >}}

Let's put a value in "Phone" and refresh the page again. Now we can enter "Fax". That's a success.
<!-- Image= javascript17.png -->
{{< imagedisplay javascript17 "290" "596" "796" >}}

For example, if you want the script to work at the timing when the value changes, open the properties of the field, and in the "OnChange" event, add the script from the "+Add" button as in the above procedure.
<!-- Image= javascript18.png -->
{{< imagedisplay javascript18 "290" "596" "796" >}}

In this article, I have introduced the basic javascript settings. I'll try to do something a little more elaborate in another article, so stay tuned.

All right, then!    
&nbsp;