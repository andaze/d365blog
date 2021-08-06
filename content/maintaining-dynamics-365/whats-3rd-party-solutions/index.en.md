---
title:  "Recommended third-party solutions"
draft: false
weight: 12
datetitle: "2017.08.23 | "
image: "artical12.jpg"
Author: "Takafumi Noguchi"
authorimage: "authorimage.jpg"
showinhome: true
showinaccordian: true
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
      "dateModified": "2015-02-05T09:20:00+08:00"
    }
---
<!-- Intro  -->
The beauty of Dynamics 365 is that there are many solutions available to assist and augment its functionality, but what solutions can further extend the capabilities of Dynamics 365?

In this article, I would like to introduce some of the solutions I have used that have been particularly effective after installation.

(*Note) Third-party solutions are not necessarily solutions that Microsoft guarantees to work. This blog is only for information sharing, so please import at your own risk with sufficient verification when importing in your own environment.


## Metadata Browser
[https://docs.microsoft.com/ja-jp/dynamics365/customer-engagement/developer/browse-your-metadata](https://docs.microsoft.com/ja-jp/dynamics365/customer-engagement/developer/browse-your-metadata)

With this solution, you can easily see the detailed information of all the entities and fields in Dynamics 365. Without the Metadata Browser, the work efficiency is obviously different, especially when searching for fields.
<!-- Image= metadata1.png -->
{{< imagedisplay src="metadata1.png" >}}

For example, as shown below, the fields of the trading partner company are listed and can be searched, and the left panel shows the data type and restrictions of the field. The left panel shows the field's data type, restrictions, etc. Clicking "Edit Attribute" will take you to the field's properties screen, which is also useful.
<!-- Image= metadata2.png -->
{{< imagedisplay src="metadata2.png" >}}

## Ribbon Workbench
[https://www.develop1.net/public/rwb/ribbonworkbench.aspx](https://www.develop1.net/public/rwb/ribbonworkbench.aspx)

The Ribbon Workbench is an indispensable solution for customizing buttons in Dynamics 365. It requires some customization knowledge, but it allows you to hide or unhide buttons, rename them, and add buttons or actions to them.

This solution would be a great addition to Dynamics 365 as many buttons are displayed in menus and there is not much flexibility to show or hide them.
<!-- Image= metadata3.png -->
{{< imagedisplay src="metadata3.png" >}}

Furthermore, Ribbpn Workbench has published an additional solution called Smart Buttons on Github.

### Smart Buttons v1.2.88.1
[https://github.com/scottdurow/RibbonWorkbench/releases](https://github.com/scottdurow/RibbonWorkbench/releases)

This feature is very useful and allows you to set a process (workflow) created in Dynamics 365 as a button and launch it on demand when clicked, or even launch Javascript or a report.
<!-- Image= metadata4.png -->
{{< imagedisplay src="metadata4.png" >}}

## Dynamics 365 Workflow Tools
[https://archive.codeplex.com/?p=msdyncrmworkflowtools](https://archive.codeplex.com/?p=msdyncrmworkflowtools)

This has already been archived in CodePlex, but it is a useful solution to extend the functionality of workflows. Normally, workflows do not allow team or user sharing settings for records. This solution makes it possible.

Also, the process would be much more convenient if it had more features like adding and adding up fields, adding and removing option set values, duplicating data, etc.! This covers a considerable range of requests for

Once the solution is imported, it will be available for additional steps.
<!-- Image= metadata5.png -->
{{< imagedisplay src="metadata5.png" >}}

## crm2011distributewf
[https://archive.codeplex.com/?p=crm2011distributewf](https://archive.codeplex.com/?p=crm2011distributewf)

This is another solution that has already been archived at CodePlex, but it is a great one that allows processes to be executed on 1:N and N:N sub-entities.

For example, let's say we have a test company that has three employees, Taro, Jiro, and Saburo. When the address of the test company changes, we want to update the field "Work Address" in the records of Taro, Jiro, and Saburo, the subordinates of the test company.

This solution, however, allows for the execution of a process from a higher-level entity to a lower-level entity, as described above, provided that there is a schema name (e.g. account_master_account) for a 1:N association or N:N related association and a lower-level process.

After importing the solution, AG Utilities will be added to the Add Step.
<!-- Image= metadata6.png -->
{{< imagedisplay src="metadata6.png" >}}

## Change Tracking Solution (Batch Process)
This solution can be installed from the app store.
<!-- Image= metadata7.png -->
{{< imagedisplay src="metadata7.png" >}}

The main function of the solution is to track the changes made by the system and administrators in Dynamics 365. This is added as a process when the Change Tracking Solution is installed on an instance.

The following three processes will allow you to use batch processing. In this process, the
1. The process can be used for batch processing.
2. By retrieving FetchXML from the advanced search results, you can run the process only on specific records, at a specified time and frequency.
3. If the batch fails, an email will be sent to the person in charge.
It has features such as

<!-- Image= metadata8.png -->
{{< imagedisplay src="metadata8.png" >}}

By the way, the [Codeplex](https://archive.codeplex.com/?p=mscrm2015asynchronousbatchprocess) information also contains detailed configuration instructions.

With these solutions, Dynamics 365 can be configured to

It is possible to achieve rich functionality in a customization-less state. Please try to take advantage of it.