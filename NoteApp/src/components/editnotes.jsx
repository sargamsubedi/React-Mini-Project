import { useState } from "react"
import { useNoteContext } from "../noteContext";
import {useParams } from "react-router-dom";


function EditNote()
{ 
    const inputFields =["id","title","content","tags"]; // temporary implementing here, figure out a way to pass this from display.jsx
    const {id}= useParams();
    const {notes,setNotes}= useNoteContext();
    const dataToEdit = notes.find((val)=>val.id===id);
    const [editedData, setEditedData] = useState(dataToEdit);

    function editedDataPlacer(data) // here data is a object with id,
    {
        // will get form data with an id , replace the notes[id] content with data

        setNotes(prev=>(prev.map((val)=>(

            val.id===data.id?data:val

        ))))

    }

    // add form with values of index. and when submitted send the values to useform-> editedDataPlacer function
    return(
        <form onSubmit={()=>editedDataPlacer({id:id, ...editedData})}>
            {
                inputFields.map((field)=>(
                    <div>
                        <input 
                            type="text" 
                            name={field}
                            // disabled={field==='id'}
                            value={editedData[field] || ""}
                            onChange={(e)=>setEditedData(prev=>({...prev,[field]:e.target.value}))}
                    />
                    </div>
                ))
            }


        </form>
    )
}
export default EditNote;