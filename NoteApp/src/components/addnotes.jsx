
function AddNotes({fields,formData,setFormData})
{

    return(
        <form>
            <input type="text" 
             name="title" 
             value={formData[fields.title]} 
             onChange={(e)=>setFormData(prev=>({...prev, [e.target.name]:e.target.value}))}
            />

        </form>
    )
}

export default AddNotes;