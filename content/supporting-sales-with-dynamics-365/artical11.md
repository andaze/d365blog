---
title:  "use-discount-price-lists"
date:   2020-08-05T15:53:27+06:00
draft: false
datetitle: "2017.08.23 | Dynamics 365 for Sales [More] /"
pageHeading: "Use the Dynamics 365 discount table to get a better deal."
image: "images/artical11/artical11.jpg"
Author: "Takafumi Noguchi"
authorimage: "images/authorimage.jpg"
linkdin: ""
---
<!-- Intro  -->
With the product families we have created previously, we can now manage our sales case records more efficiently. Now, there will come a time when you need to adjust the final price of the deal. This is where the discount table comes into play.

We have already created a discount table in a previous article, so we will actually use this function.
<!-- Table of Content  -->

* Publish product families, products, and bundles
* Set product, price, and discount rate for price list items
* Try to set up a price list and products for sales projects.

## Publish product families, products, and bundles
The first step is to publish the product family, product, and bundle that you created in the previous article. Please publish them in the following order: parent product family, child product family, product, and bundle.
<!-- Image= publish1.png -->

To publish, select a single record and click the "Publish" button.
<!-- Image= publish2.png -->

This completes the release of the product family, product, and bundle. A product has a lifecycle of draft, release, revision, and obsolescence as shown here. To quote a diagram from the technical information, the image is as follows.
<!-- Image= publish3.png -->

Reference: https://msdn.microsoft.com/ja-jp/library/dn817887.aspx

Therefore, even if you create a product, you will not be able to select it until it is published, and if you want to change it after it is published, you will have to set it to the state of being under revision, edit it, and then publish it again for it to be reflected.

Now that the products are ready, we will quickly set up the price list and discount list.


## Set product, price, and discount rate for price list items
Once you have done all the publishing, the next step is to set the price list items in the price list and configure the settings for the product prices and discounts in the price list. First, go to Settings - Product Catalog and open Price List.
<!-- Image= publish4.png -->

Select one price list.
<!-- Image= publish5.png -->

If you look at the "Price List Items", you will see that none of the products have been set up yet. Let's set up a new product and its price by clicking the "+" button.
<!-- Image= publish6.png -->

The New Price List Item screen will appear. Here, select the price list, product, and shipping unit.

As shown in the figure below, this is where the discount table comes into play. Here, the amount of CRM licenses sold per license and the discount table will result in a discount of "If you buy a quantity between 100 and 200, you will get a 5% discount.
<!-- Image= publish7.png -->

The discount table shows the following settings.
<!-- Image= publish8.png -->

You have now set up your price list, discount list, and products. Now let's try to use this price list and products for our sales projects.

## Try to set up a price list and products for sales projects.
Access the sales case and quickly set up the price list and products. Select one sales case and open it.
<!-- Image= publish9.png -->

Select a price list from "Price List" under "Product Items.
<!-- Image= publish10.png -->

Click on the "+" button, select "Existing Products", and then select the product mentioned above. In this case, we searched for CRM Online License and configured it.
<!-- Image= publish11.png -->

You have now set up a product in the sales case. The quantity is set as 1 as shown below, so let's set this quantity to 100. Then the discount table will display the total amount with a 5% discount.

Buy 100 CRM online licenses for $1,000, 5% off for the following

The total is 1,000 yen x 100 licenses x 0.95 = 95,000 yen.
<!-- Image= publish12.png -->

Thus, you can see that the discount table is valid. If you have added other products or changed their quantities, you can recalculate them by clicking the "Recalculate Sales Case" button in the Sales Case menu.
<!-- Image= publish13.png -->

You can also set "Sales" to "Calculate from system" to display the results of the system's automatic calculation of the sales forecast for a sales project, and also make it locked. Please use this option if you do not want users to change the sales forecast freely.
<!-- Image= publish14.png -->

We have discussed sales projects and products, price lists, and discount lists. This will help you to make your business negotiations more favorable in terms of price.

In the next article, we will write a little more about product properties. Changing the properties of a product will make it more manageable.