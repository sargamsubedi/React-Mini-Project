import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAuth } from "../store/useAuth"

function ProtectedRoutes(){

    const isLoggedIn = useAuth(state=>state.isLoggedIn);

    if(!isLoggedIn) {
        const location = useLocation();
        return <Navigate to={"login"} state={{from: location}}/>}
    else return <Outlet />
    
}

export default ProtectedRoutes