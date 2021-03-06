---
title:  "Configure Dynamics 365 Field Security"
draft: false
weight: 4
datetitle: "2017.08.23 | "
showinhome: true
showinaccordian: false
rightMenu: "artical"
indexImg: "artical4.jpg"
description: "We have talked about security in terms of roles, departments, and teams. I think it's safe to say that this knowledge is enough to set up security in your company."
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
We have talked about security in terms of roles, departments, and teams. I think it's safe to say that this knowledge is enough to set up security in your company.

However, what if more detailed security settings are required in the process of operating the system? For example, even within the same department, there are situations where detailed security settings are required, such as hiding or prohibiting the writing of information in each field. Nowadays, it would be easy to understand the personal information of customers, such as their personal number.

In Dynamics 365, this scenario can be achieved by creating a **field security profile**. So how do we configure it?


## Enable security settings for fields
First, open the properties of the field for which you want to set the field security.

Go to "Settings" and open "Customize".
<!-- Image= customize.png -->
{{< imagedisplay src="customize.png" >}}

Click "Customize System", expand "Entities", and open the "Fields" of the entity you want to configure. Then, select the field for which you want to configure security settings, and double-click it to open the property settings.
<!-- Image= customize1.png -->
{{< imagedisplay src="customize1.png" >}}

Check the "Enable" box for "Field Security", then save and close the window. Now, in the system customization screen, click "Publish all customizations" to publish.
<!-- Image= customize2.png -->
{{< imagedisplay src="customize2.png" >}}

You are now ready to enable security for the field. At this point, the fields that you have enabled security for above will be hidden to users other than the system administrator.

## Set up a field security profile
Now, let's configure the field security settings. Click on "Security" in "Settings", and then click on "Field Security Profiles".
<!-- Image= customize3.png -->
{{< imagedisplay src="customize3.png" >}}

Now let's create a new profile by clicking on the "New" button.

The profile name should be "For Sales." Once you have clicked on "Save", click on "Field Permissions".
<!-- Image= customize4.png -->
{{< imagedisplay src="customize4.png" >}}

The field where you have just enabled security is displayed, select it and click the "Edit" button.
<!-- Image= customize5.png -->
{{< imagedisplay src="customize5.png" >}}

The screen will look like the following. In this example, we will only grant read permissions. Click "OK" to complete the settings.
<!-- Image= customize6.png -->
{{< imagedisplay src="customize6.png" >}}

Your settings are now complete. Click "Save".

## Assign field security to users
Now that we have created a field security profile, let's assign it to a user. Click on "Users".
<!-- Image= customize7.png -->
{{< imagedisplay src="customize7.png" >}}

Click "Add" to add users. After selecting the users you want to apply, click the "Add" button to add the users.
<!-- Image= customize8.png -->
{{< imagedisplay src="customize8.png" >}}

This completes the assignment to the user. The same assignment can be made to teams.
<!-- Image= customize9.png -->
{{< imagedisplay src="customize9.png" >}}


It is possible to configure security settings on a per-field basis, but if you do this for many fields and manage multiple profiles for each department, the configuration becomes very complex.

For example, if you enable security for 100 fields and create 10 more field security profiles, you will simply need to change the settings for 100 x 10 = 1,000 locations.\

Therefore, if there is a need to hide or make many fields read-only, it is administratively easier to deal with it in the form's business rules or javascript as much as possible.

Please take this into account when using field security.

That's it for this time.    
&nbsp;