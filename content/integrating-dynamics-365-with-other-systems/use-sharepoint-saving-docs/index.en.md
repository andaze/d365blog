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
Dynamics 365 provides storage space based on the number of licenses. If you use the trial version of Dynamics 365, you will only have about 5GB of storage space, so if you upload attachments to your business partners' records, you will quickly run out of storage space.

Therefore, in Dynamics 365, by linking with SharePoint Online, you can change the destination of the actual file from Dynamics 365 to SharePoint Online. This is an external system integration function that is indispensable when running Dynamics 365 with a small number of users, so please make use of it.


## Setting up SharePoint Online
First, let's set up the SharePoint Online side, which is the storage destination. If you do not have a SharePoint Online subscription, please prepare for it first.
<!-- Image= SharePoint1.png -->
{{< imagedisplay src="SharePoint1.png" >}}


When the SharePoint Online home page opens, click the gear symbol in the upper right corner, and then click "Site Content.
<!-- Image= SharePoint2.png -->
{{< imagedisplay src="SharePoint2.png" >}}


Click "+New" and then click "Subsite".
<!-- Image= SharePoint3.png -->
{{< imagedisplay src="SharePoint3.png" >}}


After entering the title, set the URL. Leave the template, permissions, etc. as default and click "Create".
<!-- Image= SharePoint4.png -->
{{< imagedisplay src="SharePoint4.png" >}}
<!-- Image= SharePoint5.png -->
{{< imagedisplay src="SharePoint5.png" >}}

We have created a subsite in SharePoint Online where we will store our Dynamics 365 documents. We will use this URL later, so keep it in mind.

Example: https://<domain name>.sharepoint.com/d365lists
<!-- Image= SharePoint6.png -->
{{< imagedisplay src="SharePoint6.png" >}}


Adjust your site permissions. Click the gear symbol in the upper right corner, and then click "Site Settings.
<!-- Image= SharePoint7.png -->
{{< imagedisplay src="SharePoint7.png" >}}


Click "Site Permissions.
<!-- Image= SharePoint8.png -->
{{< imagedisplay src="SharePoint8.png" >}}


This time, since we want to separate the permissions for Dynamic 365 and SharePoint Online and set the permissions independently, we will click "Stop permission inheritance".

This setting allows you to set your own permissions separately from the permissions set in SharePoint Online.
<!-- Image= SharePoint9.png -->
{{< imagedisplay src="SharePoint9.png" >}}


For "Set up a group for this site", leave it unchanged and click "OK".

Now we will grant permissions to the user. Again, go to "Site Settings" and then "Site Permissions".

Click on "Grant Permissions" and grant the user the "Post" permission as shown below. Since we don't need to inform users of the SharePoint Online URL, we have removed the tick from "Send email invitation".
<!-- Image= SharePoint10.png -->
{{< imagedisplay src="SharePoint10.png" >}}


We have confirmed that the user has been added. Now we will delete the unnecessary user access. It is important to note that if you delete the team to which the administrative user who is performing the operation belongs, the user will not be able to access the site. In this case, we will delete all but the "Team Site Owner".
<!-- Image= SharePoint11.png -->
{{< imagedisplay src="SharePoint11.png" >}}


This completes the preparation of the SharePoint Online side.

In the future, when uploading attachments on the Dynamics 365 side, users will need to be added on the SharePoint Online side first.

## Integrating Dynamics 365 with SharePoint Online
To enable SharePoint Online in Dynamics 365, follow the steps below.

### Activate the SharePoint integration.
Open Dynamics 365, click Settings, and then click Document Management. Click "Enable server-based SharePoint integration".
<!-- Image= SharePoint12.png -->
{{< imagedisplay src="SharePoint12.png" >}}


When the dialog appears, click Next, and then click Online under Choose a location for your SharePoint site.
<!-- Image= SharePoint13.png -->
{{< imagedisplay src="SharePoint13.png" >}}


Enter your SharePoint Online URL in the URL field (not the URL of the document library you created) and click "Next".
<!-- Image= SharePoint14.png -->
{{< imagedisplay src="SharePoint14.png" >}}


Verify that the configuration is complete, and click Finish.
<!-- Image=  SharePoint15.png -->
{{< imagedisplay src="SharePoint15.png" >}}


### Configure document management settings.
Configure this setting if you want to manage SharePoint documents by entity. Under "Settings", click "Document Management", and then click "Document Management Settings".
<!-- Image= SharePoint16.png -->
{{< imagedisplay src="SharePoint16.png" >}}


Select the entity you want to enable and add the URL of the SharePoint site you created above (e.g. https://<domain name>.sharepoint.com/d365lists ), then click "Next".
<!-- Image= SharePoint17.png -->
{{< imagedisplay src="SharePoint17.png" >}}


The message "URL is valid" will be displayed. Now set the folder structure, check the "Based on entity" checkbox and click "Next".
<!-- Image= SharePoint18.png -->
{{< imagedisplay src="SharePoint18.png" >}}


Now, you have created a folder for each of your client company and client person in SharePoint. If you upload a document in the client company record in Dynamics 365, it will be created in the SharePoint folder called account.
<!-- Image= SharePoint19.png -->
{{< imagedisplay src="SharePoint19.png" >}}


If you look at your SharePoint site, you will see that a folder has been created.
<!-- Image= SharePoint20.png -->
{{< imagedisplay src="SharePoint20.png" >}}

### Uploading files in Dynamics 365
Let's upload a document from a client company record. Open the client company record and click "Documents" from the top menu (navigation). If you don't have a document, you can add one to the navigation in the form settings.
<!-- Image= SharePoint21.png -->
{{< imagedisplay src="SharePoint21.png" >}}


Click "Upload", select the file you want to attach, and then click "OK".
<!-- Image= SharePoint22.png -->
{{< imagedisplay src="SharePoint22.png" >}}


The upload is now complete. You can see that the "Document Location" is now SharePoint.
<!-- Image= SharePoint23.png -->
{{< imagedisplay src="SharePoint23.png" >}}


When I look at the SharePoint site, I see that a new folder has been created in my business partner's folder, and the file has been uploaded when I attached it.
<!-- Image= SharePoint24.png -->
{{< imagedisplay src="SharePoint24.png" >}}


As you can see, it is very useful to be able to store many files in Dynamic 365 by linking with SharePoint.
Please try to set up entities other than the ones we have set up this time.     
&nbsp;