import { useContext, useState } from "react"
import { AuthContext } from "./Container";
import { useNavigate } from "react-router-dom";

function Login()
{
    const [username,setUsername]=useState("");
    const [password,setPassword]=useState("");
    const {isLoggedIn,setIsLoggedIn} =useContext(AuthContext);
    const navigate =useNavigate();

    function Validate()
    {
        if(username==="admin" && password==="123")
        {
            setIsLoggedIn(true);
            localStorage.setItem("auth","true");
            navigate("/dashboard");

        }
        else
        {
            setIsLoggedIn(false);
            localStorage.removeItem("auth");
            alert("Wrong login info");

        }
    }
    
    return(
        <>
            <input type="text" 
                placeholder="Enter Username" 
                value={username} 
                onChange={(e)=>{setUsername(e.target.value)}}
            />
                <input 
                    type="password" 
                    placeholder="Enter Password" 
                    value={password} onChange={(e)=>{setPassword(e.target.value)}}
                />

            <button onClick={Validate}>Login</button>
        </>
    )
}
export default Login;