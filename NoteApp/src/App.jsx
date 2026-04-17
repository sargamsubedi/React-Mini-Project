import { Link, NavLink, Outlet, Route, Routes, useParams } from "react-router-dom";
import React, { useState } from "react";
import Display from "./Display";
import { NoteContext } from "./noteContext";
import EditNote from "./components/editnotes";

function App()
{
    const [notes,setNotes]= useState([]);


    return(
        <>
        <NoteContext.Provider value={{notes,setNotes}}>

        <h1>basic note app</h1>
        {/* <Display /> */}
        <Link to="/edit/0">Click here to see id 0 data</Link>

        <Routes>
            <Route path="/" element={<Display />}/>
            <Route path="/edit/:id" element={<EditNote />}/>
            <Route path="*" element={<h1>Path not found</h1>} />

        </Routes>
        </NoteContext.Provider>
        </>
    )
}

export default App;