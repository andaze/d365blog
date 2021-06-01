---
title:  "Plan your project with Project Service"
draft: false
weight: 4
datetitle: "2017.08.23 | "
image: "artical4.jpg"
Author: "Takafumi Noguchi"
authorimage: "authorimage.jpg"
showinhome: true
showinaccordian: false
rightMenu: "artical"
linkdin: ""
---
<!-- Intro  -->
Now that we have completed the [creation of the previous project](), let's fill in the contents of the project.    
When a project starts, a project plan is generally prepared with the following structure.

  * Project Objectives and Goals
  * Scope (range)
  * **Schedule**
  * **Cost**
  * **System (Resources)**
  * Communication
  * Quality Management
  * Lists and countermeasures

Reference: [Can a PM beginner do it? How to make a project plan](https://www.innopm.com/blog/2017/05/08/108679/#2-7)

In this article, we will use the WBS and Schedule Board of Dynamics 365 for Project Service Automation.
This section introduces the procedure for setting the "schedule," "cost," and "structure (resources)" of a project.


## Set the working date and time for the resource in the working template
Create a **work template** as a preliminary preparation. A work template is a function that can be used as a common calendar by setting the operating dates and holidays of resources. Applying a common work template to each resource working in the same environment will make planning easier.

### Set the basic work date and time
Open "Resources" in the menu and set the working date and time of the resource that will be the source of the template first.
In this example, we have selected "General Purpose Resources".
<!-- Image= plan-1.png -->
{{< imagedisplay plan-1 "290" "596" "796" >}}

Click "Work Time" in the top menu.
<!-- Image= plan-2.png -->
{{< imagedisplay plan-2 "290" "596" "796" >}}

The schedule table is displayed. Now, click on "New weekly schedule" from "Settings".
<!-- Image= plan-3.png -->
{{< imagedisplay plan-3 "290" "596" "796" >}}

Specify the working hours for the week and the day. Click on "Set Working Hours". Set your working hours.
In this case, we've set it to 8 hours, from 9:00 to 17:00. You can also add breaks by clicking "Add Break". We have not added any breaks.
<!-- Image= plan-4.png -->
{{< imagedisplay plan-4 "290" "596" "796" >}}

Once you have set the number of working days, holidays, start date and time zone, click "Save and Close".
The calendar will now reflect the basic working days (Monday through Friday) and working hours (9:00 - 17:00).
<!-- Image= plan-5.png -->
{{< imagedisplay plan-5 "290" "596" "796" >}}

### Setting Holidays
Once the working date and time have been set, the next step is to set the **holidays**. Since holidays vary from country to country and year to year, we will only set the holidays for 2019.

Select the date of the holiday and click "Holiday" from "Settings".
<!-- Image= plan-6.png -->
{{< imagedisplay plan-6 "290" "596" "796" >}}

Enter "holiday" as an all-day date. You can also enter the name of a specific holiday.
<!-- Image= plan-7.png -->
{{< imagedisplay plan-7 "290" "596" "796" >}}

Holidays have been added to the schedule, and it would be useful if there was a function to import Japanese holidays like in Outlook.
It would be useful if there was a function to import Japanese holidays like in Outlook, but there is not, so you will have to set the holidays for the year one by one like this.
<!-- Image= plan-8.png -->
{{< imagedisplay plan-8 "290" "596" "796" >}}

### Create and apply a working template
Once you have set the working date and holidays, you can turn it into a **template**.
Check the resources that you have set the working hours for and click "Save Calendar As...".
<!-- Image= plan-9.png -->
{{< imagedisplay plan-9 "290" "596" "796" >}}

Enter a name for the template, save and close it.
<!-- Image= plan-10.png -->
{{< imagedisplay plan-10 "290" "596" "796" >}}

Select all the resources for which you have not set working hours, and click "Set Calendar".
<!-- Image= plan-11.png -->
{{< imagedisplay plan-11 "290" "596" "796" >}}

Select the working template you have just created and click "Apply".
<!-- Image= plan-12.png -->
{{< imagedisplay plan-12 "290" "596" "796" >}}

You have now set the working time for the resource. In your project, you may have project members from multiple organizations and multiple regions/countries. In this case, please create a work template for each boundary that has different working hours and calendars, and set them for each resource.

### Assign a work template to a project
The work template is set to the default template, so change it. Open the project and set the work template you created to "Calendar Template" and save it.
<!-- Image= plan-13.png -->
{{< imagedisplay plan-13 "290" "596" "796" >}}

You have now set the working dates and times for the resources and the resources related to the project. The next step is to set the schedule, cost, and resources for the project.

 
## Set schedule, cost, and resources in WBS
After setting up the work templates for the resources, the next step is to set up the "schedule," "cost," and "structure (resources)" for the project.
The first step is to create a WBS and set the start and end dates of the project and the resources to be assigned to each process.

### Add a project task
*The following steps are for Dynamics 365 for Project Service Automation **version 2 environment and working from the web interface**. You will not be able to edit the WBS from the unified interface in a version 2 environment. If you want to edit the WBS in the unified interface, you need to update the Project Service to version 3. (This has been confirmed by Microsoft)

Open the menu at the top of the project and click WBS.
<!-- Image= plan-14.png -->
{{< imagedisplay plan-14 "290" "596" "796" >}}

Use "+Add Task" to add a process to the project.
<!-- Image= plan-15.png -->
{{< imagedisplay plan-15 "290" "596" "796" >}}

Click "Indent" to move the task down one level.
<!-- Image= plan-16.png -->
{{< imagedisplay plan-16 "290" "596" "796" >}}

### Adding a schedule
You have created multiple "Requirement Definition" tasks. Set the "Start Date" and "End Date" for each task.
If there is a preceding task, add a value to "Previous Task" as well.
<!-- Image= plan-17.png -->
{{< imagedisplay plan-17 "290" "596" "796" >}}

### Identify expected labor costs
Click on "Select Columns" in the WBS to view the columns that are not shown. Now check "Man-hours" and "Expected labor cost."
<!-- Image= plan-18.png -->
{{< imagedisplay plan-18 "290" "596" "796" >}}

Here, based on the tasks and man-hours added in the WBS, the **expected labor cost** of the project will be calculated.
<!-- Image= plan-19.png -->
{{< imagedisplay plan-19 "290" "596" "796" >}}

Here, the role of PM requires 53 man-hours. The price of the role is as set in the cost price table.
<!-- Image= plan-20.png -->
{{< imagedisplay plan-20 "290" "596" "796" >}}

Here, DeMo Corporation's cost price list shows 160 hours for PM, so if we are talking about 53 hours, then

(PM cost) x (man-hours) / 160 = 1,000,000 yen x 53 / 160 = **331,250 yen**

is the planned labor cost. This is just the cost, so we will charge the difference for the operating price list here to make a profit.

### Set up the necessary roles for the task
Assign a resource to each task. Click on the "Assigned Roles" of the task and use "+Add" to add a row for the role.
Set the "Roles" and "Resource Units".
<!-- Image= plan-21.png -->
{{< imagedisplay plan-21 "290" "596" "796" >}}

If you want to set the operation of the role to be less than 100%, change the "Shipping Unit". Click "OK" when the settings are complete.
<!-- Image= plan-22.png -->
{{< imagedisplay plan-22 "290" "596" "796" >}}

Roles have been assigned to all tasks.
At this point, we have not yet identified the members of the project team, so we only assign roles.

### Create a project team
Once the roles required for the tasks in the WBS have been set, create the project team. Click "Create Project Team".
<!-- Image= plan-23.png -->
{{< imagedisplay plan-23 "290" "596" "796" >}}

Click "Yes" when the dialog box appears.
<!-- Image= plan-24.png -->
{{< imagedisplay plan-24 "290" "596" "796" >}}

The following dialog will show that a "generic resource" has been added for the role PM.
You can now create a team for the project in the WBS.

## Organize a team on a schedule board
Return to the project details screen and expand "Team".
There are two types of teams: "authors", who **approve projects**, and "generic resources", who are created in the WBS.
<!-- Image= plan-25.png -->
{{< imagedisplay plan-25 "290" "596" "796" >}}

If nothing in particular is set, the user who created the project will be the project approver and will be responsible for approving the requested resources and work completion reports for the resources. You can determine if you are the approver of a project by checking if "Project Approver" is set to "Yes" in the member's edit screen. For projects with multiple approvers, set this here.
<!-- Image= plan-26.jpg -->
{{< imagedisplay plan-26 "290" "596" "796" >}}

### Send a resource request
A **generic resource** is one that has not yet been assigned a specific resource.
For this reason, the project manager requests resources from the resource manager and works to allocate the appropriate resources.
First, open the generic resource by double-clicking on it.
<!-- Image= plan-27.png -->
{{< imagedisplay plan-27 "290" "596" "796" >}}

On the top button, there are buttons for "Reserve" and "Submit Request".
<!-- Image= plan-28.png -->
{{< imagedisplay plan-28 "290" "596" "796" >}}

These buttons will be used to allocate resources, but you can also use the
The buttons to use depend on what permissions the operating user has on the project.

<!-- Box -->
**Reservation:** For users who can manage the organization's resources, called resource managers, and decide which resources to assign where in multiple projects, the "Reservation" button allows you to assign resources directly to projects.

**Send Request:** If you are a project manager, but do not have the authority to freely assign resources in your organization, click "Send Request" to send a request to the organization's resource manager, called the resource manager, saying "I need resources for my project.


Here is the procedure for requesting resources and allocating the available resources on the schedule board.

Click "Submit Request". The comments are optional. Click "OK" to close.
<!-- Image= plan-29.png -->
{{< imagedisplay plan-29 "290" "596" "796" >}}

You can check the sent resource requests from the "Resource Requests" menu.
<!-- Image= plan-30.png -->
{{< imagedisplay plan-30 "290" "596" "796" >}}

Check the box for the request you just sent, and click "Find Resources".
<!-- Image= plan-31.png -->
{{< imagedisplay plan-31 "290" "596" "796" >}}

The **schedule board** will open and show if there are any resources that match your request. The left panel is a "filter" that shows the resources that match the filter criteria. In this case, Test Taro seems to be available, so we will reserve him. Click on the name to display the reservation screen in the right panel. In the "Reservation Status" field, select "Book" and click the "Reserve" button. The reservation will now be confirmed.
<!-- Image= plan-32.png -->
{{< imagedisplay plan-32 "290" "596" "796" >}}

When you confirm the reservation, you will see that the available time has been reduced to 0 hours like this.
<!-- Image= plan-33.png -->
{{< imagedisplay plan-33 "290" "596" "796" >}}

If you check the team of the previous project, you will see that the "generic resource" has been replaced by Test Taro.
<!-- Image= plan-34.png -->
{{< imagedisplay plan-34 "290" "596" "796" >}}

Allocate resources to the project in this way. If you add a task in the WBS and need another resource, you can follow the same procedure to secure the resource. Of course, as you add more tasks in the WBS, the planned labor cost will also increase, so you need to be careful not to exceed the amount of the estimate made in the sales project.

## Finally.
Here, after creating the project, we set up the "Schedule", "Cost", and "Structure" in the WBS and schedule board. The actual operation of the schedule board and the procedure for requesting resources was a little curious to me, so I would like to investigate this area and share it with you.

I will also share more information about the above mentioned "editing WBS in a unified interface" once I update Project Service Automation from version 2 to version 3 and confirm that it works.     
&nbsp;