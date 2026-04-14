import { useState } from "react";
import AddNotes from "./components/addnotes";

function Display()
{
    const [fields, setFields]= useState({
  id:'',
  title:"",
  content:"",
  tags: []
})

    const [formData, setFormData]= useState(fields)
    const [notes, setNotes]= useState([]);

console.log(formData);

    return(
        <>
        <h1>this is display section</h1>
        <AddNotes fields={fields} formData={formData} setFormData={setFormData} />

        <h2>notes you added: </h2>

   
        </>
    )

}
export default Display;