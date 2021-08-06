---
title:  "Using Dynamics 365 Calculated Fields"
draft: false
weight: 8
datetitle: "2017.08.23 | "
image: "artical8.jpg"
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
In this article, I will give a brief introduction to calculated fields in Dynamics 365.


## About calculated fields
Calculated fields are a type of field in Dynamics 365 that can be used for the following data types
* One line of text
* Option Set
* Two options
* integer
* decimal number
* Currency
* Date and time

By using calculated fields, you can change the value of a field depending on the condition of If Else, calculate it by a function, or get the data of a related entity via a lookup field.

Also, when you set a value or condition in a calculated field, the setting will be reflected immediately for all records. This is very convenient because you don't need to manually reflect the settings to all records like in the on-demand process.

## Create a calculated field
Go to the Create New Field screen. Select one of the above types for "Data Type" and then select "Calculation" for "Field Type."

Click on the "Edit" button. Then you will see a button called "Edit". When you click on this button, the field will be created automatically, so you can enter the "Display Name" or "Name" first and then click on it.
<!-- Image= calcu01.png -->
{{< imagedisplay src="calcu01.png" >}}

Click "Edit" and a pop-up window will appear. Here you can set conditions and values.
<!-- Image= calcu02.png -->
{{< imagedisplay src="calcu02.png" >}}

### Set conditions
Click "Add Condition" to set the condition. Select an entity in "Entities". If the entity you want to create a calculated field for has a lookup field, you can also use the field of the related entity.
<!-- Image= calcu03.png -->
{{< imagedisplay src="calcu03.png" >}}

In this example, we will use "Current Entity". In the "Field" field, you can select the field of the selected entity, and in the "Operator" field, you can set "=", ">", "NULL", etc. In the "Type" field, you can select "Value" or "Field".
<!-- Image= calcu04.png -->
{{< imagedisplay src="calcu04.png" >}}

After setting the conditions, click the check button.
<!-- Image= calcu05.png -->
{{< imagedisplay src="calcu05.png" >}}

### Set the value
Click "Add Action. Click on "Add Action". In this case, if the condition set above is TRUE, then this operation will be performed. You can define a function, a field, or a value after = here.
<!-- Image= calcu06.png -->
{{< imagedisplay src="calcu06.png" >}}

**Available Functions**

Please refer to the following for the functions available here.
<!-- Image= calcu07.png -->
{{< imagedisplay src="calcu07.png" >}}

Quote: [Define calculated fields to automate manual calculations.](https://docs.microsoft.com/ja-jp/dynamics365/customer-engagement/customize/define-calculated-fields#calculated-field-functions-syntax)

In this example, we have entered text. Click the check button.
<!-- Image= calcu08.png -->
{{< imagedisplay src="calcu08.png" >}}

## Refer to the field of another entity
Let's set the value of another entity's field as the value of "Else". Expand "Else" and click on "Actions" and then "Add Action".
<!-- Image= calcu09.png -->
{{< imagedisplay src="calcu09.png" >}}

Use the "business partner contact person" (parentcontactidp) related to the sales project.
<!-- Image= calcu10.png -->
{{< imagedisplay src="calcu10.png" >}}

= Enter the name parentcontactidp and a dot ( . . ) in the "Contact Person" field. ). The "Contact Person" field will appear as a candidate.
<!-- Image= calcu11.png -->
{{< imagedisplay src="calcu11.png" >}}

Here, I selected "Name" and clicked the checkbox.
<!-- Image= calcu12.png -->
{{< imagedisplay src="calcu12.png" >}}

In this way, you can see that the name (of the person in charge of the business partner) has been set.
<!-- Image= calcu13.png -->
{{< imagedisplay src="calcu13.png" >}}

The settings don't make much sense, but I set them anyway (laughs), saved and closed. Let's check the result.
<!-- Image= calcu15.png -->
{{< imagedisplay src="calcu15.png" >}}

Please refer to the technical information for other scenarios.

[Define calculated fields to automate manual calculations.](https://docs.microsoft.com/ja-jp/dynamics365/customer-engagement/customize/define-calculated-fields#calculated-field-functions-syntax)

(Recently, I think Microsoft's documents are becoming more readable with images. This improvement is very helpful.)