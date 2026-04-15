import { useCallback, useEffect, useState } from "react";
import AddNotes from "./components/addnotes";
import useForm from "./hooks/useForm";

function Display() {
    const [fields, setFields] = useState({
        id: '',
        title: "",
        content: "",
        tags: []
    })
    const [inputFields, setInputFields] = useState([]);

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

    const { handleChange, handleSubmit,handleDelete, error, notes, formData } = useForm(fields);

    // console.log(formData);
    console.log(notes);


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
            <h2>notes you added: </h2>
            {
                notes.map((val,index) => (
                    inputFields.map((key, ind) => (
                        <div key={ind}>

                            <p>{key}:{val[key]}</p>
                            <button onClick={()=>handleDelete(index)}>Delete</button>

                        </div>
                    ))
                ))
            }


        </>
    )

}
export default Display;