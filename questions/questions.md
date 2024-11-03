*Question 1*  

 
From: marissa@startup.com  
Subject:  Bad design  

Hello,  
  
Sorry to give you the kind of feedback that I know you do not want to hear, but I really hate the new dashboard design. Clearing and deleting indexes are now several clicks away. I am needing to use these features while iterating, so this is inconvenient.  
   
Thanks,  
Marissa  


Hi Marissa,

Thanks for getting in touch and for sharing your feedback on the new dashboard design.
I appreciate your honesty, and I understand how frustrating it can be when essential features feel less accessible.

Alternatively, you could use the API to manage your indexes directly, which could save time during your iterations.
You can simplify tasks like clearing and deleting indexes with single commands.
Please have a look at our documentation for further information:
https://www.algolia.com/doc/guides/sending-and-managing-data/manage-indices-and-apps/manage-indices/how-to/delete-indices/#delete-indices-with-the-api

I’ll also make sure your feedback on the dashboard layout is shared with our product team. 
Your insights are valuable in helping us continuously improve the user experience.
Please don’t hesitate to get back to me if there is anything else we can assist you with.

Best Regards,

Maykel
  
--

*Question 2*:   
  
From: carrie@coffee.com  
Subject: URGENT ISSUE WITH PRODUCTION!!!!  
  
Since today 9:15am we have been seeing a lot of errors on our website. Multiple users have reported that they were unable to publish their feedbacks and that an alert box with "Record is too big, please contact enterprise@algolia.com".  
  
Our website is an imdb like website where users can post reviews of coffee shops online. Along with that we enrich every record with a lot of metadata that is not for search. I am already a paying customer of your service, what else do you need to make your search work?  
  
Please advise on how to fix this. Thanks.   


Hi Carrie,

I'm sorry to hear you are experiencing this, I understand how critical this is for you.

The error you see, “Record is too big, please contact enterprise@algolia.com,” usually means that individual records exceed the maximum size limit for indexing.
Since you're enriching your records with metadata, there may be a possibility to optimize the data sent to Algolia.

Here are a few immediate options:

*Reduce Record Size*: Review your record structure to ensure it only includes essential fields for search.
Non-search fields or large metadata can be moved to other storage if they don’t need to be searchable.
Please find out more by checking our documentation: https://www.algolia.com/doc/guides/sending-and-managing-data/prepare-your-data/how-to/reducing-object-size/#remove-unused-attributes

*Indexing Long Pages*: You can divide long pages into smaller "chunks" using indexing and enable the distinct feature to avoid duplicate records.
Please check the link below for more information:
https://www.algolia.com/doc/guides/sending-and-managing-data/prepare-your-data/how-to/indexing-long-documents/

I hope this helps Carrie, please let me know if you need further assistance with any of these steps.

Best regards,

Maykel

--

*Question 3*:   


From: marc@hotmail.com  
Subject: Error on website  
  
Hi, my website is not working and here's the error:  
  
![error message](./error.png)  
  
Can you fix it please?  

Hi Marc,

Thank you for reaching out!

The error message "Uncaught ReferenceError: searchkit is not defined" typically occurs when the searchkit library is either missing or incorrectly imported into your project.

If you still believe it is set up correctly, could you please provide the API App ID and Index Name to investigate further?

Best Regards,

Maykel 