import React, { useState } from 'react'
import { UseDispatch } from '../Context/TaskContext'
let nextId = 1;

function AddTasks() {
    const [text, setText] = useState('')
   const dispatch = UseDispatch()
   
   
  return (
    <div className='w-full'>
        <div className='flex gap-2  mt-5 w-full p-5'>
            <input type="text"
            value={text}
            onChange={e => setText(e.target.value)}
            placeholder='Enter Text Here...'
            className='bg-amber-300 px-2 py-1 rounded w-full'
            />
            <button 
     onClick={() => {
        if (!text.trim()) return;
        dispatch({
            type: 'added',
            id: nextId++,
            text:text
        })
        setText('');
    }} 
    className='bg-emerald-400 px-2 py-1 rounded cursor-pointer text-xl font-bold hover:bg-emerald-500 duration-300 ease-in-out' 
    >Add</button>
        </div>
    </div>
  )
}

export default AddTasks