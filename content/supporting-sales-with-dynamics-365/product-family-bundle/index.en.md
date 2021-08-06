---
title:  "Create Dynamics 365 product families and bundles"
draft: false
weight: 9
datetitle: "2017.08.23 | "
image: "artical9.jpg"
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
      "dateModified": "2015-02-05T09:20:00+08:00"
    }
---
<!-- Intro  -->
In the [previous article](#), we created a single product and even a discount table. In this article, we will configure a product family and associate a product to the family. We will now discuss how to use **product families**.


## Create a product family
A product family is used to manage a group of similar products together. For example, there is a parent family of products called PCs, which can be divided into notebooks, desktops, and tablets as its child families.
<!-- Image= family.png -->
{{< imagedisplay src="family.png" >}}

Also, as I will explain later, it is possible to sell multiple products together, called a **bundle**. In the previous article, we were selling online product licenses in sales deals.

For example, if online products = Office365, you can bundle a Dynamics 365 license with it and sell it as an Office 365 extended license product. 

Now, create the product family.

Under "Settings", click "Product Catalog", then "Products and Families".
<!-- Image= family1.png -->
{{< imagedisplay src="family1.png" >}}

Click "Add Family".
<!-- Image= family2.png -->
{{< imagedisplay src="family2.png" >}}

Set the name, product ID, effective start date, and effective end date, and click "Save".

For the parent product family, the parent is not set.

<!-- Image= family3.png -->
{{< imagedisplay src="family3.png" >}}

Create a child product family. Associate it with the previous parent product family. In the following example, we have created an "Online Only License" and set the "Product License" to the parent. Similarly, we have created an "Installed-only License".
<!-- Image= family4.png -->
{{< imagedisplay src="family4.png" >}}

We have created the following family.
<!-- Image= family5.png -->
{{< imagedisplay src="family5.png" >}}

As noted in the technical information below, once set to a parent family, it is not possible to change the parent to another family.

**Create a product family (Sales)**

[https://docs.microsoft.com/ja-jp/dynamics365/customer-engagement/sales-enterprise/create-product-family](https://docs.microsoft.com/ja-jp/dynamics365/customer-engagement/sales-enterprise/create-product-family)

<!-- Quate Box -->
The product family you use to create a product, bundle, or other product family becomes the parent family. It is not possible to change the parent family of a child product, bundle, or family.

Therefore, we are adding a new product to the family.


## Add a product to the parent family
In "Products and Families", click the "Products" button. For this product, set Parent to the name of the parent family.
<!-- Image= family6.png -->
{{< imagedisplay src="family6.png" >}}

Save the file once and set the default price list. As shown in the figure below, the parent field is already in the family hierarchy and cannot be changed.
<!-- Image= family7.png -->
{{< imagedisplay src="family7.png" >}}

## Create a bundle and add it to the parent family 
Let's create the aforementioned bundle and add it to the parent family in the same way as the product.

Under "Products and Families", click "Add Bundle".
<!-- Image= family8.png -->
{{< imagedisplay src="family8.png" >}}

As with the product, set up the parent and save it once. After that, set up the price list and save it.
<!-- Image= family9.png -->
{{< imagedisplay src="family9.png" >}}

Click the "+" button under "Bundled Products".
<!-- Image= family10.png -->
{{< imagedisplay src="family10.png" >}}

Bundle the two products that you have created in advance. The parent of the products to be bundled should be the same parent.
<!-- Image= family11.png -->
{{< imagedisplay src="family11.png" >}}

It is now bundled as follows
<!-- Image= family12.png -->
{{< imagedisplay src="family12.png" >}}

The product family is shown below.
<!-- Image= family13.png -->
{{< imagedisplay src="family13.png" >}}

For more information about the product family, please refer to the technical information below.

**Create a product bundle that sells multiple items together (Sales)**

[https://docs.microsoft.com/ja-jp/dynamics365/customer-engagement/sales-enterprise/create-product-bundles-sell-multiple-items-together](https://docs.microsoft.com/ja-jp/dynamics365/customer-engagement/sales-enterprise/create-product-bundles-sell-multiple-items-together)

[Next time](#), use the discount table you are creating.