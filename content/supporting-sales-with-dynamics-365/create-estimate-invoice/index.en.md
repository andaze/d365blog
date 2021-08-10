---
title:  "Manage everything from estimates to invoices with Dynamics 365"
draft: false
weight: 13
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
{{< detailTopImage src="artical13.png" >}}
{{< authorImage src="authorimage.jpg" name="Takafumi Noguchi" linkdin="https://www.linkedin.com/in/tnoguchi1123531" >}}
<!-- Intro  -->
So far, we have discussed sales projects and products in detail. If the business meeting goes well, we will prepare a quotation for the customer. If the quotation is accepted, the sales case is put in the "order" status, and an invoice is prepared and submitted to the customer.

I will now show you how to perform this process in Dynamics 365 for Sales.

<!-- Table of Content  -->

* Create a quote from a sales project.
* Creating orders
* Create an invoice from an order

## Create a quote from a sales project
You can create a new estimate from "Estimate" in the Default Sales menu.
<!-- Image= estimate1.png -->
{{< imagedisplay src="estimate1.png" >}}

However, in order to proceed with a business meeting, it is easier to create a new one from a sales proposal. To do so, first open the sales form. Then, from the "Estimate" menu, click the "+" button to create a new estimate.
<!-- Image= estimate2.png -->
{{< imagedisplay src="estimate2.png" >}}

Then a quote will be created with the necessary information (product, amount, customer name, etc.) entered as shown in the figure below. Now you need to enter the necessary information for the address, etc.
<!-- Image= estimate3.png -->
{{< imagedisplay src="estimate3.png" >}}

When you have finished creating your estimate, click on "Activate Estimate".
<!-- Image= estimate4.png -->
{{< imagedisplay src="estimate4.png" >}}

## Creating orders
After submitting the quotation to the customer, if the order is received, the negotiation is a success. Let's get started with the order process. First, open the quote you have created and click "Create Order" from the menu.
<!-- Image= estimate5.png -->
{{< imagedisplay src="estimate5.png" >}}

In this case, enter the date of the order, as the "Create Order" dialog will appear. To close the related sales order, check the "Close sales order" checkbox and click OK.
<!-- Image= estimate6.png -->
{{< imagedisplay src="estimate6.png" >}}

The sales case is now closed and the status is "Order".
<!-- Image= estimate7.png -->
{{< imagedisplay src="estimate7.png" >}}

Also, the quote you just received will become an "Order" record, and we will now process the order.
<!-- Image= estimate8.png -->
{{< imagedisplay src="estimate8.png" >}}

Once you have completed the delivery of your customer's product or service, you can process the order. First, click the "Process Orders" button in the menu.
<!-- Image= estimate9.png -->
{{< imagedisplay src="estimate9.png" >}}

Then, enter the "Shipping Date" and "Description" to process the order, and complete the "Status".
<!-- Image= estimate10.png -->
{{< imagedisplay src="estimate10.png" >}}

Now the status of the order record is complete.
<!-- Image= estimate11.png -->
{{< imagedisplay src="estimate11.png" >}}

## Create an invoice from an order
Now that we have completed the order process, we will quickly create an invoice. From the menu of the previous order record, click on "Create Invoice".
<!-- Image= estimate12.png -->
{{< imagedisplay src="estimate12.png" >}}

Then an invoice record will be created as shown below. At this point, the status is New. Once you have reviewed the invoice, click on "Review Invoice" to complete the review of the invoice.
<!-- Image= estimate13.png -->
{{< imagedisplay src="estimate13.png" >}}

Then the status will be Billed. You have now completed billing your customer. In addition, if you have confirmed payment from the customer, click on "Complete Invoice Payment" to convert the status to Complete.
<!-- Image= estimate14.png -->
{{< imagedisplay src="estimate14.png" >}}

Now, the sales project that started as a lead has been successfully closed and paid for. In the Dynamics 365 record, one business deal has been completed.

As you can see, Dynamics 365 can help you manage information about your sales activities smoothly, so please make use of it. That's all for this article.