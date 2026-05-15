import AddHabit from "./components/AddHabit"
import Display from "./display"
import   './App.css'
import { getTodayDate } from "./utils/getTodayDate";
import { useState } from "react";
import FilterButtons from "./components/FilterButtons";


function App() {
  const today = getTodayDate(); 
const [filterMode,setFilterMode]= useState('All');

  return (
    <>
      <h1>Habit Tracker</h1>
      <p>This project is the implementation of Zustand i recently learned</p>
      <AddHabit />
      <FilterButtons setFilterMode={setFilterMode} />
      <div>Today's Date: {today}</div>
      <Display filterMode={filterMode}/>
    </>
  )
}

export default App
