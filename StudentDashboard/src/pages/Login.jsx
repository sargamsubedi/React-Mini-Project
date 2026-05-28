import { useLocation, useNavigate } from "react-router-dom"
import { useAuth } from "../store/useAuth"

function Login()
{   
    
    const location = useLocation();
    const logIn = useAuth(state=>state.logIn)
    const navigate = useNavigate();
    function handleLogIn(role)
    {
        // if from is null navigate to home
    const from = location.state?.from?.pathname  || "/"

        logIn(role);
        navigate(from ,{replace:true}) // replace :true if for Replace the current entry in the history stack instead of pushing a new one (so when user back it doesnt goto login page again )
    }
    return(
        <div className="login-form">
            <p>just dummy text field for now </p>
            <label>Username</label>
        <input type="text"  />
            <label>Password</label>
        <input type="password"  />
        <button onClick={()=>handleLogIn("student")}>logIn as Student</button>
        <button onClick={()=> handleLogIn("admin")}>logIn as Admin</button>
        </div>
    )
}

export default Login