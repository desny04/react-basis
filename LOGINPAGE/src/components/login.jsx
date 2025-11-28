import { useNavigate } from "react-router-dom";
import "./login.css"

const Login=()=>{
    const navigate=useNavigate();
    return(
        <>
  
      <div className="login-card">

      <div className="head">
        <p>LOGIN</p>      
      </div>

      <div className="username">
        <input type="text" placeholder="Username" />
      </div>

      <div className="pwd">
        <input type="text" placeholder="Password"/>
      </div>

      <div className="forget">
        <p><a>Forget Password?</a></p>
      </div>

      <div className="login-btn">
        <button>Login</button>
      </div>

      <div className="create">
        <p>Don't have an account?</p>
        <p><a>Create one</a></p>
      </div>
    
    </div>
  
    </>
    )
}

export default Login;