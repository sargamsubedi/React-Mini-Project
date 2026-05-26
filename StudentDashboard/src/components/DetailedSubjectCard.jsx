import { useId } from "react";
import { Link } from "react-router-dom";

function DetailedSubjectCard({subject})
{
    return(
        <>  
            <Link to={"../subjects"}>Go back</Link>
            {
                Object.entries(subject).map(([Key,value])=>(
                    <h2 key={useId()}>{Key}:{value}</h2>
                ))
            }
        </>
    )
}
export default DetailedSubjectCard;