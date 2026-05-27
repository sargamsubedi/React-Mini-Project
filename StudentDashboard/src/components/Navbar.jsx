import { Link, useNavigate } from "react-router-dom"
import { useAuth } from "../store/useAuth"

function Navbar()
{
    const isLoggedIn = useAuth(state=> state.isLoggedIn)
    const logOut = useAuth(state=> state.logOut)
    const navigate = useNavigate();
    return(
        <nav>

            <Link to={"/"}>Home</Link>
            <Link to={"dashboard"}>Dashboard</Link>
            <Link to={"profile"}>Profile</Link>
            {
                isLoggedIn ? 
                <button 
                    onClick={()=>{
                        logOut();
                        navigate("/")
                    }}>Logout</button>
                 :
                 <button 
                    onClick={()=>{
                    
                        navigate("login")
                    }}>LogIn</button>
            }

        </nav>
    )
}

export default Navbar