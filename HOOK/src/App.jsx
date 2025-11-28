// import React, { useEffect,useState } from "react";

// function App(){
//   const[users,setUsers]=useState([])

//   useEffect(()=>{
//     async function fetchdata(){
//       const res=await fetch("https://jsonplaceholder.typicode.com/users");
//       const data=await res.json();
//       setUsers(data)
//     }
//     fetchdata();
//   },[])

//   return(
//     <div>
//       <h1>Users List</h1>
//       <ul>
//         {users.map((element)=>(<li>{element.name}</li>))}
//       </ul>
//     </div>
//   )
// }

// export default App



//useContext

// import { userContext } from "react";
// import Navbar from "./components/navbar";

// function App(){
//   const name="Desny";

//   return(
//     <userContext.Provider value={name}>
//       <Navbar></Navbar>
//     </userContext.Provider>
//   )
// }

// export default App;



// // useCallback

// import React from "react";
// import { useCallback,useState } from "react";
// import Navbar from "./components/navbar.jsx"

// function App(){
//   const [Count,setCount]=useState(0);
//   const handleClick=useCallback(()=>{
//     console.log("Clicked value");
//   },[])

//   return(
//     <>
//     <button onClick={()=>{setCount(Count+1)}}>increment</button>
//     <Navbar name={handleClick}></Navbar>
//     <h1>{Count}</h1>
//     </>
//   )
// }

// export default App


//useMemo

// import { useMemo,useState } from "react";

// function App(){
//   const[Num,setNum]=useState(6);
//   const[Show,setShow]=useState(false);
//   const expensive=useMemo(()=>{
//     console.log("function re-render")
//     return(Num*2);
//   },[Num])

//   return(
//     <>
//     <input type="text" value={Num} onChange={(e)=>{
//       setNum(Number(e.target.value))
//     }} />
//     <p>double is {expensive}</p>

//     <button onClick={()=>{setShow(!Show)}}>toggle</button>

//     <p>Show is {Show?"ON" :"OFF" }</p>
//     </>
//   )
// }

// export default App


//useRef

// import { useRef } from "react";
// function App(){
//   const inputRef=useRef(null);

//   function focusInput(){
//     inputRef.current.focus();
//   }

//   return(
//     <div>
//       <input type="text" id="name" ref={inputRef}/>
//       <button onClick={focusInput}>Click Here</button>
//     </div>
//   )
// }

// export default App


import {useMemo, useState, useRef  } from "react";

function App(){
  const inputRef=useRef(0);
  const [count,setCount]=useState(0);

  inputRef.current+=1;

  return(
    <div>
      <h1>count:{count}</h1>
      <h1>rendered:{inputRef.current}</h1>
      <button onClick={()=>{setCount(count+1)}}>submit</button>
    </div>
  )
}

export default App