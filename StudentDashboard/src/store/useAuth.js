import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export const useAuth = create(persist(
   
(set) => ({

    isLoggedIn: false,
    role:"",
    logIn: (role) => {
        set((state) => (
            { isLoggedIn: true,
            role: role
             }
        ))
    },
    logOut: () => {
        set((state) => (
            { isLoggedIn: false,
                role:"" // reset role

             }
        ))
    }

}
),
{
    name: "auth-storage"
}

))