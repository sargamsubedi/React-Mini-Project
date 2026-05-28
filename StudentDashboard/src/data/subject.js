
import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export const useSubjects = create(persist((set) => (
  {
    fields: ["name","teacher","content","duration","studentEnrolled"],
    id:5,
    subjects :[
  {
    id: 1,
    name: "Mathematics",
    teacher: "Mr. Sharma",
    content: "Algebra, Geometry, and Calculus basics",
    duration: "3 months",
    studentsEnrolled: "45",

  },
  {
    id: 2,
    name: "Physics",
    teacher: "Ms. Koirala",
    content: "Mechanics, Thermodynamics, and Optics",
    duration: "4 months",
    studentsEnrolled: "38",

  },
  {
    id: 3,
    name: "Computer Science",
    teacher: "Mr. Adhikari",
    content: "Programming, Data Structures, and Web Development",
    duration: "5 months",
    studentsEnrolled:"52",

  },
  {
    id: 4,
    name: "English Literature",
    teacher: "Mrs. Rana",
    content: "Poetry, Drama, and Novel Analysis",
    duration: "2 months",
    studentsEnrolled: "30",

  }
],
addSubject : (subjectData) =>{
  set((state)=>{    

    return{
      subjects: [...state.subjects,{ id:state.id,...subjectData}],
      id: state.id+1
    }}
  )
}
  }
)
))