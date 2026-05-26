import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";

function DashboardLayout()
{
    return(
        <>
        <h1>this is dashboard </h1>
        <div className="dashboard">

            <Sidebar />

            <Outlet />
        </div>
        </>
    )
}

export default DashboardLayout;