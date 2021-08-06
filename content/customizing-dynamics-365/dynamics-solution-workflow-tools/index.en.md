---
title:  "Dynamics 365 Extensions - Workflow Tools"
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
<!-- Intro  -->
I would like to introduce you to Dynamics 365 Workflow Tools, which greatly extends the functionality of Dynamics 365 Workflow. This is a great way to use the solution that I previously[ recommended in What is the best third party solution?]()

**Important note:** Dynamics 365 Workflow Tools is a third party solution. If you wish to use them in your own environment, please verify them thoroughly and use them at **your own risk**. Please note that we are not responsible for any damages caused by the contents of this website.



## About Dynamics 365 Workflow Tools
Dynamics 365 Workflow Tools, developed by Demian Raschovan, is a Dynamics solution that greatly improves the functionality of Dynamics 365 workflows. The version we are importing is 1.0.54.1, which adds 72 new features.

Among them, features such as setting up sharing to specific users or teams, quadrature of two fields, and getting record IDs are useful and are often used in my environment.

### Workflow Tools Feature List (1.0.54.1)
The following is a list of features of Dynamics 365 Workflow Tools.

<!-- Table -->

|       |  |  |
| ----------- | ----------- | ----------- |
| 1: Force Calculate Rollup Field | 31: Is Member Of Marketing List | 61: Translate Text |
| 2: Apply Routing Rules      | 32: Remove From All Marketing Lists      | 62: Currency Convert |
| 3: Query Values | are neat      | 63: Get Record ID |
| 4: Share Record With Team | 33: Numeric Functions      | 64: Retrieve User’s BU Default Team |
| 5: Share Record With User | 34: Email To Team      | 65 Get App Module ID |
| 6: Unshare Record With Team | 35: Set Process Stage      | 66 Get App Record Url |
| 7: Unshare Record With User | 36: Entity Mobile Deep Link      | 67 Is Member Of Team  |
| 8: Check If User is in Role | 37: Send Email      | 68 Count Child Entity Record  |
| 9: Check If User is in Team | 38: Geocode Address      | 69 Get Multi Select OptionSet |
| 10: Add To Marketing List | 39: Add User To Team      | 70 Map Multi Select OptionSet |
| 11: Remove From Marketing List | 40: Remove User From Team      | 71 Set Multi Select Option Set |
| 12: Clone Children | 41: Associate Entity      | 72 Delete Record Audit History |
| 13: Clone Record | 42: Goal Recalculate      |  |
| 14: Set Process | 43: Get Initiating User      |  |
| 15: Rollup Functions | 44: Encrypt Text      |  |
| 16: Entity Attachment To Email | 45: Check Associate Entity      |  |
| 17: Pick From Queue | 46: Set State      |  |
| 18: Queue Item Count | 47: Update Child Records      |  |
| 19: Add Role To User | 48: Disassociate Entity      |  |
| 20: Add Role To Team | 49: Insert Option Value      |  |
| 21: Remove Role From User | 50: Delete Option Value      |  |
| 22: Remove Role From Team | 51: Sales Literature To Email      |  |
| 23: Set User Settings | 52: Send Email From Template To Users In Role      |  |
| 24: String Functions | 53: Send Email To Users In Role      |  |
| 25: Delete Record | 54: Calculate Price      |  |
| 26: Entity Json Serializer | 55: Execute Workflow By ID Thanks to Steve Mordue      |  |
| 27: Qualify Lead | 56: JSON Parser      |  |
| 28: Add Marketing List To Campaign | 57: Date Functions      |  |
| 29: Copy Marketing List Members | 58: Calculate Agregate Date      |  |
| 30: Copy To Static List | 59: OrgDBSetting Update      |  |
|  | 60: OrgDBSetting Retrieve      |  |

Reference: [Dynamics 365 Workflow Tools (1.0.54.1)](https://github.com/demianrasko/Dynamics-365-Workflow-Tools/tree/1.0.54.1)

The above page is in English, but you can check the description of each function. I won't go into it here.

## Importing Dynamics 365 Workflow Tools
Import the Dynamics 365 Workflow Tools, which can be found by searching the App Store, but clicking "Get it now" from here will not import it successfully.
<!-- Image= wftool01.png -->
{{< imagedisplay src="wftool01.png" >}}

To do so, go to GitHub where you can find the Dynamics 365 Workflow Tools .zip file.
<!-- Image= wftool02.png -->
{{< imagedisplay src="wftool02.png" >}}

URL is here: https://github.com/demianrasko/Dynamics-365-Workflow-Tools

For the version, expand "Branch:master" on the left side, and check 1.0.54.1 in "Tags".
<!-- Image= wftool03.png -->
{{< imagedisplay src="wftool03.png" >}}

Then, under "Clone or download" on the right side, click "Download ZIP".
<!-- Image= wftool04.png -->
{{< imagedisplay src="wftool04.png" >}}

Upload the .zip file that you downloaded from "Import" in the Dynamics 365 solution.
<!-- Image= wftool06.png -->
{{< imagedisplay src="wftool06.png" >}}

If the file is correct, the screen will look like the following, and click "Import".
<!-- Image= wftool07.png -->
{{< imagedisplay src="wftool07.png" >}}

After successful completion, you should see Dynamics 365 Workflow Tools in the solution list.
<!-- Image= wftool08.png -->
{{< imagedisplay src="wftool08.png" >}}

The solution has now been imported.

## Using Workflow Tools
Now, let's create a workflow and try to use the Dynamics 365 Workflow Tools. Go to "Settings", "Process" and create a new workflow. When you open "Add Step", you will see that Workflow Tools has been imported and is ready to be used as shown below.
<!-- Image= wftool09.png -->
{{< imagedisplay src="wftool09.png" >}}

Now let's create the following workflow.

### Setting and unsetting record sharing
I remember how happy I was when I found out that I could use Dynamics 365 Workflow Tools for this purpose.

**Share settings**

First, go to "Add Step" and set the condition that the department of the owning user is "Sales Department", and then add "Share Record With Team" in "msdyncrm Workflow Tools". Now you can set up to share the record with a team.
<!-- Image= wftool10.png -->
{{< imagedisplay src="wftool10.png" >}}

Click on "Property Settings".
<!-- Image= wftool11.png -->
{{< imagedisplay src="wftool11.png" >}}

The "Sharing Record URL" is the target record, which is set to "Record URL (dynamic). The "Sharing Record URL" is the target record. In "Team", select the team you want to share with, and configure the necessary sharing settings in Permission. When you are done, save and close the settings.
<!-- Image= wftool12.png -->
{{< imagedisplay src="wftool12.png" >}}

**Unsharing**

If you want to unshare, use "Unshare Record With Team". (For users, use "Unshare Record With User.")
<!-- Image= wftool13.png -->
{{< imagedisplay src="wftool13.png" >}}

For unsharing, set only "Sharing Record URL" and "Team". This will allow you to unshare from the target record.
<!-- Image= wftool05.png -->
{{< imagedisplay src="wftool05.png" >}}

Since setting and unsharing is one team or one user per step, if you want to unsharpen all the teams shared in a record and then set the sharing, you need to define steps for the number of teams you want to unsharpen.

In this case, you can create a separate workflow for unsharing and call it as a child workflow.

### Get the record ID
We also had a hard time getting the ID of the record. we could get the ID and store it in the field by exporting the data to Azure SQL using Javascript or Data Export Service, but we could not automatically set the ID to the field when creating the record. I could get the IDs and store them in the fields by exporting the data on Azure SQL using Javascript or Data Export Service.

In 1.0.54.1, you can use "Get Record ID" to get the ID of a record, which was not available in older versions of Dynamics 365 Workflow Tools.
<!-- Image= wftool14.png -->
{{< imagedisplay src="wftool14.png" >}}

Click "Set Properties" and set "Record URL" to "Record URL (Dynamic)".
<!-- Image= wftool15.png -->
{{< imagedisplay src="wftool15.png" >}}

If you want to use "Get Record ID" to get the ID from the record's URL and set it to a different field, add "Update Record" to a later step. Expand "Search" in the right panel, and you will see the step name of "Get Record ID" in "Local Values".
<!-- Image= wftool16.png -->
{{< imagedisplay src="wftool16.png" >}}

Click "Add" as "Record ID" and then "OK" to set the field.
<!-- Image= wftool17.png -->
{{< imagedisplay src="wftool17.png" >}}

Now we can get the ID of the record as a field and the ID of the record as a workflow. When we run the workflow, the ID is set as text, as shown in the figure below.
<!-- Image= wftool18.png -->
{{< imagedisplay src="wftool18.png" >}}

I think it would be good to create and use it as a workflow that works when a record is created.

### Four operations on numeric fields
Add a "Numeric Functions" step to calculate the decimal fields A and B.
<!-- Image= wftool19.png -->
{{< imagedisplay src="wftool19.png" >}}

Click on "Property Settings" to set the "Number 1" and "Number 2" numeric fields as shown below. In this example, we set the stock price and the number of shares outstanding to calculate the market capitalization.
<!-- Image= wftool20.png -->
{{< imagedisplay src="wftool20.png" >}}

As before, we will multiply "Number 1" and "Number 2" and enter the result in the field "Market Capitalization", so we will add "Update Record" to the step. If you expand "Search" in the right panel, you will see the step name "Set Stock Price and Number of Outstanding Shares" in "Local Values".
<!-- Image= wftool21.png -->
{{< imagedisplay src="wftool21.png" >}}

Select "Multiply" when you have a choice of four arithmetic operations.
<!-- Image= wftool22.png -->
{{< imagedisplay src="wftool22.png" >}}

Add it to the "Market capitalization" field.
<!-- Image= wftool23.png -->
{{< imagedisplay src="wftool23.png" >}}

This is OK. After activating and running the workflow, the "Market Capitalization" has been calculated as shown below.
<!-- Image= wftool24.png -->
{{< imagedisplay src="wftool24.png" >}}

## Other features.
We have introduced only some of the features of Dynamics 365 Workflow Tools. There are quite a few other features available, so please try them out when you have time.

That's it for this time.     
&nbsp;