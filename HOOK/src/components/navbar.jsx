// import { useContext } from "react";
// import { userContext } from "./Usercontext";

// function Navbar(){
//     const name={name}

//     return(
//         <h2>welcome</h2>
//     )
// }

// export default Navbar

import React, {useCallback} from "react";

const Navbar=React.memo(({name})=>{
    console.log("child rendered");

    return(
        <button onClick={name}>Child Button</button>
    )
})

export default Navbar;