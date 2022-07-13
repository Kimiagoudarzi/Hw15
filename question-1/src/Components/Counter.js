import React, { useState } from "react";
import './Style.css';

function Counter(){
    const [count,setCount] = useState(0);
    function Inc(){
        setCount(count+1);
    }
    function Dec(){
        setCount(count-1);
    }
    return(
        <div className="main">
            <h1 >Counter App</h1>
            <div>{count}</div>
            <div className="buttons">
                <button className="btn-2" onClick={Dec}>Decrease</button>
                <button className="btn-1" onClick={Inc}>Increase</button>
            </div>
        </div>
    )
}
export default Counter;