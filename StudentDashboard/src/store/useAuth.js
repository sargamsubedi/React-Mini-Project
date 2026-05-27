import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export const useAuth = create(persist(
   
(set) => ({

    isLoggedIn: false,
    logIn: (location) => {
        set((state) => (
            { isLoggedIn: true }
        ))
    },
    logOut: () => {
        set((state) => (
            { isLoggedIn: false }
        ))
    }

}
),
{
    name: "auth-storage"
}

))