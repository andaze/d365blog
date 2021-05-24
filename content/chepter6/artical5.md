---
title:  "dynamics365-app-for-outlook"
date:   2020-08-05T15:53:27+06:00
draft: false
datetitle: "2017.08.23 | Cooperation with other systems /"
pageHeading: "Using Dynamics 365 for Outlook"
image: "images/artical5/artical5.jpg"
Author: "Takafumi Noguchi"
authorimage: "images/authorimage.jpg"
linkdin: ""
---
<!-- Intro  -->
One of the most useful features of Dynamics 365 is its integration with Outlook.

If you are an Outlook user, you can check your Dynamics customer and case information and update your activity information directly from Outlook.

You can also update your activity information, so if you are already using Office 365, there is no reason not to use it.

There are some things you need to do to use Dynamics 365 for Outlook.
<!-- HighLighted Box -->
What users need to do to qualify for the Dynamics 365 App for Outlook
  * Incoming e-mails, appointments, client contacts, and
  Set the server-side synchronization of the task to the user's mailbox.
  * Make sure that the mailbox has been tested and activated.
  Must have the Dynamics 365 App for Outlook User security role.

Let's go through the setup process one at a time.

 


<!-- Table Of Content -->
* advance preparation
  * Assign security roles to users
  * Assigning Roles to Dynamics 365 for Outlook Apps
* Configuring Email Access
* Configure the Dynamics 365 App for Outlook
* Accessing Dynamics 365 from Outlook

## advance preparation
Before setting up Outlook, there are some preliminary preparations to be made.

### Assign security roles to users
Prior to the above two settings, you need to
You need to set up security roles for users who want to use Dynamics 365 for Outlook.

The authority required here is
You need to have the privileges as described in Permissions required for Dynamics 365 for Outlook tasks.

  * Go offline
  * Read stored views
  * Write and add a "Customer Contact" record to

First, open the Dynamics 365 home screen.
Open the appropriate Dynamics 365 app that is displayed.
<!-- Image= d365outlook-01.png -->

Click the gear button in the upper right corner and click "Advanced.
<!-- Image= d365outlook-02.png -->

Go to "Settings" and open "Security".

Then click on "Security Roles".

This time, we will make some changes to the default role of Account Manager.
<!-- Image= d365outlook-03.png -->

In the Core Records tab, make sure that you have permissions for the contact person, sales project, and activity.
<!-- Image= d365outlook-04.png -->

In the "Business Administration" tab, grant Outlook privileges as well. 
<!-- Image= d365outlook-05.png -->

This completes the configuration of the security role. Let's save and close it.
Now we need to assign this role to a user. Click on "Users".
<!-- Image= d365outlook-06.png -->

Assign the Account Manager role to the user you want to use.
<!-- Image= d365outlook-07.png -->

### Assigning Roles to Dynamics 365 for Outlook Apps
The next step is to assign the Account Manager role to the app.
The Dynamics 365 screen displayed from Outlook will be this application, so if you do not have access rights, you will get an error.

Go to "Settings" and open "My Apps".

Then, in the Dynamics 365 App for Outlook, click ... and then click Manage Roles.
Check Account Manager and click "Ignore and Save".
<!-- Image= d365outlook-08.png -->

Now you are ready to get started.

## Configuring Email Access
Link Dynamics 365 and Exchange.
Note that only one instance of Exchange can be linked within a single Dynamics 365 tenant.

Click "Settings" and then "E-mail Access...".
<!-- Image= d365outlook-09.png -->

Click on "Mailboxes".
<!-- Image= d365outlook-10.png -->

Select one email and click the "Edit" button.
<!-- Image= d365outlook-11.png -->

Change the server profile to
Save incoming and outgoing e-mails, appointments, business partners, and tasks as "Server Sync".
<!-- Image= d365outlook-12.png -->

Click on "Approve E-mail.
<!-- Image= d365outlook-13.png -->

Click Test and activate mailboxes, select it and click OK.
<!-- Image= d365outlook-14.png -->

After waiting for a while, you can open "Notifications" in the left panel to confirm that it has completed successfully.
<!-- Image= d365outlook-15.png -->

If all of them are successful in the previous list screen, you are done.
<!-- Image= d365outlook-16.png -->

## Configure the Dynamics 365 App for Outlook
Finally, configure the Dynamics 365 App for Outlook.
 Go back to "Settings" and open "Dynamics 365 App for Outlook".
<!-- Image= d365outlook-17.png -->

You will see the user you set in All qualified users, ☑ select it and click
Click the "Add Apps to Outlook" button.
<!-- Image= d365outlook-18.png -->

It will be on hold for a while (about 15 minutes), but when it is complete, you will see the following
<!-- Image= d365outlook-19.png -->

This completes the configuration of the Dynamics 365 side.

## Accessing Dynamics 365 from Outlook
Open Outlook and add one appointment calendar.

Add the subject and time.
If you see "Dynamics 365" in the upper right corner, the integration is complete. Let's click on it.
<!-- Image- d365outlook-23.png -->

I've created a Dynamics 365 account with the name "Test Taro" in advance, so I'll search for it.
Click to create an appointment, and you will see the information registered in Dynamics 365.
<!-- Image= d365outlook-24.png -->

Click on ... to the right of the contact person's name, and then click on "Add Activity" and then "Add Appointment.
<!-- Image= d365outlook-25.png -->

Once you have entered the required information, click Save and Close.
<!-- Image= d365outlook-26.png -->

If you check on the Dynamics 365 side as well, you will see that the scheduled activity has been added to the person in charge.
<!-- Image= d365outlook-27.png -->

This is a summary of the setup procedure for Dynamics 365 App for Outlook.