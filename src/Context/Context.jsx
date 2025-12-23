import { useReducer } from "react";
import { initialTask, TaskReducer } from "./TaskReducer";
import { TaskContext, TaskDispatchContext } from "./TaskContext";

export const TaskProvider = ({children}) =>{
    const [tasks, dispatch] = useReducer(TaskReducer, initialTask)
    return (
        <TaskContext.Provider value={tasks}>
        <TaskDispatchContext.Provider value={dispatch}>
                    {children}
         </TaskDispatchContext.Provider>
        </TaskContext.Provider>
    )
}

export default TaskProvider