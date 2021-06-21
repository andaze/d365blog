---
title:  "Add a Dynamics 365 user"
draft: false
weight: 1
datetitle: "2017.08.23 | "
image: "artical1.jpg"
Author: "Takafumi Noguchi"
authorimage: "authorimage.jpg"
showinhome: true
showinaccordian: false
rightMenu: "artical"
linkdin: ""
---

<!-- Intro  -->
Once you have created a tenant instance of Dynamics 365, here are the steps to add users to Dynamics 365.
Since Dynamics 365 **synchronizes user information with Office 365**, you will basically be updating user information in Office 365.

## Adding users in Office 365
First, log in to the [Office 365 (or Microsoft 365 as of January 2019) Management Center](https://admin.microsoft.com/).
From the left panel, open "Users", click "Active Users", and then click "+".

<!-- Image= adduser-01.png -->
{{< imagedisplay src="adduser-01.png" >}}


Set any name or email address.
<!-- Image= adduser-02.png -->
{{< imagedisplay src="adduser-02.png" >}}


In the "Product Licenses" section, check the Dynamics 365 license, and then click "Add".
<!-- Image= adduser-03.png -->
{{< imagedisplay src="adduser-03.png" >}}

The user has now been created. This user will be reflected in Dynamics 365 if you wait for some time.
The official documentation below states that it takes a few minutes.

<!-- QuteBox -->
When you create a user and assign a license in the Office 365 admin center, the user will also be created in Dynamics 365 (online). **It may take a few minutes for the synchronization process** between Office 365 Management Center and Dynamics 365 (online) to complete.
By entering the user ID and password, the user will be able to access the Office 365 Administration Center and view information about the service. However, the user will not be able to access Dynamics 365 (online) until this user is assigned at least one security role in Dynamics 365 (online).

Reference: [Creating Users and Assigning Security Roles in Dynamics 365 (online)](https://docs.microsoft.com/ja-jp/power-platform/admin/create-users-assign-online-security-roles)

*If this does not work, try removing the Dynamics 365 license and then re-granting it to see if the problem is resolved.

If it is still not reflected, the synchronization may not be working properly, so please contact customer support by clicking "Support" in the Office 365 admin center and then "New Inquiry". They should be able to reset the inconsistency of the synchronization.
<!-- Image= adduser-04.png -->
{{< imagedisplay src="adduser-04.png" >}}


## Identify users in Dynamics 365
Verify that the user has been added to Dynamics 365. Open "Settings" and click "Security".
<!-- Image= Settings-1.png -->
{{< imagedisplay src="Settings-1.png" >}}


Go to "Users".
<!-- Image= Users.png -->
{{< imagedisplay src="Settings-1.png" >}}


The licensed account will be automatically reflected in the list of "Active Users".
You will see that the users you just added are reflected.
<!-- Image= adduser-05.png -->
{{< imagedisplay src="adduser-05.png" >}}


Click on the user name. You will see that the name, user name, and email address that you have just set in the Office 365 admin center are set. These items cannot be changed in Dynamics 365, so if you need to change the user name, please do so in the Office 365 Administration Center.
<!-- Image= adduser-06.png -->
{{< imagedisplay src="adduser-06.png" >}}


## About CAL Information
If you check the "Client Access License Information" section, you will see that the "Access Mode" is set to **"Read/Write"** by default.
<!-- Image= adduser-07.png -->
{{< imagedisplay src="adduser-07.png" >}}


A user set to this access mode is a regular user of Dynamics 365 who needs a license. Most users will use "read/write" to access Dynamics 365 because this is the default setting, but there are two special access modes.

### Access mode: Management
Administration mode is a setting that allows you to access the system as an administrator.
This will be available when you add a user in the Office 365 admin center by selecting "Custom Administrator" under "Roles" and checking "Dynamics 365 Service Administrator".
This will be available by selecting "Custom Administrator" under "Roles" and checking the "Dynamics 365 Service Administrator" checkbox.
<!-- Image= adduser-08.png -->
{{< imagedisplay src="adduser-08.png" >}}


Users added in the administration mode can be used as administrators for Dynamics 365.
This administrative **user does not need to be licensed for Dynamics 365**.
For more information, please refer to the official documentation below.

<!-- QuteBox -->
By default, all Office 365 global administrators and Office 365 service administrators who do not have a Dynamics 365 (online) license are granted two levels of Dynamics 365 (online) permissions: 1.
* System administrator security role
* Management access mode
The System Administrator security role is granted to Dynamics 365 administrators and gives them unrestricted access to the administrative (settings) areas used to manage and configure Dynamics 365 functionality.

Quote: [Global and service administrators can be managed without a license.](https://docs.microsoft.com/ja-jp/power-platform/admin/global-service-administrators-can-administer-without-license)

Note that **"Global Administrator"** in the official documentation above means a user who has "General Administrator" checked in the "Roles" section.

<!-- Image= adduser-09.png -->
{{< imagedisplay src="adduser-09.png" >}}

Note that administrative **users can only access Dynamics 365 settings**. Access to sales, marketing, services and other data is controlled, so you can prevent unnecessary access to sales data by assigning them to accounts that only manage the system.


### Access mode: non-interactive
The access mode called non-interactive can be used to access both sides (application and Dynamics 365) when running programs between applications. For example, you can use it as an access user to retrieve data from Dynamics 365 using the Web API and write the data to SQL on the Azure server. Non-interactive **users do not need to be licensed for Dynamics 365** in the same way as administrative users.

The difference between an administrative user and an
* The need to grant a license once in order to appear in the list of users in Dynamics 365
* Non-interactive users should not be able to log in to Dynamics 365.

It will be

Now, let's switch the user we just licensed and verified to the non-interactive access mode.
Under "Client Access License Information" in User Information, select "Non-Interactive" and save.

<!-- Image= adduser-10.png -->
{{< imagedisplay src="adduser-10.png" >}}


Go back to the **Office 365 admin center** and disable the Dynamics 365 license for the user you just mentioned and click "Save".
<!-- Image= adduser-11.png -->
{{< imagedisplay src="adduser-11.png" >}}


This is OK. If you check the list of "Active Users" in Dynamics 365, you will see that
The users whose licenses have been deactivated are still listed.

<!-- Image= adduser-12.png -->
{{< imagedisplay src="adduser-12.png" >}}


Note that the **maximum number of users that can use the non-interactive mode is 5**.

<!-- quate Box -->
A non-interactive user is not a "user" in the generic sense - a non-interactive user is an **access mode created by a user account**, not a person. Asymmetric users are used for programmatic, two-way access to and from Dynamics 365 across applications. Non-interactive user accounts allow applications and tools, such as the Dynamics 365/ERP Connector, to authenticate to and access Dynamics 365 (online) without the need for a Dynamics 365 (online) license. **Up to five non-interactive user accounts can be created** for each instance of Dynamics 365 (online).

Reference: [Creating Users and Assigning Security Roles in Dynamics 365 (online)](https://docs.microsoft.com/ja-jp/power-platform/admin/create-users-assign-online-security-roles)

## What to do next
This is the end of the procedure for adding a user to Dynamics 365. However, for regular users, you need to configure **security settings** and grant access rights. We will explain the details in the next article.    
&nbsp;