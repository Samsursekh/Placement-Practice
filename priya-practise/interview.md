# how  event loop  works and node.js works?
- Event loop is an endless loop, which waits for tasks, executes them and then sleeps until it receives more tasks. The event loop executes tasks from the event queue only when the call stack is empty i.e. there is no ongoing task. The event loop allows us to use callbacks and promises

- 1)In event loop all application code that is inside callback functions.(non-top-level code)

- 2)Node js is event-driven architecture.event emitted,event loops picks them up and callbacks are called.

- ex: ==> 

const funct2 = () => {
    setTimeout(() => {
        console.log("func2 is starting")
    }, 3000);
}

const func1 = () => {
    console.log('func1 is starting')
    funct2();
    console.log("func1 is ending");
}

func1();

- output ==> 
- func1 is starting
- func1 is ending
- func2 is starting

#  digram of event loop 

- 1] excution stack / call stack
- create a global wxcution context

- 2] web API 
- settimeout()
- DOM
- AJAX/API Calls

- 3] message queue

- 4] event loop

# what is the promise and give one example?

What is Promise?
- Promise object is a placeholder for certain period of time until we receive value from asynchronous operation.

- A container for a future value.

- A Promise is an object representing the eventual completion or failure of an asynchronous operation.

