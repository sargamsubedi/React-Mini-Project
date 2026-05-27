import { Link } from "react-router-dom";

function Sidebar()
{

    return(
        <div className="sidebar">
            <p>just to imitate sidebar</p>
            <Link to={"subjects"}>Subjects</Link>
            <Link to={"assignment"}>Assignment</Link>
            <Link to={"exam"}>Exam</Link>
        </div>
    )
}

export default Sidebar