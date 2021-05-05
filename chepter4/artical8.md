---
title:  "use-catalog-for-sales"
date:   2020-08-05T15:53:27+06:00
draft: false
datetitle: "2017.08.23 | Dynamics 365 for Sales [More] /"
pageHeading: "Boost your sales force with Dynamics 365 product catalogs"
image: "images/artical8/artical8.jpg"
Author: "Takafumi Noguchi"
authorimage: "images/authorimage.jpg"
intro: ""
---
<!-- Intro  -->
So far, we have discussed how to manage sales deals that have been rated as "promising" by the lead.

In this article, I would like to explain how to manage the products that are important for sales projects on Dynamics 365.

The products that are important to the sales process are called product catalogs, and they allow you to manage what products are available (product families), in what units they are shipped (shipping unit list), and at what discount rates (discount and price lists) to generate quotes and invoices.

The product catalog in Dynamics 365 is defined by a collection of products and pricing information, and is used to enhance a company's sales force and effectively manage the quality of business negotiations.

For example, we manage the services and products we offer in a list of shipping units and prepare a price and discount list for our products. In addition, for non-competing projects, estimate the price of the product at the regular rate to maximize the company's profit.

In addition, for promising but highly competitive projects, we use a discount table as a winning strategy.

By recording all of this information in the sales case, it will be easier to formulate sales strategies, which will lead to the strengthening of the company's sales capabilities.
<!-- Table of Content  -->

* Create product catalogs
  * Create a discount table
  * Create a list of shipping units
  * Product Creation
  * Create a price list

## Create product catalogs
Now let's try to use the Dynamics 365 product catalog. The creation of the product catalog will be done in the following order
* Create a discount table
* Create a list of shipping units
* Creating a Product Family
* Create a price list

### Create a discount table
First, we will create a discount table. Go to "Settings" in the menu and click "Product Catalog".
<!-- Image= discount1.png -->

Click on "Discount Table".
<!-- Image= discount2.png -->

Click the "+ New" button to create a new discount table. Set the name and type, and save it.
<!-- Image= discount3.png -->

Select "Amount" for Type and select the currency type.
<!-- Image= discount4.png -->

Add a discount. Click "Discounts" from the left pane of the discount table, and then click "Add New Discount.
<!-- Image= discount5.png -->

Save the settings as follows: 100 items or more, 200 items or less, 5% off.
<!-- Image= discount6.png -->

### Create a list of shipping units
Next, we will create a list of shipping units. Click "Shipping Unit List" in the product catalog.
<!-- Image= discount7.png -->

Click the "+ New" button to create a shipping unit as shown below.
<!-- Image= discount8.png -->

Click "New Shipping Unit" under "Shipping Unit.
<!-- Image= discount9.png -->

Decide on the name and quantity. Here, we will set the minimum number of licenses as 5 as a package.
<!-- Image= discount10.png -->

In addition, we have created a premium package with 20 packages as the shipping unit.
<!-- Image= discount11.png -->

The units are now as follows.
<!-- Image= discount12.png -->

Save and close.

### Product Creation
Create products and product families. From the Product Catalog, click Products and Families.
<!-- Image= discount13.png -->

First, click "Add Product" to create a product.
<!-- Image= discount14.png -->

Enter the name, ID, etc., and enter the shipping unit created above in the "Shipping Unit List" and "Default Shipping Unit" fields. Then click "Save Overwrite" to save the changes.
<!-- Image= discount15.png -->

If you do so, you will see the following warning.
<!-- Image= discount16.png -->

Create a price list, since no default price list has been set.
<!-- Image= discount17.png -->

### Create a price list
The last step is to create a price list. Click "Price List" under "Product Catalog".
<!-- Image= discount18.png -->

Click the "+ New" button to create a new one. Enter the name and currency type first, and then click "Save".
<!-- Image= discount19.png -->

At the bottom of the screen, under Price List Items, click the "+" button to create a new price list item.
<!-- Image= discount20.png -->

Enter a name for the price list, and set the product and shipping unit from the shipping unit list. We will not use the price list this time, but set the amount and save it.
<!-- Image= discount21.png -->

Then the price list you created will be associated with the product you created earlier.
<!-- Image= discount22.png -->
We have first introduced the creation of the product so far. In the next article, we will apply it further to use the discount table and create product families.