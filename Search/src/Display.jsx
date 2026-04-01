import { useEffect, useState } from "react";
import useFetch from "./CustomHooks/useFetch";
import useDebounce from "./CustomHooks/useDebounce";

 function Display()
 {
    const [input,setInput]= useState("");
    const [page, setPage] =useState(1);
    const debouncedvalue = useDebounce(input);
    const { data, loading, error, moreDataAvailable } = useFetch(debouncedvalue, 5 ,page)


    useEffect(()=>{
        setPage(1);
    },[debouncedvalue])

    if(error)
    {
        return <h1>An error occurred, please refresh the page</h1>
    }

    if(loading && page===1)
    {
        return <h1>The data is fetching.. Please Wait</h1>
    }

return(
    <>
        <input type="text" placeholder="Search here" value={input} onChange={(e)=>setInput(e.target.value)}/>
        <button onClick={()=>setPage(prev=>prev+1)} disabled={loading || !moreDataAvailable} >Load More</button>

    {
        loading && page!==1 && <p>more data loading...</p>
    }
        { 
            data.map((dat)=>(
                <div key={dat.id}>
                    {dat.id}: {dat.title}

                </div>
            ))
        }

        {
            !loading&&!moreDataAvailable && <p><strong>You have reached the end..</strong></p>
        }
    </>
)

 }
 export default Display;