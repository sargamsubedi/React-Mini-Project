import { useEffect, useState } from "react";
import useHabitStore from "./store/useHabitStore";
import { calculateStreak } from "./utils/calculateStreak";
import { getTodayDate } from "./utils/getTodayDate";

function Display()
{
const habits = useHabitStore((state)=>state.habits)
const deleteHabit = useHabitStore((state)=>state.deleteHabit)
const updateHistory = useHabitStore((state)=>state.updateHistory)
const addDateToHistory = useHabitStore((state)=>state.addDateToHistory)


const [today,setToday] = useState(getTodayDate());


// when date changes call addDateToHistory
useEffect(()=>{
    addDateToHistory();
},[today])

if(habits.length===0) return <p>No habits added.</p>

return(   
    <div className="habit-container">
        
    {
        habits.map((habit)=>(
            <div key={habit.id} 
                className="habit" 
                onClick={()=>{
                    updateHistory(habit.id)}}
                >
                <p>name: {habit.name}</p>
                <p>streak: {calculateStreak(habit.history)}</p>
                <p>CompleteToday: {`${habit.history[today]}`}</p>
                <button 
                    onClick={(e)=>{
                        e.stopPropagation();
                        deleteHabit(habit.id)
                        }}
                >Delete Habit</button>
            </div>
        ))
    }
    </div> 
)
}

export default Display;