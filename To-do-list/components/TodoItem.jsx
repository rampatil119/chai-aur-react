import React from "react";

const TodoItem=()=>{
    return(
        <li>
        <div className="flex items-center w-full">
            <input type="checkbox" id="task" />
            <label htmlFor="task" className="ml-6 text-right">Eat</label>
            <p className="text-gray-500  text-lg cursor-pointer ">...</p>
        </div>
    </li>
    
    )
}
export default TodoItem