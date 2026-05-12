import { use } from 'react'
import {create} from 'zustand'
import {persist} from 'zustand/middleware'

const useHabitStore = create(persist(
    (set)=>({
        habits: [],
        addHabit: (habit)=>{
            const id = crypto.randomUUID();
        
            
           set( (state)=>({
                    habits: [...state.habits,{id:id, name: habit,streak:0,completedToday:false}]
                }
            ))
        },
        toggleCompletion: (id)=>{

            set((state)=>{
                    const changedHabits = state.habits.map((habit)=>{
                        if(habit.id===id)
                        {
                            return {...habit, completedToday: !habit.completedToday

                            }
                        }
                        else
                        {
                            return habit;
                        }
                    })

                    return{
                        habits: changedHabits
                    }
            })
        }
    }),
    {
        name: "habitsTracked"
    }
))

export default useHabitStore;