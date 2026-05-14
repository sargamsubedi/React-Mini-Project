import useHabitStore from "./store/useHabitStore";
import { calculateStreak } from "./utils/calculateStreak";

function Display()
{
const habits = useHabitStore((state)=>state.habits)
const toggleCompletion = useHabitStore((state)=>state.toggleCompletion)
const deleteHabit = useHabitStore((state)=>state.deleteHabit)
const updateHistory = useHabitStore((state)=>state.updateHistory)


if(habits.length===0) return <p>No habits added.</p>

return(   
    <div className="habit-container">
        
    {
        habits.map((habit)=>(
            <div key={habit.id} 
                className="habit" 
                onClick={()=>{
                    toggleCompletion(habit.id)
                    updateHistory(habit.id)}}
                >
                <p>name: {habit.name}</p>
                <p>streak: {calculateStreak(habit.history)}</p>
                <p>CompleteToday: {`${habit.completedToday}`}</p>
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