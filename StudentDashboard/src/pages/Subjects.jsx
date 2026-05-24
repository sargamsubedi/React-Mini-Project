import { Outlet } from "react-router-dom";
import { useSubjects } from "../data/subject";
import SubjectCard from "../components/SubjectCard";

function Subjects()
{
    const subjects = useSubjects(state=>state.subjects);
    return(
        <div className="subject-container">

        {
            subjects.map(sub=>(
                <div key={sub.id} className="subject">
                    <SubjectCard  subject={sub}/>
                </div>
            ))
        }

        </div>
    )
}
export default Subjects;
