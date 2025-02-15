import React from "react";

const Header=(props)=>{
    return(
        <h1 className="text-lg font-bold ">
           {props.title}
        </h1>
    )
}
export default Header