# create a stopwatch with start pause and reset button ? using setInterval and clearinterval

import {useState, useRef} from "react"

export default function App(){
  const [count, setCount] = useState(0)
  let id = useRef();
 
  function handleStart(){
    // setCount(count+1);
    id.current = setInterval(() => {
      setCount((prev) => prev+1);
      console.log(count)
    },1000)
  }

  function handlePause(){
   return clearInterval(id.current);
  }

return(
  <div>
      <h1>Stopwatch</h1>
      <h2>Stopwatch : {count}</h2>
      <button onClick={() => handleStart()}>Start</button>
      <button onClick={() => handlePause()}>Pause</button>
      <button onClick={() => setCount(0)}>Reset</button>
  </div>
  )
}

