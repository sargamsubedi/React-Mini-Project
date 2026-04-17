import React, { useState } from "react";
import Display from "./Display";
import { NoteContext } from "./noteContext";

function App()
{
    const [notes,setNotes]= useState([]);


    return(
        <>
        <NoteContext.Provider value={{notes,setNotes}}>

        <h1>basic note app</h1>
        <Display />
        </NoteContext.Provider>
        </>
    )
}

export default App;