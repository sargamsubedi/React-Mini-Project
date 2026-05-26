
import MainLayout from './layouts/MainLayout'
import './App.css'
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Subjects from './pages/Subjects'
import SubjectDetails from './pages/SubjectDetails'
import NotFound from './pages/NotFound'
import Home from './pages/Home'
import Profile from './pages/Profile'
import DashboardLayout from './layouts/DashboardLayout'
function App() {

  return (
<BrowserRouter>
   <h1>student dashboard</h1>

           <Routes>

            <Route path="/" element={<MainLayout />} > 
            
              <Route path='/' element= {<Home />} />

              <Route path="profile" element={<Profile />} />

              <Route path="dashboard" element={<DashboardLayout />} >

                <Route path='subjects' element={<Subjects />}/>

                <Route path="subjects/:id" element={<SubjectDetails />} />
              </Route>
            </Route>

            <Route path="*" element={<NotFound />} />
            

        </Routes>

</BrowserRouter>
  )
}

export default App
