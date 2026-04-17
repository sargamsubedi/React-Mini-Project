import {useRef, useState } from "react";
import EditNote from "../components/editnotes";
import { useNoteContext } from "../noteContext";


function useForm(fields)
{
    const [formData, setFormData] = useState(fields);
    const {notes, setNotes} = useNoteContext();
    const [error,setError] = useState("");
    const idRef = useRef(0);

    // console.log(formData);
    

    function handleDelete(id)
    {
        const tempNotes = notes.filter((val)=>val.id!==id);
        setNotes(tempNotes);
    }

    function handleEdit(id,inputFields) 
    {
        const Data= notes.find((obj)=>obj.id===id)
        console.log("handleEdit called");
        // add logic to navigate to editnotes 

        <EditNote data={Data} inputFields={inputFields} editedDataPlacer={editedDataPlacer}/>

        
    }

    function handleChange(e)
    {
        const {name , value} = e.target;
        setFormData(prev=>({...prev, [name]:value}));
        // console.log(formData.title);
        
    }

    function editedDataPlacer(data) // here data is a object with id,
    {
        // will get form data with an id , replace the notes[id] content with data

        setNotes(prev=>(prev.map((val)=>(

            val.id===data.id?data:val

        ))))

    }

    function handleSubmit(e)
    {
        e.preventDefault();
        setError(""); // reset error when click addNote
        console.log("handle submit called");

        for (const [key] of Object.entries(fields)) {
            console.log(key);
            if(key==='id') continue;
            const value = formData[key];
            console.log(value);
            if(!value.trim())
            {
                setError(`${key} is required`);
                return; // halt further work
            }
            
        }
        formData.id=idRef.current; // if other things are valid add unique id to the note
        idRef.current+= 1 
        setNotes(prev=> [...prev, formData]); // if everything is not valid add form data to notes
        
    }

return {handleChange, handleSubmit,handleDelete,handleEdit, error, notes, formData}
}

export default useForm;