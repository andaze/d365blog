---
title:  "Creating a Dynamics 365 Process"
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
Dynamics 365 has a feature called Processes that allows you to model your business methods and automate specific processes. There are four main types of processes. (The following is taken from the technical information)

<!-- Quate Box -->
Workflow. Use this process to model and automate real-world business processes. These processes can be configured to run in the background or in real time, and can require user input as needed. Workflow processes can be started automatically based on specified criteria or manually by the user.   
Action. use this process to create new operations that are not available in a standard Microsoft Dynamics 365 installation, or to combine multiple disparate operations into a single operation. For example, in a support call center, the create, assign, and setstate operations can be combined into a new single "escalate" operation.    
Business Process Flow. Use this process to create a visualization of a business process flow. The user is guided through the various stages of the sales or customer service process. At each stage, unique steps are performed to move to the next stage. You can customize the flow of the process by adding or removing steps, changing the order of the stages, or adding new entities to the process flow.    
Dialog. Use this procedure to create an interactive, step-by-step data entry form that requires user input to start and run to completion. When you start the dialog process, a wizard-like interface appears, allowing you to make the appropriate selections or enter data as you progress through each page of the wizard.


Reference: [https://msdn.microsoft.com/ja-jp/library/gg309471.aspx](https://msdn.microsoft.com/ja-jp/library/gg309471.aspx)

In this article, we will discuss the most frequently used of these processes, the workflow.

## How to Create a Workflow
The first step is to create a workflow. Click "Process" in the "Settings" menu.
<!-- Image= workflow1.jpg -->
{{< imagedisplay src="workflow1.jpg" >}}

Click the [New] button in the upper left corner to go to the Process Creation screen. First, let's select the process name, process type, and target entities.

In our example, we'll use

Process name: Test Workflow 01    
Category: Workflow    
Entity: Business partner company    
Type: Create a new empty process (*)     
Run this workflow in the background (encouraged): ✔     

Click "OK" as
<!-- Image= workflow2.jpg -->
{{< imagedisplay src="workflow2.jpg" >}}

(*) Although it is possible to create a process from a template, you need to create a process template in advance. We will show you how to create one later.

The workflow creation screen is shown below. Let's explain each area.
<!-- Image= workflow3.jpg -->
{{< imagedisplay src="workflow3.jpg" >}}

① Select the type of process. Usually, it is "Process", but it can also be made into a template as "Process Template". Note that you cannot run the process as a normal process if you use a template.    
②  Select whether to allow the workflow to be executed on-demand (manual execution), or to run it as a child process.     
③  You can select the scope (user, department, sub-department, or entire organization) in which the workflow will be executed and the trigger (start time) for execution.     
④ You can set whether or not to automatically delete the log after the workflow is successfully completed. It is recommended that you check this option since running a workflow on a large number of records can use a lot of space. If you want to check the results for testing or other purposes, you can temporarily uncheck the box.    
⑤ This is where you create specific steps. You can create, update, delete, and assign conditions and records. Also, by importing third-party tools as solutions, you can perform a wide range of tasks such as shared settings, simple calculations such as addition and accumulation, and process execution from higher-level entities to lower-level entities. (This will be introduced in the Applications section.)

As a test, let's create a simple workflow that sets the "Classification" field of the client company to "Customer" when creating a record.

First, set the scope to "Organization-wide" and the start time to "Create record". Other than that, no other changes will be made.
<!-- Image= workflow4.jpg -->
{{< imagedisplay src="workflow4.jpg" >}}

Then add a step. Select "Update Record".
<!-- Image= workflow5.jpg -->
{{< imagedisplay src="workflow5.jpg" >}}

You will then see a field for the company you are working with. From there, select the "Classification" field, select the customer, and then save and close.
<!-- Image= workflow6.jpg -->
{{< imagedisplay src="workflow6.jpg" >}}

Now, write an appropriate description for the steps you created, click Save, and then "Activate".
<!-- Image= workflow7.jpg -->
{{< imagedisplay src="workflow7.jpg" >}}

Now a simple process has been created. Now, let's try to run it.

Let's create a new trading partner company and click save. The process will basically start working once you click "Save", so make sure you save it.
<!-- Image= workflow8.jpg -->
{{< imagedisplay src="workflow8.jpg" >}}

You will then see that the workflow you just used is working.

Click on "Process Session" in the Process Creation screen. You will see that the company you just created is now being processed. If the status is "Successful," the process is complete.
<!-- Image= workflow9.jpg -->
{{< imagedisplay src="workflow9.jpg" >}}

Workflow is very deep, and if you know how to use it, you can perform almost any process.

This is the essence of the "codeless customization" that Dynamics 365 stands for, so let's deepen our understanding of it.

I will continue to mention workflows in a patterned way, so stay tuned.