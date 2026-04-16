import { useState } from "react"

function EditNote({data,inputFields,editedDataPlacer})
{ 

    const [editData, setEditData] = useState(data);
    // add form with values of index. and when submitted send the values to useform-> editedDataPlacer function
    return(
        <form onSubmit={()=>editedDataPlacer({id:data.id, ...editData})}>
            {
                inputFields.map((field)=>(
                    <div>
                        <input 
                            type="text" 
                            name={field}
                            disabled={field==='id'}
                            value={editData[field]}
                            onChange={(e)=>setEditData(prev=>({...prev,[field]:e.target.value}))}
                    />
                    </div>
                ))
            }


        </form>
    )
}
export default EditNote;