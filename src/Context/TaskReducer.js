export const initialTask =[
    {id: 0, text: "Complete Development Task", done: false}
]
export const TaskReducer = (tasks, action)  => {
    console.log(action);
    
    switch(action.type) {
        case 'added' : {
            return [...tasks, {
                id: action.id,
                text: action.text,
                done: false
            }]
        }
        case 'update' : {
            return tasks.map((t) => 
                  t.id === action.task.id ? action.task: t
            )
        }
        case 'delete': {
            return tasks.filter(t => t.id !== action.id)
        }
        default: {
                 throw new Error('Unknown action: ' + action.type);
        }
    }
}
/* 
export const initialTask =[
    {id: 0, text: "Complete Development Task", done: false}
]
export const TaskReducer = (tasks, action)  => {
    switch(action.type) {
        case 'added' : {
            return [...tasks, {
                id: action.id,
                text: action.text,
                done: false
            }]
        }
        case 'update' : {
            return tasks.map((t) => 
                  t.id === action.id ? { ...t, ...action.updates } : t
            )
        }
        case 'delete': {
            return tasks.filter(t => t.id !== action.id)
        }
        default: {
                 throw new Error('Unknown action: ' + action.type);
        }
    }
} */