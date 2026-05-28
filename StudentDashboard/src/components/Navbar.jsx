import { Link, useNavigate } from "react-router-dom"
import { useAuth } from "../store/useAuth"

function Navbar()
{
    const isLoggedIn = useAuth(state=> state.isLoggedIn)
    const logOut = useAuth(state=> state.logOut)
    const role = useAuth(state=> state.role)
    const navigate = useNavigate();
    return(
        <nav>

            <Link to={"/"}>Home</Link>
            <Link to={"dashboard"}>Dashboard</Link>
            <Link to={"profile"}>Profile</Link>

            {
                role==="admin" && <Link to={"addnewsubject"}>Add New Subject</Link>
            }

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