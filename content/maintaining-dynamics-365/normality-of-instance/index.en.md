---
title:  "Dynamics 365 Instance NORMALITY"
draft: false
weight: 1
datetitle: "2017.08.23 | "
showinhome: true
showinaccordian: false
rightMenu: "artical"
indexImg: "artical1.jpg"
description: "We have been managing instances of Dynamics 365 by operating the Management Center. Now we will introduce how to manage the instances to make sure they are working properly."
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
We have been managing instances of Dynamics 365 by operating the Management Center. Now we will introduce how to manage the instances to make sure they are working properly.

## Checking Instance Integrity
To check the normality of the instance, open Service Normality. If the Normalcy column is set to "Normal Service", then the instance is normal.
<!-- Image= Integrity1.png -->
{{< imagedisplay src="Integrity1.png" >}}

### Check the storage area of the instance
You can also check the storage space to be used. The initial amount of available storage depends on the number of subscriptions you have signed up for (*1), but you can purchase additional storage if you need more. (*2)
<!-- Image= instance1.jpg -->
{{< imagedisplay src="instance1.jpg" >}}

(*1) About the initial storage area

According to the Dynamics 365 Licensing Guide, by default, 10 GB is provided, and as the number of full users (*1.1) increases, the amount of free storage available increases. (20 full users at a rate of 5 GB)

(*1.1) Full User: A user who is licensed for Dynamics 365 Plan or Application Subscription (excluding Dynamics 365 for Talent), not including Team Member.

Reference.

**Microsoft Dynamics 365 Enterprise Edition Licensing Guide**

[http://download.microsoft.com/download/5/6/0/560C4744-EF9F-4401-A620-12B5E9A520CB/Dynamics_365_Enterprise_edition_Licensing_Guide.pdf](https://download.microsoft.com/download/5/6/0/560C4744-EF9F-4401-A620-12B5E9A520CB/Dynamics_365_Enterprise_edition_Licensing_Guide.pdf)


(*2) Purchase of additional storage space

Additional storage can be purchased from the Office 365 Management Center. The steps in the following reference information are cited below.

<!-- Quate Box -->
**Adding storage to Dynamics 365 (online)**   
1 Browse to the Office 365 admin center and sign in using your Office 365 global administrator credentials.  
2 Click Billing > Purchase Services.  
3 Scroll down to the Add Subscription section and move your mouse pointer over the Dynamics 365 - Additional Database Storage tile.  
4 Purchase additional online storage  
5 Click "Buy Now" to go through the ordering process.  


Reference: **Managing Storage in Microsoft Dynamics 365 (Online)**

[https://technet.microsoft.com/ja-jp/library/jj191611.aspx](https://technet.microsoft.com/ja-jp/library/jj191611.aspx)
### What if an instance is found to be abnormal?
If the normality of an instance is "service interrupted" or "service degraded", first try to check if you can access the instance.

Then, if you have Organization Insight installed in your instance, try to check the cause of the anomaly from Organization Insight or the audit function.
<!-- Image= instance2.jpg -->
{{< imagedisplay src="instance2.jpg" >}}

*Organization Insight needs to be installed from the app store.

If the problem persists...

You will need to contact Microsoft or your contracted Microsoft partner for assistance.

In the last section, we will touch on [backup and restore of instances.](#)

All right, then!