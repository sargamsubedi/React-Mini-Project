import { useContext } from "react";
import { AuthContext } from "./Container";
import { Navigate } from "react-router-dom";

function Addexpenses()
{
    const [isLoggedIn] =useContext(AuthContext);
    if(!isLoggedIn) return <Navigate to="/" />
    return(
        <h1>Add new expense</h1>
    )
}
export default Addexpenses;