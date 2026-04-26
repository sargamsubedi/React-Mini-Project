import { useCallback, useEffect, useMemo, useState } from "react";
import AddNotes from "./components/addnotes";
import useForm from "./hooks/useForm";
import useSearch from "./hooks/useSearch";
import { useNavigate } from "react-router-dom";
import { useNoteContext } from "./noteContext";
import useTagFilter from "./hooks/useTagFilter";

function Display() {
    

    const [query,setQuery] = useState("");
    const [selectedTag,setSelectedTag]= useState("0");
    const {notes}= useNoteContext();
    const navigate = useNavigate();

    const { handleChange, handleSubmit, handleDelete,handleEdit, error, formData,inputFields} = useForm();
    const data =useTagFilter(selectedTag);
    const filteredData = useSearch(data,query);

    const [uniqueTags, setUniqueTags]= useState([]);

    // console.log(formData);
    console.log(filteredData);


    useEffect(()=>{

        // here set is a constructor that return array of only unique element and flatmap flats all tags array into single array
        setUniqueTags([...new Set(notes.flatMap(note=>note.tags))])
    },[notes])


    console.log(uniqueTags);
    console.log(selectedTag);
    
    
    return (
        <>
            <h1>this is display section</h1>
            <button onClick={()=>{navigate("/addnote")}}>Add New Note</button>

            <input  
                type="text" 
                value={query} 
                placeholder="Search note here.." 
                onChange={(e)=>{setQuery(e.target.value)}}
            />
        <label>filter by tag..</label>
        <select name="tag"  onChange={(e)=>setSelectedTag(e.target.value)}>
            <option value="0">None</option>
            {
                uniqueTags.map((val)=>(
                    <option value={val}>{val}</option>
                ))
            }

        </select>

            <h2>notes you added: </h2>
            {

                // BUGGGG: FIX THIS here the index doesnt work, change it and make it id because this is the index of filteredData not notes so edit data,and deletedata will malfunction editing and deleting wrong data.. 
                filteredData.length?
                filteredData.map((val, index) => (
                    <div key={val.title}>
                        {

                            inputFields.map((key, ind) => (
                                <div key={ind}>
                                    {
                                        key==="tags"?<p>{key}:{val[key].join(" ")}</p>:
                                    <p>{key}:{val[key]}</p>
                                    }

                                </div>
                            ))
                        }
                        <button onClick={() => handleDelete(val.id)}>Delete</button>
                        <button onClick={() => navigate(`/edit/${val.id}`)}>Edit</button>

                    </div>
                )) : <p>No notes found..</p>
            }


        </>
    )

}
export default Display;