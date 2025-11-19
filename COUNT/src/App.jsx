import { Component } from "react";
import Navbar from "./component/navbar";
import './App.css'

class App extends Component{
  constructor(props){
    super(props);
    this.state={
      count:0,
    }
  }

  render(){
    return(
      <>
      <div>
        <h2>count:{this.state.count}</h2>
        <button onClick={()=>{
          this.setState({count:this.state.count+1})
        }}>increment</button>
      </div>
      <Navbar></Navbar>
      </>
    )
  }
}

export default App;