import React, { useEffect,useState } from "react";
import "./App.css"

function App(){
  const[products,setProducts]=useState([])

  useEffect(()=>{
      async function fetchdata(){
      const res=await fetch("https://dummyjson.com/products");
      const data=await res.json();
      setProducts(data.products)
    }
    fetchdata();
  },[])

  return(
    <div>
    <div className="nav-bar">

      <div className="head">
        <h1>ECOM</h1>
      </div>

      <div className="search-bar">
        <input type="text" id="search" placeholder="search here....."/>
      </div>

      <div className="login">
        <button>LOGIN</button>
      </div>
    </div>

    <div className="main-cards" id="contain">
      {products.map((element)=>(
        <div className="card" key={element.id}>

        <div className="image">
          <img src={element.images[0]} alt=""/>
        </div>
        

        <div className="item-name">
          <p>{element.title}</p>
        </div>

        <div className="category">
          <p>{element.category}</p>
        </div>

        <div className="price">
          <p>{element.price}</p>
        </div>
      </div>
      ))}
    </div>
    </div>
  )
}

export default App