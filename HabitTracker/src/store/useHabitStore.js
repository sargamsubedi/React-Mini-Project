import { use } from 'react'
import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { getTodayDate } from '../utils/getTodayDate'

const useHabitStore = create(persist(
    (set) => ({
        habits: [],
        addHabit: (habit) => {
            const id = crypto.randomUUID();
            const today = getTodayDate();

            set((state) => ({
                habits: [...state.habits, {
                    id: id, name: habit, streak: 0, completedToday: false, history: {
                       [today]: false
                    }
                }]
            }
            ))
        },
        toggleCompletion: (id) => {

            set((state) => {
                const changedHabits = state.habits.map((habit) => {
                    if (habit.id === id) {
                        return {
                            ...habit, completedToday: !habit.completedToday

                        }
                    }
                    else {
                        return habit;
                    }
                })

                return {
                    habits: changedHabits
                }
            })
        },
        deleteHabit: (id) => {
            set((state) => {

                const changedHabits = state.habits.filter((habit) => habit.id !== id);

                return {
                    habits: changedHabits
                }
            })
        },
        //When a habit's completion is toggled , this function sets/unsets the history[today] completion to true/false
        updateHistory: (id)=>{
            set((state)=>{
                const today = getTodayDate();
                const updatedHabits = state.habits.map((habit)=>{
                    if(habit.id===id)
                    {
                        const changedHistory = {...habit.history,[today]:!habit.history[today] }
                        return {...habit, history:changedHistory}
                    }
                    else{
                        return habit;
                    }
                })
                return{
                    habits:updatedHabits
                }
            })
        },
        // when date changes, today's date is added to history of all habits
        addDateToHistory: ()=>{ 
            set((state)=>{
                const today = getTodayDate();
                const updatedHabit =state.habits.map((habit)=>{

                    const changedHistory = {...habit.history,[today]:false}
                    
                    return {...habit,history:changedHistory};
                    }
                )

                return{
                    habits: updatedHabit
                }
            })
        }
    }),
    {
        name: "habitsTracked"
    }
))

export default useHabitStore;