import { useContext } from "react";
import { AuthContext, ExpenseContext } from "./Container";
import { Navigate, useNavigate } from "react-router-dom";


function Dashboard() {
    const { isLoggedIn } = useContext(AuthContext);
    const { expenses, setExpenses } = useContext(ExpenseContext);
    const navigate = useNavigate();

    function removeitem(Id) {
        const tempExpenses = expenses.filter((ep) => (ep.id !== Id
        )
        )
        setExpenses(tempExpenses);

    }


    if (!isLoggedIn) return <Navigate to="/" />

    if (expenses.length === 0) return (
        <>
            <h2>No items added yet..</h2>
            <button onClick={() => { navigate("/addexpense") }}>Add Item</button>

        </>
    )
    return (
        <>
            <h1>this is dashboard</h1>
            <button onClick={() => { navigate("/addexpense") }}>Add Item</button>

            {
                expenses.map((ep, index) => (
                    <div key={ep.id}>
                        <p>item {index + 1}: </p>
                        <p>title: {ep.title}</p>
                        <p>price: {ep.amount}</p>
                        <p>category: {ep.category}</p>
                        <button onClick={() => {
                            removeitem(ep.id)
                        }}>Delete Item</button>
                    </div>
                ))
            }
        </>
    )

}
export default Dashboard;