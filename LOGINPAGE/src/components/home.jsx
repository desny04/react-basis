import { useNavigate } from "react-router-dom";
import "./home.css"

const Home=()=>{
    const navigate=useNavigate();
    return(
       <>
       <div className="nav-bar">

            <div className="head">
                <h1>ECOM</h1>
            </div>

            <div className="search-bar">
                <input type="text" name="" id="search" placeholder="Search here...."/>
            </div>

            <div className="login">
                <button onClick={()=>{
                    navigate("/login")
                }}>LOGIN</button>
            </div>

       </div>
       </>
    )
}

export default Home;