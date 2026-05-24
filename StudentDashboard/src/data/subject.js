
import { create } from 'zustand'

export const useSubjects = create((set) => (
  {
    subjects :[
  {
    id: 1,
    name: "Mathematics",
    teacher: "Mr. Sharma",
    content: "Algebra, Geometry, and Calculus basics",
    duration: "3 months",
    studentsEnrolled: 45,
    schedule: "Mon-Wed-Fri 10:00 AM",
    room: "A-101"
  },
  {
    id: 2,
    name: "Physics",
    teacher: "Ms. Koirala",
    content: "Mechanics, Thermodynamics, and Optics",
    duration: "4 months",
    studentsEnrolled: 38,
    schedule: "Tue-Thu 1:00 PM",
    room: "B-204"
  },
  {
    id: 3,
    name: "Computer Science",
    teacher: "Mr. Adhikari",
    content: "Programming, Data Structures, and Web Development",
    duration: "5 months",
    studentsEnrolled: 52,
    schedule: "Mon-Fri 3:00 PM",
    room: "Lab-3"
  },
  {
    id: 4,
    name: "English Literature",
    teacher: "Mrs. Rana",
    content: "Poetry, Drama, and Novel Analysis",
    duration: "2 months",
    studentsEnrolled: 30,
    schedule: "Sat-Sun 11:00 AM",
    room: "C-110"
  }
]
  }
)
)