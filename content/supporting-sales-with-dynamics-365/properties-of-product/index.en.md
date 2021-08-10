---
title:  "Manage properties of Dynamics products"
draft: false
weight: 10
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
{{< detailTopImage src="artical10.png" >}}
{{< authorImage src="authorimage.jpg" name="Takafumi Noguchi" linkdin="https://www.linkedin.com/in/tnoguchi1123531" >}}
<!-- Intro  -->
The following is a continuation of the [previous article](#) on product properties.

You can now create and use a complete Dynamics 365 product to price list. Let's take a look at the products in more detail.

In the products that we offer, there are many different attributes and conditions. For example, in the case of cell phone cases, we need to classify the color, shape, size, available cell phone models, and condition (new or used).

In order to do this classification, it is necessary to set **product properties**. By setting the properties, it is possible to classify the products, which simplifies the management. Let's take a look at how to set them.

### Configure property settings for the product
Now, make the following settings in the properties of the product family created in the previous step.
<!-- Image= configure1.png -->
{{< imagedisplay src="configure1.png" >}}

Click "Settings" - "Product Catalog" - "Products and Families" and select the product family.
<!-- Imege= configure2.png -->
{{< imagedisplay src="configure2.png" >}}

If the status of the product family is published as "Active", the properties cannot be edited, so click "Change" to change the status to "Under revision".
<!-- Image= configure3.png -->
{{< imagedisplay src="configure3.png" >}}

In the "Product Properties" section, click the "+" button.
<!-- Image= configure4.png -->
{{< imagedisplay src="configure4.png" >}}

Enter a name, read-only, required, hidden, and set the data type to "Option Set". Click "Save" once.
<!-- Image= configure5.png -->
{{< imagedisplay src="configure5.png" >}}

Then, add the option set items by clicking the "+" button.
<!-- Image= configure6.png -->
{{< imagedisplay src="configure6.png" >}}

When all settings are completed, the product properties are set in the product family as shown below.
<!-- Image= configure7.png -->
{{< imagedisplay src="configure7.png" >}}

Now that you have set the properties, publish the product family hierarchy. Click "Publish" and then "Publish Hierarchy".
<!-- Image= configure8.png -->
{{< imagedisplay src="configure8.png" >}}

The above property settings are also reflected in the lower-level products.

## Set the properties of the product associated with the sales case.
Now, when setting up a product for a sales case, let's also set the properties created above at the same time.

Open a sales case and set up the product in the "Product Items" section. When you do so, you will see a warning in the "Properties" column of the product and a link to "Edit", click on it.
<!-- Image= configure9.png -->
{{< imagedisplay src="configure9.png" >}}

Then you will be able to set the properties that you just set. The reason why the warning was displayed this time is because we set the property settings to "Required". Let's set the properties and call it "Done".
<!-- Image= configure10.png -->
{{< imagedisplay src="configure10.png" >}}

The product property settings are now complete.
<!-- Image= configure11.png -->
{{< imagedisplay src="configure11.png" >}}

In this way, by managing the attributes of a single product with properties, simple classification is now possible.

So, let's do that next time to configure more information that comes with this product.