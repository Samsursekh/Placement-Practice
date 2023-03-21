import "./styles.css";
import { useState } from "react";

export default function App() {
  const [result, setResult] = useState("");

  const handleChange = (e) => {
    setResult(result.concat(e.target.value));
  };

  const handleClear = () => {
    setResult("");
  };

  const handleCalculate = () => {
    setResult(eval(result).toString());
  };

  return (
    <div className="App">
      <h1>Calculator</h1>

      <div>
        <input type="text" placeholder="0" value={result} />
      </div>

      <div id="buttonDiv">
        <input type="button" value="9" onClick={handleChange} />
        <input type="button" value="8" onClick={handleChange} />
        <input type="button" value="7" onClick={handleChange} />
        <input type="button" value="6" onClick={handleChange} />
        <input type="button" value="5" onClick={handleChange} />
        <input type="button" value="4" onClick={handleChange} />
        <input type="button" value="3" onClick={handleChange} />
        <input type="button" value="2" onClick={handleChange} />
        <input type="button" value="1" onClick={handleChange} />
        <input type="button" value="0" onClick={handleChange} />
        <input type="button" value="*" onClick={handleChange} />
        <input type="button" value="/" onClick={handleChange} />
        <input type="button" value="+" onClick={handleChange} />
        <input type="button" value="-" onClick={handleChange} />
        <input type="button" value="Clear" onClick={handleClear} />
      </div>

      <div>
        <input
          type="button"
          placeholder="0"
          value="="
          onClick={handleCalculate}
        />
      </div>
    </div>
  );
}