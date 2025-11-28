//mounting

// import React from "react";
// import { Component } from "react";

// class App extends Component{

//   constructor(props)
//   {
//     super(props);
//     console.log("constructor Created")
//     this.state={Count:0};
//   }
//   static getDerivedStateFromProps(props,state)
//   {
//     console.log("get derived from props worked")
//     return null;
//   }
//   componentDidMount()
//   {
//     console.log("Component Mounting in Dom")
//   }
//   render(){
//     console.log("render worked success")
//     return(
//       <div>
//         <h2>Count:{this.state.Count}</h2>
//       </div>
//     )
//   }
// }

// export default App;

//updating

// import React from "react";
// import { Component } from "react";

// class App extends Component{

//   constructor(props)
//   {
//     super(props);
//     console.log("constructor Created")
//     this.state={Count:0};
//   }
//   static getDerivedStateFromProps(props,state)
//   {
//     console.log("get derived from props worked")
//     return null;
//   }
//   shouldComponentUpdate(nextprops,nextstate){
//     console.log("Update done succcess");
//     return true;
//   }
//   render(){
//     console.log("render worked success")
//     return(
//       <div>
//         <h2>Count:{this.state.Count}</h2>
//         <button onClick={()=>{
//             this.setState({count:this.state.Count+1})
//         }}>increment</button>
//       </div>
//     )
//   }
// }

// export default App;


//unmounting

import React from "react";
import { Component } from "react";

class App extends Component{

  componentDidMount(){
    console.log("Child mounted");
    this.timer=setInterval(()=>{
      console.log("running interval")
    },1000);
  }
  componentWillUnmount()
  {
    console.log("unmounting");
    clearInterval(this.timer)
  }
  render(){
    console.log("render worked success")
    return(
      <div>
        <h2>Count</h2>
      </div>
    )
  }
}

export default App;