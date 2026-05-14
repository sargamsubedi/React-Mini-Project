
export function getTodayDate() {
    const today = new Date();
    const day = today.getDate();
    const month = today.getMonth() + 1;
    const year = today.getFullYear();
    return `${year}-${month}-${day}`;
}

// import { useState } from "react";

// simulating day change for testing 
// export function getTodayDate() {
//     const today = new Date();
//     const [day,setDay] = useState(1);
//     const month = today.getMonth() + 1;
//     const year = today.getFullYear();

//     let interval = setInterval(() => {
//         setDay(prev=>prev+1);
//     }, 5000);

//     return `${year}-${month}-${day}`;
// }