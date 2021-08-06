---
title:  "Customize Dynamics 365 web resources and processes"
draft: false
weight: 11
datetitle: "2017.08.23 | "
image: "artical11.jpg"
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
In the previous article, we talked about "entities" and "option sets" rather than system customization. What other customizations can be done?

In this article, I will provide an overview of web resources, processes, dashboards, and reports.


## Web Resources
Web resources can be used to create HTML files, Javascript, CSS, XML and Silverlight applications, as well as image files such as icons for Dynamics 365. The content you create with web resources can be used in forms, sitemaps, etc. for each entity.
<!-- Image= resources1.png -->
{{< imagedisplay src="resources1.png" >}}

In fact, let's open the Create New screen.
<!-- Image= resources2.png -->
{{< imagedisplay src="resources2.png" >}}

In Dynamics 365, when you create a custom web resource or field, the name will always be prefixed with "new_". In Dynamics 365, when you create a custom web resource or field, you must prefix the name with "new_". As shown in the following screenshot, the types of content that can be registered as web resources are fixed. (*)
<!-- Image= resources3.png -->
{{< imagedisplay src="resources3.png" >}}

**(*) Type of content**    
 Web pages (HTML):         .htm, .html    
 Style sheet (CSS): .css   
 Script (JScript): .js   
 Data (XML): .xml      
 Image (PNG): .png   
 Image (JPG): .jpg   
 Image (GIF): .gif   
 Silverlight (XAP): .xap   
 Style sheets (XSL): .xsl, .xslt   
 Image (ICO): .ico    

As a limitation, there are no other contents that can be created with Web resources other than the above, and ASP.NET (.aspx) pages cannot be registered. In addition, the maximum size of files that can be uploaded is set to 5MB by default. For more details, please refer to the following reference information.

<!-- Quate Box -->
**Size limit**     

MaxUploadFileSize property determines the maximum file size that can be uploaded. This property is set in the Dynamics 365 application under System Settings, Email tab. This setting limits the size of files that can be attached to email messages, notes, and web resources. The default setting is 5 MB.      
Quotes from: [Microsoft Dynamics 365 Web Resources](https://msdn.microsoft.com/ja-jp/library/gg309473.aspx)

For example, if you want to use JavaScript registered in a web resource in a form, you can set the form properties to execute JavaScript on the entire form.
<!-- Image= resources4.png -->
{{< imagedisplay src="resources4.png" >}}

Add the JavaScript created in the Web resource to the form library in the Events tab.
<!-- Image= resources5.png -->
{{< imagedisplay src="resources5.png" >}}

Once the JavaScript has been added to the form library, configure the functions and events in the event handler.
<!-- Image= resources6.png -->
{{< imagedisplay src="resources6.png" >}}

We will be discussing this setting in another article.

## Process
Dynamics 365 processes can be used to model business methods.
<!-- Image= resources7.png -->
{{< imagedisplay src="resources7.png" >}}

The methods that can be set in the process are as follows

* Workflow: Model and automate your business processes. Processes can be configured to run in the background or in real time when a field is created, modified, or deleted.
* Actions: You can perform operations that are not standard in Dynamics 365 or combine multiple operations.
* Business Process Flow: Creates a visualization of a business process flow. A business process flow that is created for a sales project by default can be custom created for another entity.
* Dialog: Create a step-by-step data entry form that prompts for user input.

We will discuss how to set up each of these in the future.

Reference: [Process category in Dynamics 365](https://msdn.microsoft.com/ja-jp/library/gg309471.aspx)

## dashboard
The first screen that opens when you open Dynamics 365 is the Dashboard. By using dashboards, you can visualize sales data and the effects of marketing initiatives. There are several dashboards that are provided by default, and you can edit them or create new ones.
<!-- Image= resources8.png -->
{{< imagedisplay src="resources8.png" >}}

## Report
As with dashboards, you can also create reports that are used to analyze your data; Dynamics 365 allows you to leverage dashboards, reports, and Power BI for Office 365 to analyze your data.
<!-- Image= resources9.png -->
{{< imagedisplay src="resources9.png" >}}

Reference: [Dynamics 365 Reporting and Analysis](https://technet.microsoft.com/ja-jp/library/dn531183.aspx)


There are many other customizations that can be achieved in the system, but we will be discussing them in a future article.