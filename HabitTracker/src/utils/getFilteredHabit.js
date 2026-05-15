import { getTodayDate } from "./getTodayDate";

export function getFilteredData (habits,filterMode)
{
    let today =getTodayDate();
    if(filterMode==='All') return habits;
    else if(filterMode==='Completed')
    {
        let filteredData = habits.filter((habit)=> habit.history[today]) // for filtering completed data
        return filteredData;
    }
    else(filterMode==='Pending')
    {
        let filteredData = habits.filter((habit)=> !habit.history[today]) // for filtering completed data
        return filteredData;
    }
}