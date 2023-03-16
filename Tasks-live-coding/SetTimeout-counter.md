import "./styles.css";
import { useState, useRef, useEffect } from "react";

export default function App() {
  const [count, setCount] = useState(0);
  const [flag, setFlag] = useState(false);
  let id = useRef();

  function handleStart() {
    clearTimeout(id.current);
    setFlag(true);
    id.current = setTimeout(() => {
      setCount(count + 1);
    }, 1000);
  }

  function handlePause() {
    clearTimeout(id.current);
  }

  function handleRestart() {
    setCount(0);
    handleStart();
  }

  useEffect(() => {
    if (flag) {
      handleStart();
    }
  }, [count]);

  return (
    <div className="App">
      <h1>stopwatch</h1>
      <h1>{count}</h1>
      <button onClick={() => handleStart()}>Start</button>
      <button onClick={() => handlePause()}>Pause</button>
      <button onClick={() => handleRestart()}>Restart</button>
    </div>
  );
}
