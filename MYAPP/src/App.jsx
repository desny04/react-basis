import React from "react"
import'./App.css'
import Navbar from './components/navbar.jsx';

function App(){
    return(
      <div className="App">
        <Navbar />
        <h1>Welcome to myReact App</h1>
        <p>This is a simple React application</p>
      </div>
    );
}

export default App;
