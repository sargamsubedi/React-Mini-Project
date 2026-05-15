
function FilterButtons({setFilterMode})
{
    return(
        <div>

        <button onClick={()=>setFilterMode("All")}>All</button>
        <button onClick={()=>setFilterMode("Pending")}>Pending</button>
        <button onClick={()=>setFilterMode("Completed")}>Completed</button>
        </div>
    )
}

export default FilterButtons;