import { useContext, useState } from "react";
import { AuthContext, ExpenseContext } from "./Container";
import { Navigate, useNavigate } from "react-router-dom";

function Addexpenses()
{
    const {isLoggedIn} =useContext(AuthContext);
    const {expenses,setExpenses}= useContext(ExpenseContext);
    const [title,setTitle]=useState("");
    const [amount,setAmount]=useState("");
    const [category,setCategory]=useState("");
    const navigate =useNavigate();
    function addExpense()
    {
        if(title==="" || amount==="" || category==="")
        {
            
            alert("invalid form fillup");
        }
        else{
            console.log("item added successfully");
            setExpenses(prev=>[...prev,{"id":crypto.randomUUID(), "title": title, "amount": amount ,"category": category}]);

            // if item added successfully reset input fields
            setAmount("");
            setTitle("");
            setCategory("");
            
        }

    }
    if(!isLoggedIn) return <Navigate to="/" />
    return(
        <>
        <h1>Add new expense</h1>
        <button onClick={()=>{navigate("/dashboard")}}>Goto Dashboard</button>
        <input type="text" placeholder="Title" value={title} onChange={(e)=>{setTitle(e.target.value)}} />
        <input type="number" placeholder="Amount"value={amount} onChange={(e)=>{setAmount(String(e.target.value))}}  />
        <input type="text" placeholder="Category" value={category} onChange={(e)=>{setCategory(e.target.value)}}  />
        <button onClick={addExpense}>Add</button>
        </>

    )
}
export default Addexpenses;