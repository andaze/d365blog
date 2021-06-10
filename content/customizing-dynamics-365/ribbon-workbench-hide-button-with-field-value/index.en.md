---
title:  "Ribbon Workbench: Show and Hide Buttons by Field Value"
draft: false
weight: 6
datetitle: "2017.08.23 | "
image: "artical6.jpg"
Author: "Takafumi Noguchi"
authorimage: "authorimage.jpg"
showinhome: true
showinaccordian: true
rightMenu: "artical"
linkdin: ""
---
<!-- Intro  -->
You can use Ribbon Workbench to show or hide the buttons.

However, if you simply want to hide unnecessary buttons, you can do so by adjusting the **permissions in the security role.**

So this time, we will add a setting to show or hide the field depending on its value.


## advance preparation
Before doing any customization, do some advance preparation.

### Importing Ribbon Workbench
Ribbon Workbench can be downloaded from [RIBBON WORKBENCH](https://www.develop1.net/public/rwb/ribbonworkbench.aspx).

Once you have registered your e-mail address for the download, you can download it from the link provided in the e-mail.
*The detailed procedure is omitted.

<!-- Quate Box -->
  <!-- Image= rb-01.png -->
{{< imagedisplay src="rb-01.png" >}}

  Quote from: [RIBBON WORKBENCH](https://www.develop1.net/public/rwb/ribbonworkbench.aspx)

Import the Ribbon Workbench that you downloaded from the Dynamics 365 solution.
<!-- Image= rb-02.png -->
{{< imagedisplay src="rb-02.png" >}}

If the import is complete, you will see something like this at the top
<!-- Image= rb-03.png -->
{{< imagedisplay src="rb-03.png" >}}

### Create two option set fields
Create one custom field to show or hide the button depending on the value of Yes or No.
We will create one custom field.
<!-- Image= rb-04.png -->
{{< imagedisplay src="rb-04.png" >}}

Place the fields on the sales case form.
<!-- Image= rb-05.png -->
{{< imagedisplay src="rb-05.png" >}}

### Create a solution for button customization
Create a solution that contains the minimum necessary information about the entity for which you want to customize the button.

Ribbon Workbench is a fairly heavy solution.

If you include too many entities in your button customization solution

Care should be taken when implementing this in a production environment, as the entire service will be degraded when it is published.

In this case, we have created a solution that includes only one form for sales projects.
 * Select **sales proposals** from existing entities
 * With **Add all assets** unchecked
 * I have selected only the **sales proposal** form and marked it complete.
 * Required components are not included.

<!-- Image= rb-06.png -->
{{< imagedisplay src="rb-06.png" >}}

The solution we created is as follows
<!-- Image= rb-07.png -->
{{< imagedisplay src="rb-07.png" >}}

## Load the solution
Now, load the solution that you just created in Ribbon Workbench.

Click the button at the top of the previous page.
<!-- Image= rb-08.png -->
{{< imagedisplay src="rb-08.png" >}}

Then, select the solution you have just chosen and click OK.
<!-- Image= rb-09.png -->
{{< imagedisplay src="rb-09.png" >}}

Once loaded, you will see the following screen.

There are separate areas for Home (buttons on the home screen), Subgrid (buttons on the subgrid screen), and Form (buttons on the form screen).
In Entity, you can set which entity's buttons to customize.
<!-- Image= rb-10.png -->
{{< imagedisplay src="rb-10.png" >}}

*Tip: If you want to simply hide the button, use the
You can right-click on the button and click **Hide**.
<!-- Image= rb-11.png -->
{{< imagedisplay src="rb-11.png" >}}

In this example, we will customize the **Close button as an order.**
<!-- Image= rb-12.png -->
{{< imagedisplay src="rb-12.png" >}}

You can find the internal name by entering developer mode with F12 and checking it.
It's MarkAsWon.
<!-- Image= rb-13.png -->
{{< imagedisplay src="rb-13.png" >}}

On the MarkAsWon button in the Form area, click
Right-click and click **Customize Command.**
<!-- Image= rb-14.png -->
{{< imagedisplay src="rb-14.png" >}}

COMMANDS Click MarkAsWon under
In the right panel, under **Display Rules**, click **Add Display Rule.**
<!-- Image= rb-15.png -->
{{< imagedisplay src="rb-15.png" >}}

Enter an appropriate name in Id.
<!-- Image= rb-16.png -->
{{< imagedisplay src="rb-16.png" >}}

In the **Add Step**, click **Value Rule**.
<!-- Image= rb-17.png -->
{{< imagedisplay src="rb-17.png" >}}

Enter the name of the field you created and enter **true** for Value.
If you set the value to True or TRUE, it will not work correctly.
<!-- Image= rb-18.png -->
{{< imagedisplay src="rb-18.png" >}}

You can then **publish** it with the Publsih button.
<!-- Image= rb-19.png -->
{{< imagedisplay src="rb-19.png" >}}

## Operation check ① 
Now, let's check the operation.

When I open one of my sales proposals and check the form, I do not see **Close as Order.**
<!-- Image= rb-20.png -->
{{< imagedisplay src="rb-20.png" >}}

Now we have changed the field to Yes (true) and saved it.

You can now see that the **order is closed.** It's working well.
<!-- Image= rb-21.png -->
{{< imagedisplay src="rb-21.png" >}}

## Take it one step further
Two option set fields would be simple enough.

If the **forecast category (msdyn_forecastcategory)** is set to "**confirmed**", the

We will also try to customize it to show the **close as an order.**
<!-- Image= rb-22.png -->
{{< imagedisplay src="rb-22.png" >}}

The confirmed value is 100000003, right?
<!-- Image= rb-23.png -->
{{< imagedisplay src="rb-23.png" >}}

Add the Step to the **Display Rules** in the Ribbon Workbench.
<!-- Image= rb-24.png -->
{{< imagedisplay src="rb-24.png" >}}

Now we need to Publish.

## Operation check ②
Now let's check the operation.

The custom field from earlier is Yes, but the **Close as Order** is not shown.
<!-- Image= rb-25.png -->
{{< imagedisplay src="rb-25.png" >}}

Changed **prediction category** to "**confirmed**".

**Close as order** is now displayed. It's working well.
<!-- Image= rb-26.png -->
{{< imagedisplay src="rb-26.png" >}}

This is how to use Ribbon Workbench in a more in-depth way.

You can call JS in COMMANDS to execute the process, and

When you import a Smart Button, you can run the process with the click of a button, so that you can

I encourage you to try other ways to use it.