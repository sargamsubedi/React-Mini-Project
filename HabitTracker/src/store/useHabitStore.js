import { use } from 'react'
import { create } from 'zustand'
import { persist } from 'zustand/middleware'

const useHabitStore = create(persist(
    (set) => ({
        habits: [],
        addHabit: (habit) => {
            const id = crypto.randomUUID();


            set((state) => ({
                habits: [...state.habits, {
                    id: id, name: habit, streak: 0, completedToday: false, history: {
                        "2026-05-10": true,
                        "2026-05-12": false,
                        "2026-05-11": true
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
        }
    }),
    {
        name: "habitsTracked"
    }
))

export default useHabitStore;