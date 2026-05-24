import { Link } from "react-router-dom"

function Navbar()
{
    return(
        <nav>
            
            <Link to={"/"}>Home</Link>
            <Link to={"subjects"}>Subjects</Link>

        </nav>
    )
}

export default Navbar