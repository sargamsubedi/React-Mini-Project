
function AddNotes({fields,formData,setFormData,onChange})
{

    return(
            <input type="text" 
             name="title" 
             value={formData[fields.title]} 
             onChange={onChange}
            />

    )
}

export default AddNotes;