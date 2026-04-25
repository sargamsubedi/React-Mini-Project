import { useCallback, useEffect, useState } from "react";
import AddNotes from "./components/addnotes";
import useForm from "./hooks/useForm";
import useSearch from "./components/useSearch";
import { useNavigate } from "react-router-dom";

function Display() {

    const [query,setQuery] = useState("");
    const navigate = useNavigate();
    // const [formData, setFormData] = useState(fields)

    const { handleChange, handleSubmit, handleDelete,handleEdit, error, formData,inputFields} = useForm();
    const filteredData =useSearch(query)

    // console.log(formData);
    // console.log(filteredData);


    return (
        <>
            <h1>this is display section</h1>
            <button onClick={()=>{navigate("/addnote")}}>Add New Note</button>

            <input  
                type="text" 
                value={query} 
                placeholder="Search note here.." 
                onChange={(e)=>{setQuery(e.target.value)}}
            />

            <h2>notes you added: </h2>
            {

                // BUGGGG: FIX THIS here the index doesnt work, change it and make it id because this is the index of filteredData not notes so edit data,and deletedata will malfunction editing and deleting wrong data.. 
                filteredData.length?
                filteredData.map((val, index) => (
                    <div key={val.id}>
                        {

                            inputFields.map((key, ind) => (
                                <div key={ind}>

                                    <p>{key}:{val[key]}</p>

                                </div>
                            ))
                        }
                        <button onClick={() => handleDelete(val.id)}>Delete</button>
                        <button onClick={() => navigate(`/edit/${val.id}`)}>Edit</button>

                    </div>
                )) : <p>No notes found..</p>
            }


        </>
    )

}
export default Display;