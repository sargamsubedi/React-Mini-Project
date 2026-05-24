import { useParams } from "react-router-dom"
import DetailedSubjectCard from "../components/DetailedSubjectCard";
import { useSubjects } from "../data/subject";

function SubjectDetails()
{
    const {id} = useParams();
    const subjects = useSubjects(state=>state.subjects)

    const subject = subjects.find(sub=>sub.id===Number(id))
    return(
        <div className="subject">
            <DetailedSubjectCard subject={subject}/>
        </div>
    )
}

export default SubjectDetails