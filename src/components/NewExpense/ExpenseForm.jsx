import { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
    // first Way to manage inputs using state
    const [enteredTitle, setEnteredTitle] = useState('');
    const titleChangeHandler = (e) => {
        setEnteredTitle(e.target.value);
    }

    const [enteredAmount, setEnteredAmount] = useState('');
    const amountChangeHandler = (e) => {
        setEnteredAmount(e.target.value);
    }

    const [enteredDate, setEnteredDate] = useState('');
    const dateChangeHandler = (e) => {
        setEnteredDate(e.target.value);
    }


    // // Second way to manage inputs using state
    // const [userInput, setUserInput] = useState({
    //     title: '',
    //     amount: '',
    //     date: ''
    // })

    // const titleChangeHandler = (e) => {
    //     // Method 1 : not so good
    //     // setUserInput({
    //     //     ...userInput,
    //     //     title: e.target.value
    //     // })

    //     // Method 2 : very good.
    //     setUserInput((preState) => {  // react garenty to give privious state data inside preState.
    //         return {
    //             ...preState,
    //             title: e.target.value
    //         }
    //     })
    // }
    // const amountChangeHandler = (e) => {
    //     // Method 1 : not so good
    //     // setUserInput({
    //     //     ...userInput,
    //     //     amount: e.target.value
    //     // })

    //     // Method 2 : very good
    //     setUserInput((preState) => {
    //         return {
    //             ...preState,
    //             amount: e.target.value
    //         }
    //     })
    // }
    // const dateChangeHandler = (e) => {
    //     // Method 1 : not so good
    //     // setUserInput({
    //     //     ...userInput,
    //     //     date: e.target.value
    //     // })

    //     // Method 2 : very good
    //     setUserInput((preState) => {
    //         return {
    //             ...preState,
    //             date: e.target.value
    //         }
    //     })
    // }

    const submitHandler = (e) => {
        e.preventDefault();
        const expenseData = {
            title : enteredTitle,
            amount : enteredAmount,
            date : enteredDate
        }
        props.onSaveExpenseData(expenseData);

        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');
    }

    return (
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label htmlFor="title">Title</label>
                    <input type="text" name="title" value={enteredTitle} onChange={titleChangeHandler} />
                </div>
                <div className="new-expense__control">
                    <label htmlFor="amount">Amount</label>
                    <input type="number" name="amount" min="0.01" step="0.01" value={enteredAmount} onChange={amountChangeHandler}/>
                </div>
                <div className="new-expense__control">
                    <label htmlFor="date">Date</label>
                    <input type="date" name="date" min="2019-01-01" max="2022-12-31" value={enteredDate} onChange={dateChangeHandler}/>
                </div>
                <div className="new-expense__action">
                    <button type="submit">Add Expense</button>
                </div>
            </div>
        </form>
    );
}

export default ExpenseForm;