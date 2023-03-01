# create the timer on codesandbox?

import "./styles.css";
import {useState} from "react"
export default function App() {

  const [time, setTime] = useState(0);
  return (
    <div className="App">
        <h1>TIMER APP</h1>
        <h1>Timer : {time}</h1>
        <button onClick={() => setTime(time+1)} disabled={time===10}>+</button>
        <button onClick={() => setTime(time-1)} disabled={time===1}>-</button>
        <button onClick={() => setTime(0)}>Reset</button>
    
    </div>
  );
}