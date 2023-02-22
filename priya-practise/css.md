
 # what is the css?
 - css is a simple design language used for making web pages look good and presentable 
 - CSS (Cascading Style Sheets) is a language used for describing the presentation of web pages, including layout, fonts, colors, and other design elements. It is used alongside HTML (Hypertext Markup Language) and JavaScript to create visually appealing and interactive web pages. CSS allows web developers to separate the content and structure of a website from its presentation, making it easier to make changes to the design and layout of a website without affecting the content


#  difference betwwen the block element and inline element ?
- Block elements are elements that take up the full width available and are displayed on a new line. They can have margins, padding, and borders applied to them, and they are used to structure content into sections, such as paragraphs, headings, lists, and forms.

On the other hand, inline elements are elements that only take up the width necessary to display their content, and they appear on the same line as their neighboring elements. They cannot have margins, padding, or borders applied to them, and they are used to apply formatting to small pieces of text within a block-level element, such as links, images, and span tags.

In summary, the main difference between block and inline elements is the way they behave in relation to the layout of a page. Block elements create a block-level box, while inline elements create an inline-level box.

# explain Box-model?
The CSS box model is a concept used to describe the layout and design of elements on a web page. It consists of several layers or parts that make up the content area of an element, including the content itself, padding, borders, and margins.

The box model is essentially a rectangular container that surrounds each HTML element, and it helps developers control the size and position of elements on the page. Each layer of the box model can be manipulated using CSS properties to create different effects, such as adding space around an element or creating a border.

The layers of the box model are as follows:

Content - This is the actual content of the element, such as text, images, or other media.

Padding - This is the space between the content and the border of the element.

Border - This is the border that surrounds the element and separates it from other elements on the page.

Margin - This is the space outside the border of the element, and it helps to separate the element from other elements on the page.

By manipulating the size and positioning of these layers, developers can create a wide range of designs and layouts for their web pages. The box model is a fundamental concept in CSS and is essential for creating responsive and visually appealing web pages.








 # 3] css Positions Property  ==>
 - The types of positioning in CSS are-
# 1)static:
-  this is the default value.We cannot use top,bottom,left and right and
z-index value with static position.

# 2)relative: 
- the element is positioned relative to its normal position.We can 
move relative element using top,bottom,left and right.

# 3)absolute: 
- the element is positioned absolutely to its first positioned parent.
- We can moved element and provide z-index. 
- For example we position parent relative and move child using absolute property.

# 4)fixed: 
- the element is positioned related to the browser window.

# 5)sticky: 

- the element is positioned based on the user's scroll position.After
element goes to scroll position it act as fixed and we give it using top,left,right,bottom.


