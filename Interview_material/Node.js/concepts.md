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
   1. Local Modules.  Modules that we create in our applications
   2. built-in modules - modules that node.js brovide by default
   3. Third party modules - modules written by other developers that we can use in our application