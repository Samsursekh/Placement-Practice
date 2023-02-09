# hat is Reactjs?
React is a JavaScript library that makes building user interfaces easy. It was developed by Facebook.

# Does React use HTML? 
No, It uses JSX, which is similar to HTML.

# what is JSX?
JSX stands for JavaScript XML. JSX allows us to write HTML in React. JSX makes it easier to write and add HTML in React.


# Advantages of React.JS

- Reusable Components
- Easy Creation of the Dynamic Web Applications
- The Support of Handy Tools
- Easy to understand and easy to use
- SEO Friendly
- Having JavaScript Library
- The Benefit of Having JavaScript Library
- Scope for Testing the Codes

# Disadvantages of react.js

- Poor Documentation
- View Part
- The high pace of development
- Problems with SEO
- JSX as a barrier

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

#  Name the important features of React

- Allows you to use 3rd party libraries
- Time-Saving
- Faster Development
- Simplicity and Composable
- Fully supported by Facebook.
- Code Stability with One-directional data binding
- React Components

# Explain the term stateless components

- Stateless components are pure functions that render DOM-based solely on the properties provided to them.
- A stateless function component is a typical React component that is defined as a function that does not manage any state.

# Explain React Router

React Router is a routing library which allows you to add new screen flows to your application, and it also keeps URL in sync with what’s being shown on the page.

# What is dispatcher?

A dispatcher is a central hub of app where you will receive actions and broadcast payload to registered callbacks.

# What is meant by callback function? What is its purpose?

- A callback function is a function passed into another function as an argument, which is then invoked inside the outer function to complete some kind of routine or action.

- A callback function should be called when setState has finished, and the component is retendered. As the setState is asynchronous, which is why it takes in a second callback function.


#   1]  CONCEPT EXPLAINER ASSIGNMENT REACT LIFECYCLE METHOD

- Each React component has a lifecycle that you can monitor and manipulate during its three main phases.	
The three phases are Mounting, Updating, and Unmounting.

- 1] Mounting 
- 2] Updating 
- 3] Unmounting 

# Mounting
- Mounting means putting elements into the DOM.
- React has four built-in methods that get called, in this order, when mounting a  component:

- constructor
- getDerivedStateFromProps()
- render() 
- componentDidMount()

# Updating
- A component is updated whenever there is a change in the component's state or props.
- React has five built-in methods that get called, in this order, when a component is updated:

- getDerivedStateFromProps()
- shouldComponentUpdate()
- render()
- getSnapshotBeforeUpdate()
- componentDidUpdate()


# Unmounting
- The next phase in the lifecycle is when a component is removed from the DOM, or unmounting as React likes to call it.
- React has only one built-in method that gets called when a component is unmounted:

- componentWillUnmount()
- The componentWillUnmount method is called when the component is about to be removed from the DOM.







