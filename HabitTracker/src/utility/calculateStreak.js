
export function calculateStreak(history)
{
    let steak=0;

    for (const date in history) {
        steak= Boolean(history[date])? steak+1 : 0;
    }

    return steak;
}