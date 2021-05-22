---
title:  "how-to-import-data"
date:   2020-08-05T15:53:27+06:00
draft: false
datetitle: "2017.08.23 | Initial Setup of Dynamics 365 /"
pageHeading: "Importing data into Dynamics 365"
image: "images/artical3/artical3.jpg"
Author: "Takafumi Noguchi"
authorimage: "images/authorimage.jpg"
linkdin: ""
---
<!-- Intro  -->
Once you have Dynamics 365 set up, it is time to import data. There are several ways to import data, but this article will discuss how to prepare the imported data and perform the import process.

<!-- Table Of Content -->
* Preparing for Data Import
* Points to note when importing data
* Importing data.
* Map the columns to be imported

## Preparing for Data Import
First, there are two ways to import data in Dynamics 365.

The first is to import using an Excel template for import.
The other way is to import the data in Excel Online.

If this is your first time importing data, let's start with the first one, the Excel template for importing.

In Dynamics 365, a template for import is provided for each entity, and the procedure is to download an Excel file in which all the fields created in the entity are columns, write the data to it, and import it.

Templates can be downloaded from the list of each entity, as shown below.
<!-- Image= templates.jpg -->

When you open the imported Excel, you will see all the fields of the entity starting from column D. Note that columns A through C are required by the system, so be careful not to change them.

<!-- Image= templates1.jpg -->
Each column also reflects the data type you set for the field. Therefore, you need to enter data according to the type of the field.
<!-- Image= templates2.jpg -->


## Points to note when importing data

Once you have downloaded the data template, you will probably import it by entering values, but the important thing to remember about importing is the order.

It is necessary to import while taking into account the higher-level and lower-level relationships between entities.

For example, there is an upper-subordinate relationship, such as client company - client person - sales case, and the lower entity of course refers to the upper entity. What would happen if you imported data from a sales case in this situation? Since the names of the referenced companies and persons have not been created in advance, an import error will occur.
<!-- Image= templates3.jpg -->

It is essential to always be aware of the upper and lower levels of entities and import from the upper level.


## Importing data.
Now, let's add values to the Excel template we have downloaded. In this case, we will add the following information to the template for our client company.

Company name: Import Co.

Representative phone: 03-1234-5050

Email: support@import.xyz

Stock code: 7022

Industry: Agriculture

Company type: Public company

Description: A company for importing.

If we add the above information to the template, it will look like this
<!-- Image= templates4.jpg -->

Save the template and import it immediately. From the list of client companies, click on the "Import Data" ▼ button, and then click on "Import Data".

<!-- Image= templates5.jpg -->

When the import dialog box appears, drag and drop the template file you just created. Then click "Next".
<!-- Image= templates6.jpg -->

Since you have not added or deleted any columns from the import file, you will be immediately taken to the configuration confirmation screen. As I will explain later, if you add a new column to the template or edit the column name, you will see the field mapping screen.

In this case, set "Allow duplicates" to No and "Owner of imported records" to System Administrator.
<!-- Image= templates7.jpg -->

Then the import process will start. Click "Import" in the following dialog to open the Import Editor.
<!-- Image= templates8.jpg -->

If the status is complete and successful, as shown below, then it has been imported.
<!-- Image= templates9.jpg -->

We were able to confirm that it has been created for the companies we do business with.
<!-- Image= templates14.jpg -->

## Map the columns to be imported
Let's modify the downloaded template file a bit by adding a column called "Fax" next to the fax column and inserting a value.
<!-- Image= templates10.jpg -->
Upload this file. Then you will see a dialog box that did not appear after you dragged and dropped the file earlier. Let's click "Next" here.
<!-- Image= templates11.jpg -->

Then, in the next dialog, do the mapping. The "Facsimile" that we just added does not currently map to any field.
<!-- Image= templates12.jpg -->

So, let's map it to Address 1: FAX. Now click "Next".
<!-- Image= templates13.jpg -->

Then, import as described above. The import is now complete.

This method is effective for temporary use when you want to continue using the template for import that has been processed for your company even after new fields have been added. However, it is recommended to always download the latest import file, as information such as data type is not carried over.

Now that we've talked about importing data, what should we do if the import process fails?

We'll discuss that in the next article.