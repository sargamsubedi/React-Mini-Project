
function AddNotes({name,value,onChange})
{

    return(
            <input type="text" 
             name={name} 
             value={value} 
             onChange={onChange}
             disabled= {name==="id"}
            />

    )
}

export default AddNotes;