---
title:  "setup-dynamics-project"
date:   2020-08-05T15:53:27+06:00
draft: false
datetitle: "2017.08.23 | Dynamics 365 Project Management /"
pageHeading: "Setting up the Project Service"
image: "images/artical1/artical1.jpg"
Author: "Takafumi Noguchi"
authorimage: "images/authorimage.jpg"
linkdin: ""
---
<!-- Intro  -->
In this article, we will learn about Dynamics 365 for Project Service Automation (Project Service), an application that can be used like Sales and Customer Service if you have purchased a Dynamics 365 Customer Engagement Plan license. If you have purchased a Dynamics 365 Customer Engagement Plan license, you can use this application in the same way as Sales and Customer Service, but Project Service is not as popular as Sales.

<!-- Table Of Content -->
* What is Project Service Automation?
* Structure of Project Service Automation
* Install Project Service Automation
* Configuring Project Service Automation
  * Create roles and skills
    * Setting up a capability model
    * Configure the skills of the resource
    * Create a role for the resource
  * Create an organizational unit
  * Create a price list
    * Difference between cost and sales
    * Add a shipping unit
    * Create a price list of costs
    * Add a roll price
    * Create a sales price list
  * Relate the cost price list to the organizational unit.
  * Associate the sales price list with the companies you do business with
  * Create a resource
    * Resource type
    * Create a resource with a user
    * Create resources with staff
* You are ready to manage your project


## What is Project Service Automation?
Dynamics 365 for Project Service Automation is an application for managing all project-related tasks, such as estimating the budget required to launch a project, optimizing the company's resources, managing schedules and project progress, and calculating expenses and revenues. The application is designed to manage all project-related tasks in one place. It is a useful application for SIers and manufacturing companies that undertake projects on a project-by-project basis.

In addition, if you install the Project Service Automation add-in to your Microsoft Project client, you can manage the WBS of projects created with Dynamics 365 for Project Service Automation in your local Project Service Automation. This is quite a useful feature.

*For more information about Dynamics 365 applications, please refer to the previous article.

## Structure of Project Service Automation
Before we install it, let's understand the main entities that make up Project Service Automation: In Dynamics 365 for Sales, we had leads, and from there we had business partners and representatives, and sales deals. In Service Automation, a quote is created from a sales case, and once that quote is accepted, a project contract is created. When a quote is accepted, a project contract is created, and project management is initiated by adding the project to the project contract.
<!-- Image= psa-001.png -->

A project is related to various entities, such as
<!-- Image= psa-02.png -->

A project is related to various entities, such as

| Projects | Manage projects |
| Business Partners | Customer information, same as for Sales |
| organizational unit | Organization. Manage your own company, outsourced companies, and foreign departments. |
| Resources | Mainly manage people. Assign users, staff, etc. to projects. |
| Resource Roles | Role, such as PM or programmer |
| Capability Model | Skill level. (e.g.) 3-level rating (beginner - advanced)  |
| Resource Skills | Skills. Skills such as programming and management, qualifications held. |
| Price List | Resource prices. Create separate cost and operating prices. |
| Roll price | Price of rolls; PMs and programmers set cost at XX million, etc. |

The entities mentioned above will be explained in detail when you install and configure Project Service Automation.


## Install Project Service Automation.
If the instance you are building does not have Dynamics 365 for Project Service Automation installed, you will need to do this step. Open the Dynamics 365 Management Center and click on "Solutions" for the instance you want to install.
<!-- Image= psa-03.png -->

Select "Project Service Automation" and click "Install". It will take a few moments for the installation to complete, so please be patient.
<!-- Image= psa-04.png -->

After the installation is successfully completed, go to the Dynamics 365 home screen and click on Project Service Automation (Project Service in version 3) in the list of apps.
<!-- Image= psa-05.png -->

## Configuring Project Service Automation
Preconfigure your system to use Project Service Automation. All of this work is for administrators.

### Create roles and skills.
The first step is to create roles, skills, and ability levels. Roles are the roles you will play in the project. Skills are the skills of the project members, and ability levels are their proficiency in those skills.

  * Roll: PM
    Skills: Project management skills (I am good at it)

  * Role: Programmer
    Skills：C# (I am good at it)
      
**Setting up a capability model**
The competence model represents the level of proficiency in a skill, with three levels of evaluation and years of experience.
Click "Capability Model" from the menu.
<!-- Image= psa-06.png -->

Since we have a default model, we will rename it to "Proficiency" and save it.
<!-- Image= psa-07.png -->

**Configure the skills of the resource.**
Let's define the skills and qualifications that the resource has. Click on "Resource Skills" from the menu.
<!-- Image= psa-08.png -->

Create a new C# and Project Management skill, respectively.
<!-- Image= psa-09.png -->

**Create a role for the resource**
Let's define the role of the resource. Click "Resource Roles" from the menu.
<!-- Image= psa-10.png -->

By default, "Project Manager" and "Team Member" are provided, so change these to "PM" and "Programmer".
<!-- Image= psa-11.png -->

Open the role name and rename it. Add the skills and ability models you have already created here.
<!-- Image= psa-12.png -->

Programmers are set up in the same way.
<!-- Image= psa-13.png -->

### Create an organizational unit.
Once the roles are created, the next step is to set the organizational unit. The organizational unit represents the company or department, but it should be created at the boundary where the unit price of the work changes, such as when it varies by country or region, or when external subcontractors participate in the project.

This time, we will create the following two organizational units.
  * DeMo Corporation (in-house)
  * Outsource Company (external cooperation)
  
Open the menu and click Organizational Unit.
<!-- Image= psa-14.png -->

There is one existing organizational unit (your company), so let's edit the name. No cost setting will be done here.
<!-- Image= psa-15.png -->

Similarly, create a new external partner company.
<!-- Image= psa-16.png -->

The organizational unit is now ready. When you create a price list, you will set up this organizational unit or role.

### Create a price list
The next step after the organizational units is to set up the price list. As mentioned in the Dynamics 365 product catalog, the price list defines the cost and operating price of a product. For example, if you have a manager, the cost is the price of the manager. (For example, for a manager, the cost price is xxx yen and the list price is ooo yen.

**Difference between cost and sales**
In the price list, you need to select "Sales" and "Cost" in the field called Context. These have the following differences.

<!-- Box -->
| Sales" is the sales price to be paid to the customer. The entity to which the price list relates is the client company.
Cost" is the cost. The entity to which the price list relates is the organizational unit. |

The key point is that the entities that can be tied together depend on the price list you create.


**Add a shipping unit**
The price list can be created in organizational units, but if resources = people, many projects will ship in units of not only hourly rates, but also months per person. Therefore, it is necessary to add a month unit to the Time unit of shipment in advance.

Open the "Shipping Unit List" from the "Product Catalog" in the "Settings" menu, and click "Time".
<!-- Image= psa-17.png -->

Click "Shipping Units" from the top menu of Time.
<!-- Image= psa-18.png -->

Here we add Month, and we set Month as 160 Hour (which may be different for each company).
<!-- Image= psa-19.png -->

**Create a price list of costs.**
Click "Price List" from the menu.
<!-- Image= psa-20.png -->

Create a new one. Create a cost price list with the name as your price list. As for the "Start Date" and "End Date", they will be expiration dates, so if, for example, the unit price changes, set them properly. We set Month as the shipping unit we just created and saved it. Now you can set the price per person-month.
<!-- Image= psa-21.png -->

**Add a roll price**
Set the price for each roll in the price list created above. Click the "+" button for "Roll Price. Set the cost of PM here.
<!-- Image= psa-22.png -->

We also set the roll price for the programmer. We now have a price list of our own costs.
<!-- Image= psa-23.png -->

Similarly, prepare the cost of external subcontractors.
<!-- Image= psa-24.png -->

**Create a sales price list.**
Since what we have created above is a price list for costs (cost of goods), we will also create a price list for sales. To make it easy, open the price list and click "Copy".
<!-- Image= psa-25.png -->

You can copy the price list, so switch the "Context" section to "Sales", update the name, and save it.
<!-- Image= psa-26.png -->

Now it's time to set the roll price. You will probably want to set a price higher than the cost price here, so set each one accordingly.
<!-- Image= psa-27.png -->

Make sure to create the same for your external subcontractors. This completes the setup of the price list. Associate the created price list with the organization unit and the client company respectively.
<!-- Image= psa-28.png -->

### Relate the cost price list to the organizational unit.
Associate the cost price list with the organizational unit. You will now be able to set the price (cost) for the organizational unit. Click "Organization Unit" from the menu to open the organization unit you just created.
<!-- Image= psa-29.png -->

Set up the organizational units of external subcontractors in the same way.
<!-- Image= psa-30.png -->

### Associate the sales price list with the companies you do business with.
The next step is to associate the sales price list with the company you are dealing with. By associating the price list with a company, the price list will be inherited by any business negotiations (sales proposals) that occur from that company. Click on "Customer" in the menu to open an existing customer company.
<!-- Image= psa-31.png -->

Add the price list (sales) that you created in the "Project Price List" section.
<!-- Image= psa-32.png -->

The association is now complete.

### Create a resource
Finally, we will create resources. Here, we will add the added users of Dynamics 365 and members of external subcontractors as staff. These resources will be assigned to the project later.

**Resource type**
The types of resources are as follows. You can also create facilities called "equipment", but the basic person is used as a resource and the source of the resource is defined.

| user | Dynamics 365 users |
| Business partner representative | Dynamics 365 trading partner representative |
| Business Partners | Dynamics 365 trading partners |
| fixtures | Facilities and meeting rooms. |
| Group | Groups of resources |
| general purpose | Other (used when defining project team members) |

**Create a resource with a user**
The first step is to create a resource in the Dynamics 365 user. Click "Resources" from the menu.
<!-- Image= psa-33.png -->

In Add New, add a user with "Resource Type" as User as shown below. Don't forget to set the time zone, and then save the file.
<!-- Image= psa-34.png -->

Next, let's set the role of the resource and the skill of the resource respectively.
<!-- Image= psa-35.png -->

You have now created your internal PM resources.

**Create resources with staff**
Let's also add staff from external subcontractors. Open a new window as above. Set the "Resource Type" to "Staff" and set the time zone. The important thing here is to set the "Organization Unit" at the bottom of the screen to External Partner.
<!-- Image= psa-36.png -->

Now you can also create resources for external subcontractors.

## You are ready to manage your project
Now that we are ready to start project management, let's start with creating a project by following the flow to understand Dynamics Project Service Automation. In the next article, I will show you how to create a sales project from a lead in Project Service Automation.

That's all for now.