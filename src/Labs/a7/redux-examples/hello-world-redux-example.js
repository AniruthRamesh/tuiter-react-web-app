import React from "react";
import { useSelector } from "react-redux";

const HelloReduxExample = ()=>{
    const message = useSelector((state)=>state.hello.message)
    return(
        <div className="container">
            <h3>{message}</h3>
        </div>
    )
}

export default HelloReduxExample