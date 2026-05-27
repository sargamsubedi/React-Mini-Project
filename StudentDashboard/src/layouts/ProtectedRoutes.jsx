import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAuth } from "../store/useAuth"

function ProtectedRoutes(){

    const isLoggedIn = useAuth(state=>state.isLoggedIn);
    const location = useLocation();

    if(!isLoggedIn) {
        
        return <Navigate to={"login"} state={{from: location}}/>}
    else return <Outlet />
    
}

export default ProtectedRoutes