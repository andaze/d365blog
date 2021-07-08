---
title:  "Customization of Dynamics 365 entities and option sets"
draft: false
weight: 10
datetitle: "2017.08.23 | "
image: "artical10.jpg"
Author: "Takafumi Noguchi"
authorimage: "authorimage.jpg"
showinhome: true
showinaccordian: true
linkdin: ""
---
<!-- Intro  -->
From the Dynamics 365 menu, click on Settings - Customize System to open the **Solution Explorer** as shown below.

Then expand Components and you will see a customizable list.
<!-- Image= customiz1.png -->
{{< imagedisplay src="customiz1.png" >}}

Let's discuss some of the typical components here.


## entity
The first one is **Entities**, where you can configure basic entity-related settings. If you expand the "Entities" component, you will see a list of default entities. (Left side of the screen below)

You can filter the entities by using the "View" button in the upper right corner of the screen.
<!-- Image= customiz2.png -->
{{< imagedisplay src="customiz2.png" >}}

However, as you can see, it is not easy to find the entity you are looking for, since quite a few entities have been created in the default stage. For this reason, Ctrl + F search will be the most convenient way.

For example, you can quickly check it by searching for "business partners.
<!-- Image= customiz3.png -->
{{< imagedisplay src="customiz3.png" >}}

Creating new entities, deleting entities, and publishing customizations can all be done from a button. You can also check the dependencies of entities.
<!-- Image= customiz4.png -->
{{< imagedisplay src="customiz4.png" >}}

If you expand further within an entity, you can customize the following about the entity

* form
* view
* graph
* field
* key
* Association (1:N, N:1, N:N)
* Message
* business rule
* hierarchical setting
* dashboard

<!-- Image= customiz5.png -->
{{< imagedisplay src="customiz5.png" >}}

I won't go into the specifics of each one here, but you can customize the page layout (form) for creating, displaying, and editing entity records, the view in which the records are displayed, associate them with records of other entities, and change the required fields and display or hide them according to certain rules (business rules).

## Option Set
An option set is a master value for a selection list that you can create and use. There are quite a few option sets available here by default, but it is useful to create a new option set and use the same option set in multiple locations.
<!-- Image= customiz6.png -->
{{< imagedisplay src="customiz6.png" >}}

The option set you create can be selected in the entity's fields. You can also create a new option set in the Create New Field screen.
<!-- Image= customiz7.png -->
{{< imagedisplay src="customiz7.png" >}}

## Client Extensions
This component is used to extend the functionality and utility of the solution, but you may not use it much unless you do some serious customization using plug-ins. However, this is where you can edit the sitemap as mentioned in the [previous article](#).
<!-- Image= customiz8.png -->
{{< imagedisplay src="customiz8.png" >}}

Double-click on "Site Map" above to open the Site Map Editor.
<!-- Image= customiz9.png -->
{{< imagedisplay src="customiz9.png" >}}

You can edit areas, groups, and sub-areas in detail using the sitemap editor. (Before, you had to export the sitemap.xml file and then edit it, which was very difficult.

For example, by clicking on an area, you can edit its detailed properties. If you want to change the icon, you can also add an image file in the Web Resources section.
<!-- Image= customiz10.png -->
{{< imagedisplay src="customiz10.png" >}}

Please note that the size of the icon is fixed, as shown in the reference citation below.

<!-- Quate Box -->
In CRM 2015 SP1 and later, the < Area > (SiteMap) icon is a white 85x71 (H x W) pixel image with 18% opacity. In the < SubArea > (SiteMap) menu, the entity icon is a 32x32 pixel image.

Quoted from: [Modifying Application Navigation with SiteMap](https://msdn.microsoft.com/ja-jp/library/gg309259.aspx)

The buttons in the upper left corner allow you to add, duplicate, and delete.
<!-- Image= customiz11.png -->
{{< imagedisplay src="customiz11.png" >}}

In the "Add" section, you can select "Area, Group, Subarea". Now, let's create one sub-area.

Select "Entity" as the type and choose an entity. If you have created a custom entity beforehand, you can also select it here.

<!-- Image= customiz12.png -->
{{< imagedisplay src="customiz12.png" >}}

Then you can enter the title and ID.
<!-- Image= customiz13.png -->
{{< imagedisplay src="customiz13.png" >}}

When you have finished editing, click the "Save" button in the upper right corner to save the file, and then click the "Publish" button to publish the newly created subarea.
<!-- Image= customiz14.png -->
{{< imagedisplay src="customiz14.png" >}}

You should now see the newly created test service in the menu.
<!-- Image= customiz15.png -->
{{< imagedisplay src="customiz15.png" >}}

As you can see, you can customize the sitemap in various ways, such as displaying custom-created entities, or setting a URL and having the user be redirected to the desired site just by clicking on this sub-area. Of course, you can also remove unnecessary entities from the menu. Please make use of it.

Now, in the [next article](#), we will discuss web resources.