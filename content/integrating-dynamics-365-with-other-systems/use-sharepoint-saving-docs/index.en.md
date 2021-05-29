---
title:  "Save the Dynamics 365 document to SharePoint"
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
Dynamics 365 provides storage space based on the number of licenses. If you use the trial version of Dynamics 365, you will only have about 5GB of storage space, so if you upload attachments to your business partners' records, you will quickly run out of storage space.

Therefore, in Dynamics 365, by linking with SharePoint Online, you can change the destination of the actual file from Dynamics 365 to SharePoint Online. This is an external system integration function that is indispensable when running Dynamics 365 with a small number of users, so please make use of it.


## Setting up SharePoint Online
First, let's set up the SharePoint Online side, which is the storage destination. If you do not have a SharePoint Online subscription, please prepare for it first.
<!-- Image= SharePoint1.png -->
{{< imagedisplay SharePoint1 "290" "596" "796" >}}


When the SharePoint Online home page opens, click the gear symbol in the upper right corner, and then click "Site Content.
<!-- Image= SharePoint2.png -->
{{< imagedisplay SharePoint2 "290" "596" "796" >}}


Click "+New" and then click "Subsite".
<!-- Image= SharePoint3.png -->
{{< imagedisplay SharePoint3 "290" "596" "796" >}}


After entering the title, set the URL. Leave the template, permissions, etc. as default and click "Create".
<!-- Image= SharePoint4.png -->
{{< imagedisplay SharePoint4 "290" "596" "796" >}}
<!-- Image= SharePoint5.png -->
{{< imagedisplay SharePoint5 "290" "596" "796" >}}

We have created a subsite in SharePoint Online where we will store our Dynamics 365 documents. We will use this URL later, so keep it in mind.

Example: https://<domain name>.sharepoint.com/d365lists
<!-- Image= SharePoint6.png -->
{{< imagedisplay SharePoint6 "290" "596" "796" >}}


Adjust your site permissions. Click the gear symbol in the upper right corner, and then click "Site Settings.
<!-- Image= SharePoint7.png -->
{{< imagedisplay SharePoint7 "290" "596" "796" >}}


Click "Site Permissions.
<!-- Image= SharePoint8.png -->
{{< imagedisplay SharePoint8 "290" "596" "796" >}}


This time, since we want to separate the permissions for Dynamic 365 and SharePoint Online and set the permissions independently, we will click "Stop permission inheritance".

This setting allows you to set your own permissions separately from the permissions set in SharePoint Online.
<!-- Image= SharePoint9.png -->
{{< imagedisplay SharePoint9 "290" "596" "796" >}}


For "Set up a group for this site", leave it unchanged and click "OK".

Now we will grant permissions to the user. Again, go to "Site Settings" and then "Site Permissions".

Click on "Grant Permissions" and grant the user the "Post" permission as shown below. Since we don't need to inform users of the SharePoint Online URL, we have removed the tick from "Send email invitation".
<!-- Image= SharePoint10.png -->
{{< imagedisplay SharePoint10 "290" "596" "796" >}}


We have confirmed that the user has been added. Now we will delete the unnecessary user access. It is important to note that if you delete the team to which the administrative user who is performing the operation belongs, the user will not be able to access the site. In this case, we will delete all but the "Team Site Owner".
<!-- Image= SharePoint11.png -->
{{< imagedisplay SharePoint11 "290" "596" "796" >}}


This completes the preparation of the SharePoint Online side.

In the future, when uploading attachments on the Dynamics 365 side, users will need to be added on the SharePoint Online side first.

## Integrating Dynamics 365 with SharePoint Online
To enable SharePoint Online in Dynamics 365, follow the steps below.

### Activate the SharePoint integration.
Open Dynamics 365, click Settings, and then click Document Management. Click "Enable server-based SharePoint integration".
<!-- Image= SharePoint12.png -->
{{< imagedisplay SharePoint12 "290" "596" "796" >}}


When the dialog appears, click Next, and then click Online under Choose a location for your SharePoint site.
<!-- Image= SharePoint13.png -->
{{< imagedisplay SharePoint13 "290" "596" "796" >}}


Enter your SharePoint Online URL in the URL field (not the URL of the document library you created) and click "Next".
<!-- Image= SharePoint14.png -->
{{< imagedisplay SharePoint14 "290" "596" "796" >}}


Verify that the configuration is complete, and click Finish.
<!-- Image=  SharePoint15.png -->
{{< imagedisplay SharePoint15 "290" "596" "796" >}}


### Configure document management settings.
Configure this setting if you want to manage SharePoint documents by entity. Under "Settings", click "Document Management", and then click "Document Management Settings".
<!-- Image= SharePoint16.png -->
{{< imagedisplay SharePoint16 "290" "596" "796" >}}


Select the entity you want to enable and add the URL of the SharePoint site you created above (e.g. https://<domain name>.sharepoint.com/d365lists ), then click "Next".
<!-- Image= SharePoint17.png -->
{{< imagedisplay SharePoint17 "290" "596" "796" >}}


The message "URL is valid" will be displayed. Now set the folder structure, check the "Based on entity" checkbox and click "Next".
<!-- Image= SharePoint18.png -->
{{< imagedisplay SharePoint18 "290" "596" "796" >}}


Now, you have created a folder for each of your client company and client person in SharePoint. If you upload a document in the client company record in Dynamics 365, it will be created in the SharePoint folder called account.
<!-- Image= SharePoint19.png -->
{{< imagedisplay SharePoint19 "290" "596" "796" >}}


If you look at your SharePoint site, you will see that a folder has been created.
<!-- Image= SharePoint20.png -->
{{< imagedisplay SharePoint20 "290" "596" "796" >}}

### Uploading files in Dynamics 365
Let's upload a document from a client company record. Open the client company record and click "Documents" from the top menu (navigation). If you don't have a document, you can add one to the navigation in the form settings.
<!-- Image= SharePoint21.png -->
{{< imagedisplay SharePoint21 "290" "596" "796" >}}


Click "Upload", select the file you want to attach, and then click "OK".
<!-- Image= SharePoint22.png -->
{{< imagedisplay SharePoint22 "290" "596" "796" >}}


The upload is now complete. You can see that the "Document Location" is now SharePoint.
<!-- Image= SharePoint23.png -->
{{< imagedisplay SharePoint23 "290" "596" "796" >}}


When I look at the SharePoint site, I see that a new folder has been created in my business partner's folder, and the file has been uploaded when I attached it.
<!-- Image= SharePoint24.png -->
{{< imagedisplay SharePoint24 "290" "596" "796" >}}


As you can see, it is very useful to be able to store many files in Dynamic 365 by linking with SharePoint.
Please try to set up entities other than the ones we have set up this time.     
&nbsp;