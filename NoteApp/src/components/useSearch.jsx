import { useEffect, useState } from "react";

function useSearch(data,query)
{
    const [filteredData, setFilteredData]= useState([])

    useEffect(()=>{

        function filterData()
        {
            setFilteredData([]);
            console.log("filter data called");
            
            // for title
            for (const element of data) {
                console.log(element["title"]);
                
                if(element["title"].includes(query))
                {
                    setFilteredData(prev=>[...prev, element])
                    console.log(filteredData);
                    
                }
                
            }
            // for content
            for (const element of data) {

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
            setFilteredData(data);
        }

    },[data,query])


    return filteredData;
}

export default useSearch;