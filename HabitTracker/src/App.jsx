import AddHabit from "./components/AddHabit"
import Display from "./display"
import   './App.css'

function App() {
  
  return (
    <>
      <h1>Habit Tracker</h1>
      <p>This project is the implementation of Zustand i recently learned</p>
      <AddHabit />
      <Display />
    </>
  )
}

export default App
