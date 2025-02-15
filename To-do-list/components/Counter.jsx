import React,{useState} from "react";

const Counter=()=>{
    const[count,setCount]=useState(0)
    return(
        <>
        <p>count component={count}</p>
        <h6>number is{count%2==0?"even":"odd"}</h6>
        <button onClick={()=>(setCount(count+1))}>increment</button>
        <button onClick={()=>(setCount(count-1))}>decrement</button>
        </>
    )
}
export default Counter