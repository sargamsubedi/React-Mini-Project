import { useRef, useState } from "react";

function Todo()
{
    const [tasks,setTasks] =useState([]);
    const [newTask,setNewTask] =useState("");
    const idref=useRef(0);

    function addTask()
    {   if(newTask==="") return; // dont add task if nothing in input
        setTasks([...tasks,{"id":idref.current, "text":newTask}]);
        idref.current=idref.current+1;

        setNewTask(""); // empty input value

    }

    function removeTask(Id)
    {
        let tempTaskArr = tasks.filter((task)=>(Id!==task.id)
        )
        setTasks(tempTaskArr);
        
        
    }

    return(
            <>
                <input type="text"  value={newTask} placeholder="Add new task" onChange={(e)=>{setNewTask(e.target.value)}} />
                <button onClick={addTask}>Add</button>

                {
                    tasks.map((task,index)=>(
                        <div key={task.id}>
                            <p>{index+1}: {task.text}</p>
                            <button onClick={()=>{removeTask(task.id)
                            }
                            }>Delete</button>
                        </div>
                    ))
                }
            </>


    )
}

export default Todo;