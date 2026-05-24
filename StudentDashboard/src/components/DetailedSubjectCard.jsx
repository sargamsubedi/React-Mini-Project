import { useId } from "react";

function DetailedSubjectCard({subject})
{
    return(
        <>
            {
                Object.entries(subject).map(([Key,value])=>(
                    <h2 key={useId()}>{Key}:{value}</h2>
                ))
            }
        </>
    )
}
export default DetailedSubjectCard;