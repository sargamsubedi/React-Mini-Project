import { useEffect, useState } from "react"
import { useNoteContext } from "../noteContext";
import {useParams ,Link, useNavigate} from "react-router-dom";


function EditNote()
{  
    console.log("editnote rendered");
    
    const navigate= useNavigate();
    const inputFields =["id","title","content","tags"]; // temporary implementing here, figure out a way to pass this from display.jsx
    const {id}= useParams();
    const {notes,setNotes}= useNoteContext();
    const dataToEdit = notes.find((val)=>val.id===Number(id));
    const [editedData, setEditedData] = useState(dataToEdit||{});
    // console.log(dataToEdit);
    // console.log(notes);
    console.log(id);
    

useEffect(() => {
    if (notes.length > 0) {
        const found = notes.find((val) => val.id === Number(id));
        if (found) {
            setEditedData(found);
        }
    }
}, [notes, id]);
    
    

    function editedDataPlacer(data) // here data is a object with id,
    {
        // will get form data with an id , replace the notes[id] content with data

        setNotes(prev=>(prev.map((val)=>(

            val.id===data.id?data:val

        ))))
        navigate("/");
    }

    // add form with values of index. and when submitted send the values to useform-> editedDataPlacer function
    return(
        <div>
            <Link to="..">go back</Link>
        <form onSubmit={(e)=>{     
                        e.preventDefault();
                        editedDataPlacer({id:id, ...editedData})
                        }}>
            {
                inputFields.map((field)=>(
                    <div key={field}>
                        <input 
                            type="text" 
                            name={field}
                            disabled={field==='id'}
                            value={editedData[field] || ""}
                            onChange={(e)=>setEditedData(prev=>({...prev,[field]:e.target.value}))}
                            />
                    </div>
                ))

            }
            <button>Update</button>


        </form>
        </div>
    )
}
export default EditNote;