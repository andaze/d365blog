---
title:  "Track the latest activity on your Dynamics 365 wall"
draft: false
weight: 19
datetitle: "2017.08.23 | "
showinhome: true
showinaccordian: true
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
{{< detailTopImage src="artical19.jpg" >}}
{{< authorImage src="authorimage.jpg" name="Takafumi Noguchi" linkdin="https://www.linkedin.com/in/tnoguchi1123531" >}}
<!-- Intro  -->
When I introduced the Dynamics 365 dashboard, I mentioned the wall.

In this article, I would like to post on the wall. when you open the Dynamics 365 home page, you will be taken to the default dashboard page, where the wall posts the status of each entity and allows you to track the active activities.

For example, when a new business partner company is created, when a competitor for a sales project is created, when an order is received or lost, etc. The function is designed to post actions that are defined by rules.
<!-- Image= intro.png -->
{{< imagedisplay src="intro.png" >}}


## About Wall Settings
By default, the Wall shows the latest posts in the All Records view. By default, the Wall is set to show the latest posts in the All Records view.

When you view the wall in the dashboard, the wall will look like the following, and you can check the settings by clicking on the ▼ of "All Records".
<!-- Image= wall1.png -->
{{< imagedisplay src="wall1.png" >}}

In the above diagram, all records, sales projects, and client companies are followed, and as for the content of the postings, you can filter each of the client companies, representatives, sales projects, leads, and support projects that are relevant to you.

(*Supplement) **About follow-up**     
 To follow up, for example, you can select the record of a business partner representative and click
 Click "Follow" from ... in the upper right corner to make it appear in the "Follow" section of your wall settings.
 <!-- Image= follow1.jpg -->
{{< imagedisplay src="follow1.jpg" >}}

 Checking the results, we see the following.
 <!-- Image= follow2.png -->
{{< imagedisplay src="follow2.png" >}}

 You can change which view you want to use by clicking on the gears in the content of the post. The view to use is "My XXX", since the Wall information is where you display the information you are following and related to.
 <!-- Image= wall2.png -->
{{< imagedisplay src="wall2.png" >}}

 When you open the settings, you can change whether to show or hide the views, the order in which they are shown, and so on.
 <!-- Image= wall3.png -->
{{< imagedisplay src="wall3.png" >}}

 ## Manually post to the wall
 There are two types of posting to the wall: manual posting by the user and automatic posting by the system. If you want to do it manually, you can click on "User Post", describe what you want to post, and then click on the "Post" button.
 <!-- Image= wall4.png -->
{{< imagedisplay src="wall4.png" >}}

 This is how it was posted. This is done in the dashboard, but if you want to post individually in a form, such as for a client company, you will need to add a "note" to the form.
 <!-- Image= wall5.png -->
{{< imagedisplay src="wall5.png" >}}

 ## Compose a wall post
 
 Open the form editor, and in the "Insert" tab, there is a "Memo". You can insert this into your form to use the wall. By default, it will already be inserted and renamed as "Social Pane".
 <!-- Image= wall6.png -->
{{< imagedisplay src="wall6.png" >}}

 Also, if you want to set up wall posts against a custom entity, you will need to configure the activity feed before adding it to the form.

 Click on "Configure Activity Feed" in the "Settings" menu.
 <!-- Image= wall7.png -->
{{< imagedisplay src="wall7.png" >}}

 If the status is inactive here, the post will not be reflected, so if you want to use the post on your wall, please click "Activate".
 <!-- Image= wall8.png -->
{{< imagedisplay src="wall8.png" >}}

 ## Automatically post to your wall
 Rather than posting a wall manually, I think an automatic posting feature would be much more convenient. For example, if a new activity is created in a sales case, or changes ownership, or if the wall is automatically posted immediately "at that time" when the expected sales are updated, it would be possible to track the "who, what, and when" of the update.

 In addition, check the "Activity Feed Rules" for the rules that Dynamics 365 targets for automatic updates.
<!-- Image= wall9.png -->
{{< imagedisplay src="wall9.png" >}}

As you can see, you cannot add new rules except for the ones that are created by default. As you can see, you cannot add new rules other than the ones created by default, as you can see from the absence of the +New button in the menu.
<!-- Image= wall10.png -->
{{< imagedisplay src="wall10.png" >}}

The function of posting is very useful, and if you want to take advantage of it when other fields are updated, etc., you can achieve this by using a process.

Now, hypothetically, I will tell you how to create a new process if you want to automatically post to the wall when the field "Representative Phone" of a company you do business with is updated.

First, go to the New Process screen as usual, and configure as follows. The target entity is "Client Company". (*For details on how to create a process, please refer to "[Using Dynamics 365 Processes (Workflow)](#)")
<!-- Image= wall11.png -->
{{< imagedisplay src="wall11.png" >}}

Configure the workflow as follows.

You have selected "Representative Phone" as the trigger for "Record Field Change".
<!-- Image= wall12.png -->
{{< imagedisplay src="wall12.png" >}}

Then, under "Add Step", click "Create Record".
<!-- Image= wall13.png -->
{{< imagedisplay src="wall13.png" >}}

Then, set the entity to be created to "Post". Edit the content of the post in "Property Settings".
<!-- Image= wall14.png -->
{{< imagedisplay src="wall14.png" >}}

Then, we configured the following. Save and close the settings.

*The yellow filled areas {} will contain dynamic values.

|       |  |
| ----------- | ----------- |
| text      | The representative phone for {Company Name (Company) } has been updated to {Representative Phone (Company) }.       |
| Source   | automatic submission        |
| relation   | {Company we do business with (Company we do business with )}        |
| Type   | check-in        |

<!-- Image= wall15.png -->
{{< imagedisplay src="wall15.png" >}}

Once you have saved the process, activate it.
<!-- Image= wall16.png -->
{{< imagedisplay src="wall16.png" >}}

Now, update the "Main Phone" (or "Phone" on the form) of the company you are dealing with and save it.
<!-- Image= wall17.png -->
{{< imagedisplay src="wall17.png" >}}

If you look at the "Process Session" of the process you just created, you will see that a post has been created.

 <!-- Image= wall18.png -->
{{< imagedisplay src="wall18.png" >}}

 If you refresh the form of the company you are dealing with, the wall, you will see that a post has been created.
 <!-- Image= wall19.png -->
{{< imagedisplay src="wall19.png" >}}

 In this way, it is very useful to be able to detect changes, allocations, and deletions of fields by multiplying submissions and processes.

 For example, by running the process described above at the timing when a field that may be important to a business meeting is updated, the people involved in the meeting can immediately grasp the situation and take action with a sense of speed. This will also allow the supervisor to watch the sales activities of subordinates and give advice at the right time.

 Please try to take advantage of these useful features.