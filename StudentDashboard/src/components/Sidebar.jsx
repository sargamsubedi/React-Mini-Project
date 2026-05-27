import { NavLink } from "react-router-dom";

function Sidebar() {

    return (
        <div className="sidebar">
            <p>just to imitate sidebar</p>
            <NavLink
                to={"subjects"}
                className={({ isActive }) => (
                    isActive ? "active" : ""
                )}
            >Subjects</NavLink>

            <NavLink
                to={"assignment"}
                className={({ isActive }) => (
                    isActive ? "active" : ""
                )}
            >Assignment</NavLink>

            <NavLink
                to={"exam"}
                className={({ isActive }) => (
                    isActive ? "active" : ""
                )}
            >Exam</NavLink>
        </div>
    )
}

export default Sidebar