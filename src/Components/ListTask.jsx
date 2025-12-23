import React, { useState } from 'react'
import { UseDispatch, UseTask } from '../Context/TaskContext'


function ListTask() {
    const tasks = UseTask();    
  return (
    <>
    <div className='mt-4 bg-white/10'>
       {tasks.map(task => (
        <div key={task.id}>
         <ListAll task = {task} />
        </div>
       ))}
    </div>
    </>
  )
}

const ListAll = ({task}) =>{
    const [isEditing, setIsEditing] = useState(false);
    const dispatch = UseDispatch()
    let TaskContent;
    if(isEditing){
        TaskContent = (
            <>
            <input type="text"
            value={task.text}
            onChange={(e) => {
                dispatch({
                    type: 'update',
                    task: {
                        ...task,
                        text: e.target.value
                        
                    }
                })
            }}
            />
            <button 
            onClick={() => setIsEditing(false)}
            >Save</button>
            </>
        )
    } else {
          TaskContent = (
            <>
            <p>{task.text}</p>
            <button 
            onClick={() => setIsEditing(true)}
            >Edit</button>
            </>
        )
    }
return (
    <div className='flex'>
        <input type="checkbox"
        checked ={task.done}
        onChange={(e) => dispatch({
            type: 'update',
            task: {
                ...task, 
                done: e.target.checked
            }
        })}
        />
     {TaskContent}

     <button
     onClick={() => dispatch({
        type: 'delete',
        id: task.id
     })}
     >Delete</button>
    </div>
)
}



export default ListTask