import useHabitStore from "./store/useHabitStore";

function Display()
{
const habits = useHabitStore((state)=>state.habits)
const toggleCompletion = useHabitStore((state)=>state.toggleCompletion)
const deleteHabit = useHabitStore((state)=>state.deleteHabit)

if(habits.length===0) return <p>No habits added.</p>

return(   
    <div className="habit-container">
        
    {
        habits.map((habit)=>(
            <div key={habit.id} 
                className="habit" 
                onClick={()=>toggleCompletion(habit.id)}
                >
                <p>name: {habit.name}</p>
                <p>streak: {habit.streak}</p>
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