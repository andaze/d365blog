---
title:  "Let's learn about the basics of Dynamics 365."
draft: false
weight: 1
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
{{< detailTopImage src="artical1.jpg" >}}
{{< authorImage src="authorimage.jpg" name="Takafumi Noguchi" linkdin="https://www.linkedin.com/in/tnoguchi1123531" >}}
<!-- Intro  -->
In the last issue, we wrote an article about accessing Dynamics 365 from the admin center.

If you are not an administrator, you can access the site from the following homepage.

https://home.dynamics.com

This will open the Dynamics 365 homepage.

In My Apps, you can see the available apps for the current user. So let's double-click "Dynamics 365" in the following screen to access it.
<!-- Image= app.png -->
{{< imagedisplay src="app.png" >}}

Then, when you log in to Dynamics 365, you will see the following screen.

In the initial setup, the dashboard will open first.
<!-- Image= dashboard.png -->
{{< imagedisplay src="dashboard.png" >}}

The first page you see when you open Dynamics 365 seems to be the top left entity in this sales category.
<!-- Image= sales.png -->
{{< imagedisplay src="sales.png" >}}

This navigation menu can be changed in the sitemap editor. (I will touch on this in another article).

You can also check the currently available applications from the menu.
<!-- Image= menu.png -->
{{< imagedisplay src="menu.png" >}}

The initial site map (the red line in the image below) will differ depending on which app you have installed or which license you have purchased, but if you have installed Sales, Customer, Field Service, etc. in Plan 1, the navigation menu should look like the one below.

This menu can be edited in the solution's sitemap editor.
<!-- Image= menu1.png -->
{{< imagedisplay src="menu1.png" >}}

When editing the sitemap
* Area
* Group
* sub-area

It is divided into three layers.
<!-- Image= menu2.png -->
{{< imagedisplay src="menu2.png" >}}

Customization, security, email and document settings in Dynamics 365 are generally accessed from the "Settings" area.
<!-- Image= settings.png -->
{{< imagedisplay src="settings.png" >}}

Most of the settings for entities, fields, web resources, sitemaps, dashboards, etc. are configured in the Customize sub-area, under System Customization.

From Customize Settings, click
<!-- Image= settings1.png -->
{{< imagedisplay src="settings1.png" >}}

Click on "Customize System...
<!-- Image= CustomizeSystem.png -->
{{< imagedisplay src="CustomizeSystem.png" >}}

You can open the default solution.
<!-- Image= solution.png -->
{{< imagedisplay src="solution.png" >}}

Let's start setting up the system a little at a time from the next time.