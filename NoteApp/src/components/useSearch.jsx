import { useEffect, useState } from "react";
import { useNoteContext } from "../noteContext";

function useSearch(query)
{
    const [filteredData, setFilteredData]= useState([])
    const {notes}=useNoteContext();

    useEffect(()=>{

        function filterData()
        {
            setFilteredData([]);
            console.log("filter data called");
            
            // for title
            for (const element of notes) {
                console.log(element["title"]);
                
                if(element["title"].includes(query))
                {
                    setFilteredData(prev=>[...prev, element])
                    console.log(filteredData);
                    
                }
                
            }
            // for content
            for (const element of notes) {

                if(element["content"].includes(query))
                {
                    // add logic if the object already exist due to title , do not add it 
                    setFilteredData(prev=>[...prev, element])
                }
                
            }
        }

        // calling filter function only if query has value
        console.log("usesearch called: ");
        
        if(query.trim()){
            // console.log(query.trim());
            
            filterData();
        }
        else{
            setFilteredData(notes);
        }

    },[notes,query])


    return filteredData;
}

export default useSearch;