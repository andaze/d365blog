---
title:  "Troubleshoot PSA Schedule Board"
draft: false
weight: 7
datetitle: "2017.08.23 | "
image: "artical7.jpg"
Author: "Takafumi Noguchi"
authorimage: "authorimage.jpg"
showinhome: true
showinaccordian: true
rightMenu: "artical"
linkdin: ""
---
<!-- Intro  -->
As I mentioned when I planned a project in Dynamics 365 for Project Service Automation (PSA), Project Service seems to behave differently depending on the interface and version differences.

It may be possible to improve this by upgrading the version, but here are the steps we took to deal with it in version 2 first.

*This will be available as of January 2019.


## Background: Moving to a unified interface
The menu that you are used to in version 8 of Dynamics 365 is called the Web Interface, but in version 9, a new interface called the **Unified Interface** has been added that is also mobile friendly.

<!-- Center -->
**Web Interface**
<!-- Image= psa-trouble01.png -->
{{< imagedisplay psa-trouble01 "290" "596" "796" >}}

**unified interface**
<!-- Image= psa-trouble02.png -->
{{< imagedisplay psa-trouble02 "290" "596" "796" >}}


*If you have updated to version 9, you may have noticed the addition of "Customer Service Hub" and "Sales Hub" apps in the app menu, which consist of a unified interface.
<!-- Image= psa-trouble03.png -->
{{< imagedisplay psa-trouble03 "290" "596" "796" >}}


According to information from the [Dynamics 365 Community](https://community.dynamics.com/crm/b/bringyourcode2life/posts/dynamics-365-app-designer-web-interface-is-going-to-be-already-deprecated), when creating a new app, up until version 9.0.2.2279, you could choose between Web and Unified Interface, but after a minor update, the transition to version 9.1.0.33, the**only option is Unified Interface**. However, after a minor update to version 9.1.0.33, the only option is the unified interface.

*You can check whether it is web or unified interface from "My Apps" in "Settings".
<!-- Image= psa-trouble04.png -->
{{< imagedisplay psa-trouble04 "290" "596" "796" >}}


This allowed us to troubleshoot the following issues in the newly created application (unified interface) for users.

## Phenomenon: The schedule board does not appear.
When you create a new application, select the entities (sub-areas) to be displayed in the Site Map Designer. The "Schedule Board" needed to keep track of resource availability is a web resource (ScheduleBoard.html), so enter a value in the "URL" field of the sub-area to save and publish it.
<!-- Image= psa-trouble05.png -->
{{< imagedisplay psa-trouble05 "290" "596" "796" >}}


However, for some reason, "Schedule Board" does not appear in the menu of the unified interface.
If you open the menu, you will see that it is not displayed. This was the same result when checked by the system administrator.
<!-- Image= psa-trouble06.png -->
{{< imagedisplay psa-trouble06 "290" "596" "796" >}}


## Countermeasure: Use schedule board in dashboard
I decided to use the **dashboard** as a countermeasure.
If it is a dashboard, you can insert web resources in the page, or you can easily add them with a sitemap.

### Create a system dashboard
First, open "Customize System" from "Customize" in "Settings", and click "New" from "Dashboard".
<!-- Image= psa-trouble07.png -->
{{< imagedisplay psa-trouble07 "290" "596" "796" >}}


Add web resources to the section, with the type of dashboard and so on being optional.
<!-- Image= psa-trouble08.png -->
{{< imagedisplay psa-trouble08 "290" "596" "796" >}}


Search for the resource ***ScheduleBoard.html** There are web resources starting with msdn, select it.
<!-- Image= psa-trouble09.png -->
{{< imagedisplay psa-trouble09 "290" "596" "796" >}}


The name and label are optional, and click OK.
<!-- Image= psa-trouble10.png -->
{{< imagedisplay psa-trouble10 "290" "596" "796" >}}


Use the "..." menu to expand the width and height as needed.
<!-- Image= psa-trouble11.png -->
{{< imagedisplay psa-trouble11 "290" "596" "796" >}}


Click "Save" to save and "Close" to finish editing the dashboard. Now you can publish your customization.
<!-- Image= psa-trouble12.png -->
{{< imagedisplay psa-trouble12 "290" "596" "796" >}}


### Add a dashboard to your sitemap
Next, let's add the dashboard we created to the menu in the sitemap editor. In the sub-area of the sitemap editor that you just opened, set the "Type" to "Dashboard" and the "Default Dashboard" to the dashboard you created, then save and publish it.
<!-- Image= psa-trouble13.png -->
{{< imagedisplay psa-trouble13 "290" "596" "796" >}}


When you open the menu of the app you created, you will see the "Schedule Board" that was not displayed earlier.
<!-- Image= psa-trouble14.png -->
{{< imagedisplay psa-trouble14 "290" "596" "796" >}}


When you click on it to view it, you should see the schedule board on the dashboard. If you do not see it, please select it from the dashboard list.
<!-- Image= psa-trouble15.png -->
{{< imagedisplay psa-trouble15 "290" "596" "796" >}}


Separately, I received an answer from Microsoft Support that the phenomenon of WBS not being displayed when using the unified interface will be resolved with the version upgrade, so I will try to verify that as soon as possible.

If the schedule board phenomenon is also improved by the upgrade, I will describe it here.     
&nbsp;