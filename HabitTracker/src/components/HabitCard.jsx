import { calculateStreak } from "../utils/calculateStreak";
import { getTodayDate } from "../utils/getTodayDate";
import useHabitStore from "../store/useHabitStore";


function HabitCard({ habit}) {

    const deleteHabit = useHabitStore((state) => state.deleteHabit)
    const updateHistory = useHabitStore((state) => state.updateHistory)
    const today = getTodayDate();
    return (
        <div
            className="habit"
            onClick={() => {
                updateHistory(habit.id)
            }}
        >
            <p>name: {habit.name}</p>
            <p>streak: {calculateStreak(habit.history)}</p>
            <p>CompleteToday: {`${habit.history[today]}`}</p>
            <button
                onClick={(e) => {
                    e.stopPropagation();
                    deleteHabit(habit.id)
                }}
            >Delete Habit</button>
        </div>
    )
}

export default HabitCard;