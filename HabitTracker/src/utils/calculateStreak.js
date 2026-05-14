import { getTodayDate } from "./getTodayDate";

export function calculateStreak(history)
{
    let steak=0;
    const today= getTodayDate();
    for (const date in history) {
        if(date===today) continue; // skip today (because day isnt complete so streak shouldn't be reset)
        steak= Boolean(history[date])? steak+1 : 0;
    }

    return steak;
}