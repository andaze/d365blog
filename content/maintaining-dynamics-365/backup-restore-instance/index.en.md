---
title:  "Backup and Restore of Dynamics 365 Instances"
draft: false
weight: 2
datetitle: "2017.08.23 | "
image: "artical2.jpg"
Author: "Takafumi Noguchi"
authorimage: "authorimage.jpg"
showinhome: true
showinaccordian: false
rightMenu: "artical"
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
<!-- Intro  -->
This article is the last one about Dynamics instances. In this article, we will show you how to backup and restore an instance.

## Backing up an instance
In Dynamics 365, **backups are automatically taken on a per-instance basis.**

The frequency of acquisition is once a day, and the backup retention period is 3 days (maximum). Expired backups will be deleted automatically.
<!-- Image= backup1.png -->
{{< imagedisplay src="backup1.png" >}}

### Obtain backups manually (on-demand backups)
If you want to make a backup manually, click "New Backup" to make a backup.

As with the automatic backup, the validity period is 3 days, and the system automatically deletes the data when it expires.

Select the instance you want to take a backup of, and click "New Backup".
<!-- Image= backup2.png -->
{{< imagedisplay src="backup2.png" >}}

Enter a backup name in the label and click "Create" to acquire the backup.
<!-- Image= backup3.png -->
{{< imagedisplay src="backup3.png" >}}

A backup has been created. Check the expiration date, and if it holds more than 3 days, take another backup.
<!-- Image= backup4.png -->
{{< imagedisplay src="backup4.png" >}}

### Managing Backups
Once you have created a backup, you can "Edit", "Delete", or "Restore" it. Click "Edit" to change the backup name, and "Delete" to delete the backup.

Note that "Edit" and "Delete" are only available for on-demand backups. System-generated backups can only be "restored" as described below.
<!-- Image= backup5.png -->
{{< imagedisplay src="backup5.png" >}}

## Restoring an Instance
Restoration of the instance can be performed by "Restore" of the backup that was taken.
<!-- Image= backup6.png -->
{{< imagedisplay src="backup6.png" >}}

The source is the current backup, and in "Select destination", select the instance to which you want to restore the backup. Note that the only instance that can be selected as the restore destination is the **sandbox**.

Click "Next", and on the confirmation screen, click the "Restore" button to start the restoration.

<!-- Image= backup7.png -->
{{< imagedisplay src="backup7.png" >}}

So how do you **restore a production instance from a backup**?

### Restore a production instance from a backup
In order to restore a production instance from a backup, you can implement the following method. This method requires at least two instances, one production and one sandbox.

*When performing a restore operation, you need to choose a time that will not affect your users and do it carefully.

  * **Back up production instances and sandbox instances on demand**   
    The first step is to get a backup of the instance, both in production and in the sandbox. The method to obtain the backups is as described above for obtaining backups manually (on-demand backups).
  * **Restore the backup of the production instance obtained in 1. above to the Sambobox instance.**   
    The backup of the production instance will first be restored to the sandbox instance. If the production restore does not complete successfully, the sandbox instance will be used until it is restored.
  <!-- Image= backup8.png -->
{{< imagedisplay src="backup8.png" >}}

  Restore backups with Consulting (production) as the source instance and Dynamics Consulting (sandbox) as the destination instance.
  <!-- Image= backup9.png -->
{{< imagedisplay src="backup9.png" >}}

  * **If 2. above can be restored without any problems, switch the production instance to the sandbox instance.**   
    From "Edit" of the production instance, switch the instance type from "Production" to "Sandbox".
  <!-- Image= backup10.png -->
{{< imagedisplay src="backup10.png" >}}

  Switch the Instance Type to "Sandbox". Click "Next", and then click "Save" on the confirmation screen.
  <!-- Image= backup11.png -->
{{< imagedisplay src="backup11.png" >}}

  Now, the production instance has been switched to a sandbox instance.
  <!-- Image= backup12.png -->
{{< imagedisplay src="backup12.png" >}}

* **Restore the instance switched to the sandbox instance in 3. above with the backup of the production instance obtained in 1. above.**
  
  Now, we will restore the instance that was in production. The backup to be used will be the backup obtained in step 1 (in the example below, the Consulting backup). In this example, the Consulting instance is selected as both the source and destination of the restore.

  Click "Next", and on the confirmation screen, click the "Restore" button to start the restoration.
  <!-- Image= backup13.png -->
{{< imagedisplay src="backup13.png" >}}

  * **After the restore completes successfully, return to the production instance.**  
   Restore the instance that was switched to the sandbox above back to production. Once this is done, the restoration is complete. If the backup created in 1. above is not necessary, delete it.

### What if it fails during the restore?
If the instance restore fails, you will need to reset the instance and then restore it from the backup. Note that only sandbox instances can be reset.

Also, please note that this method does not guarantee a reliable repair.
<!-- Image= backup14.png -->
{{< imagedisplay src="backup14.png" >}}

If the instance restore fails and the "Reset" button above does not appear, try to wait for a while for it to appear. If it still does not appear, you will need to contact Microsoft to check the situation.

As you can see, restoring an instance can fail, and it is expected to take a long time to restore. Because of the risks involved, it is necessary to avoid restoring instances that are in production, or to switch to sandbox instances and allow users to use them in advance.

Please also refer to the following technical information for instance backup and restore.

**Backup and Restore Instances**

[https://docs.microsoft.com/ja-jp/dynamics365/customer-engagement/admin/backup-restore-instances](https://docs.microsoft.com/ja-jp/dynamics365/customer-engagement/admin/backup-restore-instances)

That's it for the Dynamics 365 instance.