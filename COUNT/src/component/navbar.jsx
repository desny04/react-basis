import React, { useState } from "react";

function Navbar(){
    const [Count,setCount] = useState(0);

    return(
        <div>
            <h2>count in nav:{Count}</h2>
            <button onClick={()=>{setCount(Count+1)}}>increment</button>
        </div>
    )
}

export default Navbar;