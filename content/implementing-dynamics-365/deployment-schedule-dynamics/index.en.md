---
title:  "Let's think about the implementation schedule and procedures for Dynamics 365"
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
Once the purpose of implementing CRM and Dynamics 365 is clarified, it will be easier to consider the next step, which is how soon to implement them.

In the process of clarifying the purpose of implementing Dynamics 365, you may have made a list of both "need to be able to" and "want to be able to" operations.

It is important to consider the implementation schedule.
* Defining requirements and requirements definition
* Business Analysis

I'm sure it will be.

These tasks are essential for all projects, regardless of whether Dynamics 365 is being implemented or not. we will define and prioritize what needs to be achieved by implementing Dynamics 365 (requirements) and what we wish we could achieve (demands).

The UML is then used to visualize how the current business is specifically operated, and the gap between the current situation and the goal is clarified by analyzing the current issues, points that need to be improved, and the As-Is and To-Be of the business and system.

Then, we decide "by when," "to what extent," and "with what functions," to clarify the overall project schedule and the resources required for realization.

In a typical project, this is the order in which the implementation schedule and procedures for Dynamics 365 will be developed.

However, depending on the project, there are some irregular cases such as the situation where only the schedule is fixed and Dynamics 365 implementation is being considered, and the implementation and requirement definition need to be done at the same time. (I've actually experienced this.)

In such a case, it will be difficult to implement Dynamics 365 in time with the normal development method, so we can consider using agile development or Kanban instead of the normal waterfall development.

See also: Agile Software Development     
[https://ja.wikipedia.org/wiki/agile software development](https://ja.wikipedia.org/wiki/アジャイルソフトウェア開発)

<!-- Quate Box -->
Agile software development is a general term for a set of lightweight development methods for rapid and adaptive software development in software engineering. In recent years, a number of agile software development methods have been devised. In recent years, a number of agile software development methods have been devised, and the number of actual cases of their adoption in software development is gradually increasing.

Kanban (Software Development)      
[https://ja.wikipedia.org/wiki/Kanban_(software development)](https://ja.wikipedia.org/wiki/かんばん_(ソフトウェア開発))

<!-- Quate Box -->
Kanban is a method for developing software products. Furthermore, Kanban is a process that emphasizes just-in-time software release without overburdening the software developers. In this approach, the tasks required for delivery to the customer are defined and the process is visualized so that the tasks are understood by the people involved in the software development project. The workers of the task then pull (pull) the work from the queue.

In fact, when we implemented Dynamics 365 in a short period of time, we used Team Foundation Server (TFS) of Visual Studio provided by Microsoft, and proceeded with development using agile development and Kanban tools.

Example of Kanban in TFS
<!-- image= tfs.png -->
{{< imagedisplay src="tfs.png" >}}

Nowadays, the free version of Visual Studio Community (*) is available, so we can manage the project with TFS, iterate at short intervals such as two weeks, and discuss the requirements with the customer based on the developed output. I think the agile methodology is a good fit for Dynamics 365 development.

(*) Visual Studio Community

[https://www.visualstudio.com/ja/vs/community/?rr=https://www.microsoft.com/ja-jp/dev/products/team-foundation-server.aspx](https://visualstudio.microsoft.com/ja/vs/community/?rr=https://www.microsoft.com/ja-jp/dev/products/team-foundation-server)

However, the most important thing is to choose the appropriate development method depending on the number of people, scale, and schedule of the development to lead the project to success. Whether to choose waterfall development or agile or DevOps development, it is important to look at the entire project and make a selection.     
&nbsp;