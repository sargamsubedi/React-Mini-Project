import { useCallback, useEffect, useState } from "react";
import AddNotes from "./components/addnotes";
import useForm from "./hooks/useForm";
import useSearch from "./components/useSearch";

function Display() {
    const [fields, setFields] = useState({
        id: '',
        title: "",
        content: "",
        tags: []
    })
    const [inputFields, setInputFields] = useState([]);
    const [query,setQuery] = useState("");

    const getInputFields = useCallback(() => {
        console.log("callback method called");

        for (const [key] of Object.entries(fields)) {
            if (key === 'id') continue;
            setInputFields(prev => [...prev, key])
        }
    }, [])

    useEffect(() => {

        getInputFields();
    }, [])


    // const [formData, setFormData] = useState(fields)

    const { handleChange, handleSubmit, handleDelete,handleEdit, error, notes, formData } = useForm(fields);
    const filteredData =useSearch(notes,query)

    // console.log(formData);
    // console.log(notes);


    return (
        <>
            <h1>this is display section</h1>
            <form onSubmit={handleSubmit}>

                {
                    inputFields.map((inputField, index) => (
                        <div key={index}>
                            <label >Enter {inputField} : </label>
                            <AddNotes
                                name={inputField}
                                value={formData[inputField]}
                                onChange={handleChange}
                            />
                        </div>
                    ))
                }

                <button>Add</button>
            </form>
            {
                error && <p>{error}</p>
            }

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
                    <div key={index}>
                        {

                            inputFields.map((key, ind) => (
                                <div key={ind}>

                                    <p>{key}:{val[key]}</p>

                                </div>
                            ))
                        }
                        <button onClick={() => handleDelete(index)}>Delete</button>
                        <button onClick={() => handleEdit(index,inputFields)}>Edit</button>

                    </div>
                )) : <p>No notes found..</p>
            }


        </>
    )

}
export default Display;