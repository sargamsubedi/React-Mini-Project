
import MainLayout from './layouts/MainLayout'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Subjects from './pages/Subjects'
import SubjectDetails from './pages/SubjectDetails'
import NotFound from './pages/NotFound'
import Home from './pages/Home'
import Profile from './pages/Profile'
import DashboardLayout from './layouts/DashboardLayout'
import Assignment from './pages/Assignment'
import Exam from './pages/Exam'
import Login from './pages/Login'
import ProtectedRoutes from './layouts/ProtectedRoutes'
import RoleProtectedRoute from './layouts/RoleProtectedRoute'
import AddNewSubject from './pages/AddNewSubject'
import Unauthorized from './pages/Unauthorized'
function App() {

  return (
    <BrowserRouter>
      <h1>student dashboard</h1>

      <Routes>

        <Route element={<MainLayout />} >

          {/* access to anyone loggedin and non-loggedin users */}
          <Route path='/' element={<Home />} />

          <Route path='login' element={<Login />} />

          {/* access to logged in users only with any role */}
          <Route element={<ProtectedRoutes />}>

            <Route path="profile" element={<Profile />} />

            <Route path="unauthorized" element={<Unauthorized />} />

            <Route path="dashboard" element={<DashboardLayout />} >

              <Route path='subjects' element={<Subjects />} />

              <Route path="subjects/:id" element={<SubjectDetails />} />

              <Route path='assignment' element={<Assignment />} />

              <Route path='exam' element={<Exam />} />


            </Route>

              {/* for admin access only */}

            <Route element={<RoleProtectedRoute />}>

              <Route path='addnewsubject' element={<AddNewSubject />} />
            </Route>
          </Route>
        </Route>

        <Route path="*" element={<NotFound />} />


      </Routes>

    </BrowserRouter>
  )
}

export default App
