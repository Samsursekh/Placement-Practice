// You are required to fetch data from the following APIs:

// 1. Fetch all the posts using: https://jsonplaceholder.typicode.com/posts/.
// 2. Show only the post which has an id of 22.
// 3. Fetch the count of comments from https://jsonplaceholder.typicode.com/comments that correspond to the post with an iD of 22 (which can be determined by checking the postId field).

// Output will be in following format
// {
// ""id"": 22,
// ""title"": ""..."",
// ""body"": ""..."",
// ""countOfComments"": XX
// }

// Write a Node.js program that implements this functionality, and submit the code as your solution.This question is required. *
// You may use any library of your choosing (such as Axios, node-http, or something else) to complete this task, as long as the objective is met.


import "./styles.css";
import { useState} from 'react'

export default function App() {

  const [data, setData] = useState([])

  async function getData(){
    let res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
    let data = await res.json();
    console.log(data)
     setCount(data)
  }


  getData()

  return (
    <div className="App">
      <div id="container">
        {
          count?.map((e,) =>  <div>
              <p>{e.title}</p>
              <p>{e.id}</p>
              <p>{e.body}</p>
              </div>
          )
        }

        </div>
      
    </div>
  );
}
