---
title:  "Editing WBS in Project Service and Microsoft Project"
draft: false
weight: 8
datetitle: "2017.08.23 | "
image: "artical8.jpg"
Author: "Takafumi Noguchi"
authorimage: "authorimage.jpg"
showinhome: true
showinaccordian: true
rightMenu: "artical"
linkdin: ""
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
      "dateModified": "2015-02-05T09:20:00+08:00"
    }
---
<!-- Intro  -->
By integrating Dynamics 365 for Project Service Automation with Microsoft Project, you can edit WBS on a client terminal. In this article, we will show you how to integrate them.

*This article assumes that you already have Microsoft Project installed on your device. If you have not installed it yet, please install it from the Microsoft 365 Management Center as shown below.


## Install Microsoft Project
If you have an Office 365 subscription, you can install Microsoft Project from Office 365.
Go to the Microsoft 365 Management Center. Click "Install Software" under Office Software in Home.
<!-- Image= psa-project01.jpg -->
{{< imagedisplay src="psa-project01.jpg" >}}

Click "Project" in the left menu, and then click "Install.
<!-- Image= psa-project02.png -->
{{< imagedisplay src="psa-project02.png" >}}

You can now download the Project installer to your client device. Follow the installer to install Microsoft Project.

## Install the add-in
First, download the add-in from the official website at[ Microsoft Dynamics 365 Project Service Automation Add-in for Microsoft Project](https://www.microsoft.com/ja-JP/download/details.aspx?id=54299).
<!-- Image= psa-project03.png -->
{{< imagedisplay src="psa-project03.png" >}}

After selecting and downloading the x32 or x64 bit version, launch the installer. Click "Next".
<!-- Image= psa-project04.png -->
{{< imagedisplay src="psa-project04.png" >}}

Click "Next" on the license agreement and installation destination, and then "Install" to install the add-in.
<!-- Image= psa-project05.png -->
{{< imagedisplay src="psa-project05.png" >}}

If the installation is complete, you are good to go.

## Connecting to Dynamics 365 from Project
Start Project and create a new project. Click on the "Project Services" tab, which has been added.
<!-- Image= psa-project06.png -->
{{< imagedisplay src="psa-project06.png" >}}

Click "Connect". In the dialog, enter the URL of the Dynamics 365 account you want to connect to and click Connect.
<!-- Image= psa-project07.png -->
{{< imagedisplay src="psa-project07.png" >}}

Enter your credentials and click "Sign In".
<!-- Image= psa-project08.png -->
{{< imagedisplay src="psa-project08.png" >}}

Microsoft Project and Dynamics 365 are now connected.

## Edit and publish WBS
Load the Dynamics 365 for Project Service Automation project into Project, edit the WBS, and finally publish it.

### Loading a project
Load the WBS of the Dynamics 365 project into Project. Click "Import" in the menu, and then click "PSA Project".
<!-- Image= psa-project09.png -->
{{< imagedisplay src="psa-project09.png" >}}

Select the project you want to link, check the "Link project plan to project service automation" checkbox, and click "Open".
<!-- Image= psa-project10.png -->
{{< imagedisplay src="psa-project10.png" >}}

The WBS is now linked to Project.

### Upload the Project file
Before editing the WBS here, click "To PSA Project Document" under "Upload".
<!-- Image= psa-project11.png -->
{{< imagedisplay src="psa-project11.png" >}}

*The "Upload" option will not appear unless you have configured[ Dynamics 365 and SharePoint integration in advance]().

Click "Yes" in the dialog.
<!-- Image= psa-project12.png -->
{{< imagedisplay src="psa-project12.png" >}}

You should now have a .msp file uploaded from Project to your Dynamics 365 project. Open the top menu of the relevant project and click on "Documents".
<!-- Image= psa-project13.png -->
{{< imagedisplay src="psa-project13.png" >}}

You can see that the Project file has been uploaded. The WBS of the Dynamics 365 project is now linked to Microsoft Project and can be opened in Project in the future.
<!-- Image= psa-project14.png -->
{{< imagedisplay src="psa-project14.png" >}}

### If you cannot upload the file
If you get an error message when you click "Upload" due to insufficient access rights, check the following two permissions.

  * SharePoint Access Rights
  * Project Web App Account

#### SHAREPOINT Access rights
This is a SharePoint site that is linked to Dynamics 365, and I believe a folder has been created specifically for the project entity. Please check if you have access to this folder.

From the gears in the upper right corner, click "Library Settings".
<!-- Image= psa-project15.png -->
{{< imagedisplay src="psa-project15.png" >}}

Under "Permissions and Administration", click on "Permissions for this document library" and check if the user you want to access has permissions. If they do not, grant them editing privileges.
<!-- Image= psa-project16.png -->
{{< imagedisplay src="psa-project16.png" >}}

#### PROJECT WEB APP Account
It is also important to make sure that the account accessing the Project Web App from Microsoft Project has permissions. By default, this is "Computer". If you want to manage multiple Office 365 accounts on the client devices you use, you will need to configure this.

Open the "File" tab of the Project.
<!-- Image= psa-project17.png -->
{{< imagedisplay src="psa-project17.png" >}}

Click on "Information" and then "Manage Account.
<!-- Image= psa-project18.png -->
{{< imagedisplay src="psa-project18.png" >}}

Click the "Add" button to add a PWA account.
<!-- Image= psa-project19.png -->
{{< imagedisplay src="psa-project19.png" >}}

Enter the account to access Dynamics 365 for Project Service Automation in "Account Name" and the URL of the Project Web App* in "Project Server URL".

If necessary, uncheck "Set as default account" and click "OK".
<!-- Image= psa-project20.png -->
{{< imagedisplay src="psa-project20.png" >}}

(*) To obtain the URL for the Project Web App, open Project from the list of Office 365 apps, and click "Go to Project Web App" to obtain the following URL.

**https://<tenant name>.sharepoint.com/sites/pwa**
<!-- Image= psa-project21.png -->
{{< imagedisplay src="psa-project21.png" >}}

In the "When you start" section, check the "Select an account" checkbox and click "OK.
<!-- Image= psa-project22.png -->
{{< imagedisplay src="psa-project22.png" >}}

### Edit and publish the WBS.
Edit the WBS in Project. Click the "Publish" button to update the changes in Dynamics 365.
<!-- Image= psa-project23.png -->
{{< imagedisplay src="psa-project23.png" >}}

Let's check it in the Dynamics 365 project. If you click "Refresh", you will see that the information in the WBS has been updated.
<!-- Image= psa-project24.png -->
{{< imagedisplay src="psa-project24.png" >}}

Update the WBS in Project and update it to Dynamics 365 in this way.

## Break the link with Project
If you want to edit the WBS again on the Dynamics 365 project, you need to break the link with the Project. open the Dynamics 365 project and click the menu button "Unlink from MS Project".
<!-- Image= psa-project25.png -->
{{< imagedisplay src="psa-project25.png" >}}

This will release the WBS so that you can edit it in Dynamics 365. If you want to edit it again in Project, repeat the above steps.

## Should I choose the one I'm familiar with?
If you are familiar with Microsoft Project, Project integration is a useful feature. However, not all of the WBS columns that can be configured in Project are reflected in Dynamics 365, so it is not inconvenient to edit the WBS in Dynamics 365.

I'm sorry to introduce the procedure so far, but you can choose which one to use according to your own preference.     
&nbsp;