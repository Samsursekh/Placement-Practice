Html- inline ,block element,sementic tags
css- positions, centering div,animation,
javascript- passed by value and reference,data types,hoisting, setTimeout,callbacks, async await, promises
react - Timer, components, hooks,this keyword,react limitations,redux,prop drilling

# React lifeCycleMethods in Component
   # Class Component lifecycle method  example
        import React from "react";

        export class Counter extends React.Component {
            state = {
               num: 0
            };
            componentDidMount() {
              console.log("componentDidMount");
            }
            componentDidUpdate(prevProps, prevState) {
                if(prevState.num){
                console.log("componentDidUpdate")
               }
            }
            componentWillUnmount() {
                console.log("componentWillUnmount");
            }
            handleClick() {
               this.setState((state) => ({ num: state.num + 1 }));
            }

        render() {
        return (
            <>
                <button  onClick={this.handleClick.bind(this)}>increment</button>

                <h3>{this.state.num}</h3>
            </>
        );
        }
        }
// to know about console unmount msg call this component in other component and remove 
        
# Function Component lifecycle method example
import react, { useEffect, useState } from "react";

export function FunctionalLifeCycle() {
  const [num, setNum] = useState(0);
  useEffect(() => {
    console.log("mount");
  }, []);
  useEffect(() => {
    if (num) {
      console.log("did updated");
    }
    return () => {
      console.log("unmount");
    };
  }, [num]);
  return (
    <>
      <h3>{num}</h3>
      <button onClick={() => setNum(num + 1)}>increment</button>
    </>
  );
}





