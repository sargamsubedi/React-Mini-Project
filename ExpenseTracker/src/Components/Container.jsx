import { createContext, useState } from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Login from "./login";
import Dashboard from "./dashboard";
import Navbar from "./Navbar";
import Addexpenses from "./Addexpenses";

export const AuthContext=createContext();
export const ExpenseContext =createContext();

function Container()
{
    const [isLoggedIn,setIsLoggedIn]=useState(localStorage.getItem("auth")==="true");
    const [expenses,setExpenses] = useState(JSON.parse(localStorage.getItem("expenses"))||[]);
    console.log("container mounted");
    
    return(
        <BrowserRouter>
        <AuthContext.Provider value={{isLoggedIn,setIsLoggedIn}}>
        <ExpenseContext.Provider value={{expenses,setExpenses}}>

        <Navbar />

        <Routes>
            <Route path="/" element={<Login />}/>
            <Route path="/dashboard" element={<Dashboard />}/>
            <Route path="/addexpense" element={<Addexpenses />}/>
            <Route path="*" element={<h1>No path found</h1>}/>

        </Routes>
        </ExpenseContext.Provider>

    </AuthContext.Provider>
        </BrowserRouter>

)

}

export default Container;