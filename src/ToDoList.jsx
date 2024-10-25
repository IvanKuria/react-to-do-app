import React, { useState } from 'react'

function ToDoList() {

    const [tasks, setTasks] = useState([])
    const [newTask, setNewTask] = useState("")

    
    function handleInputChange(event){  // will be used in the text box
        setNewTask(event.target.value)
    }

    function addTask(){

        if(newTask.trim() !== ""){
            setTasks(t => [...t, newTask])
            setNewTask("")
        }else{
            alert("Please Enter a Task!")
        }
        
        

    }
    
    function deleteTask(index){  // takes in the index of the list item in order to filter
        const updatedTasks = tasks.filter((_, i) => i !== index)
        setTasks(updatedTasks)
    }

    function moveTaskUp(index) {
        if (index > 0) {
            const updatedTasks = [...tasks];
            // Swap the current task with the one above it
            [updatedTasks[index], updatedTasks[index - 1]] = [updatedTasks[index - 1], updatedTasks[index]];
            setTasks(updatedTasks);
        }
    }

    function moveTaskDown(index){     // moves the task down based off its index
        if (index < tasks.length - 1) {
            const updatedTasks = [...tasks];
            // Swap the current task with the one below it
            [updatedTasks[index], updatedTasks[index + 1]] = [updatedTasks[index + 1], updatedTasks[index]]
            setTasks(updatedTasks);
        }
    }


  return (
    <>
        <div className="to-do-list">
            <h1>To-Do-List</h1>
            <div>
                <input
                    type="text"
                    placeholder="Enter a task..."
                    value={newTask}
                    onChange={handleInputChange}
                
                />
                <button 
                    className="add-button"
                    onClick={addTask}
                    >Add</button>
            </div>
            <ol>
                {tasks.map((task, index) => 
                    <li key={index}>
                        <span className="text">{task}</span>
                        <button
                            className="delete-button"
                            onClick={() => deleteTask(index)}>
                            Delete
                        </button>
                        <button
                            className="move-button"
                            onClick={() => moveTaskUp(index)}>
                            ☝️
                        </button>
                        <button
                            className="move-button"
                            onClick={() => moveTaskDown(index)}>
                            👇
                        </button>
                    </li>
                )}
            </ol>
        </div>
    </>
  )
}

export default ToDoList