import React, { useState } from 'react'
import { UseDispatch, UseTask } from '../Context/TaskContext'


function ListTask() {
    const tasks = UseTask();    
  return (
    <>
    <div className='mt-4 flex gap-4 flex-col p-4 w-full max-w-sm overflow-hidden'>
       {tasks.map(task => (
        <div className='bg-black/20 p-5 rounded' key={task.id}>
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
            <div className='w-25'>
                <input type="text"
            className='w-full'
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
            </div>
            </>
        )
    } else {
          TaskContent = (
            <>
            <p className='text-xl font-semibold text-neutral-800 overflow-hidden'>{task.text}</p>
            </>
        )
    }
return (
   <div className='flex'>
    <input type="checkbox"
    className='cursor-pointer'
        checked ={task.done}
        onChange={(e) => dispatch({
            type: 'update',
            task: {
                ...task, 
                done: e.target.checked
            }
        })}
        />
     <div className='flex justify-between w-full items-center ml-3 gap-3                    '>
     {TaskContent}
      <div className='flex gap-4'>
         <button 
            onClick={() => setIsEditing(prev => !prev)}
            className='bg-white p-1 rounded font-bold shadow-2xl cursor-pointer'
            >{isEditing ? <span className='text-red-600'>Save</span> : <span>Edit</span>}</button>
     <button
     onClick={() => dispatch({
        type: 'delete',
        id: task.id
     })}
     className='bg-white p-1 rounded font-bold shadow-2xl cursor-pointer'
     >Delete</button>
      </div>
    </div>
   </div>
)
}



export default ListTask