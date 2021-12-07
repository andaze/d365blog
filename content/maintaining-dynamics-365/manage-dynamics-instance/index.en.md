---
title:  "Managing a Dynamics 365 Instance"
draft: false
weight: 9
datetitle: "2017.08.23 | "
showinhome: true
showinaccordian: true
indexImg: "artical9.jpg"
description: "Let's take a look at what you can do in the Dynamics 365 admin center."
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
Let's take a look at what you can do in the Dynamics 365 admin center.


## Managing Instances
Instances allow you to manage the currently configured instances (production and sandbox (*1)) and install solutions for the instances. In the case of Plan 1 license, a free sandbox instance is provided.

(*2)
<!-- Image= Instances1.png -->
{{< imagedisplay src="Instances1.png" >}}

(*1) What is a sandbox?
<!-- Quate Box -->
A sandbox instance is a non-production environment instance of Microsoft Dynamics 365 (online). Because it is independent of the production environment, a sandbox instance allows you to develop and test changes to your application in a low-risk, secure manner.

Reference: [https://technet.microsoft.com/ja-jp/library/dn659833.aspx#BKMK_View](https://technet.microsoft.com/ja-jp/library/dn659833.aspx#BKMK_View)


(*2) Sandbox instances provided free of charge
<!-- Quate Box -->
The December 2016 update for Microsoft Dynamics 365 (online) does not require a minimum purchase price to receive a free sandbox instance. If you purchase a subscription but do not receive a free sandbox instance, you will be provided with a full Dynamics 365 Enterprise license at the time of purchase. There is a limit of one free instance per tenant. You can also purchase additional sandbox instances. For more information, see "[Microsoft Dynamics 365 Pricing and Licensing](https://go.microsoft.com/fwlink/p/?LinkID=321102)".

Reference: [https://technet.microsoft.com/ja-jp/library/dn659833.aspx#BKMK_View](https://technet.microsoft.com/ja-jp/library/dn659833.aspx#BKMK_View  )

### How to build a development environment
What if I want to build a development environment under a running instance?

The answer is simple.

By copying all the data to the sandbox instance, we can create a copy of the current production instance. The construction method is very simple.

First, from the Dynamics 365 admin center, go to the Instances tab and click on the production instance.

Click the Copy button on the right menu to copy the current data to the sandbox.
<!-- Image= Instances2.png -->
{{< imagedisplay src="Instances2.png" >}}

Select the instance you want to copy to, and choose whether you want a complete copy or a minimal copy to run. The first time, select "Complete Copy".

(* For copies of instances larger than 100GB, you will need to request a copy from Microsoft Support Center)
<!-- Image= Instances3.png -->
{{< imagedisplay src="Instances3.png" >}}

More information about full and minimum copies of instances can be found in the technical information below.

Copy the instance to the sandbox instance

[https://docs.microsoft.com/ja-jp/dynamics365/customer-engagement/admin/copy-instance#next-steps-after-copying-an-instance](https://docs.microsoft.com/ja-jp/dynamics365/customer-engagement/admin/copy-instance#next-steps-after-copying-an-instance)

<!-- Quate Box -->
**A complete copy of the instance**    
A complete copy contains all the application data, users, and customizations of the original instance, and is suitable for
* User acceptance testing
* Testing the upgrade
* Preview in production environment (TAP/EA)
* Training

**Minimal copy of the instance**    
A minimal copy contains only the users, customizations, and schema of the original instance and is suitable for
* Iterative team development
* Partner/ISV Solutions
* proof of concept


### Instance solution management
If you want to manage the solutions installed in an instance, click the pencilmark of the solution.

When you configure the instance for the first time, you will probably select Sales, Marketing, and Services and Apps, but if you want to install apps that were not selected at the time of configuration after the instance configuration, you can do so from here.

For more information on how to do this, please refer to the section on Purchasing a Dynamics 365 License and Accessing the Management Center.
<!-- Image= Instances4.jpg -->
{{< imagedisplay src="Instances4.jpg" >}}

When you view the solution list, you can check the installation status, expiration date, version, etc. If you want to use the Dynamics 365 portal functions, etc., you need to install the solution, which can be done from this location.
<!-- Image= Instances5.jpg -->
{{< imagedisplay src="Instances5.jpg" >}}

### Put the instance into administrative mode.
The ability to make a sandbox instance under development accessible only to administrators (System Administrator and System Customizer roles) is Administrative Mode. When this feature is enabled, access by normal users is restricted, and workflows running in the background and synchronization with Exchange are stopped, allowing you to work without other interference.

For example, it is useful when you want to change the operation rules or check the operation of a single function.

Click the "Manage" button for the sandbox instance.
<!-- Image= Instances6.jpg -->
{{< imagedisplay src="Instances6.jpg" >}}

If you check the "Enable administration mode" checkbox, the system will enter administration mode.

If the "Disable background operations" checkbox is checked, all background jobs such as workflows will be disabled, and the "Disable background operations" checkbox will be disabled.

By entering a message in the "Custom message for end users" field, you can set a message to be displayed when someone other than the system administrator accesses the sandbox.
<!-- Image= Instances7.jpg -->
{{< imagedisplay src="Instances7.jpg" >}}

### Resetting and Deleting Instances
Click the Reset button to reset the instance to its initial state, or the Delete button to delete it.
<!-- Image= Instances8.jpg -->
{{< imagedisplay src="Instances8.jpg" >}}

Resetting an instance is very useful. If development in the sandbox becomes complicated and problems occur, you can reset the sandbox once and then copy the working instance to proceed with development again. The reset screen is the same as the screen during instance configuration.

*At this point, if the latest update has been released, you can select it under "Target Version".
<!-- Image= Instances9.jpg -->
{{< imagedisplay src="Instances9.jpg" >}}

As for deletion, it is used when recovering the storage space. When an instance is deleted, it will be displayed in the instance list in the Management Center as an instance to be configured.

### Manage instance updates
Instance updates can be managed from Updates. major updates to Dynamics 365 occur twice a year. If you have customizations implemented in Dynamics 365, you should be cautious about updating, but Microsoft has introduced a Customer Driven Update (CDU) mechanism on December 3, 2016 that allows customers to manage the schedule.

However, if the update is two generations old, the latest update is mandatory and the update will be scheduled automatically, so you need to plan for regular update implementation.
<!-- Image= Instances10.png -->
{{< imagedisplay src="Instances10.png" >}}

In the next article, we will discuss [instance normality](#).