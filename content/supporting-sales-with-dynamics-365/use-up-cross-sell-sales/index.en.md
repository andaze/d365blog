---
title:  "Leveraging cross-selling and up-selling of Dynamics 365 products"
draft: false
weight: 12
datetitle: "2017.08.23 | "
image: "artical12.png"
Author: "Takafumi Noguchi"
authorimage: "authorimage.jpg"
showinhome: true
showinaccordian: true
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
In sales activities, up-selling and cross-selling are necessary activities to increase customer profitability.

Up-selling is a sales activity in which you sell your product or service as something higher and more expensive, while cross-selling is a sales activity in which you sell a combination of products and services related to the product or service you are selling.

In the properties of the online-only license, we had previously created that the segment was set up.

For example, if changing the segment from Standard to Enterprise and selling it as a more sophisticated product is an up-sell, then combining the online product license with an online license for Office 365 or Dynamics is a cross-sell.

## Configure up-sell and cross-sell settings for products
Now, let's set up the upsell. First, create one upgraded product in advance. Go to "Settings" - "Product Catalog" and open "Products and Families".
<!-- Image= sell1.png -->
{{< imagedisplay src="sell1.png" >}}

Now, add a product. In this case, we will create an upgraded version of the online-only license Lite, Professional. First, let's duplicate this product. Check the product box.
<!-- Image= sell2.png -->
{{< imagedisplay src="sell2.png" >}}

Click the "Duplicate" button.
<!-- Image= sell3.png -->
{{< imagedisplay src="sell3.png" >}}

On the Create Product screen, create an upgrade product for Professional.
<!-- Image= sell4.png -->
{{< imagedisplay src="sell4.png" >}}

Also, in the price list item, set the price. Without this setting, you will not be able to select the product in the sales case.
<!-- Image= sell5.png -->
{{< imagedisplay src="sell5.png" >}}

In this case, since it is Professional, we will set a fixed amount of 15,000 yen, and save it without setting a discount table.
<!-- Image= sell6.png -->
{{< imagedisplay src="sell6.png" >}}

Next, open this online-only license Lite and create a new association by clicking the "+" button in "Product Associations".
<!-- Image= sell7.png -->
{{< imagedisplay src="sell7.png" >}}

Select Online Product License Professional as the "Related Products" and save it with "Sales Associate Type" as Upsell and "Direction" as One Direction (only one direction can be set for Upsell Direction).
<!-- Image= sell8.png -->
{{< imagedisplay src="sell8.png" >}}

After doing so, the following association was made to the product.
<!-- Image= sell9.png -->
{{< imagedisplay src="sell9.png" >}}

Now, set Cross Sell at the same time. In the same way, click the "+" button to go to the Add screen, select CRM Online License as the "Related Products", and save it with "Cross Sell" as the "Sales Association Type" and "Direction" as "Bi-directional".
<!-- Image= sell10.png -->
{{< imagedisplay src="sell10.png" >}}

The configuration is now complete.
<!-- Image= sell11.png -->
{{< imagedisplay src="sell11.png" >}}

##

## Use up-sell and cross-sell products related to the products in the sales case.
Now, let's set up the configured up-sell and cross-sell products in the sales form. Open the sales case and click on the "+" button under "Product line". There you will first set up the online product license Lite. Complete the property settings beforehand.
<!-- Image= sell12.png -->
{{< imagedisplay src="sell12.png" >}}

Here, in the right column, you will see "Recommendations", click on it.
<!-- Image= sell13.png -->
{{< imagedisplay src="sell13.png" >}}

The products set for cross-selling and up-selling are displayed.

Click on the "Pick" of the item you want to add, and the "Selected" count in the lower left corner of the screen will be set to "1". The more you click, the higher the count. When the selection is complete, click the "Add to List" button.
<!-- Image= sell14.png -->
{{< imagedisplay src="sell14.png" >}}

This will allow you to add related products that you have set up for cross-selling or up-selling to your proposal.
<!-- Image= sell15.png -->
{{< imagedisplay src="sell15.png" >}}

This relevance setting is very useful for companies that manage multiple products and services. By setting up related products, cross-selling and up-selling activities will not be overlooked and you can expect to improve the profitability of your sales activities.

That's it for this article.