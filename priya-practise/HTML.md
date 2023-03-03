
# 1. What is HTML5?
- Html stands for a hypertext markup language. It is used to build a website structure.
- HTML5 is a markup language used for structuring and displaying content on the internet. 
- This includes animations, audio, images, and text, among many other things, and all without the need for additional software. HTML5 is the most recent and most advanced version of HTML.

#  difference between local storage session storage  and cookies?

- localStorage is a property that allows JavaScript sites and apps to save key-value pairs in a web browser with no expiration date.
- sessionStorage is similar to localStorage ; the difference is that while data in localStorage doesn't expire, data in sessionStorage is cleared when the page session ends. Whenever a document is loaded in a particular tab in the browser, a unique page session gets created and assigned to that particular tab.

Local storage, session storage, and cookies are all ways to store data in a user's web browser, but there are some key differences between them:

Persistence: Cookies are the only one of the three that have an expiration date and can be set to last for a specific time period, whereas local storage and session storage will remain in the browser until the user clears their cache or the storage is manually deleted.

Capacity: Cookies can only store up to 4KB of data, while local storage and session storage can store much larger amounts of data.

Accessibility: Cookies can be accessed by both the server and the client, while local storage and session storage are only accessible by the client (i.e., the browser).

Automatic sending to the server: Cookies are automatically sent to the server with each HTTP request, whereas local storage and session storage are not automatically sent and must be manually included in requests.

Use: Cookies are often used to store user preferences or login information, while local storage and session storage are typically used to store temporary data or information that needs to persist between page loads within the same session.

Overall, the choice between local storage, session storage, and cookies depends on the specific use case and the type of data that needs to be stored.

let wishlist = JSON.parse(localStorage.getItem("wishlist")) || []; 
wishlist.push(e)
 
localStorage.setItem('wishlist', JSON.stringify(wishlist)) 

# 1] semantic tags =>

- Is it a meaningful area of the page, Use an HTML5 block element like <header> or <footer>, <nav> <figure> <summry>, <article>
    - <article> Defines independent, self-contained content
    - <aside> 	Defines content aside from the page content
   -  <details> Defines additional details that the user can view or hide
    - <figcaption> 	Defines a caption for a <figure> element
    - <figure> 	Specifies self-contained content, like illustrations, diagrams, photos, code listings, etc.
   -  <footer> 	Defines a footer for a document or section
    - <header> 	Specifies a header for a document or section
   -  <main> 	Specifies the main content of a document
    - <mark> 	Defines marked/highlighted text
   -  <nav> 	Defines navigation links
    - <section> Defines a section in a document
    - <summary> Defines a visible heading for a <details> element
    - <time> 	Defines a date/time
    
    # 21. What is the role of DOCTYPE in HTML5?
    -  All HTML pages (HTML5 included) need to have their document type declared in the first line of code.
    -  DOCTYPE instructs the browser how to interpret the document by indicating what type and version of markup language are being used.
    -  For HTML5 documents, the following DOCTYPE declaration code is used: 
    - <!DOCTYPE html>
    
    # 23. What is metadata in HTML5 and how is it specified?
    - Metadata is data that describes other data, providing additional information about an HTML document. Its purpose is to help    browsers, search engines and other web applications better interpret a document. Examples of metadata include the description, author, and keywords.
    - The <meta> tag is used to define metadata about an HTML document. 
    - <meta> tags are always enclosed within the <head> of the HTML document.
    

    # 2] how you structure? 

    <!DOCTYPE html>  // This is a declaration to show the document type;
    <html> // This shows the start and end of the HTML file
    <head> // head portion of the document which contains information related to the document.
    <title>tab name</title> // This defines the title of the webpage, to be displayed on the tab of a web browser
    <link rel="stylesheet" href="style.css"> // The <link> tag defines the relationship between the current document and an external resource.
    </head>
    <body> 
    // a body, which contains the document's actual content. 
    </body>
    </html>

   # 22. What are the different types of storage in HTML5?
    - HTML5 supports two types of web storage. These are:
     1] sessionStorage: temporary storage available for the duration of the page session
     2] localStorage: permanent storage available until data is deleted by the user
     3] cookies => 

     6] What is CSS and what is its relationship with HTML5?
    - CSS, or Cascading Style Sheet, is a style sheet language used with HTML5 to format and display the elements specified by the markup language for the end user. While HTML5 defines the structure of a page, CSS specifies the document’s style, including page layout, colors, and fonts. 


    
# 2. What are the key differences between HTML and HTML5?
 - HTML5 has made several steps forward compared to its previous versions. Notable changes include:
 - HTML5 supports video, graphics, and audio, whereas HTML only supports them through third-party extensions
 - HTML5 is mobile-friendly, whereas HTML is not
 - HTML5 is compatible with all major web browsers, whereas HTML is not
 - HTML5 offers several options for local storage, whereas HTML only offers cookies
 - HTML5 supports multi-threading, whereas HTML operates only in one thread

# benifits of html5 => 
- Compatibility with all web browsers and devices
- Cleaner code for developers
- Native support for multimedia content
- Quicker load times due to offline storage cache
- Introduction of geolocation


# 4] what is dom element and example 

# 11. How do you link to another web page using HTML5?
- The anchor tag, or <a> tag in code, is used with the ‘href’ attribute to link to other web pages. The URL and linked text are both included in the element.
For example, a link to the Google homepage would look like this in HTML5 code:
<a href="http://www.google.com/">Google Search Engine</a>


# 12. What are the three types of lists in HTML5?
- The three types of HTML5 lists are: 
- 1] Ordered list, which is used to group related items in a specific order
- 2] Unordered list, which is used to group related items in no particular order 
- 3] Description list, which is used to group terms and their descriptions

# 14. What is the role of formatting tags in HTML5?
- Formatting tags allow text to be stylized in HTML5 without the need for CSS. There are a number of HTML5 formatting tags, and the most popular ones include:
<b> - used to make text bold
<i> - used to italicize text
<u> - used to underline text
<mark> - used to highlight text
<strong> - used to mark text as important

# 17. What are some of the new input types in HTML5?
- HTML5 introduces several new input types to create a more interactive user experience. The new input types include:
- Date, used to select a date from a drop-down calendar
- Time, used to enter a time
- Email, used to enter an email address
- Tel, used to enter a telephone number with a specific pattern
- Color, used to select a color from a color picker Ran

# 31. What is the role of the WebSocket API in HTML5?
- The WebSocket API facilitates two-way, interactive communication between the web browser and the web server. This enables a real-time, event-driven data transfer to and from the server. It’s a very popular API that brings speed, security, and flexibility.
