import { useContext } from "react";
import { AuthContext } from "./Container";
import { Navigate } from "react-router-dom";


function Dashboard() {
    const { isLoggedIn } = useContext(AuthContext);
    if (!isLoggedIn) return <Navigate to="/"/>
    return (
        <h1>this is dashboard</h1>
    )

}
export default Dashboard;