---
title:  "Project Service resource allocation and shipping units"
draft: false
weight: 6
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
{{< detailTopImage src="artical6.jpg" >}}
{{< authorImage src="authorimage.jpg" name="Takafumi Noguchi" linkdin="https://www.linkedin.com/in/tnoguchi1123531" >}}
<!-- Intro  -->
When you create a project in Dynamics 365 for Project Service Automation and assign team members, the calculation of the assigned time for the assigned members is a bit complicated, so I will show you how it works.

## Resource "allocation method".
When you assign resources as a team member of a project, you have a choice in the field called "Assignment Method".
<!-- Image= psa-assign01.png -->
{{< imagedisplay src="psa-assign01.png" >}}

If you check the official page, you will see that it means the following.

<!-- Quate box -->
* **All Capacity** reserves the full capacity of the resource for the specified start and end dates.
* **The capacity percentage** reserves resources as a percentage of the resource capacity for the specified start and end dates.
* **By Time - Equal distribution** reserves resources for a specified number of hours, equally distributed per day from a specified start date to an end date.
* **By Time - Advance** reserves the resource for a specified number of hours, with the hours advanced per day from the specified start date to the end date.
* **None** will add resources to the team, but will not create reservations to absorb this capacity.


Quote: [How do I assign resources to a task?](https://docs.microsoft.com/ja-jp/dynamics365/project-operations/psa/FAQ-assign-resources-to-tasks)

The above explanation is a little difficult to understand, so I tried to represent it with a diagram.
<!-- Image= psa-assign02.png -->
{{< imagedisplay src="psa-assign02.png" >}}

The above figure shows the resources reserved for two days (8 hours x 2 = 16 hours) on 02/07/2019 - 02/08/2019, using the respective allocation methods. This 8-hour period is set in the [work template]().

This 16-hour period affects the "total capacity" and the "percentage of capacity".
  * In the case of "full capacity," you would be booking 100% of the time, so **8 hours over two days**, each for a single project.
  * In the case of "Percentage of Capacity", set the percentage, in this case 50%, so **4 hours are reserved over 2 days**.

In the above figure, the period is set to 12 hours. In the figure above, the period is set to 12 hours.
  * In the case of "By Time - Equal Distribution", 12 hours will be distributed evenly over two days, so **12 hours / 2 days = 6 hours**.
  * In the case of "By Time - Advance", **8 hours** are assigned to the previous day, **2/7**, and the remaining **4 hours are assigned to 2/8**.

As you can see, the time reserved for a resource differs depending on the setting of the allocation method, so please use it well.

## About WBS shipping units
Once you have reserved a certain amount of time as a member of a project as described above, you can assign that time to a task in the WBS. At that time, there is an item called "Shipping Unit" as shown in the figure below.
<!-- Image= psa-assign03.png -->
{{< imagedisplay src="psa-assign03.png" >}}

This "shipping unit" is linked to the "man-hour" and "period" of the WBS. For example, let's assume that we have a development task with a "Man-hour" of 40 hours, a "Duration" of 5 days, and a "Shipping Unit" of 100%, as shown below.
<!-- Image= psa-assign04.png -->
{{< imagedisplay src="psa-assign04.png" >}}

If you want to assign two programmers from different companies to this development task, you can use the "Add" button to add two programmers with a "Shipping Unit" of 100%, and the "Man-hours" will be assigned every 50%.
<!-- Image= psa-assign05.png -->
{{< imagedisplay src="psa-assign05.png" >}}

What if the workload of the two programmers is 80:20? Change the "Shipping Unit" percentage.
<!-- Image= psa-assign06.png -->
{{< imagedisplay src="psa-assign06.png" >}}

If multiple resources are assigned to a task that is allocated in this way, you can adjust the allocation time for each resource in the "shipping unit".

### For shipping units of resources that are only 50% allocated
The basic idea is to allocate 100% of resources to a single project, but when you are concurrently working on multiple projects like a PM, you need to distribute the resource allocation rate. For example, let's say you are a PM as shown in the figure below, and you allocate 50% of the resources to the tasks in the WBS.
<!-- Image= psa-assign07.png -->
{{< imagedisplay src="psa-assign07.png" >}}

The "man-hours" for the "Fit & Gap" task in the WBS is 40 hours, and if we assign "Shipping Units" at 100%, 40 hours should originally be allocated.
<!-- Image= psa-assign08.png -->
{{< imagedisplay src="psa-assign08.png" >}}

But here's the nice thing about Dynamics 365 for Project Service Automation: when you check the team for the project, the "Allocated Time" is automatically calculated as 20 hours (40 hours x 50%).
<!-- Image= psa-assign09.png -->
{{< imagedisplay src="psa-assign09.png" >}}

You can assign tasks without worrying about the percentage of resources participating in the project. I personally think this is a well-designed feature.

The behavior is a bit confusing regarding resource allocation and shipping units for project members, so I hope this will be helpful. That's all for this time.     
&nbsp;