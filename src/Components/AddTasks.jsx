import React, { useState } from 'react'
import { UseDispatch } from '../Context/TaskContext'
let nextId = 1;

function AddTasks() {
    const [text, setText] = useState('')
   const dispatch = UseDispatch()
   
   
  return (
    <div>
        <div className='flex gap-10 mt-5'>
            <input type="text"
            value={text}
            onChange={e => setText(e.target.value)}
            placeholder='Enter Text Here...'
            className='bg-blue-500 px-2 py-1 rounded'
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
    }}>Add</button>
        </div>
    </div>
  )
}

export default AddTasks