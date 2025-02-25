import React, { useState } from 'react';


function Counter(){
    const [count,setCount]=useState(1);

    const increment=()=>setCount(count+1);
    const decrement=()=>setCount(count-1);
    const buttonStyle = {
        backgroundColor: '#4CAF50', // Green background
        color: 'white',             // White text
        padding: '10px 20px',       // Padding around the text
        border: 'none',             // Remove border
        borderRadius: '5px',        // Rounded corners
        fontSize: '16px',           // Font size
        cursor: 'pointer',         // Pointer cursor on hover
        margin: '5px',              // Space between buttons
      }

      const buttonStyleDecrement={
        ...buttonStyle,
        backgroundColor:"#f44336"
      }
    return(

<>
<h1>Counter{count}</h1>
<button onClick={increment} style={buttonStyle}></button>
<button onClick={decrement} style={buttonStyleDecrement}></button>

</>
    )
}
export default Counter