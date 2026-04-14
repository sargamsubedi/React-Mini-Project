import { useState } from "react";
import AddNotes from "./components/addnotes";
import useForm from "./hooks/useForm";

function Display()
{
    const [fields, setFields]= useState({
  id:'',
  title:"",
  content:"",
  tags: []
})

    const [formData, setFormData]= useState(fields)
    const {handleChange, handleSubmit, error, notes} = useForm(fields);

// console.log(formData);

    return(
        <>
        <h1>this is display section</h1>
        <form onSubmit={handleSubmit}>
        <AddNotes 
            fields={fields} 
            formData={formData} 
            setFormData={setFormData}
            onChange = {handleChange} />
            <button>Add</button>
        </form>
        {
            error && <p>{error}</p>
        }
        <h2>notes you added: </h2>

   
        </>
    )

}
export default Display;