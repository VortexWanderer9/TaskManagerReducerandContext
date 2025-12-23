import { createContext, useContext } from "react";

export const TaskContext = createContext([] );
export const TaskDispatchContext = createContext(() => {});

export const UseTask = () =>{
    return useContext(TaskContext)
}

export function UseDispatch() {
    return useContext(TaskDispatchContext)
}