
function AddNotes({name,value,onChange})
{

    return(
            <input type="text" 
             name={name} 
             value={value} 
             onChange={onChange}
            />

    )
}

export default AddNotes;