import { Navigate, Outlet } from "react-router-dom"
import { useAuth } from "../store/useAuth"

function RoleProtectedRoute()
{
    const role = useAuth(state=>state.role)

    if(role==="admin") return <Outlet />
    else return <Navigate to={"unauthorized"}/>
}
export default RoleProtectedRoute