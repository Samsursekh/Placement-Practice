
# create the timer on codesandbox?  [completed]
# create a stopwatch with start pause and reset button ? [cpmpleted]
# create a from and show thd  data in your database  display in on screen including as well as images?
# create a todo application functionallity create, delete , edit
# create a counter app manage state using redux
# create a array of object ? and map data in react? [completed]
# write a code to genrate a random number[completed]

const randomNumber = Math.floor(Math.random() * 10) + 1;
console.log(randomNumber);

- This code generates a random integer between 1 and 10 using the Math.random() function in JavaScript, which returns a random floating-point number between 0 and 1 (excluding 1). To convert this number to an integer between 1 and 10, we multiply it by 10, round it down to the nearest integer using Math.floor(), and add 1 to ensure that the result is at least 1.

const randomNum = Math.random();
console.log(randomNum);

# print the generate a random number 5 to 9 on click the button?[complete]

<body>
    <button id="button">Click Me</button>

<script>
    let btn = document.getElementById("button");
    btn.addEventListener("click", function(){
        let num= Math.floor(Math.random()*5)+5
        alert(num)
        console.log(num)
    })
</script>

</body>
</html>


# create a react application that generates a random number between 5 to 9 on clicking the button?[complete]
import "./styles.css";
import {useState} from 'react'

export default function App() {
const [num , setNum] = useState(0)

function handleClick(){
  setNum(Math.floor(Math.random()*5)+5)
}

  return (
    <div className="App">
      <h1>NUM : {num}</h1>
      <button onClick={() => handleClick()}>Click Me</button>
    </div>
  );
}

# write a program in which the background color of the input box changes randomly every button Click?
# create a react app such that button click the background color should be  changes randomly?
# create is accordion?
# tic- tac-app 





