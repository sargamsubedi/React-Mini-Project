import { useState } from "react"
import useHabitStore from "../store/useHabitStore";

function AddHabit()
{
    const [habit,setHabit]= useState("");
    const addHabit = useHabitStore((state)=>state.addHabit);
    return(
        <>
            <input type="text" value={habit} onChange={(e)=>setHabit(e.target.value)} />
            <button 
            onClick={()=>{
                addHabit(habit);
                setHabit("");
            }}>Add Habit</button>
        </>
    )

}

export default AddHabit;