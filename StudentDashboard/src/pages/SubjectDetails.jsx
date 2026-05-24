import { useParams } from "react-router-dom"

function SubjectDetails()
{
    const {id} = useParams();
    return(
        <h1>you are trying to access subject with id {id}</h1>
    )
}

export default SubjectDetails