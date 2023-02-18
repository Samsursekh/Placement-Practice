
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