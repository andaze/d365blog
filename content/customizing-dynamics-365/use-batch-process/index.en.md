---
title:  "Launching a Process in a Dynamics 365 Batch"
draft: false
weight: 3
datetitle: "2017.08.23 | "
image: "artical3.jpg"
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
In this case, we're using a solution from Microsoft Labs.
This section describes how to execute Dynamics 365 workflows in batch processing at a specified time.

**Important note:** If you wish to use the Change Tracking Solution in your own environment, please do so at your own risk after thorough **verification**. Please note that we cannot be held responsible for any damages caused by the contents of this website.


## Importing Solutions
By default, Dynamics 365 workflows do not allow batch processing, but by importing the "**Change Tracking Solution**" provided by Microsoft Labs, batch processing can be achieved.

### Importing the Change Tracking Solution
Go to "Settings" and open "App Store".
<!-- Image= appstr01.png -->
{{< imagedisplay src="appstr01.png" >}}

In the app search, search for Change Tracking Solution and click "Get it Now".
<!-- Image= appstr02.png -->
{{< imagedisplay src="appstr02.png" >}}


Enter the required information and click "Continue".
<!-- Image= appstr03.png -->
{{< imagedisplay src="appstr03.png" >}}

When the Marketplace page opens, select the instance you want to import.
Select the instance you want to import, check the box, and click "Agree".
<!-- Image= appstr04.png -->
{{< imagedisplay src="appstr04.png" >}}

The installation of Change Tracking will start, so please wait for a while. When the installation is complete, you are good to go.
<!-- Image= appstr05.png -->
{{< imagedisplay src="appstr05.png" >}}

## Configuring Batch Processing for Workflow
Now let's create a workflow for verification. In this section, we will describe how to run a workflow that leaves a note in the "Description" field that says "Provide details" every hour when the "Initial Communication" is "Contacted". The following example shows how to do this.

### Get Fetch XML from advanced search results
The batch process is configured to run only on the target records. Since Fetch XML is used to specify the target, we will prepare the Fetch XML in advance using advanced search results.

In this case, we will run the workflow only on records that have a value set to "Initial Communication," so the filter condition is as shown below.

Click on "Download Fetch XML" to download the Fetch XML.
<!-- Image= appstr06.png -->
{{< imagedisplay src="appstr06.png" >}}

### Creating a Workflow
Go to "Settings" and then "Process" to create a workflow.
<!-- Image= appstr07.png -->
{{< imagedisplay src="appstr07.png" >}}

Once the Change Tracking Solution has been imported, you will see "Batch Processes" displayed in the left panel of the workflow. This allows for batch processing of the workflow.
<!-- Image= appstr08.png -->
{{< imagedisplay src="appstr08.png" >}}

First, let's set up the process. We created it as an on-demand process as shown in the figure below.
*This setting is not required, as the process will automatically go into standby mode if you set the execution time of the batch process.
<!-- Image= appstr09.png -->
{{< imagedisplay src="appstr09.png" >}}

Save the file as overwrite. The next step is to set up batch processing.

### Set up a batch process
Click "Batch Processes" and then "New Batch Processes".
<!-- Image= appstr10.png -->
{{< imagedisplay src="appstr10.png" >}}

Enter an arbitrary name in "Name" and the workflow name mentioned above in "Process".

The "Activation Frequency" can be set as shown below. The minimum unit is Hourly (every hour). In this example, we will select Hourly.
<!-- Image= appstr11.png -->
{{< imagedisplay src="appstr11.png" >}}

I set the "Status Reason" to "Scheduled" and the "Hours Interval" to "1".
In the "Next Activation" field, enter the time for the next activation.
<!-- Image= appstr12.png -->
{{< imagedisplay src="appstr12.png" >}}

Target Records" can be used to filter records and perform targeted workflow processing by attaching the contents of the XML file obtained from the advanced search results. Copy and paste the value of the Fetch XML file obtained above.
<!-- Image= appstr13.png -->
{{< imagedisplay src="appstr13.png" >}}

Save and close Batch Processes. Then "Activate" the process.
<!-- Image= appstr14.png -->
{{< imagedisplay src="appstr14.png" >}}

You are now ready to go.

Let's first run the workflow we created on demand. When I open the lead, I see the following three records that I have prepared in advance. There are two records where "Initial Communication" is not yet set.
<!-- Image= appstr15.png -->
{{< imagedisplay src="appstr15.png" >}}

Select all of these to run the workflow created above on demand.
<!-- Image= appstr16.png -->
{{< imagedisplay src="appstr16.png" >}}

The "Description" section has been updated with on-demand workflow.
<!-- Image= appstr17.png -->
{{< imagedisplay src="appstr17.png" >}}

### Confirmation of batch processing execution
Click "System Jobs" under "Settings".
<!-- Image= appstr18.png -->
{{< imagedisplay src="appstr18.png" >}}

If you check, you will see that Batch Processes Scheduling is set to "Waiting for timer", which means that the system job is created at the timing you set Batch Processes. The workflow created above will be processed every hour.
<!-- Image= appstr19.png -->
{{< imagedisplay src="appstr19.png" >}}

Changed the value of "Initial Communication" for one record before the process was executed.
<!-- Image= appstr20.png -->
{{< imagedisplay src="appstr20.png" >}}

Now when the time comes, the workflow should be executed only on the two records that contain the values.

Verify that the "Status" of the system job is "Successful" and check the "Process Session". We have confirmed that the workflow is running on only the two target records.
<!-- Image= appstr21.png -->
{{< imagedisplay src="appstr21.png" >}}

When I checked the record, I found that the "Description" of the record where I had just changed the "Initial Communication" had been updated.
<!-- Image= appstr22.png -->
{{< imagedisplay src="appstr22.png" >}}

## You don't need to run it on demand
In the above example, for the sake of clarity, the workflow is executed on-demand for the record, but even if it is not executed on-demand, the "system job" will be launched and "waiting" at the timing when the Batch Processes is created.

If you want to stop the batch processing, just change the "Status Reason" to "Suspended" and save it.
<!-- Image= appstr23.png -->
{{< imagedisplay src="appstr23.png" >}}

Okay, that's it for this time.    
&nbsp;