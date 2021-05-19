---
title:  "dynamics-psa-create-project"
date:   2020-08-05T15:53:27+06:00
draft: false
datetitle: "2017.08.23 | Dynamics 365 Project Management /"
pageHeading: "Create a project in the Project Service"
image: "images/artical3/artical3.jpg"
Author: "Takafumi Noguchi"
authorimage: "images/authorimage.jpg"
intro: ""
---
<!-- Intro  -->
This is a continuation of the previous article, where we created a sales case from a lead in Dynamics 365 for Project Service Automation (Project Service), and now we are going to create a project.
<!-- Image= psa-3rd-01.png -->

<!-- Table Of Content -->
* Create estimates from sales projects
  * Create an estimate
  * Download Quotation

* Create a project from a project contract
  * Make an estimate as an order
  * Creating a project

* From contract confirmation to invoice
  * Contract confirmation process
  * Create and print invoices

* Finally

## Create estimates from sales projects
After a series of negotiations with prospective customers, we have entered the last quotation phase in the negotiations. The quotation is created within the sales project. This is the same as in the case of Sales. The same thing can be done for sales quotations, as you can create several patterns of quotations in business negotiations and respond flexibly to the customer's situation.

### Create an estimate
Open the sales project and add a new one from "Estimate" by clicking the + button. It may take some time for the dialog to appear, but please wait.
<!-- Image= psa-3rd-02.png -->

An estimate will be created. Again, if you need to add a service, you can do so using the + button. For example, if you want to add maintenance services, you can add them here.
<!-- Image= psa-3rd-03.png -->

### Download Quotation
Once the quote is created, it can be downloaded as a quote for the customer, which in version 2 of Project Service Automation is downloaded using a Word template.

From the menu..., click "Word Templates" and then "Print Customer Quote".
<!-- Image= psa-3rd-04.png -->

This will download a Word document, open it and you will see a quote using the default Dynamics 365 template, which you can edit as needed and submit to your customer.
<!-- Image= psa-3rd-05.png -->

*If you want to use a Word template that matches your own formatting, you will need to work with a Word 2016 or higher client environment. For more information, please refer to Creating a Word template to fit your company's needs.

## Create a project from a project contract
Once the quote is created, the order is placed. At this point, Project Service Automation will automatically create a "project contract".

### Make an estimate as an order
First, click on "Close as Order" for the quote you just created.
<!-- Image= psa-3rd-06.png -->

Click "OK" when the dialog box appears. Then what was an estimate will be changed to a project contract. You can see this by opening the "Project Contract" menu, where a project contract is created from the estimate you just made and displayed in the list.
<!-- Image= psa-3rd-07.png -->

### Creating a project
To associate a project with a project contract, let's create a project from the project contract. Open the top menu and you will find "Projects".
<!-- Image= psa-3rd-08.png -->

Now click "+Add New Project".
<!-- Image= psa-3rd-09.png -->

After entering the project details, save the file.
<!-- Image= psa-3rd-10.png -->

This completes the creation of the project. In most cases, project management will start here, so please refer to Planning a Project with Project Service to get started.

Note that what follows is the procedure for closing the project contract and invoice. In most cases, this is a task to be done after the project is completed, but if it is a type of project where payment is due first, please try to follow the procedure.

## From contract confirmation to invoice
You create an invoice from the project contract and send the invoice to the customer. The invoice is sent to the customer, and when the payment is completed as per the invoice, it is processed as "paid".

### Contract confirmation process
Once the customer has confirmed the project contract, it should be marked as "confirmed".
<!-- Image= psa-3rd-11.png -->

This will help you know when the customer has properly understood the contract. If necessary, it is also important to prepare a printout of the contract summary using a Word template.
<!-- Image= psa-3rd-12.png -->

### Create and print invoices
To create an invoice, click "Create Invoice" in the project contract.
<!-- Image= psa-3rd-13.png -->

The invoice has been created. Now, let's print the invoice again using the Word template. From the menu, click on "Invoice" under "Word Template...".
<!-- Image= psa-3rd-14.png -->

A little manual editing was required, but the necessary information is included. You can also customize the invoice Word template as needed.
<!-- Image= psa-3rd-15.png -->

*The "Total Amount" of the invoice does not reflect the value of the project-based statement line, but only the product total. We have confirmed that this is the same behavior even if the billing method for the statement line is "Fixed Amount".

We are currently inquiring with Microsoft about this total amount. It may be a procedure to create a new field in the invoice form for the project if necessary, but I'm waiting for an answer. If I get an answer, I will update.

After printing the invoice, click "Confirm" in the menu to mark the invoice as confirmed internally.
<!-- Image= psa-3rd-16.png -->

If we receive payment from a customer, we will "mark the invoice as paid".
<!-- Image= psa-3rd-17.png -->

*Many projects will be paid after the deliverables are inspected, so this process will be after the project management is completed.

## Finally.
In this section, we have created a project from the estimate created from the sales project. In the next article, we will show you how to create a WBS and assign a team in the created project.