---
title:  "Update the Project Service working template"
draft: false
weight: 9
datetitle: "2017.08.23 | "
showinhome: true
showinaccordian: true
rightMenu: "artical"
indexImg: "artical9.jpg"
description: "This section provides instructions on how to update a work template in Dynamics 365 for Project Service Automation."
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
{{< detailTopImage >}}
{{< authorImage src="authorimage.jpg" name="Takafumi Noguchi" linkdin="https://www.linkedin.com/in/tnoguchi1123531" >}}
<!-- Intro  -->
This section provides instructions on how to update a work template in Dynamics 365 for Project Service Automation.In the previous section, "[Planning a Project with Project Service](https://www.andaze.com/ja/dynamics365/managing-projects-in-dynamics-365/plan-project-schedule-resource/)", we showed you how to create a work template, but this is the procedure to follow if you want to change the holidays, operating hours, etc. of a work template that has already been set up.

## How to update the working template
After setting up the work templates you have already created for your resources and projects, you may need to update them by adding holidays or changing the operating hours due to various factors.

For example, in 2019, GW is now a 10-day holiday. In order to handle such a change, it would be very time-consuming to create a new work template and apply it to all resources and projects. Moreover, it would not be good for data management because you would have to create a new work template for each change.

One solution to this problem is to update the "Template Resources" in the working template.
<!-- Image= tips01.jpg -->
{{< imagedisplay src="tips01.jpg" >}}

First, we will change the resource side. Select one resource other than the one that is currently the resource for the working template. In this case, we selected "Test Taro".
<!-- Image= tips02.jpg -->
{{< imagedisplay src="tips02.jpg" >}}

Select "Work Hours" from the top menu. Add the one day of vacation you need.
*For detailed instructions, please refer to [Setting Holidays](https://www.andaze.com/ja/dynamics365/managing-projects-in-dynamics-365/plan-project-schedule-resource/#i-3).
<!-- Image= tips03.jpg -->
{{< imagedisplay src="tips03.jpg" >}}

Next, open the work template. Then switch the "Template Resources" to the resource you updated the working time for above and save it.
<!-- Image= tips04.png -->
{{< imagedisplay src="tips04.png" >}}

This would be quite excellent if it automatically updated the changes to the resource, but it doesn't seem to have that feature yet, so I'll do it manually here. Select Other Resources and click "Calendar Settings".
<!-- Image= tips05.png -->
{{< imagedisplay src="tips05.png" >}}

Then select the work template that you just updated and "Apply" it, and the work time will be updated.
<!-- Image= tips06.png -->
{{< imagedisplay src="tips06.png" >}}

Now, other resources should also reflect the updated work time.
<!-- Image= tips07.jpg -->
{{< imagedisplay src="tips07.jpg" >}}

For projects that will last more than a year, this method will save you a lot of time and effort.

That's all for this time.     
&nbsp;