
import { create } from 'zustand'

export const useSubjects = create((set) => (
  {
    subjects :[
      {
        id: 1,
        name: "DAA",
        teacher: "Ram"
      },
      {
        id: 2,
        name: "Cryptography",
        teacher: "Hari"
      }
    ]
  }
)
)