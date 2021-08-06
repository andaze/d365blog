---
title:  "Using Dynamics 365 business rules"
draft: false
weight: 6
datetitle: "2017.08.23 | "
image: "artical6.jpg"
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
Dynamics 365 has a feature called **Business Rules**. Normally, Javascript implementation is required to hide fields or perform operations according to conditions on a form. However, this feature eliminates the need for script implementation and allows users to easily set up the rules required for their business.

The following can be achieved with business rules.

<!-- Quate Box -->
By combining conditions and actions, business rules can be used to perform the following operations
* Set the field value
* Clearing field values
* Setting the input request level for a field
* Show or hide fields
* Validate the data to enable or disable the field and display an error message.
* Creating Business Recommendations Based on Business Intelligence

Quotes: [Create business rules and business recommendations to apply logic to forms.](https://docs.microsoft.com/ja-jp/dynamics365/customer-engagement/customize/create-business-rules-recommendations-apply-logic-form)    

In this section, we will use the business rules to perform simple operations.


## Create business rules.
Go to "Settings", "Customize", and then click "Customize System".
<!-- Image= businessRule1.jpg -->
{{< imagedisplay src="businessRule1.jpg" >}}

Expand "Trading Partner Companies" from the entities and click "Forms". Open the form to which you want to apply the business rule.
<!-- Image= businessRule2.jpg -->
{{< imagedisplay src="businessRule2.jpg" >}}

Click "Business Rules" in the menu.
<!-- Image= businessRule3.png -->
{{< imagedisplay src="businessRule3.png" >}}

In the lower right corner, you will see a button that says "Add new business rule", click it. Then the editor will be displayed. Here, we will perform the necessary operations.

As shown in the figure below, there is an area called "component" where you can lock or hide fields, display error messages, etc., and perform actions according to the conditions.
<!-- Image= businessRule4.png -->
{{< imagedisplay src="businessRule4.png" >}}

First, we will set up the conditions. Click on the condition component to open the "Properties" on the right side, and add the "Display Name" and "Rule". In this case, we will use the following conditions.

| Display name      | Enter basic company information       |
| --- | --- |
| Rule 1   | Email is blank        |
| Rule 2   | Web site is blank        |
| Rules Logic   | and        |

To add a rule, click "+ New". When you are done with the settings, click the "Apply" button.
<!-- Image=  businessRule5.png-->
{{< imagedisplay src="businessRule5.png" >}}

We now have a new condition. Now we will display an error message when the condition is TRUE. Drag and drop "Show Error Message" from "Components" to the right side of the condition component.
<!-- Image= businessRule6.png -->
{{< imagedisplay src="businessRule6.png" >}}

Configure the settings as follows.

| Display name      | error indication       |
| --- | --- |
| field   | Web Site        |
| Message   | Look up the company information and enter it        |

Once you have configured the settings, click "Apply".
<!-- Image= businessRule7.png -->
{{< imagedisplay src="businessRule7.png" >}}

You have now created a business rule. Click "Save" to verify that there are no problems with the rule. If no problems are detected, click "Activate".
<!-- Image= businessRule8.png -->
{{< imagedisplay src="businessRule8.png" >}}

Return to the Form Editor, save and "publish" the customization.
<!-- Image= businessRule9.png -->
{{< imagedisplay src="businessRule9.png" >}}

Now let's see if the business rules have been applied.

You see an error message in the field called "Web site".
<!-- Image= businessRule10.png -->
{{< imagedisplay src="businessRule10.png" >}}

## Use business rules for other forms.
What if you want to use the business rules you created above in other forms with the same conditions? Let's set the scope of the business rule.

Open the business rule and click "Deactivate" to make it editable. Check the "Scope" in the upper right corner. The scope can be set as follows.

| entity      | All forms and servers       |
| --- | --- |
| All forms   | All forms        |
| Specific form name   | Only specified forms        |


If you want to apply it to all forms, select "All forms".

If you want to make a limited setting of only two forms instead of all forms, duplicate this business rule once using "Save as...".
<!-- Image= businessRule11.png -->
{{< imagedisplay src="businessRule11.png" >}}

The business rule will be duplicated, so you can change the scope there and delete the "Copy XX" part of the display name and save it to achieve this. Now, click "Activate" to complete the settings so that the same business rule will be activated in another form.

*The original business rule is still inactive, so please "activate" it as well.
<!-- Image= businessRule12.png -->
{{< imagedisplay src="businessRule12.png" >}}

## Using Recommendations
There is a component called "Recommendation" in the business rules. This is a suggestion type component, where the user is presented with a recommended value, and if it is OK, it is applied.

For example, create a recommendation like the following

Business rule name: Use Recommendations

conditions

| Display name      | Description is blank       |
| --- | --- |
| field   | Description        |
| operator   | is blank        |     

&nbsp;


recommendation

| Recommendation Name      | Test Recommendation       |
| --- | --- |
| field   | Description        |
| Title      | Description is blank.       |
| Details   | If the description is blank, write "None".        |

&nbsp;

Action.

| Display name      | Test Action       |
| --- | --- |
| field   | Description.        |
| value   | None        |


The conditions are set as follows.
<!-- Image= businessRule13.png -->
{{< imagedisplay src="businessRule13.png" >}}

Add a recommendation from the component and drag and drop it to the right of the condition. Then, configure the recommendation settings and click "Apply".
<!-- Image= businessRule14.png -->
{{< imagedisplay src="businessRule14.png" >}}

Let's set up the actions in the recommendations as follows.
<!-- Image= businessRule15.png -->
{{< imagedisplay src="businessRule15.png" >}}

Save the file, activate it, and publish it. Let's take a look at the result. If you look at the field, you will see the i mark for recommendation, and if you click on it, it will be as you created it.
<!-- Image= businessRule16.png -->
{{< imagedisplay src="businessRule16.png" >}}

Clicking the "Apply" button will execute the action and add the value "None" to the description.
<!-- Image= businessRule17.png -->
{{< imagedisplay src="businessRule17.png" >}}

Business rules can also be used for various other purposes, such as locking a field to prevent it from being edited, hiding it, or copying the value of another field. Please try to use them.