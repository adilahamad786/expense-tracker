import { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {

    const [formStatus, setFormStatus] = useState(false);

    const getFormStatusHandler = (curFormStatus) => {
        setFormStatus(curFormStatus);
    }

    const setFormStatusHandler = (e) => {
        setFormStatus(true);
    }

    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id : Math.random().toString()
        }
        props.onAddExpense(expenseData);
    }

    return (
        <div className="new-expense">
            {
                formStatus
                ?
                <ExpenseForm onFormStatus={getFormStatusHandler} onSaveExpenseData={saveExpenseDataHandler}/>
                :
                <div className="add-new-expense-container">
                    <button className="add-new-expense" onClick={setFormStatusHandler}>Add New Expense</button>
                </div>
            }
        </div>
    );
}

export default NewExpense;