---
title:  "manage-and-close-project"
date:   2020-08-05T15:53:27+06:00
draft: false
datetitle: "2017.08.23 | Dynamics 365 Project Management /"
pageHeading: "Project Service Manage and close projects"
image: "images/artical5/artical5.jpg"
Author: "Takafumi Noguchi"
authorimage: "images/authorimage.jpg"
linkdin: ""
---
<!-- Intro  -->
In this article, you will learn how to plan a project in Dynamics 365 for Project Service Automation. Once the plan is made, the project will be started. In this section, we will introduce the steps to manage a project.

<!-- Table Of Content -->
* Estimated cost management 
  * Update the cost price list
  * Update the operating price list
  * Confirm costs and sales for external subcontractors

* Facilitate the project
  * Reservations and Tasks
  * Time input
  * Approval of work
  * Actual labor cost

* Close the project
* Finally.

## Estimated cost management
After the project members are selected from the resources and assigned to each WBS, the estimated labor cost is automatically calculated according to the WBS. This labor cost calculation is based on the price list of the organization unit set in "Contract Unit".
<!-- Image= manage01.png -->

However, if some of the members are procured from external cooperation companies as shown in the figure below, additional settings are required in the price list.
<!-- Image= manage02.png -->

In this case, since the development members are procured from an external collaborating company, the price list of the organizational unit related to the project should reflect the price of the external collaborating company.

### Update the cost price list
Open "Contract Units" and you will find the "Cost Price List".
<!-- Image= manage03.png -->

Add the cost of the external subcontractor to the "Roll Price" as shown in the figure below and save it.
<!-- Image= manage04.png -->

This will ensure that the "Expected Labor Cost" in the WBS is calculated correctly.

### Update the operating price list
We need to update the sales price list in the same way to reflect the "Expected Sales" in the WBS. Go to "Price List" and open the sales price list that is paired with the cost price list that you changed above.
<!-- Image= manage05.png -->

In the same way, we added the operating price for external cooperation to the "Roll Price".
<!-- Image= manage06.png -->

### Confirm costs and sales for external subcontractors
Go back to the project and open the WBS. Now, under "Select Columns", check "Expected Labor Cost" and "Expected Sales". If you check the columns, you will see that the "Expected Labor Cost" and "Expected Sales" for two members of the external subcontractor have been automatically calculated.

*If it is not reflected, make some changes to the columns such as "man-hours" and click the "Update to latest information" button.
<!-- Image= manage07.png -->

When you return to the project screen, the "Planned Labor Cost" is also reflected.
<!-- Image= manage08.png -->

## Facilitate the project
Now that you have a labor cost estimate, let's get started on the project. Update the project and enter the daily tasks of the workers.

### Reservations and Tasks
If you click on "Appointments and Tasks" from the menu, you will see the projects in which you are a team member and the uptime for the week.
<!-- Image= manage09.png -->

Clicking on this task section will allow you to enter the progress of the task, as shown below.
<!-- Image= manage10.png -->

### Time input
If the resource is "User", you can add your own work hours and tasks for the project in the "Time Entry" section. It is in the form of a calendar, so you can enter your work with the + button.
<!-- Image= manage11.png -->

Add a "Time Entry". Add a Time Entry with the duration as the work time, the type as the work, and the details of the project, and click Save.
<!-- Image= manage12.png -->

At this point, it is still a draft. Click on the "Send" button to send this work to the project's resource manager (administrator) for approval.
<!-- Image= manage13.png -->

You will see a list of your work for the week. In the "Memo" section, enter your comments to the approver and click "Submit.
<!-- Image= manage14.png -->

The work has now been sent.
<!-- Image= manage15.png -->

### Approval of work
Click on "Approve Project" to see the work sent by the member. In the default view called "Time entries awaiting approval," you can see that there is work to be approved. Let's check the box.
<!-- Image= manage16.png -->

Click on the "Edit" button to see the details of your work.
<!-- Image= manage17.png -->

There are two buttons, "Approve" and "Reject". If the work is acceptable, click the "Accept" button. If the work is unacceptable, click the "Reject" button. In this case, we will accept.
<!-- Image= manage18.png -->

You can check if it has been approved or not by using the "time input" as mentioned earlier.
<!-- Image= manage19.png -->

### Actual labor cost
Once the approval is complete, the labor cost of the project is consumed. Let's go back to the project and check.

The "actual labor cost" has a value. You can see that the "Cost Consumption %" has also gone up.
<!-- Image= manage20.png -->

If you check the "Status" section, you will see a graph showing the cost and the percentage of progress.
<!-- Image= manage21.png -->

In this way, each resource applies for work, and the resource manager approves it, which consumes costs and progresses the project tasks.


## Close the project
The project progresses smoothly and is finally closed. To close the project, advance the stage of the business process flow and "close" it. To advance the stage of the business process flow, click "Next Stage".
<!-- Image= manage22.png -->

At the end of the "Close" stage, click "Finish" to close the project.
<!-- Image= manage23.png -->

At this point, the project's "stage" is Close, but its state is active. Click "Inactive".
<!-- Image= manage24.png -->

You can choose the state here. Select "Inactive" and click "Deactivate". If you have not closed the business process mentioned above, you can also deactivate it by selecting "Closed".
<!-- Image= manage25.png -->

The project is now closed. You can see it in the "Closed Projects" view.
<!-- Image= manage26.png -->

That's it for basic project management.

## Finally.
So far, we have covered the entire process of creating and managing projects in Dynamics 365 for Project Service Automation. At the moment (February 2019), Project Service is at version 2 and with the evaluation version, version 3 and newer versions are already available.

In version 3, the WBS and the web interface have been changed, and I hope to introduce those features after the version update.

That's all for now.