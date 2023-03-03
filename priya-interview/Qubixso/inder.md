# what is type of component css? how many ways applying for the css?
 

# what is redux and what is flux difference between ?

- Redux is an open-source JavaScript library used to manage application state.
- You can test and run an application developed with Redux in different environments. 


# how to work flux?

- Facebook widely uses flux architecture concept for developing client-side web applications. 
- It is not a framework or a library. It is simply a new kind of architecture
- that complements React and the concept of Unidirectional Data Flow.

- Flux is a programming concept, where the data is uni-directional.
- This data enters the app and flows through it in one direction until it is rendered on the screen.

# flow of flux 
- Actions − Actions are sent to the dispatcher to trigger the data flow.

- Dispatcher − This is a central hub of the app. All the data is dispatched and sent to the stores.

- Store − Store is the place where the application state and logic are held.
-  Every store is maintaining a particular state and it will update when needed.


# what is difference between routing and conditionally routing
In React, routing refers to the process of navigating between different components or pages of an application based on the current URL. React provides several routing libraries, such as React Router, that help developers manage the different routes of an application.

On the other hand, conditionally routing in React means rendering different components based on some condition or state of the application. This can be achieved using conditional statements like if/else or ternary operators. For example, if a user is logged in, the application may render a dashboard component, but if the user is not logged in, it may render a login component instead.

In summary, routing in React involves navigating between different components or pages based on the URL, while conditionally routing involves rendering different components based on some condition or state of the application.


# what is react-lifeCycle method?

 - Every component in React goes through a lifecycle of events. 
 - I like to think of them as going through a cycle of birth, growth, and death.

    Mounting – Birth of your component
    Update –  Growth of your component
    Unmount – Death of your component
 
 -  1] The mounting phase is when a new component is created and inserted into the DOM 
 - 2] The updating phase is when the component updates or re-renders. 
 <!-- - This reaction is triggered when the props are updated or when   the state is updated. This phase can occur multiple times, which is kind of the point of React. -->
 - 3] The last phase within a component's lifecycle is the unmounting phase, when the component is removed from the DOM.


# what is component and how many types of component?

# What is meant by conditional rendering?

#  what is hook? types of hooks?

# what is css module?




 Conditional rendering is a term to describe the ability to render different user interface (UI) markup if a condition is true or false. 
- In React, it allows us to render different elements or components based on a condition. This concept is applied often in the following scenarios: Rendering external data from an API.

#  what is hook? types of hooks?
Hooks are a function, Hooks allow function components to have access to state and other React features.
 ex ==>
 useState,  => maintain the state.
 useEffect, => handling the sideEffects., avoid uncessery rendering 
 useRef,  =>   directly manipulate the dom .
 useContext => usecontext is a api , it strore and manage a data iat onle place   and avoid the prop drilling .
 useReducer => useReducer is a state mangement tool. using usereducer manage our state we access to manage state  state and dispatch -w
 UseMemo, =>  it  memorise  the value using the performance of web application.
  useCallback - caches a callback (function) to keep its previous reference.
  useMemo     - similar to useCallback but this hook caches a value or result
The React useCallback Hook returns a memoized callback function. Think of memoization as caching a value so that it does not need to be recalculated. 
both for optimization in react.

# what is css module?
CSS Modules allows us to use the same class name in multiple files without clashes since each class name is given a unique programmatic name. This is especially useful in larger applications. Every class name is scoped locally to the specific component in which it is being imported.
In CSS Modules, you can send classes to multiple components. One of the key benefits of using CSS Modules is that you may edit any CSS file with assurance and without concern for how it would affect other sites. Create portable and reusable CSS files with CSS Modules.




!] what is closure?
2] promise, state
3] fetch axios data use 
4] arr sort 
5] what is redux 
6] redux data sore krte hai kya?
7] recurssion
8] what is obj ? obj .create krne ke method ?
let a = 3
let b="2"
console.log(a-b)  //cohersion


  

