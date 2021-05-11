---
title:  "use-privilege-to-settingsitemap"
date:   2020-08-05T15:53:27+06:00
draft: false
datetitle: "2017.08.23 | Managing Dynamics 365 [More] /"
pageHeading: "Adjust the sitemap in the settings"
image: "image/artical14/artical15.png"
Author: "Takafumi Noguchi"
authorimage: "images/authorimage.jpg"
intro: ""
---
<!-- Intro  -->
When you create a Dynamics 365 app, it will be created as a unified interface (mobile-driven app) due to the current integration with Power Apps. This is where the advanced settings can be opened to the general public, but I found out that the settings can be fine-tuned, so I will describe them here.

<!-- Table Of content -->
* Settings menu visible to the general public.
* Adding privileges to a subarea
* operation check

## Settings menu visible to the general public
Even ordinary users with little to no privileges can use

Click on "Advanced" from the gears at the top right of the page.
<!-- Image= settingsitemap1.png -->

The "Settings" menu will be displayed.
<!-- Image= settingsitemap2.png -->

In particular, "Security" is a place where ordinary users don't need to be able to see it, but to make it invisible, you have to adjust the permissions of users and departments in the security role, which is quite troublesome.
<!-- Image= settingsitemap3.png -->

It would be nice if I could hide the gears in the security role settings, but I checked with support and they said that such a method is not possible, so I need to update the display itself in "Settings".

## Adding privileges to a subarea
This problem can be solved with sitemap and privileges to entities.

First, open "Site Map" from the Customize client extension.
<!-- Image= settingsitemap4.png -->

Navigate to the "Settings" area of the sitemap and click on the sub-area that is currently visible to the general public. Here we will click on "Security".
<!-- Image= settingsitemap5.png -->

The properties on the right will open, open the Advanced "Privileges", search for "SettingsSiteMap" in the entities and click the + button next to it.
<!-- Image= settingsitemap6.png -->

Then SettingsSiteMap will be added to the target entity. Now, check the necessary permissions. In this case, I saved it as "All" and published it.
<!-- Image= settingsitemap7.png -->

This is a setting that means that the user must have all permissions from creation to assignment in the "SettingsSiteMap" of the security role being set up.

That's it for the sitemap settings.

## operation check
Select one security role, open the "User Defined Entities" tab, and look for SettingsSiteMap. SettingsSiteMap is either "No Selection" or "Organization-wide ". First, let's check how it works with "No Selection."
<!-- Image= settingsitemap8.png -->

Checking as a general user, "Security" no longer appears in "Settings".
<!-- Image= settingsitemap9.png -->

I went back to the security role and saved everything as "Organization-wide".
<!-- Image= settingsitemap10.png -->

If you check, you can now see everything except the security... (laughs)

It seems that there was a sub-area of "Settings" that had the same privilege settings as above.
<!-- Image= settingsitemap11.png -->

This is a feature I didn't expect to know about, so I've summarized it briefly.

That's all for now!