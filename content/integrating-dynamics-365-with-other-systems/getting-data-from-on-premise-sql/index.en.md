---
title:  "Retrieve data from on-premises SQL Server"
draft: false
weight: 4
datetitle: "2017.08.23 | "
image: "artical4.jpg"
Author: "Takafumi Noguchi"
authorimage: "authorimage.jpg"
showinhome: true
showinaccordian: false
rightMenu: "artical"
linkdin: ""
---
<!-- Intro  -->
Dynamics 365 can be integrated with PowerApps, Flow, and Power BI, called Power Platform, to further enhance its value. If you have a Dynamics 365 Customer Engagement Plan license, you should definitely take advantage of this application.

Currently, Dynamics 365 uses the Common Data Service to manage data, so data stored in Dynamics 365 can be seamlessly passed to PowerApps, Flow, and Power BI, which also use the Common Data Service.
<!-- Image= cds01.jpg -->
{{< imagedisplay src="cds01.jpg" >}}


Reference: [What is the Common Data Service (Microsoft)](https://docs.microsoft.com/ja-jp/powerapps/maker/data-platform/data-platform-intro)

<!-- Quate Box -->
**Data integration into Common Data Service**
Building an application typically involves data from multiple sources, which may be done at the application level. Consolidating this data into a common store can simplify the application building experience and may allow for a single set of logic to maintain and manipulate the data. Common Data Service integrates data from multiple sources into a single store that can be used in PowerApps, Flow and Power BI along with data already available from Dynamics 365 applications.

Reference: [What is the Common Data Service (Microsoft)](https://docs.microsoft.com/ja-jp/powerapps/maker/data-platform/data-platform-intro)

I will show you the steps to use this Common Data Service (CDS) to retrieve data from on-premises SQL Server and store it in a new entity in Dynamics 365. For more information on what CDS is, please refer to the technical information above.


## advance preparation
There are some preparations to be made before reflecting SQL Server data into Dynamics 365.

### Build an on-premises SQL Server
I built an on-premises SQL Server using an Azure VM.

The procedure is as follows
  * Log in to the Azure portal with a [free account](https://azure.microsoft.com/ja-jp/free/search/?&OCID=AID719813_SEM_sFJ0b07m&dclid=CL-x6bax3uICFQ_ZvQodph0BJA) and build a single VM (Windows 10) environment.
  * Install [SQL Server 2017 on-premises](https://www.microsoft.com/ja-jp/sql-server/sql-server-downloads) with remote desktop access 
  * Install and connect [SQL Server Management Studio (SSMS)](https://docs.microsoft.com/ja-jp/sql/ssms/download-sql-server-management-studio-ssms?view=sql-server-2017)
  * Download the [sample data](https://github.com/Microsoft/sql-server-samples/releases) and restore it from SSMS.
    *For the procedure, refer to "[Using the Sample DB with SQL Server](https://www.nuits.jp/entry/sqlserver-sample-db-install)".

I have done this.**All can be verified for free**.
*I should have installed SQL Server on my own client PC, but due to various adult circumstances, I couldn't do it.
We responded by building a VM in Azure. On-premise? I'm putting aside once and for all the slight question of "what's the point?

Store the table "SalesPerson" from the sample data "AdventureWorks2017" into a new entity in CDS.

### Set up a free version of Dynamics 365 and PowerApps
If you do not have both environments ready, please start using the free version.
Here's how.
  * Set up the [free version of Dynamics 365 for Sales](https://trials.dynamics.com/)
  * Set up the[ free version of PowerApps](https://powerapps.microsoft.com/ja-jp/#) with the onmicrosoft.com account you created in step 1 above.

I prepared in the following order. I will skip the steps.

## Installing the On-Premises Data Gateway
Now that we are ready, let's get started. First, install the **On-Premises Data Gateway**on your on-premises SQL Server. By installing this on-premises data gateway, you will be able to easily exchange data between on-premises and cloud.

The On-Premise Data Gateway can be [downloaded from here](https://powerapps.microsoft.com/ja-jp/downloads/).
<!-- Image= cds02.jpg -->
{{< imagedisplay src="cds02.jpg" >}}


### Prerequisites for on-premises data gateways
There are some things to keep in mind when installing the On-Premise Data Gateway in an on-premise environment.

<!-- Quate Box -->
**Minimum:**
  * .NET 4.5 Framework
  * 64-bit version of Windows 7 or Windows Server 2008 R2 (or later)      


**Recommended:**
  * 8-core CPU
  * 8 GB memory
  * 64-bit version of Windows 2012 R2 (or later)       


**Related considerations:** Gateways cannot be installed on domain controllers.
Do not install the Gateway on a computer (such as a laptop) that may be powered off, in sleep mode, or not connected to the Internet. The Gateway will not be able to operate under these conditions. In addition, the Gateway's performance may be degraded over a wireless network.

Reference: [About On-Premise Data Gateways for Canvas Apps](https://docs.microsoft.com/ja-jp/powerapps/maker/canvas-apps/gateway-reference)

Once downloaded, start the installation. Please refer to the technical information above for the installation procedure.

In this example, we configured the name of the data gateway as shown in the figure below.
<!-- Image= cds03.png -->
{{< imagedisplay src="cds03.png" >}}


After successfully completing the process, you should now see the following image, which shows that PowerApps is ready.
<!-- Image= cds04.png -->
{{< imagedisplay src="cds04.png" >}}


When I opened the "Gateways" section of PowerApps, I could see the data gateway I created.
<!-- Image= cds05.png -->
{{< imagedisplay src="cds05.png" >}}


## Retrieve data from on-premises SQL Server
Now that we have completed the configuration of the on-premises data gateway on the on-premises SQL Server, we will retrieve the specific database on the PowerApps side and store it in an entity.

### Connect to SQL Server
Go to the PowerApps screen and switch the Environment from the upper right corner. 
<!-- Image= cds06.jpg -->
{{< imagedisplay src="cds06.jpg" >}}


Expand "Data" in the left panel and click "Data Integration". Click "Create Data Integration Project".
<!-- Image= cds07.png -->
{{< imagedisplay src="cds07.png" >}}

Select "SQL Server Database" as the data source.
<!-- Image= cds08.png -->
{{< imagedisplay src="cds08.png" >}}


Enter the SQL Server server name and the database name you want to retrieve in the connection settings, select the data gateway you just created as the on-premises data gateway, and enter the credentials as Windows Authentication. Then click "Next".
<!-- Image= cds09.png -->
{{< imagedisplay src="cds09.png" >}}


### Select the data column to retrieve.
Select a table for the database. In this case, select "SalesPerson" and click "Next".
<!-- Image= cds10.png -->
{{< imagedisplay src="cds10.png" >}}

This will take you to the edit screen of the query. Under "Column Management", click "Select Columns" to get only the columns you need.
<!-- Image= cds11.png -->
{{< imagedisplay src="cds11.png" >}}

After making your selection, click "Next.
<!-- Image= cds12.png -->
{{< imagedisplay src="cds12.png" >}}


### Load into a new entity
Load the information from the table into a new entity. Check the "Load into new entity" checkbox in the loading settings, and set the entity name and display name.
<!-- Image= cds13.png -->
{{< imagedisplay src="cds13.png" >}}


Set the key field in Field Mapping. Here we have selected a unique ID field called BusinessEntityID.
<!-- Image= cds14.png -->
{{< imagedisplay src="cds14.png" >}}

When I tried to set the LastName in the Primary Name field, I got an error. It says that multi-line text cannot be set, so I changed the field type for LastName to "Text".
<!-- Image= cds15.png -->
{{< imagedisplay src="cds15.png" >}}


I changed the Primary Name field to LastName and the other field types to "Text" and clicked "Next".

*If you prefer multi-line text, you can leave it as is.
<!-- Image= cds16.png -->
{{< imagedisplay src="cds16.png" >}}


Finally, update the settings. In this case, we set "Update manually". If you want to update automatically, set the update interval and start date.
<!-- Image= cds17.png -->
{{< imagedisplay src="cds17.png" >}}


Click "Create". When the loading status becomes "Completed", it is OK.
<!-- Image= cds18.png -->
{{< imagedisplay src="cds18.png" >}}


A new project has been created in Data Integration.
<!-- Image= cds19.png -->
{{< imagedisplay src="cds19.png" >}}


If you look at the entities, you will see that the newly created entities are listed.
<!-- Image= cds20.png -->
{{< imagedisplay src="cds20.png" >}}

I tried to display it on the Dynamics 365 sitemap.
<!-- Image= cds21.png -->
{{< imagedisplay src="cds21.png" >}}


This completes the import of data from on-premises SQL Server to Dynamics 365. The migration from on-premise to Dynamics 365 will be smooth by using CDS.

That's it for this time.    
&nbsp;