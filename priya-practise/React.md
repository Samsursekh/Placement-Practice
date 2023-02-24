# what is memoization?
# what is redux ?
# difference btween shalow copy or deep copy?
# what is the difference between framwork and library
#  explain the flow of redux?
#  how does react work?
# what is the difference between react and redux?

# what is the difference between redux and context api?

# what is useMemo?
useMemo is a React Hook that lets you cache the result of a calculation between re-renders.
useMemo is a built-in React hook that is used for performance optimization by caching the result of a function call and returning it when the input values to that function have not changed. This helps to prevent unnecessary re-rendering of components that depend on the output of that function. It takes two arguments: a function that returns the value to be cached, and an array of dependencies that determines when the function should be recomputed. If the dependencies have not changed, the cached value is returned, otherwise the function is re-executed and the new value is cached. It is commonly used for expensive calculations or when the output of a function is used in multiple places within a component.

# what is useCallback hook?
useCallback is a React Hook that is used to optimize the performance of functional components. It is used to memoize a function and prevent it from being re-created on each re-render of the component. By memoizing the function, the component can avoid unnecessary re-renders and improve its performance.

When a component that uses the useCallback hook re-renders, it will return the same memoized function instance unless any of its dependencies have changed. If any of the dependencies have changed, then the hook will create a new function instance and return it.

The useCallback hook takes two arguments: the function that needs to be memoized, and an array of dependencies that the function relies on. If any of the dependencies change, then the function will be re-created.

The useCallback hook is often used in conjunction with the useMemo hook to optimize the performance of functional components.

# what are classes and object?
// Class: 
1. A class is a template for creating objects in program.
2. A class is a logical entity
3. A class does not allocate memory space when it is created.
4. You can declare class only once.
5. Class generates objects

// objects; 
1. The object is an instance of a class.
2. Object is a physical entity
3. Object allocates memory space whenever they are created.
4. You can create more than one object using a class.
5. Objects provide life to the class.  

# how to manage a state?

# what is difference between contolled components and unctrooled components?

# what is react-router-dom

# is it possible to creat a custom hook in react ? yes then how?

# is react a library

# what is react-fiber 

# what is eventEmmitors

# what is ref

# what is dom element and example 

# what is state of component in react? 
The state of a component in React is an object that holds information about the component, including its properties and values. 



# what is Reactjs?
- React is a free open JavaScript library that makes building user interfaces easy. 
- It was developed by Facebook.
- It is single page page application
- It is cross platform open sourse library


# Does React use HTML? 
No, It uses JSX, which is similar to HTML.


# what is JSX?
JSX stands for JavaScript XML. JSX allows us to write HTML in React. JSX makes it easier to write and add HTML in React.


# Advantages of React.JS / Name the important features of React
- Easy Creation of the Dynamic Web Applications
- React uses virtual dom, which makes web application.
- Performance faster
- Reusable Components
- unidireactional data flow
- dedicated tools foe easy debugging/
- The Support of Handy Tools
- Easy to understand and easy to use
- SEO Friendly
- Having JavaScript Library
- Scope for Testing the Codes
- Allows you to use 3rd party libraries
- Time-Saving
- Faster Development
- Simplicity and Composable
- Fully supported by Facebook.

# Disadvantages of react.js

- Poor Documentation
- View Part
- The high pace of development
- Problems with SEO
- JSX as a barrier


# optimization techniques in react js

- Using Stateless Components and React.
- Using Production Mode Flag in Webpack.
- Implementing Dependency optimization Using React.
- Avoiding Inline Function Definition in the Render Function.
- Throttling and Debouncing Event Action in JavaScript
- Avoid using Index as Key for map
-  Avoiding Props in Initial States
- Spreading props on DOM elements
- CSS Animations Instead of JS Animations

# what is component in react? 
- A component is basically a piece of the user interface.
- A component id basically piece of the code. 

# 4] what is component in react? difference between functional component and class component?
- there are two types of components 
- 1] Functional component / representional Component
- 2] Class component
- A component is an independent, reusable bit of code which divides the UI into smaller pieces
- Components are independent and reusable bits of code.
- They serve the same purpose as JavaScript functions, but work in isolation and return HTML. Components come in two types, Class components and Function components, 

# functional component =>
- simple function / pure function 
- does not use this keyword
- solution without using state 
- stateless component 
- mainly responsible for UI 
- use functional component easy 

# class component => 
- more feature rich 
- maintain their own private data 
- Has complex UI logic 
- Provide lifecycle hook 
- stateful component 


# hooks 
- Hooks allow function components to have access to state and other React features.
In React, a hook is a function that allows developers to use state and other React features in functional components. 
- Some common hooks include useState for managing state, useEffect for handling side effects, useContext for consuming context, and useMemo and useCallback for performance optimization. Hooks are designed to be composable and allow developers to easily reuse and share stateful logic across different components.

# What is useState () in React?
- The React useState Hook allows us to track state in a function component.
m

# What is useEffect () hook?
- The useEffect Hook allows you to perform side effects in your components.
 - Some examples of side effects are: fetching data, directly updating the DOM, and timers.

 # What is useRef () hook?
- useref hooks  used to manipulate dom directly 
 - The useRef Hook allows you to persist values between renders. 
 - It can be used to store a mutable value that does not cause a re-render when updated. It can be used to access a DOM element directly.

# what is higher order component?
- A higher-order component acts as a container for other components.

# Explain the term stateless components
- Stateless components are pure functions that render DOM-based solely on the properties provided to them.
- A stateless function component is a typical React component that is defined as a function that does not manage any state.

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



# Virtual Dom

React uses Virtual DOM, which can be thought of as a blueprint of the DOM. 

- It can't update HTML directly
- Update the JSX if the element update
- DOM manipulation is very easy 
- No memory wastage 
- It updates fast
- It is only a virtual representation of the DOM


 # This Virtual DOM works in three simple steps-
 - i. Whenever any underlying data changes, the entire Ul is
    re-rendered in Virtual DOM representation
 - ii. Then the difference between the previous DOM representation 
      and the new one is calculated
 - iii. Once the calculations are done, the real DOM will be updated with only 
     the things that have actually changed

#  What is Flux Concept In React?

- Facebook widely uses flux architecture concept for developing client-side web
applications. It is not a framework or a library. It is simply a new kind of architecture
that complements React and the concept of Unidirectional Data Flow.

- Flux is a programming concept, where the data is uni-directional.
- This data enters the app and flows through it in one direction until it is rendered on the screen.

# flow of flux 
- Actions − Actions are sent to the dispatcher to trigger the data flow.

- Dispatcher − This is a central hub of the app. All the data is dispatched and sent to the stores.

- Store − Store is the place where the application state and logic are held. Every store is maintaining a particular state and it will update when needed.

- View − The view will receive data from the store and re-render the app.

#  Define the term Redux in React

- Redux is an open-source JavaScript library used to manage application state.
- You can test and run an application developed with Redux in different environments. 

#  What is the 'Store' feature in Redux?

- Redux has a feature called 'Store' which allows you to save the application's entire State
at one place. Therefore all it's component's State are stored in the Store so that you will
get regular updates directly from the Store. The single state tree helps you to keep track
of changes over time and debug or inspect the application.


# What is an action in Redux? 

- It is a function which returns an action object. The action-type and the action data are
always stored in the action object. Actions can send data between the Store and the
software application. All information retrieved by the Store is produced by the actions.

- An action creator is a function that literally creates an action object. 
- In Redux, action creators simply return an action object and pass the argument value if necessary.



# Explain React Router / why do you need Routing in React?
- Because we make SPA's (single page Application) in React
- React Router is a routing library which allows you to add new screen flows to your application, 
  and it also keeps URL in sync with what’s being shown on the page.


# What is dispatcher?

A dispatcher is a central hub of app where you will receive actions and broadcast payload to registered callbacks.

# What is meant by callback function? What is its purpose?

- A callback function is a function passed into another function as an argument, which is then invoked inside the outer function to complete some kind of routine or action.

- A callback function should be called when setState has finished, and the component is retendered. As the setState is asynchronous, which is why it takes in a second callback function.


#  what is REACT LIFECYCLE METHOD

- Each React component has a lifecycle that you can monitor and manipulate during its three main phases.	
The three phases are Mounting, Updating, and Unmounting.

- 1] Mounting 
- 2] Updating 
- 3] Unmounting 

# Mounting/birth
- Mounting means putting elements into the DOM.

- React has four built-in methods that get called, in this order, when mounting a  component:
- constructor
- getDerivedStateFromProps()
- render() 
- componentDidMount()

# Updating/middle
- A component is updated whenever there is a change in the component's state or props.
- React has five built-in methods that get called, in this order, when a component is updated:

- getDerivedStateFromProps()
- shouldComponentUpdate()
- render()
- getSnapshotBeforeUpdate()
- componentDidUpdate()


# Unmounting/end 
- The next phase in the lifecycle is when a component is removed from the DOM, or unmounting as React likes to call it.
- React has only one built-in method that gets called when a component is unmounted:

- componentWillUnmount()
- The componentWillUnmount method is called when the component is about to be removed from the DOM.

- 1] getIntialState()
- 2] componentDidNount()
- 3] shouldComponentUpdate()
- 4] ComponentDidUpdate()
- 5] ComponentWillUnmount()

# context API
- React Context is a way to manage state globally. 
- It can be used together with the useState Hook to share state between deeply  nested components more easily 
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



 # life cycles => 
 - Every component in React goes through a lifecycle of events. 
 - I like to think of them as going through a cycle of birth, growth, and death.

Mounting – Birth of your component
Update – Growth of your component
Unmount – Death of your component
 
 -  1] The mounting phase is when a new component is created and inserted into the DOM 
 - 2] The updating phase is when the component updates or re-renders. This reaction is triggered when the props are updated or when the state is updated. This phase can occur multiple times, which is kind of the point of React.
 - 3] The last phase within a component's lifecycle is the unmounting phase, when the component is removed from the DOM.

# lifecycle method
mounting = constructor->render->componentDidMount
update = render->componentDidUpdate
unmounting = componentWillUnmount


# Prop drilling
Prop drilling is a situation where data is passed from one component through multiple interdependent components until you get to the component where the data is needed.


# Async ops =>
- Async-Ops is a library for performing   a   asynchronous service calls in Redux applications. - Async-Ops is made for use with Redux-Sagas.
- async is that function always returns a promise.

# MVC pattent vs flux pattern in data flow explain?







