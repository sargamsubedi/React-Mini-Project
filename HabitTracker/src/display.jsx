import { useEffect, useState } from "react";
import useHabitStore from "./store/useHabitStore";
import { getTodayDate } from "./utils/getTodayDate";
import HabitCard from "./components/HabitCard";

function Display()
{
const habits = useHabitStore((state)=>state.habits)
const addDateToHistory = useHabitStore((state)=>state.addDateToHistory)


// const [today,setToday] = useState(getTodayDate());
const today = getTodayDate();


// when date changes call addDateToHistory
useEffect(()=>{
    addDateToHistory();
},[today])

if(habits.length===0) return <p>No habits added.</p>

return(   
    <div className="habit-container">
        
    {
        habits.map((habit)=>(
                
            <div key={habit.id}>

            <HabitCard 
                habit= {habit} 
                />
            </div>
        ))
    }
    </div> 
)
}

export default Display;