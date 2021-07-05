---
title:  "use-workflow-process-loop"
date:   2020-08-05T15:53:27+06:00
draft: false
datetitle: "2017.08.23 | Managing Dynamics 365 [More] /"
pageHeading: "Countermeasures against infinite loops in workflow processes"
image: "image/artical13/artical13.jpg"
Author: "Takafumi Noguchi"
authorimage: "images/authorimage.jpg"
linkdin: ""
---
<!-- Intro  -->
The workflow process in Dynamics 365 is a useful feature that allows you to do many things without coding, from updating, creating and deleting data to assigning and sending emails. In addition to the default workflow processes, you can import third-party workflow solutions such as those found in Workflow Heroes, which allow you to create workflow processes for many of your users' needs, such as record sharing, date and decimal arithmetic, and more. You can import third-party workflow solutions such as those found in

However, even such a useful workflow process has its limitations. In particular, the one that had the greatest impact on the operation was the restriction to avoid infinite loops.

As shown in the technical information below, if a process is executed a certain number of times for a particular record, it will be detected as an infinite loop and will "fail".

<!-- Quate Box -->
Avoiding infinite loops
...The workflow you create will include logic to detect and stop infinite loops. If a workflow process is executed more than a certain number of times on a particular record in a short period of time, the process will fail with the following error The workflow job will be canceled because the workflow that started it contains an infinite loop. Please modify the workflow logic and try again. The maximum number of times is 16.

Source: Best Practices for Workflow Processes

I've had quite a bit of trouble with this limitation, and through a lot of trial and error, I've come to understand at what point it "fails", so I'll include countermeasures for it.

<!-- Table Of content -->
* When do you use a loop?
* Number of loops that can be executed.
* How can we counteract this?
  * Check the upper limit
  * Embed the Batch Process

## When do you use a loop?
First of all, when do we use the workflow process? I often use it when I want to update records of entities that have a superior-subordinate relationship in bulk from the top to the bottom, or when I want to update subsequent records after deleting a part of a record that has a back-and-forth relationship.

For example, let's say that a sales project has several activities associated with it, and you want to number these activities in order of their starting dates.
<!-- Image= loop01.jpg -->

Now, you can create a rollup field on the sales activity side and bring in the oldest (MIN) date that the activity started.
You can determine that the activity that matches that date is the oldest.

I used the Ultimate Workflow Toolkit's "Distribute Workflow" to handle the process of matching dates and assigning numbers from top to bottom.
<!-- Image= loop2.png -->

This process of updating the fields of a sales case is repeated for the number of activities, but if the number of activities hanging on a sales case is large, it can easily exceed the limit of 16 times, so the process is detected as an infinite loop and "fails".

## Number of loops that can be executed.
When we verified that the loop is repeated by updating a record in one step in one process and then calling the same process again in "Execution of Child Workflow," it actually "failed" after the 15th time.
<!-- Image= loop03.jpg -->

And the record was updated 14 times. (On the 15th update, an infinite loop was detected.)
<!-- Image= loop04.png -->

So it seems that the number is actually less than the 16 times listed in the official documentation. (Not sure why.)

Next, we verified that we could update a record more than 16 times in a single process step.

Added 4 steps to one process, so that after updating a sales case record, the same process is looped.
<!-- Image= loop05.png -->

In this case, it still "failed" after 15 attempts.
<!-- Image= loop06.png -->

However, since we are updating the record 4 times in one process, it means that the record has been updated 14 times (number of successful process executions) x 4 steps = 48 times. If we increase the number of steps in a process, we should be able to update more records.

From these verifications, we found that if you want to execute a loop until the very end of the limit, the best method is to utilize many steps in one process and loop the same process.

## How can we counteract this?
However, no matter how hard you try, you will always be stuck with the loop count limit. How can I deal with the loop count limit? After some trial and error, I found out that this method works well.
(This is just my personal idea. If you have a better idea, please comment)

### Check the upper limit
Figure out the maximum number of times the process you want to loop can be executed. In this case, it will fail after the 15th time, so I think 14 times is the maximum.

If you add a conditional statement that stops the process after 14 executions, you will never see a "failure" recorded.

### Embed the Batch Process
Using the Batch Process of the "Change Tracking Solution" mentioned in the previous article on launching processes in Dynamics 365 batches, the 15th and subsequent processes will be processed in batches with a time interval.

In the conditional statement set above, make it a step like "If it is the 14th time, execute the process to create the batch process. Set "Batch Process" as the entity to be created in "Create Record" as shown in the figure below.
<!-- Image= loop07.jpg -->

Let's open "Property Settings" and create a Batch Process as shown below. The process to be called is the process that executes the loop, and Next Activation is set to 5 minutes after the record is updated.

Since we can use Fetch XML in "Taget Records", we will target a sales proposal whose "topic (name)" is xxxxx. We want the xxxxx to be a dynamic value, so we set a yellow-filled dynamic sales proposal subject called {topic (sales proposal)} in the value field from "Search" in the right panel.
<!-- Image= loop08.png -->

Now, the looping process up to the 14th time will be executed by the first process, and the 15th and subsequent times will be processed by the same process that will be executed in a batch after 5 minutes.

The result of the batch creation is shown in the figure below. A Batch Process has been created in the process.
<!-- Image= loop09.png -->

When I looked at the content, I found that it was created as intended.
<!-- Image= loop10.png -->

It's quite a feat, but I was able to successfully execute the looping workflow process.

This article is a bit ambiguous (it says the limit is 16 times, but in fact it fails on the 15th time).
This article is a bit vague (it says 16 times limit, but actually it fails on the 15th time), but I hope you will find it useful as an idea when you really want to execute a loop in a workflow process.

That's it for this time.