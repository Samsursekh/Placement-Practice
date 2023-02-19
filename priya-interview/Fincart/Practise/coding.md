
# Doc Link ==> https://vivmagarwal.notion.site/Placement-Operations-13c6ac2c9cf74f5dab2ff783cc52e4fb

# Async ops =>
- Async-Ops is a library for performing   a   asynchronous service calls in Redux applications. - Async-Ops is made for use with Redux-Sagas.
- async is that function always returns a promise.

# Basic of HTML =>

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
    
    # 2] how you structure? 

    <!DOCTYPE html>  //This is a declaration to show the document type;
    <html> //This shows the start and end of the HTML file
    <head> //head portion of the document which contains information related to the document.
    <title>tab name</title> //This defines the title of the webpage, to be displayed on the tab of a web browser
    <link rel="stylesheet" href="style.css"> //The <link> tag defines the relationship between the current document and an external resource.
    </head>
    <body> 

    // a body, which contains the document's actual content. 

    </body>
    </html>

    
# 2. What are the key differences between HTML and HTML5?
HTML5 has made several steps forward compared to its previous versions. Notable changes include:
HTML5 supports video, graphics, and audio, whereas HTML only supports them through third-party extensions
HTML5 is mobile-friendly, whereas HTML is not
HTML5 is compatible with all major web browsers, whereas HTML is not
HTML5 offers several options for local storage, whereas HTML only offers cookies
HTML5 supports multi-threading, whereas HTML operates only in one thread
 
 # CSS ==>

    # 3] css Positions Property  ==>
    The types of positioning in CSS are-
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

# S (most questions from here)

 # 6] higher order functions ? with an example 

 -  A Higher-Order function is a function that
  receives a function as an argument or returns the function as output.

  - ex => map, filter, reduce 

  # filter arr =>
  - The filter() method creates a new array filled with elements that pass a test provided by a function.
  -  The filter() method does not execute the function for empty elements.
  -  The filter() method does not change the original array.

let arr = [1,4,7,2,9,4,9,2,5]

  let filterarr = arr.filter((e) => {
    if(e%2==0){
        return true;
    }else{
        return false;
    }
  })
  console.log(filterarr, "filterArr")

   # map arr =>

   - map() loop through the elements allocates memory and stores return values by iterating main array

   - The forEach() method does not return a new array, whereas the map() method returns a new array. The map() method is used to transform the elements of an array, whereas the forEach() method is used to loop through the elements of an array.

   let arr = [1,4,7,2,9,4,9,2,5]

  let maparr = arr.map((e) => {
  return e 
  })
  console.log(maparr, "mapArr")

  # forEach() =>

 - forEach() just loop through the elements. It's throws away return values and always returns undefined.The result of this method does not give us an output .

 -  - The forEach() method does not return a new array, whereas the map() method returns a new array. The map() method is used to transform the elements of an array, whereas the forEach() method is used to loop through the elements of an array.

  let arr = [1,4,7,2,9,4,9,2,5]

  let forEacharr = arr.forEach((e) => {
  return e 
  })
  console.log(forEacharr, "forEachArr") //undefined



  # reduce arr =>
  - Reduce is perfect for summarizing the total of an array.

  let reducefunc = myarray.reduce((a,b) => a+b, 0)
  // 36 + 25 + 6 + 15 = 82
  console.log("reduceArray", reducefunc) //82

  # callBack function =>
  - callbackfunction is that passed a function inside a  another function as an argument 

- A callback is a function passed as an argument to another function. This technique allows a function to call another function. A callback function can run after another function has finished.

- function greeting(name) {
  alert('Hello ' + name);
}

function Input(callback) {
 let name="priya";
 callback(name)
}  

Input(greeting);  //hello priya


#  what is call back hell ? how callbacks work? 

- The phenomenon which happens when we passed one by one multiple callbacks within a function is called a callback hell.

- The two problems with Call back are :
- 1. Call back hell : Here we pass one call back function into another and that call back into another, thus creating an unreadable and unmaintanable code. This is also known as pyramid of doom. 
- 2. Inversion of control : Here we pass call back into another function. This leads to loss of control of our code. Control moves to the other functon where we used call back.

- ex : const data = ["priya", "riya", "shreya"]
        api.createOrde(data, function(){
            api .proceedTopayment(function(){
                api.showOrderSummry(){
                    function({
                        api.updateWallet()
                    })
                }
            })
        })


#  Advantage of react over vanilla JS

-  Reusable Components
- Easy Creation of the Dynamic Web Applications
- The Support of Handy Tools
- Easy to understand and easy to use
- SEO Friendly
- The Benefit of Having JavaScript Library
- Scope for Testing the Codes

- This makes your code more composable and easier to understand, which makes it easier to maintain and develop applications.
-  React also has a smaller footprint than vanilla JavaScript, making it faster to load and render webpages.
- React offers a faster rendering, as it uses the virtual DOM
It is entirely dependent on your use case whether you should use Vanilla JS or React.

- Vanilla JS is fantastic, but it is not a good choice for constructing large applications with sophisticated dynamic functions. Furthermore, it is incapable of producing complex and efficient user interfaces.

- So, if you have an app with thousands of pages that change frequently and drastically, it is better to use a modern Javascript framework.

- React, on the other hand, which allows us to use reusable components and keeps the UI in sync with the state, can undoubtedly solve this problem.



# setTInterval  and claearInterval=>
- The setTimeout() method executes a block of code after the specified time

- The setInterval() method calls a function at specified intervals (in milliseconds).

- setTimeout() calls a passed-in function once after a specified delay, while setInterval() invokes one continuously at a designated time. As JavaScript is a singly-threaded language, both methods allow your code to run asynchronously.

function printingnum(from, to){
   let curr = from;
   let timer  = setInterval(() => {
       console.log(curr);
       curr++;
       if(curr>to){
           clearInterval(timer);
       }
   }, 1000)
}
printingnum(0, 5)

function print(from, to){
    let curr= from; 
    setTimeout(go = () => {
        console.log(curr);
        curr++;
        if(curr<=to){
            setTimeout(go, 1000)
        }
    },1000)
}
print(0,5)

# local storage 

- localStorage is a property that allows JavaScript sites and apps to save key-value pairs in a web browser with no expiration date.
- sessionStorage is similar to localStorage ; the difference is that while data in localStorage doesn't expire, data in sessionStorage is cleared when the page session ends. Whenever a document is loaded in a particular tab in the browser, a unique page session gets created and assigned to that particular tab.

let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
 wishlist.push(e)
localStorage.setItem('wishlist', JSON.stringify(wishlist))

# context API
- React Context is a way to manage state globally. - It can be used together with the useState Hook to share state between deeply nested components more easily 
- It's is better way aviod a prop drilling in react.js 

- ex:  import React, { useContext } from "react";
import CountContext from "./context";

const Child = () => {
  const context = useContext(CountContext);
  const { countHandler } = context;

  return (
    <div>
      <button onClick={countHandler}>Increment</button>
    </div>
  );
};
export default Child;

# hooks 
- Hooks allow function components to have access to state and other React features.

# What is useState () in React?
- The React useState Hook allows us to track state in a function component. 

# What is useEffect () hook?
- The useEffect Hook allows you to perform side effects in your components.
 - Some examples of side effects are: fetching data, directly updating the DOM, and timers.

 # What is useRef () hook?
- useref hooks  used to manipulate dom directly 
 - The useRef Hook allows you to persist values between renders. 
 - It can be used to store a mutable value that does not cause a re-render when updated. It can be used to access a DOM element directly.

 # life cycles => 
 Every component in React goes through a lifecycle of events. I like to think of them as going through a cycle of birth, growth, and death.

Mounting – Birth of your component
Update – Growth of your component
Unmount – Death of your component
 
 -  1] The mounting phase is when a new component is created and inserted into the DOM 
 - 2] The updating phase is when the component updates or re-renders. This reaction is triggered when the props are updated or when the state is updated. This phase can occur multiple times, which is kind of the point of React.
 - 3] The last phase within a component's lifecycle is the unmounting phase, when the component is removed from the DOM.

 // lifecycle method
mounting = constructor->render->componentDidMount
update = render->componentDidUpdate
unmounting = componentWillUnmount

# Prop drilling
Prop drilling is a situation where data is passed from one component through multiple interdependent components until you get to the component where the data is needed.

#  redux
#  data flow
#  prop drilling
#  hooks?
#  life cycles
