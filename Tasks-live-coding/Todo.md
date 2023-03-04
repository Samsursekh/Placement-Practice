# create a todo application functionallity create, delete , edit

import React from "react";
import { useState } from "react";

function Todo() {
  const [input, setInput] = useState("");
  const [todo, setTodo] = useState([]);
  const [edittodo, seteditTodo] = useState(null)
  const [update, setUpdate]  = useState(false)

  function handleAdd(input) {
    if(!input){
        alert("please add some task")
    }
    else if(input && update){

        setTodo(
            todo.map((e) => {
                if(e.id === edittodo){
                    return {...e, title:input} 
                }
                return e 
            })
        )
        setInput("")
        setUpdate(false)
    }

    else{
    const data = {
      title: input,
      id: input.length + Date.now(),
      status: false,
    };
    setTodo([...todo, data]);
    setInput("")
    console.log(todo);
    }
  }
  function handleStatus(id) {
    const toggleData = todo.map((e) =>
      e.id === id ? { ...e, status: !e.status } : e
    );

    setTodo(toggleData);
  }
  function handleDelete(id){
     const delet = todo.filter((e) => {
        return e.id !== id 
     })
     setTodo(delet)
  }
  function handleUpdate(id){
    setUpdate(true)
    const updateItem =  todo.find((e) => {
        return e.id === id
    })
    console.log(updateItem)
    setInput(updateItem.title)
    seteditTodo(updateItem.id)

  }
  return (
    <div>
      <input
        type="text"
        value={input}
        placeholder="add todo"
        onChange={(e) => setInput(e.target.value)}
      />
      {
        update?
        <button onClick={() => handleAdd(input)}>Edit</button>:
         <button onClick={() => handleAdd(input)}>ADD</button>
      }
      <div>
        {todo.map((e) => {
          return (
            <div
              key={e.id}
              style={{
                height: "80px",
                width: "80%",
                margin: "auto",
                display: "flex",
                justifyContent: "space-around",
                border: "2px solid red",
                alignItems: "center",
                marginTop: "5%",
              }}
            >
              <h1>{e.title}</h1>
              <div>
                {e.status ? (
                  <i
                    style={{ fontSize: "20px", color: "green" }}
                    class="fa-solid fa-square-check"
                    onClick={() => handleStatus(e.id)}
                  ></i>
                ) : (
                  <i
                    style={{ fontSize: "20px", color: "red" }}
                    class="fa-regular fa-square"
                    onClick={() => handleStatus(e.id)}
                  ></i>
                )}
              </div>
              <i
                style={{ fontSize: "20px", color: "blue" }}
                class="fa-solid fa-trash"
                 onClick={() => handleDelete(e.id)}
              ></i>

              <i
                style={{ fontSize: "20px", color: "green" }}
                class="fa-solid fa-edit"
                onClick={() => handleUpdate(e.id)}
              ></i>
            </div>
          );
        })}
      </div>
    </div>
  );
}
export default Todo;



Create:
To create a new task in the Todo application, you need to implement a form that allows the user to input the task name and other details such as description, priority, and deadline. When the user submits the form, you can use a POST request to send the task data to the server and add the task to the database. After that, you can update the UI to display the new task on the list of tasks.

Delete:
To delete a task in the Todo application, you need to implement a delete button or icon next to each task on the list. When the user clicks on the delete button, you can use a DELETE request to remove the task from the database. After that, you can update the UI to remove the task from the list of tasks.

Edit:
To edit a task in the Todo application, you need to implement an edit button or icon next to each task on the list. When the user clicks on the edit button, you can display a form that allows the user to update the task details such as name, description, priority, and deadline. When the user submits the form, you can use a PUT request to update the task data in the database. After that, you can update the UI to display the updated task details on the list of tasks.