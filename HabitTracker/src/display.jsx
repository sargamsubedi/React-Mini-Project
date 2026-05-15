import { useEffect, useMemo, useState } from "react";
import useHabitStore from "./store/useHabitStore";
import { getTodayDate } from "./utils/getTodayDate";
import HabitCard from "./components/HabitCard";
import { getFilteredData } from "./utils/getFilteredHabit";

function Display()
{
const [filterMode,setFilterMode]= useState('All');
const habits = useHabitStore((state)=>state.habits)
const addDateToHistory = useHabitStore((state)=>state.addDateToHistory)

const filteredData = useMemo(()=>getFilteredData(habits,filterMode),[habits,filterMode])
// const filteredData = [];

// const [today,setToday] = useState(getTodayDate());
const today = getTodayDate();

console.log(habits);



// when date changes call addDateToHistory
useEffect(()=>{
    addDateToHistory();
},[today])

if(filteredData.length===0) return <p>No habits found.</p>

return(   
    <div className="habit-container">
        
    {
        filteredData.map((habit)=>(
                
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