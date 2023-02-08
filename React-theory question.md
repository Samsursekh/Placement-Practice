# hat is Reactjs?
React is a JavaScript library that makes building user interfaces easy. It was developed by Facebook.

# Does React use HTML? 
No, It uses JSX, which is similar to HTML.

# what is JSX?
JSX stands for JavaScript XML. JSX allows us to write HTML in React. JSX makes it easier to write and add HTML in React.


# Advantages of React.JS

Reusable Components
Easy Creation of the Dynamic Web Applications
The Support of Handy Tools
Easy to understand and easy to use
SEO Friendly
Having JavaScript Library
The Benefit of Having JavaScript Library
Scope for Testing the Codes

# Disadvantages of react.js

Poor Documentation
View Part
The high pace of development
Problems with SEO
JSX as a barrier

# What is DOM?

DOM stands for Document Object Model it is the structural representation of all nodes in an HTML document DOM represents the Ul of your applications.  DOM manipulation is required to dynamically change the content of a web page. 

# State the difference between Real DOM and Virtual DOM

# Real Dom
 
 It is a structural representation of HTML elements of a web application

- It can directly update HTML
- Creates a new DOM if the element updates.
- DOM manipulation is very expensive 
- There is too much memory wastage 
- It updates Slow
- It represents the Ul of your application
- It allows us to directly target any  specific node (HTML element)


# Virtual Dom

React uses Virtual DOM, which can be thought of as a blueprint of the DOM. 

- It can't update HTML directly
- Update the JSX if the element update
- DOM manipulation is very easy 
- No memory wastage 
- It updates fast
- It is only a virtual representation of the DOM
- It can produce about 200,000 Virtual DOM Nodes / Second.

 # This Virtual DOM works in three simple steps-
 - i. Whenever any underlying data changes, the entire Ul is
    re-rendered in Virtual DOM representation
 - ii. Then the difference between the previous DOM representation 
      and the new one is calculated
 - iii. Once the calculations are done, the real DOM will be updated with only 
     the things that have actually changed

#  What is Flux Concept In React?

Facebook widely uses flux architecture concept for developing client-side web
applications. It is not a framework or a library. It is simply a new kind of architecture
that complements React and the concept of Unidirectional Data Flow.