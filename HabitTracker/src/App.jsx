import AddHabit from "./components/AddHabit"
import Display from "./display"
import   './App.css'
import { getTodayDate } from "./utility/getTodayDate";


function App() {
  const today = getTodayDate();
  return (
    <>
      <h1>Habit Tracker</h1>
      <p>This project is the implementation of Zustand i recently learned</p>
      <AddHabit />
      <div>Today's Date: {today}</div>
      <Display />
    </>
  )
}

export default App
