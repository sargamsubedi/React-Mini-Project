import {useCallback, useEffect, useRef, useState } from "react";
import EditNote from "../components/editnotes";
import { useNoteContext } from "../noteContext";
import { useNavigate } from "react-router-dom";

function useForm()
{
        const fields = {
            id: '',
            title: "",
            content: "",
            tags: []
        };
    const [formData, setFormData] = useState(fields);
    const {notes, setNotes} = useNoteContext();
    const [error,setError] = useState("");
    const idRef = useRef(0);
    const navigate= useNavigate();
    const [inputFields, setInputFields] = useState([]); // array form of fields key

        const getInputFields = useCallback(() => {
        console.log("callback method called");

        for (const [key] of Object.entries(fields)) {
            // if (key === 'id') continue;
            setInputFields(prev => [...prev, key])
        }
    }, [])

        useEffect(() => {

        getInputFields();
    }, [])
    

    function handleDelete(id)
    {
        const tempNotes = notes.filter((val)=>val.id!==id);
        setNotes(tempNotes);
    }



    function handleChange(e)
    {
        const {name , value} = e.target;

        if(name==='tags')
        {
            setFormData(prev=>({...prev, [name]:value.split(" ")}))
            return;
        }

        setFormData(prev=>({...prev, [name]:value}));
        // console.log(formData);
        
    }

    function handleSubmit(e)
    {
        e.preventDefault();

        setError(""); // reset error when click addNote
        console.log("handle submit called");
        // alert("handle submit called")

        console.log(formData);
        
        

        for (const [key] of Object.entries(fields)) {
            console.log(key);
            if(key==='id') continue;
            const value = formData[key];
            console.log(value);

            if(key==="tags")
            {
                if(!value.join(" ").trim())
                {
                    
                setError(`${key} is required`);
                return; // halt further work
                }
                continue;
            }

            if(!value.trim())
            {
                setError(`${key} is required`);
                return; // halt further work
            }
            
        }
        formData.id=idRef.current; // if other things are valid add unique id to the note
        idRef.current+= 1 
        setNotes(prev=> [...prev, formData]); // if everything is valid add form data to notes
        navigate("/"); // if submission sucessful goto display section 
        
    }

return {handleChange, handleSubmit,handleDelete, error, notes, formData,inputFields}
}

export default useForm;