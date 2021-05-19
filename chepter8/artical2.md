---
title:  "dynamics-psa-lead-to-opportunity"
date:   2020-08-05T15:53:27+06:00
draft: false
datetitle: "2017.08.23 | Dynamics 365 Project Management /"
pageHeading: "Create sales proposals from leads in Project Service"
image: "images/artical2/artical2.jpg"
Author: "Takafumi Noguchi"
authorimage: "images/authorimage.jpg"
intro: ""
---
<!-- Intro  -->
Now that we have completed the structure and configuration of Dynamics 365 for Project Service Automation (PSA), let's create a project and start managing it.

<!-- Table Of Content -->
* How to create a project
* Create a company or contact person from a lead
  * Evaluated as promising with lead.

* Type of display (error response)
  * Display the "type" of sales proposals.
  * Contract unit arrangement

* Manage sales cases for Project Service Automation
  * Set the sales project type and contract unit.
  * Setting up client company management
  * Set up a product price list and sales
  * Setting up sales case items

* Next step.

## How to create a project
As a review of the previous article, the process of creating a project involves the creation of company and contact information from the lead, as well as a sales case. If the quote created from the sales proposal is accepted, a project contract is created, and the project begins. Of course, it is possible to create a project by itself, but this time we will introduce the first step in the process of creating a project from the lead to the sales project.
<!-- Image= psa-2nd2-1.png -->

## Create a company or contact person from a lead
The operation here is almost the same as in Dynamics 365 for Sales. After creating a lead, you can use the "Prospect and Evaluate" button to create the business partner company and contact information. However, there are a few settings to separate it from Sales when using Project Service Automation, which I will describe in this section.

### Evaluated as promising with lead.
Click "Evaluate as Likely" on a lead. This is clicked when a lead is deemed to be a prospect.
<!-- Image= psa-2nd2-2.png -->

The company and contact person information will be created, and you will be taken to the sales proposal creation screen.
<!-- Image= psa-2nd2-3.png -->

## Type of display (error response)
One thing to note is that if you create a sales form from a lead in this process, this sales form will be created as a sales form in Dynamics 365 for Sales. The reason for this is that the form you are using is called "Sales Form". Since this is a Sales form, it does not have any sub-grids related to projects that you will need to work with later.
<!-- Image= psa-2nd2-4.png -->

In order to use the Project Service Automation form, a field called "Type" (or "Order Type") must be set to the value "Work Based". (If you are using Sales, set the value to "Item-based.")  
<!-- Image= psa-2nd2-5.png -->

This field is hidden by default, so I can make it visible, but the trouble is that if I make the "Type" visible in the lead form, change the value to "Work Based" and then click "Prospective and Evaluate", I get an error about the price list.
<!-- Image= psa-2nd2-6.png -->

We are currently contacting Microsoft support about how to deal with this error, but since we don't know when it will be resolved, here is an alternative solution at this time. I will update this page when the solution is officially provided by support.

### Display the "type" of sales proposals.
As you can see when you open the new form with the "+ New" button in the Sales project, there are two types of forms." Sales" is the Sales form, and "Project Information" is the Project Service Automation form, which is set to automatically switch between forms depending on the "Type" value.
<!-- Image= psa-2nd2-7.png -->

This time, let's first edit the "Sales Case" form. In the form, there is a field called "Type", click on "Change Properties".
<!-- Image= psa-2nd2-8.png -->

Check "Show by default" and click "OK".
<!-- Image= psa-2nd2-9.png -->

### Contract unit arrangement
Actually, this is not enough, we need to display a field called "Contract Unit" on the form. Here, you can place it under the type.
<!-- Image= psa-2nd2-10.png -->

Now you can save and publish the customization on the form. You are now ready to prep your sales case.

## Manage sales cases for Project Service Automation
Now that the groundwork is done, let's set up the project to be a sales case for Project Service Automation.

### Set the sales project type and contract unit.
Switch the "Type" of the sales form you just created from the lead to "Work Based". Set the "Contract Unit" to a value and save it.
<!-- Image= psa-2nd2-11.png -->

Refresh the page. The form should now automatically change to "Project Information". You will now be able to manage your Project Service Automation sales projects. 
<!-- Image= psa-2nd2-12.png -->

### Setting up client company management
Set up a user to manage the sales project. This will be the administrator of this project form.
<!-- Image= psa-2nd2-13.png -->

### Set up a product price list and sales
Associate the "Product Price List" with your own sales price list. For "Sales", set it to "Calculate by system". In addition, "Sales" will be automatically calculated after "Product Price List" and "Sales Item" (described below) are set. If you want to enter the data by yourself, set "Sales" to "Specified by user".
<!-- Image= psa-2nd2-14.png -->


### Setting up sales case items
If you look at the Sales Project Item category, you will see a "Project Based Detail Line" and a "Product Based Detail Line". This is where you set the services and products related to the sales project based on the price list, just like in Sales. By entering these values, the sales forecast will be calculated. (Only if "Sales" is set to "Calculate by system")

In this case, we want to add members to be placed in the project, so let's add them using the + button in the "Project-based detail line.
<!-- Image= psa-2nd2-15.png -->

Configure as follows.

| Product Type | Project-based services |
| Name | *Optional |
| Customer Budget	 | *Any |
| billing practice | Time and Materials |

This is how the screen will be set up. After setting, save and close the file.
<!-- Image= psa-2nd2-16.png -->

You now have a project-based detail line associated with the sales project. If you look at the "Sales Forecast" on the screen, you will see the automatically calculated result.
<!-- Image= psa-2nd2-17.png -->

If you need not only services but also ancillary licenses for your own packaged products or your own products, you can add a new line in the "Product-based Details" section. In this case, we will add them as "Existing Products".
<!-- Image= psa-2nd2-18.png -->

The steps here are the same as those for adding a product in Sales.
<!-- Image= psa-2nd2-19.png -->

*If the product does not appear here, it is because there is no product information in the "Price List Item" of the "Product Price List" associated with the sales project.
<!-- Image= psa-2nd2-20.png -->

That's basically all there is to creating a sales case. Then, you can consolidate the information into a sales case by setting up competitors and sales teams, and describing your needs and proposed solutions.

## Next step.
In this section, we have shown you the steps to create a sales case from a lead, which is a little different from the steps in Dynamics 365 for Sales.

More on this in the next post. After creating a quote, project contract, and invoice from a sales project, a project is created.