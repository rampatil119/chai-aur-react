import React from "react";

const TodoItem=(props)=>{
    return(
        <li>
        <div className="flex items-center w-full">
            {props.completed?<></>:<input type="checkbox" id="task" />}
            <label htmlFor="task" className="ml-6 text-right">{props.text}</label>
            <p className="text-gray-500  text-lg cursor-pointer ">...</p>
        </div>
    </li>
    
    )
}
export default TodoItem