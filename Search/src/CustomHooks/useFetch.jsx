import { useEffect, useRef, useState } from "react";

function useFetch(search,Limit = 5, page) {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [moreDataAvailable, setMoreDataAvailable] = useState(true);





        useEffect(()=>{
            setData([]);
            setMoreDataAvailable(true);

        },[search])

    useEffect(() => {

        const controller = new AbortController();

        async function fetchData() {

            try {
                setLoading(true);
                setError(false);

                const res = await fetch(`https://jsonplaceholder.typicode.com/posts?q=${search}&_limit=${Limit}&_page=${page}`,{signal: controller.signal});

                const result = await res.json();
                console.log(result);

                if (!result.length) {
                    setMoreDataAvailable(false);
                }
                setData(prev => [...prev, ...result]);
            }
            catch(error) {
                if(error.name!=="AbortError")
                    setError(true);
                // console.log("abort error");
                
            }
            finally {
                setLoading(false);

            }

        }
        
        fetchData();

        return ()=>{
            controller.abort()};
        
    }, [Limit, page,search])

    return { data, loading, error, moreDataAvailable };
}

export default useFetch;