import { useEffect, useState } from "react";

function useSearch(data,query)
{
    const [filteredData, setFilteredData]= useState([])

    useEffect(()=>{

        function filterData()
        {
            // for title
            for (const element of data) {

                if(element["title"].includes(query))
                {
                    setFilteredData(prev=>[...prev, element])
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

    },[data,query])


    return filteredData;
}