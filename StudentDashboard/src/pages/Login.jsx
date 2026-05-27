import { useLocation, useNavigate } from "react-router-dom"
import { useAuth } from "../store/useAuth"

function Login()
{   
    
    const location = useLocation();
    const logIn = useAuth(state=>state.logIn)
    const navigate = useNavigate();
    function handleLogIn()
    {
        // if from is null navigate to home
    const from = location.state?.from?.pathname  || "/"

        logIn();
        navigate(from ,{replace:true}) // replace :true if for Replace the current entry in the history stack instead of pushing a new one (so when user back it doesnt goto login page again )
    }
    return(
        <>
        <p>right now only login button update it to login form</p>
        <button onClick={handleLogIn}>logIn</button>
        </>
    )
}

export default Login