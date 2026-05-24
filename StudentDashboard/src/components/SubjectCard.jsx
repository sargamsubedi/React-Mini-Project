import { Link } from "react-router-dom"

function SubjectCard({subject})
{
    return(
        <>
            <h1>Subject: {subject.name}</h1>
            <h2>Teacher: {subject.teacher}</h2>
            <Link to={`${subject.id}`} >See more</Link>
        </>
    )
}

export default SubjectCard