import Navbar from "../components/Navbar"
import { Outlet} from 'react-router-dom'

function MainLayout()
{
    return(
        <>
        <h1>this is main layout</h1>
        <Navbar />
        {/* insert routers here */}


        <Outlet />
        </>

        
    )
}
export default MainLayout