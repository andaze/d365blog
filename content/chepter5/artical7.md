---
title:  "create-new-entity"
date:   2020-08-05T15:53:27+06:00
draft: false
datetitle: "2017.08.23 | Managing Dynamics 365 /"
pageHeading: "Managing Dynamics 365 Entities"
image: "image/artical7/artical7.jpg"
Author: "Takafumi Noguchi"
authorimage: "images/authorimage.jpg"
linkdin: ""
---
<!-- Intro  -->
Learn how to manage Dynamics 365 entities, including creating, editing, and deleting them.

<!-- Table Of content -->
* About Entities
  * Entity components
* Creating Entities
* Editing Entities
  * Update icons
  * Make it customizable?
* About Deleting Entities

## About Entities
When you set up Dynamics 365, you are provided with basic entities such as customer company, customer representative, sales case, and activities. Each entity manages company information, representative information, business meetings, and activities of business meetings (phone calls, emails, appointments, tasks, etc.).

It also allows you to create custom entities for your organization and associate them with default entities for flexible management of your business data.

### Entity components
An entity contains the following components
<!-- Image= entity01.png -->

| form      | A user interface that allows users to view and edit business data. It can also be coded using Javascript.       |
| view   | This function is used to display a list of business data. You can set which data will be displayed in the list using the items (fields) created in the entity as columns, and what kind of filters will be applied.        |
| graph      | You can use entity data to create pie charts, bar charts, sales funnels, and more.       |
| field   | A nesting that stores business data. Some developers call it an Attribute.        |
| key      | You can create an identifier called an alternate key. This is necessary, for example, when integrating with an external data store.       |
| association   | Configures the relationships between entities and other entities.        |
| Message   | This is the message used by the entity. It is already prepared by the system and can be edited.        |
| business rules   | Business rules. You can also create them in the form.        |
| hierarchical setting   | This is a hierarchy setting within the same entity. For a client company, if you set the parent company, the hierarchy view will be displayed, but you can change the information of the company displayed within that view. By default, the "Hierarchy Tile Form" is set.        |
| dashboard   | The dashboard for each entity.        |


Reference Information
  * Defining alternative keys for entities
  * Editing System Entity Messages
  * View business partner associations in a hierarchical view

Example of a hierarchical view (client company)
<!-- Image= entity02.png -->

## Creating Entities
Creating custom entities in Dynamics 365 is done under "Customize System".
*Please design and verify your entities before creating them. As described in the deletion procedure below, deleting a created entity may affect the instance and requires careful handling. Please be careful not to create entities carelessly.
 
Notes on creating entities can be found on the official page.

<!-- Quate Box -->
* If you are using Safari as your browser, you may receive a timeout error when trying to save or publish a new user-defined entity. If you see this error, it is recommended that you create the entity using a different browser.
* To use Dynamics 365 for Customer Engagement for Customer Service embedded support information lookup on an entity name, the maximum entity name length, including the publisher prefix, must not exceed 24 characters.

Quoting: Creating an entity

Expand "Components" and click the "New" button under "Entities".
<!-- Image= entity03.png -->

Enter the required fields for "Display Name," "Multiple Names," and "Name. Colors and descriptions are optional.
<!-- Image= entity04.png -->

Leave the "Organization type" as "Users and Teams".
<!-- Image= entity05.png -->

*There is also an "organization" form of "organization form. This is an entity that is owned by the organization, so it does not have the concept of being owned by users or teams. This is the type of entity that cannot be assigned or shared, and is the "organizational unit" used in Project Service Automation.

This concept can be understood by reading about entity ownership.

*If you check the "Define as activity entity" checkbox, an activity entity will be created. Activity entities are entities under the ActivityPointer, such as appointments, tasks, and emails.

The "Area where this entity will be displayed" field indicates whether or not the entity will be displayed in the sitemap. If you check this box when you create the site, the entity will be displayed on the sitemap after it is created.

Check the "Sales" box.
<!-- Image= entity06.png -->

After "Process", leave it as it is without any changes. Note that once you have checked the boxes marked with a + sign, you cannot uncheck them.
<!-- Image= entity07.png -->

Open the "Primary Fields" tab. By default, the field "Name" (new_name) is the primary field of the record, and it will be created as a required field with a text type.
<!-- Image= entity08.png -->

Basically, you don't need to change this part, but if you want to manage them as IDs instead of names, for example, or if you don't want them to be required by development requirements, change this part. You cannot change the data type.
<!-- Image= entity09.png -->

We have saved and created the entity. At this point, we will not publish it yet.

## Editing Entities
Edit the entity.

### Update icons
After saving, click the "Update Icon" button that appears in the menu.
<!-- Image= entity10.png -->

The size of the icon is specified, so select an image that matches the size. You can also change the icons used for the web interface or the unified interface (16x16 pixels) respectively.
<!-- Image= entity11.png -->

The files that can be referenced are from "Web Resources", so you need to upload the images to Web Resources beforehand.
<!-- Image= entity12.png -->

### Make it customizable?
Clicking on "Administrative Properties" will allow you to set whether the entity should be customizable or not. Basically, you can leave it as it is. If you don't want to allow any customization after the development is completed, you can change this setting.
<!-- Image= entity13.png -->

No other changes will be made here, save and publish. If you check the sitemap, you will see that the entities have been added as shown below.
<!-- Image= entity14.png -->


## About Deleting Entities
If you check the official page, you will find information about deleting entities.

<!-- Quate Box -->
Deleting a user-defined entity will delete the database tables that store the data for that entity, and all data contained in those tables will be lost. Related records with higher/lower level associations with user-defined entities will also be deleted. For more information on supersubordinate associations, please refer to Creating and Editing Entity Relationships.

Before you can delete a user-defined entity, you need to remove any dependencies that exist on other solution components. For example, if a search field for another entity is on a form that uses this user-defined entity, before you can delete the user-defined entity, you need to remove the search field from that form. 


Quoted from: Deleting User-Defined Entities

If you read the above, it states that custom entities should be deleted after removing their dependencies. Dependencies can be found in the "Show Dependencies" section of the entity.
<!-- Image= entity15.png -->

Even right after creation, there are some dependencies with "Associations" and "Sitemap" that cannot be deleted.
<!-- Image= entity16.png -->

Personally, I think it's best to avoid deleting entities as much as possible. In the past, right after I deleted an activity entity that was associated with a major entity such as a client company, I lost access to the client company's data and had to restore it from a backup.

If it is a development environment, or even if it is a production environment, it is quite risky. If you must do this, please do so at your own risk, with backups and sufficient verification. Please create entities after careful consideration so that you do not have to delete them.

So much for creating and editing entities in a nutshell.