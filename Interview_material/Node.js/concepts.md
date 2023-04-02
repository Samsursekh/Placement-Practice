# 1 what is node js ?
  ==> nodeJs is a open source, cross-platform, javascript runtime envioronment

  open-source - source code is publicaly available for sharing and modifications
  cross-platform--> available on mac, windows and linux

  js runtime envt -->
  provides all the necessary components in order to use and run a js program outside the browser


summary -- its not a language, or not a framework,
capable of excecuting js code outside the browser
- it can execute not only std ECMAscript language but also new features that are made available through c++ bindings using v8 engine


# 2 why lean NodeJs ?

  - build to end to end js applications
  - a number of companies like linkedin,netflix,and paypal are migrated from other backend technologies to node js
  - fullstack development is one of the  most sought out skills sets by companies
  - huge community support

   

# 3. what can you build using nodeJs /  applications

   - Traditional websites
   - backend service3s like APIs
   -  Real-time applications
   - Streaming services CLI tools
   -  Multiplayer Games
   Node.js allows you to build complex and powerful applications
    
# 4.Executing javascript with Node
   - two ways
  1-->   node REPL
   R - Read
   E - Evalauate
   P - Print
   L - Loop
   2- executing code in a Javascript file in then command line  ( node filename.js) //file with .js exetension



# 5. Brower vs Node.js
 ==> in the browser most of the time what you are doing is interacting with the DOM, or other web platform APIs like cookies. in the nodejs you dont have the document ,window and all the other objects that are provided by the browser

 - in the browser , we dont have all the nice APIs that node.js provides through its modules. for examples the filesysten access functionality.
 - with node.js you control the environment.
 - with a browser, you are at the mercy of what the users choose

# 6. Modules

 ==> A module is a encapsulated and reusable chunk of code that has its own context
  - in node.js, each file treated as a seperate module
   
   Types of modules
   ----------------
   1. Local Modules.  Modules that we create in our applications.
   2. built-in modules - modules that node.js brovide by default
   3. Third party modules - modules written by other developers that we can use in our application







   <!-- node -->
   # what is diff btn nodejs and angular
   node.js=>
    - 1. user in where scalability is reqt 
    - 2. ability to generate queries in a database.
    - 3. mainly used to develop small/ med sized applications
    - 4. provides many frameworks such as sails,partila, and express
    - 5. coded using c++ and js

    Angular =>
    - 1. best fit the devlpt of real-time-applications
    - 2. ability to simplify an application into MVC architecture.
    - 3. usd to develop real-time interactive applications
    - 4. Angular is an all-in-one web app framework
    - 5. coded in typescript

    # what are the difft API functions supported by  Node.js?
    3 types 
    i. synchronous APIs: used for non-blocking functions
    ii. Asynchronous APIs: used for blocking functions


    # Why Node JS so POPULAR ?
    -> immense amount of traction as it uses js

     - writing js on the server
     - access to the http stack
     - file i/o entities
     - TCP and other protocol
     - direct database access

    # What is the ORDER of execution in contrl flow statements ?

    --> following order in which control flow statements are used
     - Handling execution and queue.
     - Data collection and storage.
     - Concurrency handling and limiting.
     - Execution of the next piece of code. 

    # Disadvantages of using nodejs ?
    - A multi-threaded platform can run more effectively and provide better responsiveness when it comes to the execution of intensive CPU computation
    - usage of relational databases with node.js is becoming obsolete already


    # why does google use the v8 englne for nodeJS ?
     - bcz it can easily convert js into low level language.
     - this is done to provide "high performance" during the execution of the application
     - Also provides users with real-timme abilities to work with application

     # what is middleware in Node.js ?
     - A middleware is a simple function that has ability to handle incomingh req and responses.
      - used primarly for
       - execution of code( of any type)
       - updation of req and res objects
       - cmpletion of req-res iterations
       - calling next middlewares

     # Why  is ExpressJS used?
      - ExpressJS is widely used framework built using nodejs
      - expressjs uses a MANAGEMENT POINT that controls the flow of data btn servers and sever-side applications 
      - Being  light-weighted and flexible, Express.js provides users with lots of features used design mobile applications


    # what are streams  in nodeJs ?
    -  streams are nothing but the set of data . that can be similar to string,array and objects.
     - strems are used for read/write ops 
     -  bunch of packets
     - makes easy to process with large kind of data.


      types streams 4
      i. readable 
      2. writable
      3. Doplex( both read and write)
      4. transform (duplex for modifying data)


    