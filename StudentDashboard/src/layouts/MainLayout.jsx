import Navbar from "../components/Navbar"
import {Routes, Route} from 'react-router-dom'
import Home from "../pages/Home"
import Subjects from "../pages/Subjects"
import NotFound from "../pages/NotFound"
import SubjectDetails from "../pages/SubjectDetails"

function MainLayout()
{
    return(
        <>
        <h1>this is main layout</h1>
        <Navbar />
        {/* insert routers here */}


        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/subjects" element={<Subjects />} >

                <Route path=":id" element={<SubjectDetails />} />

            </Route>
            <Route path="*" element={<NotFound />} />
            

        </Routes>
        </>

        
    )
}
export default MainLayout