---
title:  "dynamics-setting-application"
date:   2020-08-05T15:53:27+06:00
draft: false
datetitle: "2017.08.23 | Initialization of Dynamics 365 [More] /"
pageHeading: "Configuring Dynamics 365 Apps"
image: "images/artical7/artical7.jpg"
Author: "Takafumi Noguchi"
authorimage: "images/authorimage.jpg"
linkdin: ""
---
<!-- Intro  -->
In this section, we will talk a little bit about Dynamics 365 applications.

In Dynamics 365, a new feature called "Applications" is available, which allows users to set access permissions based on their security roles.

Right after the installation of Dynamics 365, default applications, sales, services, etc. are created. For example, you can manage the sales force in your company by giving them access to an application called Sales, so that they do not see unnecessary entities or data in advance.

The application has a
* Site Map
* dashboard
* form
* view graph
* Business Process Flow

is included.

When you open the Dynamics 365 menu, you will see the available applications as shown below.
<!-- Image= menu.png -->

If you want to change the display name of the application, you can do so in "System administration" from "Administration" in "Settings".
<!-- Image= menu1.png -->

Open "System Administration".
<!-- Image= menu2.png -->

You can change it in the "Default app name" in the "General" tab.
<!-- Image= menu3.png -->

Each application can be configured in "Customize System".
<!-- Image= menu4.png -->
There is an "app" component that allows you to modify existing applications or create new ones.
<!-- Image= menu5.png -->

Let's check the "Sales" application.
<!-- Image= menu6.png -->

Double-click to open the App Designer. This is where you will configure the sitemap, dashboard, and entity settings.

The application's sitemap can be configured from the following sections. We have already described the site map in the previous section, so we will skip it.
<!-- Image= menu7.png -->

If you drill down to "Details" under Dashboards on the bottom left, you will see a list of dashboards that you can use. You can configure whether or not to use them in your sales application in the "Components" section on the right side pane.
<!-- Image= menu8.png -->
The same is true for business processes.
<!-- Image= menu9.png -->
Let's back up a bit here.

Why do we need an application in the first place? If you use Dynamics 365 to some extent for internal and external CRM development, you will realize that business process flows, dashboards, forms, and views are constantly growing in response to user requests.

If you are using Dynamics 365 across multiple departments, the view for the sales department and the view for the marketing department will be listed in the view selector, which can be very cumbersome and difficult to use.

To prevent this from happening in advance, a device that uses the application to display only the views and dashboards used by each department needs to be considered in advance.

Now let's go back to the app designer.

Entities shows the entities that are used in the current application. To add a new entity, click the + (Add) button in the upper left corner, or click "Entities" from "Components" in the right pane to open the Add Entity screen.
<!-- Image= menu10.png -->

The basic idea is to add a new entity to the sales application from an already created entity, or to create a new entity.
<!-- Image= menu11.png -->
The same process applies to views and graphs.
The following information is very helpful, so please refer to it as well.
Reference: Microsoft Dynamics 365 New Feature: New Applications: Application Designer

https://blogs.msdn.microsoft.com/crmjapan/2017/01/30/dynamics-365-dec-update-new-feature-business-application-2/