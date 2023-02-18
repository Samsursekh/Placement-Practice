# 1] Introduce yourself 
- My name is Priyanka Phulmante.  I’m from Latur, Maharashtra. But currently, I have to live in Pune. currently, I am pursuing a full-stack web development course at Masai School and I am also pursuing PGDM in Information technology from MIT-School of Management Pune. I completed my BSc in computer science from Dayanand Science College, Latur. talking g about my hobbies In my free time, I listning a songs.


# 2] Project explain 
-  The project I made in unit 5 was an E-commerce online travel and hotel booking website. The project was all about booking travel seats and hotel rooms.

- In my project team, there were  6 members. My project was completed in a week with support from my group members.

- In this project, my task is the signup page, login page, and landing page. This was my overall contribution to the team project.

- When I was working on a project I used functionalities like redux, CSS, Javascript, and local storage. MongoDB database for storing data for the ad

- In the project work, the most challenging part was user direct login with our google account but with my friends' support, I was able to do it. I watched videos online on youtube and talked with my friends to overcome the challenges.

- When I was doing the project I learned a lot. I learned how to develop,  write logic and implement coding. I have better in coding after joining Masai Coding School.

# 3] Counter using setTimeout react(start , pause, reset)

# Approach 1 ==> 

import {useEffect, useState, useRef} from "react"

export default function App() {
  const [time, setTime] = useState(0)

  let id = useRef();

function getTime(){
  id.current = setInterval(() => {
    setTime((prev) => prev+1)
    console.log(time)
  },1000)
}

useEffect(() => {
  return() => clearInterval(id.current)
 }, [])

 
  return (
    <div className="App">
      <h1>Time : {time}</h1>
    <button onClick={() => getTime()}>Start</button>
    <button onClick={() => clearInterval(id.current) }>Pause</button>
    <button onClick={() => {clearInterval(id.current); setTime(0)}}>Reset</button>
    </div>
  );
}

# approach 2 ==> 

import "./styles.css";
import { useEffect, useRef, useState } from "react";

export default function App() {
  const [counter, setCounter] = useState(0);
  const [flag, setflag] = useState(false);
  let timeref = useRef(null);
  function start() {
    setflag(true)
    if (timeref.current) {
      clearTimeout();
    }
    timeref.current = setTimeout(() => {
      setCounter((prev) => prev + 1);
    }, 1000);
  }
  function pause() {
    clearTimeout(timeref.current);
  }
  function reset() {
    setCounter(0);
    setflag(false)
  }
  useEffect(() => {
    if(flag){
      start()
    }else{
      clearTimeout(timeref.current);
    }
  }, [counter]);

  return (
    <div className="App">
      {counter}
      <br />

      <button onClick={start}>start</button>
      <button onClick={pause}>pause</button>
      <button onClick={reset}>reset</button>
    </div>
  );
}




# 4] what is component in react? difference between functional component and class component?
- A component is an independent, reusable bit of code which divides the UI into smaller pieces
- Components are independent and reusable bits of code.
-  They serve the same purpose as JavaScript functions, but work in isolation and return HTML. Components come in two types, Class components and Function components, 

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



# 5] setTimeout and setInterval => 

- The setTimeout() method executes a block of code after the specified time

- The setInterval() method calls a function at specified intervals (in milliseconds).

- setTimeout() calls a passed-in function once after a specified delay, while setInterval() invokes one continuously at a designated time. As JavaScript is a singly-threaded language, both methods allow your code to run asynchronously.

- setTimeout syntax =>

setTimeout(() => {
    console.log("task completed")
}, 5000)  

- setInterval syntax =>

setInterval(() => {
    console.log("priya")
},2000)

setInterval(func,1000)//Runs the "func" function every second

# 6] bubble sort  =>

- Bubble Sort is the simplest sorting algorithm that works by repeatedly swapping the adjacent elements if they are in the wrong order.
- Space Complexity: O(1)
- time complexity: O(n2)

let arr = [3,6,1,9,4,0,35,3,7,4,4,3,2]
let N=arr.length;
for(let p=0; p<N; p++){
    for(let q=0; q<N; q++){
        if(arr[q]>arr[q+1]){
           swap(arr,q, q+1)
        }
    }
}
console.log(arr.join(" ));
function swap(arr,p, q){
    [arr[p], arr[q]]= [arr[q], arr[p]]
}


# 7] selection sort =>

- Selection sort is a sorting algorithm that selects the smallest element from an unsorted list in each iteration and places that element at the beginning of the unsorted list.
- Space Complexity: O(1)
- time complexity: O(n2)

let arr = [3,6,1,9,4,0,35,3,7,4,4,3,2]
let N=arr.length;
for(let p=0; p<N; p++){
    let min =p;
    for(let q=p+1; q<N; q++){
        if(arr[min]>arr[q]){
            min = q; 
        }
    }swap(arr,p, min)
}
console.log(arr.join(" "))
function swap(arr,p, q){
    [arr[p], arr[q]]= [arr[q], arr[p]]
}
# 8] print duplicate element /

# approach 1 =>

 let arr = ["apple", "mango", "apple", 
            "orange", "mango", "mango"]
let N= arr.length;
let obj ={};
for(let p=0; p<N; p++){
    if(!obj[arr[p]]){
        obj[arr[p]]=1;
    }else{
        obj[arr[p]]++;
    }
}
// console.log(obj)
let arr2=[];
for(let k in obj){
    if(obj[k]>1){
       arr2.push(k);
}
}
 console.log(arr2.join(" "))

# 9]  remove duplicate elements 

 # approach1 =>
let arr = [1,7,6,4,5,6,7,1,0]
let newarr= new Set(arr)
console.log(...newarr)

# approach2 =>

let arr = [1,7,6,4,5,6,7,1,0]
let N= arr.length;
let obj ={};
for(let p=0; p<N; p++){
    if(!obj[arr[p]]){
        obj[arr[p]]=1;
    }else{
        obj[arr[p]]++;
    }
}
// console.log(obj)
for(let k in obj){
    console.log(k)
}




