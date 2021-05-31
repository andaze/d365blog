---
title:  "Set XRM ToolBox to hide the sitemap"
draft: false
weight: 2
datetitle: "2017.08.23 | "
image: "artical2.jpg"
Author: "Takafumi Noguchi"
authorimage: "authorimage.jpg"
showinhome: true
showinaccordian: false
rightMenu: "artical"
linkdin: ""
---
<!-- Intro  -->
In this article, I will show you how to use a third party customization tool called XRM ToolBox to make the "Settings" sitemap visible only to users with administrative privileges.

**Important note:** XRM ToolBox is a Dynamics development tool that is introduced in the[ Japan Microsoft Dynamics 365 Team Blog](https://blogs.msdn.microsoft.com/crmjapan/2014/05/19/dynamics-crm-20112013/). If you wish to use it, please do so at your own risk after thorough **verification**. Please note that we are not responsible for any damages caused by the contents of this site.


## Download XRM ToolBox
XRM ToolBox is an executable .exe file that does not require installation. Download and unzip the .zip file to use it.      

Download it from the official XRM ToolBox page.
<!-- Image= xrm-hide01.png -->
{{< imagedisplay xrm-hide01 "290" "596" "796" >}}


Then unzip the .zip file. You will find "XrmToolBox.exe" in the folder, double-click it to run it.
<!-- Image= xrm-hide02.png -->
{{< imagedisplay xrm-hide02 "290" "596" "796" >}}


## Installing the SiteMap Editor
When you open the XRM ToolBox, the Plugin Store will open first. Please close it once.

### Connect to Dynamics 365 environment
Access the Dynamics 365 environment from Tools. Click the "Connect" button. Click "New connection", enter the URL of the Dynamics 365 environment you want to access, and click "Next".
<!-- Image= xrm-hide03.png -->
{{< imagedisplay xrm-hide03 "290" "596" "796" >}}


Enter the account information (*) you wish to access here. After entering the information, click "Next".
<!-- Image= xrm-hide04.png -->
{{< imagedisplay xrm-hide04 "290" "596" "796" >}}


(*) For the account information to be entered here, it will not work properly if multi-factor authentication has been set in Office 365. Also, the account to be used can be accessed by the system administrator (CAL is "Administration") user as shown in the figure below. For more information about access mode, please refer to [About CAL information]().
<!-- Image= xrm-hide05.png -->
{{< imagedisplay xrm-hide05 "290" "596" "796" >}}

If the connection is successful, a dialog box similar to the one below will appear. Enter the connection name as desired and click "Finish".
<!-- Image= xrm-hide06.png -->
{{< imagedisplay xrm-hide06 "290" "596" "796" >}}


### Install the Site Map Editor
Click "Tools" and then "Plugin Store". Select "SiteMap Editor" and click "Install".
<!-- Image= xrm-hide07.png -->
{{< imagedisplay xrm-hide07 "290" "596" "796" >}}


After the installation is complete, open Plugins, search for SiteMap, and click SiteMap Editor.
<!-- Image= xrm-hide08.png -->
{{< imagedisplay xrm-hide08 "290" "596" "796" >}}


It's hard to tell, but when you click on it, a tab will be added to the XRM ToolBox, and you can double-click on the SiteMap Editor tab.
<!-- Image= xrm-hide09.png -->
{{< imagedisplay xrm-hide09 "290" "596" "796" >}}


Click "Load SiteMap", select "Default" sitemap and click "OK". Now you can load the Dynamics 365 sitemap.
<!-- Image= xrm-hide10.png -->
{{< imagedisplay xrm-hide10 "290" "596" "796" >}}


## Entities and security roles
The SiteMap Editor controls the access rights of the sitemap on a security role basis. In other words, it is a way to tie entity access rights to sitemap access rights.

For example, the Account Manager security role does not have access to the "Solution" entity.
<!-- Image= xrm-hide11.png -->
{{< imagedisplay xrm-hide11 "290" "596" "796" >}}


So, in the SiteMap Editor, you can set the "Settings" sitemap to only show up if you have access to the "Solutions" entity. This means that users with Account Manager security role will not be able to see the "Settings" sitemap.

You can create a new entity for showing/hiding the site map and set it up in the SiteMap Editor, but it is not very desirable to create a new entity just for this purpose, so I will select an entity that is only used by the system administrator and set up that entity in the SiteMap Editor.

The "Solution" described above is ideal in this sense. In this article, we will use the "Solution" access rights to control the display and hiding of the "Settings" sitemap.

### Add Privilege to the subarea

The sitemap is divided into the following units: Area > Group > Subarea, but access rights can only be set for **Subarea**.

Return to the SiteMap Editor and expand "Area(Settings)" to the sub-areas, right-click in one sub-area and click "Add Privilege".
<!-- Image= xrm-hide12.png -->
{{< imagedisplay xrm-hide12 "290" "596" "796" >}}


Enter the "solution" entity name (solution), check the "Read" box, and click "Save".
<!-- Image= xrm-hide13.png -->
{{< imagedisplay xrm-hide13 "290" "596" "796" >}}

Click "Update SiteMap" to apply the customization.
<!-- Image= xrm-hide14.png -->
{{< imagedisplay xrm-hide14 "290" "596" "796" >}}


If you check with a user whose Account Manager role is set, you will see that the hidden "Business Administration" has disappeared from the menu.
<!-- Image= xrm-hide15.png -->
{{< imagedisplay xrm-hide15 "290" "596" "796" >}}


## To hide the sitemap in the settings
You can hide it by setting access rights to the "Settings" sub-area as described above.
<!-- Image- xrm-hide16.png -->
{{< imagedisplay xrm-hide16 "290" "596" "796" >}}


To hide "Settings" itself, do the above for all the sub-areas in "Settings", and the menu will be invisible.
<!-- Image= xrm-hide17.png -->
{{< imagedisplay xrm-hide17 "290" "596" "796" >}}


The XRM ToolBox can be customized in a number of other ways, so if there are other plug-ins that can be used, I'll let you know.

That's all for now.    
&nbsp;