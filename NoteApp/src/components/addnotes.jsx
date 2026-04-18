import { Link } from "react-router-dom";
import useForm from "../hooks/useForm";

function AddNotes({ name, value, onChange }) {

    // we can return null if name=== id, or disable it like below 
    return (
        <input type="text"
            name={name}
            value={value}
            onChange={onChange}
            disabled={name === "id"} // disable button so user can change the id of note
        />

    )
}
function AddNewNote() {

    const { handleChange, handleSubmit, formData, inputFields, error } = useForm();

    return (
        <>

            <Link to="..">Go back</Link>
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
        </>


    )
}

export default AddNewNote;