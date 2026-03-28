import { useContext } from "react";
import { AuthContext } from "./Container";
import { NavLink, useNavigate } from "react-router-dom";

 
 function Navbar()
 {
    const {isLoggedIn,setIsLoggedIn} =useContext(AuthContext);


    if(!isLoggedIn) return null;
    return(
        <>
        {/* remaining to add to in navlink , havent made the component so skipped for now */}
        <NavLink >Home</NavLink> 
        <NavLink >About</NavLink>
        <button
        onClick={()=>{
            setIsLoggedIn(false);
            localStorage.removeItem("auth");
            console.log("logout worked");
            

        }}
        >Logout</button>

        </>

    )

 }
 export default Navbar;