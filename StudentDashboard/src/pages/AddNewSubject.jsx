import { useState } from "react";
import { useSubjects } from "../data/subject";

function AddNewSubject()
{
    const fields= useSubjects(state=>state.fields);
    const addSubject= useSubjects(state=>state.addSubject);
    const [formData, setFormData]= useState({})
    return(
        <>
        <h1>this page is for admin access only . Here admin can add new subject</h1>
        <form onSubmit={(e)=>{
            
            e.preventDefault()
            addSubject(formData)
            setFormData({})
            
        }}>
            {
                fields?.map(field=>(
                    <div key={field}>
                        <label>{field}: </label>
                        <input type="text" name={field} value={formData[field] || ""} 
                            onChange={(e)=>setFormData({...formData, [field]:e.target.value})}
                        />
                    </div>
                ))
            }
            <button type="submit">Add Subject</button>
        </form>
        </>

    )
}
export default AddNewSubject;