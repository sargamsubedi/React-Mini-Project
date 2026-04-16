
function AddNotes({name,value,onChange})
{

    // we can return null if name=== id, or disable it like below 
    return(
            <input type="text" 
             name={name} 
             value={value} 
             onChange={onChange}
             disabled= {name==="id"} // disable button so user can change the id of note
            />

    )
}

export default AddNotes;