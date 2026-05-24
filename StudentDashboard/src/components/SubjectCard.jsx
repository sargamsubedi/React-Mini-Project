
function SubjectCard({subject})
{
    return(
        <>
            <h1>Subject: {subject.name}</h1>
            <h2>Teacher: {subject.teacher}</h2>
        </>
    )
}

export default SubjectCard