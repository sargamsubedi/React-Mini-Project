import { useState } from "react"

function EditNote({data,inputFields})
{   
    const dataId = data.id;
    const [editData, setEditData] = useState(data);
    // add form with values of index. and when submitted send the values to useform-> editedDataPlacer function
    return(
        <form onSubmit={()=>editedDataPlacer({id:dataId, ...editData})}>
            {
                inputFields.map((field)=>(
                    <div>
                        <input 
                            type="text" 
                            name={field}
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