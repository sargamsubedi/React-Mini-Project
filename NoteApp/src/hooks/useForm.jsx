import { useState } from "react";

function useForm(fields)
{
    const [formData, setFormData] = useState(fields);
    const [notes, setNotes]= useState([]);
    const [error,setError] = useState("");


    // console.log(formData);
    

    function handleChange(e)
    {
        const {name , value} = e.target;
        setFormData(prev=>({...prev, [name]:value}));
        console.log(formData.title);
        
    }

    function handleSubmit(e)
    {
        e.preventDefault();
        setError(""); // reset error when click addNote
        console.log("handle submit called");

        for (const [key] of Object.entries(fields)) {
            console.log(key);
            
            const value = formData[key];
            console.log(value);
            if(!value.trim())
            {
                setError(`${key} is required`);
                return; // halt further work
            }
            
        }
        setNotes(prev=> [...prev, formData]); // if everything is not valid add form data to notes
        
    }

return {handleChange, handleSubmit, error, notes}
}

export default useForm;