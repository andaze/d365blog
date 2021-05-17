---
title:  "exporting-d365data-to-azuresql"
date:   2020-08-05T15:53:27+06:00
draft: false
datetitle: "2017.08.23 | Dynamics 365 Customization [More] /"
pageHeading: "Exporting Dynamics 365 data to Azure SQL"
image: "images/artical5/artical5.jpg"
Author: "Takafumi Noguchi"
authorimage: "images/authorimage.jpg"
intro: ""
---
<!-- Intro  -->
We will show you how to export Dynamics 365 data to Azure SQL Server using an add-on service called Data Export Service.

Although Dynamics 365 provides data recovery by tracking data changes through audit history and restoring instances through date/time backups, there was no convenient way to restore deleted data other than using XRM Toolbox, so the Data Export Service is very useful.

The procedure for setting up the Data Export Service is described in the official document Replicating Data in an Azure SQL Database, but the procedure for generating the Key Vault URL was not done correctly by reading the document alone, so I decided to summarize it this time by adding the contents of my research.

<!-- Table Of Content -->
* advance preparation
  * Azure SQL Database Service
  * Azure Key Vault Service
* Generating the Key Vault URL
* Setting up the Data Export Service
  * Enabling Auditing
  * Install the Data Export Service

## advance preparation
The following preparations are required to set up the Data Export Service.
  * Azure SQL Database
  * Azure Key Vault Service
  * Install SSMS (SQL Server Management Studio) locally (steps omitted here)
  
If you don't have an Azure account, you can set up the free version in advance.
*See Prerequisites for using the Data Export Service for required permissions.

### Azure SQL Database Service
Login to the Azure portal and create a SQL database.
<!-- Image= dbexport01.png -->

If you have not created a server, create a new one. If you have not created a server, create a new one.

The "Server Administrator Login" and "Password" to be set here are necessary information for Azure SQL connection, so write them down.
<!-- Image= dbexport02.png -->

Click on the "Create" button to create the SQL database. When the creation is complete, it will look like the figure below.
<!-- Image= dbexport03.png -->

Open the "Connection Strings" of the Azure SQL you created and open the "ADO.NET" tab. Copy this string.
<!-- Image- dbexport04.png -->

Paste the file into Notepad, etc. and enter the SQL server administrator account and password above in the following sections.

ID={your_username};Password={your_password};

This connection string will be required for generating the Key Vault URL, as described below.

### Azure Key Vault Service
The next step is to prepare the Azure Key Vault. Go to "Create Resources" and search for "Key Vault".
<!-- Image= dbexport05.png -->

Click "Create" in the Key Vault.
<!-- Image= dbexport06.png -->

Enter the key container name and other information to create it.
<!-- Image= dbexport07.png -->

Once created, check the "Overview".
<!-- Image= dbexport08.png -->

Described here.
  * Resource Group
  * Location
  * subscription ID
  * directory ID

is the information required for the Key Vault URL generation described later.

After creating the Key Vault, open "Secret" and click "Generate/Import".
<!-- Image= dbexport09.png -->

Now enter a name and value for the secret and save it.
<!-- Image= dbexport10.png -->

The name of this secret is also required for generating the Key Vault URL.

Reference: What is Azure Key Vault?

## Generating the Key Vault URL
You will need to generate a Key Vault URL for the Data Export Service to connect Dynamics 365 to Azure SQL Server.

You can get the URL by executing the Power Shell command in the official documentation on how to configure Azure Key Vault.

<!-- Quate Box -->
Before running the script, replace the placeholders for the following variables

$subscriptionId. The Key Vault resource group to use. If the resource group does not exist, a new group with the specified name will be created. In this example, [ContosoResourceGroup1] will be used.

$location. Specifies a resource group or location, such as [Western US].

Connection string to the Azure SQL Database. NET connection string if it appears in the [Azure] dashboard.

$organizationIdList = A comma-separated list of allowed Dynamics 365 for Customer Engagement app organizations listed by the organization ID (organizationId) that enables the data export service. To find the organization ID, in the Dynamics 365 for Customer Engagement app, navigate to Settings > Customize > Developer Resources. The organization ID can be found in the instance reference information.

$tenantId. Specifies the Azure Active Directory tenant ID that the Key Vault subscription will be.



However, it is a little difficult to understand just by reading the document, and there are some mistakes, so I 
will explain them one by one.

The following parameters are taken from the Key Vault "Overview" and Secret Name.
  * $subscriptionId is the subscription ID (incorrectly listed as resource group in the official documentation)
  * $keyvaultName is the name of the Key Vault
  * $resourceGroupName is the resource group
  * $location is the location
  * $tenantId is the directory ID
    <!-- Image= dbexport11.png -->
  * $secretName is the name of the secret created in Key Vault.
    <!-- Image= dbexport12.png -->
    This part is taken from the "connection string" of the SQL server.
  * $connectionString is the part of the "connection string" that we checked when we created the SQL server above (SQL server account and password are already set).
    <!-- Image= dbexport13.png -->
    This section is taken from Dynamics 365.
  * $organizationIdList is the ID of the Dynamics 365 instance reference to be exported.
    Access Dynamics 365, go to "Settings", "Customize", "Developer Resources", and copy "ID" in "Instance Reference Information".
     <!--Image= dbexport14.png  -->

  (Example) When each value is as follows
  * Subscription ID: 0aaaaaaa-9999-ff44-0000-xxxxxxxxTest
  * Key Vault Name: vdemovault
  * Secret name: vdemoPswd
  * Resource group name: NetworkWatcherRG
  * Location: Eastern United States
  * SQL server name: demodemo.database.windows.net
  * SQL server account: sqladmin
  * Password: P@ssword
  * ID of instance reference information: 12345678-bbbbb-test-demo-9876543210vd
  * Directory ID: xxxxxxxxx-0000-1111-2222-yyyyyyyyyyyyy

  The value of each parameter of the Power Shell command is as follows.
  * $subscriptionId = '0aaaaaaa-9999-ff44-0000-xxxxxxxxTest'
  * $keyvaultName = 'vdemovault'
  * $secretName = 'vdemoPswd'
  * $resourceGroupName = 'NetworkWatcherRG'
  * $location = 'Eastern US'
  * $connectionString = 'Server=tcp:demodemo.database.windows.net,1433;Initial Catalog=demodemo;Persist Security
   Info=False;User 
   ID=sqladmin;Password=P@ssw0rd;MultipleActiveResultSets=False;Encrypt=True;TrustServerCertificate=False;Connection 
   Timeout=30;'
  * $organizationIdList = '12345678-bbbb-test-demo-9876543210vd'
  * $tenantId = 'xxxxxxxx-0000-1111-2222-yyyyyyyyyyy'

To run Power Shell in Azure, click on the >_ in the upper right corner, which is the Power Shell command launch button. At the bottom of the screen, paste the parameters you prepared above and the rest of the commands and run it.
<!-- Image= dbexport15.png -->

In the middle of a command

#Login to Azure account, select subscription and tenant Id
Login-AzureRmAccount

In the command, go to https://microsoft.com/devicelogin and enter the code.
<!-- Image= dbexport16.png -->

On the device's login page, click "Continue" after entering the code.
<!-- Image= dbexport17.png -->

When you see the following screen, you can close this login screen. Let's go back to the Azure Power Shell screen.
<!-- Image= dbexport18.png -->

When everything is done, a URL like the one below will be generated.
<!-- Image= dbexport19.png -->

This Key Vault URL will be used when setting up the Data Export Service as described below.

## Setting up the Data Export Service
Log in to Dynamics 365 as an administrator and set up the Data Export Service.

### Enabling Auditing
You need to enable auditing for the entities you want to export.

Open "System Administration" from "Administration" in "Settings", and check "Start Auditing" in the "Auditing" tab. For the area, check only common entities and click "OK".
<!-- Image= dbexport20.png -->

Next, go to "Settings", "Customize", and click "Customize System".

Open the "Information" of the specific entity and check the "Audit" checkbox under "Data Services" and save it.
<!-- Image= dbexport21.png -->

### Install the Data Export Service
First, click on "Microsoft AppSource" under "Settings".
<!-- Image= dbexport22.png -->

Search for Data Export Service and click "Get it Now".
<!-- Image= dbexport23.png -->

Check the box, and then click Continue.
<!-- Image= dbexport24.png -->

Select the instance you want to install, check the two boxes, and click "Agree".
<!-- Image= dbexport25.png -->

Verify that the installation is complete on the instance.
<!-- Image= dbexport26.png -->

Once installed, you will see "Export Data" in "Settings", open it.
<!-- Image= dbexport27.png -->

If you have a pop-up blocker, it will not open, so make sure you allow it. When it opens, click "+NEW".

In the Create Export Profile dialog, set Name to any, and Key Vault URL to the URL you obtained above. Leave the other settings as they are, and click "Validate".
<!-- Image= dbexport28.png -->

If the Validate is successful, a dialog box will appear. Click "OK".
<!-- Image= dbexport29.png -->

Click "Next" to find and check the entities you want to export. (Entities that do not have auditing enabled are grayed out.

This time, I selected the client company, contact person, and sales project. When the selection is complete, click "Next".
<!-- Image= dbexport30.png -->

There is no Relationship to add, so click Next.
<!-- Image= dbexport31.png -->

Done. Click "Create & Activate".
<!-- Image= dbexport32.png -->

After a while, the export will be complete.
<!-- Image= dbexport33.png -->

When we checked on the SSMS side as well, we could see that the number of tables had increased.
<!-- Image= dbexport34.png -->

I was able to export successfully. The setup is now complete.

Finally, although the Data Export Service is very useful, it also contains some known issues, so please read through it before completing the verification and implementing it in production. In particular, it is recommended to be aware of the "Cannot create rows larger than 8060" limitation before planning your export.

That's it for this time.