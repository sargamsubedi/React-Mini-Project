import useHabitStore from "./store/useHabitStore";

function Display()
{
const habits = useHabitStore((state)=>state.habits)
const toggleCompletion = useHabitStore((state)=>state.toggleCompletion)

if(habits.length===0) return <p>No habits added.</p>

return(   
    <div className="habit-container">
        
    {
        habits.map((habit)=>(
            <div key={habit.id} 
                className="habit" 
                onClick={()=>toggleCompletion(habit.id)}
                // onClick={()=>console.log(`${habit.name} clicked`)}
                >
                <p>name: {habit.name}</p>
                <p>streak: {habit.streak}</p>
                <p>CompleteToday: {`${habit.completedToday}`}</p>
            </div>
        ))
    }
    </div> 
)
}

export default Display;