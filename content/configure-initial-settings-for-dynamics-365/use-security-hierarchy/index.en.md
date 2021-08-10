---
title:  "About Dynamics 365 Hierarchical Security Settings"
draft: false
weight: 5
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
{{< detailTopImage src="artical5.jpg" >}}
{{< authorImage src="authorimage.jpg" name="Takafumi Noguchi" linkdin="https://www.linkedin.com/in/tnoguchi1123531" >}}
<!-- Intro  -->
In addition to security roles that control security on a per-entity basis, field security on a per-field basis, and department and team security for managing user affiliations, Dynamics 365 has an evolving security concept called hierarchical security.

Hierarchical security settings are not enabled by default, but the steps we will show you will allow you to configure them.


## What you can do with hierarchical security
With hierarchical security, even if a user's access privileges to an entity are set to "user only" (can only access their own records), they can still view and edit the data of users below them in the hierarchy, which is a big advantage of keeping the security role settings simple and expanding the access range.

Hierarchical security allows you to control the scope of security for users at one of two main levels: the "administrator level" and the "position level".

The administrator hierarchy sets the security scope based on the user's supervisor-subordinate relationship, while the position hierarchy controls the scope based on the user's position (e.g., project manager, team leader, project member, etc.), regardless of the supervisor-subordinate relationship.

The following diagram shows a hierarchical structure with the president as the manager, the department manager, the section manager, and the section staff, and the supervisor has the authority to view and edit the data of the subordinates.
<!-- Image= hierarchisetting.png -->
{{< imagedisplay src="hierarchisetting.png" >}}


If you are talking about a position hierarchy, the following diagram shows the hierarchy of the project manager position, leaders, developers, and so on. In this case, the relationship between supervisor and subordinate is not questioned. (It may be easy to imagine a case where an external vendor is responsible for development in an outsourcing arrangement.
<!-- Image= hierarchisetting1.png -->
{{< imagedisplay src="hierarchisetting1.png" >}}


## Configure the hierarchical security settings.
Let's set up hierarchical security. Open "Security" in "Settings" and click "Layered Security".
<!-- Image= setting.png -->
{{< imagedisplay src="setting.png" >}}


### Setting up an administrative hierarchy
Check the "Enable Hierarchical Model" box to enable hierarchical security. ✔After ticking the box, select the hierarchy model. Let's start with the "Admin Hierarchy".
<!-- Image= administrative.png -->
{{< imagedisplay src="administrative.png" >}}


As for the "depth of hierarchy," as you can see in the diagram above, the first level down from the president is the sales manager or system manager, the second level down is the sales and section manager, and the third level down is the engineer. When considering the depth of this hierarchy, it is better to focus on the hierarchy that requires a certain level of security control, rather than judging the hierarchy that may hold all the authority, such as the president.

If you think about what level of hierarchy a manager or section chief should be able to see, a depth of 2 or 3 would be appropriate, because if it is too deep, the range of visibility would be too wide. In this example, let's say 2.

<!-- Image= level.png -->
{{< imagedisplay src="level.png" >}}


The "Select entities to exclude from hierarchy" option allows you to exclude entities that you do not want to fall under hierarchical security. This allows you to exclude entities that have been assigned certain privileges in a security role in some departments, if any.

We will not make any special settings this time, so just "Save and Close" to complete the security settings for the administrator level.
<!-- Image= administrative1.png -->
{{< imagedisplay src="administrative1.png" >}}



Then, configure the administrator settings for each user. Go to "Security", "Users", and open the specific user information. Set the name of the user who should be the supervisor in "Supervisor" under "Organization Information" in the user information, and save it. The hierarchy is now complete.
<!-- Image= administrative2.png -->
{{< imagedisplay src="administrative2.png" >}}


## Setting up a position hierarchy
Let's check the position hierarchy settings in the same way. Go back to the "Hierarchy Security" screen and set "Select Hierarchy Model" to "Custom Position Hierarchy".
<!-- Image= administrative3.png -->
{{< imagedisplay src="administrative3.png" >}}


At this point, you have not yet created a position, so click on "Configure". This will take you to the position screen. Click on the "+ New" button to create a new position.
<!-- Image= administrative4.png -->
{{< imagedisplay src="administrative4.png" >}}


For example, we set up the following. The Project Manager position is the top one, so we don't set a parent position, but we add a user for the position. If you want to create a development leader under this position, set the parent position to Project Manager.
<!-- Image= administrative5.png -->
{{< imagedisplay src="administrative5.png" >}}

When you have created all of them, go back to the previous hierarchy security settings, save and close them. You have now completed the configuration of the hierarchy by position.

For more detailed explanations and verification results, please refer to the following technical information and blogs.

Hierarchical security to control access

[https://docs.microsoft.com/ja-jp/dynamics365/customer-engagement/admin/hierarchy-security])(https://docs.microsoft.com/ja-jp/power-platform/admin/hierarchy-security)

Dynamics CRM 2015/Online 2015 Update Hierarchical Security : Position Hierarchy

[https://blogs.msdn.microsoft.com/crmjapan/2015/02/02/dynamics-crm-2015online-2015-3854/](https://docs.microsoft.com/en-us/archive/blogs/crmjapan/dynamics-crm-2015online-2015-3854)

That's all for now.     
&nbsp;