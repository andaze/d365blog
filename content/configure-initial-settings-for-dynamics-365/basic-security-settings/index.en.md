---
title:  "Dynamics 365 Security Basic Settings"
draft: false
weight: 2
datetitle: "2017.08.23 | "
showinhome: true
showinaccordian: false
rightMenu: "artical"
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
{{< detailTopImage src="artical2.jpg" >}}
{{< authorImage src="authorimage.jpg" name="Takafumi Noguchi" linkdin="https://www.linkedin.com/in/tnoguchi1123531" >}}
<!-- Intro  -->
Now that we have added a user in Dynamics 365, let's understand the basic security structure and settings.    
Dynamics 365 has the following security structure.
<!-- Image= sec-setting01.png -->
{{< imagedisplay src="sec-setting01.png" >}}

**Departments and teams** are groups of organizations, and you can manage organization groups in detail by adding users within them. **Security Roles and Field Security** are used to control access rights. *In this section, we will introduce them. Field security will be introduced in another article.


## Department
All users must belong to a **department**. Departments are hierarchical, just like departments in a normal organization, and the security settings are configured so that higher-level departments have more privileges than lower-level departments. This configuration can be achieved in combination with **security roles** as described below.

Dynamics 365 creates one department by default. This is created with the same name as the instance and is called the **organization (root department)**. Please note that the **root department cannot be renamed or deleted.**

A department can have one higher-level department and multiple sub-departments. For example, the following departments can be configured
<!-- Image= sec-setting02.png -->
{{< imagedisplay src="sec-setting02.png" >}}


### Create a department
Now let's create a department: Go to Dynamics 365 and click on "Security" under "Settings".
<!-- Image= create.png -->
{{< imagedisplay src="create.png" >}}


Click on the "New" button.

<!-- Image= new.png -->
{{< imagedisplay src="new.png" >}}


Enter a "Name" and enter the root department in the "Top departments" field, then click "Save and Close.
<!-- Image= sec-setting03.png -->
{{< imagedisplay src="sec-setting03.png" >}}

Add two more departments under the one you created above. Create the departments in the same way.

Add the department you just created in the "Top Departments" section. This will create a hierarchy of departments.
<!-- Image= sec-setting04.png -->
{{< imagedisplay src="sec-setting04.png" >}}


### Deleting a department
If you want to delete a department, you need to disable the department once. Select the department you want to delete.
<!-- Image= sec-setting05.png -->
{{< imagedisplay src="sec-setting05.png" >}}


Open "Operations" and click "Disable".

Click "Deactivate" in the dialog that appears.
<!-- Image= sec-setting06.png -->
{{< imagedisplay src="sec-setting06.png" >}}


After disabling it, open "Operations" and click "Delete Department" to delete the department.
<!-- Image= sec-setting07.png -->
{{< imagedisplay src="sec-setting07.png" >}}


The deletion is now complete. You can delete it by deactivating it once and making it inactive.

If you want to delete the lowest level department, there is no problem deleting it as described above, but if you want to delete a higher level department, change the order of the higher and lower levels first before deleting it. However, if you want to delete a department at the top, you should first change the order of the top and bottom departments before deleting it. The reason for this is that **if you disable the top department as it is, all the lower departments will also be disabled.**

Example: Root department - Department A - Department B - Department C, and Department B is to be deleted
* First, switch the department above department C to department A.
* Deactivate Department B
* Delete Department B


## Team
It can be used with users in sharing records and other information, and teams can be used for cross-departmental collaboration.

For example, let's say that Mr. A, who belongs to Sales Section 1, is offered the opportunity to participate in a new marketing project that has been launched within the company, taking advantage of his sales experience. In this case, Ms. A can create a new marketing project team that has access to the marketing department's leads and marketing strategy information, and assign Ms. A to that team, so that Ms. A can work with the marketing department on the project while still belonging to Sales 1. By creating a new marketing project team that has access to leads and marketing strategy information, and assigning Ms. A to that team, Ms. A will be able to work on projects with the marketing department while remaining a member of Sales 1.

<!-- Image= team.png -->
{{< imagedisplay src="team.png" >}}


Also, if the owner of a record becomes temporarily unknown due to retirement or other reasons, you can assign the owner of the record to the team of the department to which the retired person belonged, so that any member of the same department can access the record. This way, it will be convenient for you to change the owner yourself when the person in charge is decided.

### Type of team
There are two types of teams in Dynamics 365.

* **Owner Team:** Allows you to select a team as the owner of the record and assign security roles to the team. The user of the team that owns the record will be granted full access rights to the record. (*1)
* **Access Team:** Cannot be set as the owner of a record, nor can it be assigned a security role. Access Team: Cannot be set as the owner of a record and cannot be assigned a security role, but can grant access rights by "sharing" the record. (*2)

(*1) Owner teams can be selected in the same way as users in the record **assignment**, as shown in the figure below. By making a team the owner of a record, you can grant access rights to the record to all users who belong to the same department, which is useful when the person in charge moves departments or retires. It is also possible to grant access rights in a shared setting, like an access team.
<!-- Image= team1.png -->
{{< imagedisplay src="team1.png" >}}


(*2) Access Teams can grant access privileges in the share settings of a record. They cannot be granted ownership of records like owner teams.
<!-- Image= team2.png -->
{{< imagedisplay src="team2.png" >}}


### Relationship between the department and the ownership team
When you create a department, **an owner team is automatically created with the same name**. This owner team is the **default team** that will be added by default for all users belonging to that department. Just as a user can only belong to one department, **there can only be one default team associated with a department.**

For example, if you belong to a department called "Sales Department" and your default team is "Sales Department", you cannot add another default team called "Section 1". If you try to add one, you will get the following error message
<!-- Image= team3.png -->
{{< imagedisplay src="team3.png" >}}


### Features of the Access Team
It is possible for a user to participate in more than one access team. Therefore, access teams are often used to participate in cross-organizational projects that are different from the department or section to which the person in charge belongs. They are created for special purposes and can be deleted when no longer needed.

For more information about the team, please also refer to the official documentation below.

<!-- QuateBox -->
When creating a department, keep the following points in mind
* An organization (also known as a root department) is the top level of the department hierarchy in Dynamics 365. Dynamics 365 automatically creates an organization when you install or prepare Dynamics 365. You cannot change or delete the organization name.
* Each department can have only one higher-level department.
* Each department can have multiple subordinate departments.
* All users must be assigned to one (or only one) department.
* A team can be assigned to only one department, but a team can consist of users from multiple departments. Consider using teams in situations where users from different departments need to collaborate on a shared set of records.

Quote: [Create or edit business units to control access to records.](https://docs.microsoft.com/ja-jp/power-platform/admin/create-edit-business-units)

## security role
Security roles are access settings that can be assigned to users and teams.
Users and teams can create, read, write, delete, add, add to, assign, and share records.

The following figure shows a role that grants access rights to an entity called a client company.
<!-- Image= sec-setting08.png -->
{{< imagedisplay src="sec-setting08.png" >}}


The strength of the access rights can also be set from only the records that you own to all records of an entity (the entire organization).
<!-- Image= sec-setting09.png -->
{{< imagedisplay src="sec-setting09.png" >}}


Each key in the above figure has the following meaning.

* No selection: No access rights
* User: Has access only to records owned (shared) by him/her.
* Department: You have access to records owned by users in your department.
* Department subordinate: Access to records owned by users who belong to your department and subordinate departments of your department.
* Organization-wide: All records have access rights

For example, as shown in the figure below, if you have a hierarchy of Department A - Department B - Department C, and you want the president to be able to read all the data of all the business partners, the manager to be able to read the data under his department, and the employee to be able to read only the data owned by him, the security role settings for the business partners would be as follows

<!-- Image= role.png -->
{{< imagedisplay src="role.png" >}}

This can be achieved by setting the security roles as shown in the figure above to the team associated with the department or to the users themselves.

### Security role privileges are cumulative.
When you set up multiple Dynamics 365 security roles for a user or team, the privileges are cumulative. In other words, it is an **OR condition.**

For example, if roles A and B are set for user A as follows
<!-- Image= srole1.png -->
{{< imagedisplay src="srole1.png" >}}


User A will be able to read and write to all records of clients and contacts, and can create and delete on his own records.

Please also refer to the official documentation on security role privileges.

<!-- QuateBox -->
**Security Roles**
Security roles define how different users, such as sales representatives, can access different types of records. In order to control access to data, you can modify existing security roles, create new security roles, or change the security role assigned to each user. Each user can have multiple security roles.
**Privileges for security roles are cumulative**. A user with multiple security roles will have all the privileges available to all roles.

Reference: [Security Roles and Privileges](https://docs.microsoft.com/ja-jp/power-platform/admin/security-roles-privileges)


### Create a security role
Creating a new security role involves creating all entities with "no selection" (no access rights). In this case, it is very difficult because you need to grant access rights to all the entities and also need to figure out which entities need which permissions in a very detailed manner.

Therefore, most of the time when creating a new security role, it is more efficient to **copy the role** that Dynamics 365 already provides and edit the necessary parts, so we will adopt that procedure.

First, under Security, click Security Roles.
<!-- Image= srole2.png -->
{{< imagedisplay src="srole2.png" >}}


Select the check box for the role you want to copy from. Click "Copy Roles" under "Other Operations".
<!-- Image= sec-setting10.png -->
{{< imagedisplay src="sec-setting10.png" >}}



Enter a name of your choice in the "New role name" field and click "OK".
<!-- Image= sec-setting11.png -->
{{< imagedisplay src="sec-setting11.png" >}}

The Security Roles dialog will open, so let's configure the settings. For example, "Deletion" for "Client Company" and "Client Contact" is set to "Department.
<!-- Image= sec-setting14.png -->
{{< imagedisplay src="sec-setting14.png" >}}


I changed this to "Organization-wide" and then "Save and Close" to complete the process. Now any user or team that has set up this role will be able to delete all company and contact person records.
<!-- Image= sec-setting15.png -->
{{< imagedisplay src="sec-setting15.png" >}}


Let's create the security role in this way.


### Department-specific security roles
If you open the "Details" tab of the security role, there is a field to change the department.
<!-- Image= sec-setting28.png -->
{{< imagedisplay src="sec-setting28.png" >}}


Basically, a role created in a higher level department will be replicated in all lower level departments. The internal IDs of the security roles are also different.
Therefore, if you want to create a role to be used only by a specific department, first select the department as shown in the figure below.
<!-- image= sec-setting29.png -->
{{< imagedisplay src="sec-setting29.png" >}}


Then, select the role you want to copy as in the creation procedure and create a new security role with "Copy Role".
<!-- Image= sec-setting30.png -->
{{< imagedisplay src="sec-setting30.png" >}}


Enter any name to create it, and check the department in the "Details" tab to see that the role has been created in the department you specified, as shown here.
<!-- Image= sec-setting31.png -->
{{< imagedisplay src="sec-setting31.png" >}}


If you check the root department, you will find that the security role you just created is not there.
<!-- Image= sec-setting32.png -->
{{< imagedisplay src="sec-setting32.png" >}}


In this way, security roles for common use in the organization can be created in the root department, and security roles for each department can be created in the department.

This will prevent many unnecessary security roles from being duplicated.

### Deleting a security role

It is possible to delete a role that you have created. Click on the "X" (delete) button to delete it. However, if the role you want to delete is set in another component, you will not be able to delete it. If there are dependent components (forms, apps, etc.), you will get the following error
<!-- Image= deletesrole.png -->
{{< imagedisplay src="deletesrole.png" >}}

Click on the "Details" link in the above figure to see which component the security role is set on, and remove all dependencies before deleting it.

### Other: Hide buttons
In addition to controlling access rights to records, **security roles can also change the permissions to show or hide some buttons**. For example, let's say you want to hide the "Export to Excel" button.

<!-- image= hidebtn1.png -->
{{< imagedisplay src="hidebtn1.png" >}}

In the "Business Management" tab, select "Export to Excel" as "No Selection" and save the file.
This will hide the "Export to Excel" button and make it unusable. This is useful if you don't want the data to be exported.
<!-- Image= hidebtn2.png -->
{{< imagedisplay src="hidebtn2.png" >}}



## Configure security settings for users.
Now that we have created the departments, teams, and security roles, let's set each of them up as a user.

### Set up a department.
First, go to "Security" and click "Users".
<!-- Image= sec-setting21.png -->
{{< imagedisplay src="sec-setting21.png" >}}


Click on the user you want to configure.
<!-- Image= sec-setting22.png -->
{{< imagedisplay src="sec-setting22.png" >}}


The first step is to set up your department. Click on "..." and then click on "Change Department.
<!-- Image= sec-setting23.png -->
{{< imagedisplay src="sec-setting23.png" >}}


Once you have selected the department you created, click "OK" to change the department.
<!-- Image= sec-setting24.png -->
{{< imagedisplay src="sec-setting24.png" >}}


The user's department has been newly set up.

### Set the security role
When you set up a new department for a user, the **security role for that user will be reset** and the user will not be able to access Dynamics 365 until the security role is set. Therefore, after setting up a department, be sure to assign a security role to the user.
Open the menu next to your user name at the top. Click on "Security Roles".
<!-- Image= sec-setting25.png -->
{{< imagedisplay src="sec-setting25.png" >}}

Click "Manage Roles".
<!-- Image= sec-setting26.png -->
{{< imagedisplay src="sec-setting26.png" >}}

Select the security role and click "OK".
<!-- Image= sec-setting27.png -->
{{< imagedisplay src="sec-setting27.png" >}}

You have now assigned a security role to the user. It is also possible to assign multiple roles.

### Add a team
Add a team to a user. Return to the Users screen. By default, if you check "Teams" on the far right, you will see that the owner team associated with the department is already the default team.
＋Click the + button. Search for your team in the search box.
<!-- Images= sec-setting34.png -->
{{< imagedisplay src="sec-setting34.png" >}}


First, we added the owner team. In the same way, we will add the access team.

Access teams are not shown in the view's filters, so open the search dialog to find them.
Click "Search other records" to open the search dialog, and select "All users access teams" as the search location.
Then the access teams you have created will be displayed.
<!-- Image= sec-setting35.png -->
{{< imagedisplay src="sec-setting35.png" >}}


After adding it, the access team is still not visible, so open the user's form editor, open the properties of this "Team" sub-grid, change the view to "All Teams", and click the "Edit" button.
<!-- Image= sec-setting36.png -->
{{< imagedisplay src="sec-setting36.png" >}}


From "Tasks" on the far right, click "Edit Filter Conditions," add "Access" to "Team Type," and then click "OK.
<!-- Image= sec-setting37.png -->
{{< imagedisplay src="sec-setting37.png" >}}


Now click "Save and Close".
The changes will not take effect at this point, so open "Solutions" in "Settings".

<!-- Image= sec-setting38.png -->
{{< imagedisplay src="sec-setting38.png" >}}


Then use "Publish All Customizations" to process the publishing.
<!-- Image= sec-setting39.png -->
{{< imagedisplay src="sec-setting39.png" >}}


After the publishing process is finished, check the user information you just saw. The access team is also displayed.
<!-- Image= sec-setting40.png -->
{{< imagedisplay src="sec-setting40.png" >}}



## At the end.
This has been a long article, but this is the end of the security settings after adding a user. This is a basic setting, but now you can control user access. There is also a way to set advanced security settings, such as security settings by field or by hierarchy, but I would like to introduce that another time.       
&nbsp;