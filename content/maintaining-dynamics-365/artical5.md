---
title:  "use-more-of-workflow"
date:   2020-08-05T15:53:27+06:00
draft: false
datetitle: "2017.08.23 | Managing Dynamics 365 /"
pageHeading: "Basic operation of Dynamics 365 processes"
image: "image/artical5/artical5.jpg"
Author: "Takafumi Noguchi"
authorimage: "images/authorimage.jpg"
linkdin: ""
---
<!-- Intro  -->
In the previous article, "Creating a Process in Dynamics 365", we have discussed the steps to create a workflow for a process.


<!-- Table Of Content -->

* Update the record
  * Update the value of the associated record
  * Set a dynamic value to a field
  * Clear the set value.
* Assigning records
* Sending an email
* Run the child process
* Execution of Timed Workflow Using Wait

## Update the record
In the previous article, we gave you a simple way to update records, so this time we will apply it.

### Update the value of the associated record
This is done by changing the entity to be updated after adding the step of updating the record. In the following example, the step is to update the record of the client company (higher entity) from the perspective of the sales case (lower entity).

The procedure is as follows.
  * Click "Add Step" and select "Update Record".
  * In the "Update:" section, select "Prospective Customers (Client Companies).
  * Click on "Set Properties" and set the fields of the company you want to update.

<!-- Image= procedure1.jpg -->

Note that the update of related entities is an update from a lower-level entity to a higher-level entity. In other words, from a sales project, you can update the items of the client company and the person in charge, but you cannot update the sales project from the company's perspective. In other words, from a sales case, you can update the client company and contact person items, but you cannot update the sales case from the company's perspective.

*If you want to change it, you will need to use a third party solution.

### Set a dynamic value to a field
It is also possible to set a field with a dynamic value, e.g. last modified by or URL of the record. To do so, select it from the "Form Assistant" on the right side in the property settings.

The procedure is as follows.

  * Click on the "Set Properties" button and click on the field where you want to put the dynamic value.
  * In the "Search" section of the "Form Assistant", select the entities and fields for which you want to use dynamic values.
  * Click on the "Add" button, and the values will be listed in the box below, click "OK" to add dynamic values to the field. Click "OK" to add a dynamic value to the field. If the field is filled in yellow and becomes {<field name>(entity name)}, the dynamic value is set.
<!-- Image= procedure2.jpg -->

If you want to get the URL of the record, select "Record URL".
<!-- Image= procedure3.png -->

### Clear the set value.
This can be set by selecting Clear under Operators in the Form Assistant. When set, the value will be {Clear}.
<!-- Image= procedure4.jpg -->

Note that in this case the value will be NULL. If you want to set No in the Yes/No list, you need to set it as the default value. Then the value {No} will be set.
<!-- Image= procedure5.jpg -->


## Assigning records
If we add a step called "Assign Record", we can control the owner of the record in the workflow.
<!-- Image= procedure6.jpg -->

You can specify a specific user, or you can set a dynamic user such as the last modified user. To set dynamic values, go to "Property Settings" and set dynamic values in "Form Assistant".
<!-- Image= procedure7.jpg -->

## Sending an email
By selecting "Send Email" in the "Add Step" section, you can send an email to a customer entity or user. By setting the information of the customer entity or user as the sender and recipient, and setting the body as shown below, the email will be sent automatically when the workflow is executed.
<!-- Image= procedure8.jpg -->

Both fixed and dynamic values can be set for the sender and recipient. You can also insert an email template in the body.
<!-- Imahe= procedure9.jpg -->

When sending emails in Dynamics 365, the email is sent to the email address in the record of the person or user in charge, rather than specifying the email address as the sender. Therefore, the email can only be sent to customers or users registered in Dynamics 365.
<!-- Image= procedure10.jpg -->

## Run the child process
Running a child process is a feature that allows you to call and run another workflow that runs on the same entity. To use this step, you need to have a workflow created with the same entity beforehand, and you need to enable the "As child process" option.
<!-- Image= procedure11.jpg -->

Click "Run Child Workflow" in the step.
<!-- Image= procedure12.jpg -->

Then, select the child process you have prepared in advance. (It is not clear why the terms "child process" and "child workflow" are used differently.
<!-- Image= procedure13.jpg -->

In addition, it is possible to invoke the operating process itself as a child process. This will be explained later.

## Execution of Timed Workflow Using Wait
If you want to run the workflow every hour or every day, as in batch processing, you can use the "wait time" step.

This is a step that waits for the workflow to run for a specified period of time, and then executes it when the period expires. After that further step, if you call the same process with "Execute Child Workflow," the workflow will run periodically until you stop it manually.

Note that the first trigger in this procedure needs to be executed on demand (manual execution). If you are looking for a truly batch-like function that can be executed automatically, you will need a third party solution.

First, enable the "As child process" and "As on-demand process" options.
<!-- Image= procedure14.jpg -->

Add the "waiting state" in the step.
<!-- Image= procedure15.jpg -->

In the condition setting, make the following settings.

Process - Timeout - is equal to

Value: In the "Form Assistant", select "Duration" and set "Time" to "1". (Runs every hour.)
<!-- Image= procedure16.jpg -->

It is now set to time out after one hour.

So we add a further step, "Execute Child Workflow". And the calling process will call itself. If you cannot find it, try saving the process once.

<!-- Image= procedure17.jpg -->

Now we have a complete process that runs every hour. In practice, we will add various steps such as "updating records" and "sending emails" between these "waiting time" and "executing child workflows" steps. After that, you can use it by saving and "activating" it.

To run it, just select a specific record and call this process from "Run Process".
<!-- Image= procedure18.jpg -->

This process can be used for a variety of purposes, and the deeper you understand it, the more valuable it becomes.

Please try to use it as a solution to your company's problems.

By the way, you can install third-party solutions to expand your range even further, but I will touch on this somewhere else.

That's all for now.