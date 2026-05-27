import { create } from 'zustand'

export const useAuth = create((set) => ({

    isLoggedIn: false,
    logIn: () => {
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
)
)