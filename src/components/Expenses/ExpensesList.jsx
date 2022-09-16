import "./ExpensesList.css";
import ExpenseItem from "./ExpenseItem";

const ExpensesList = (props) => {

    // First Approch
    if (props.expenses.length === 0) {
        return <h3 className="empty-message">Expenses not found!</h3>;
    }

    return (
        <ul className="expenses-list">
            {
                props.expenses.map( expense => {
                    return <ExpenseItem key={expense.id} title={expense.title} amount={expense.amount} date={expense.date} />
                })
            }
        </ul>
    );

    // Second Approch
    // // conditional expenses :- we can directlly use ternary operator or && operator to render conditional components.
    // let expensesContent = <h3>Expenses not found!</h3>;
    // if (props.expenses.length > 0) {
    //     expensesContent = props.expenses.map( expense => {
    //         return <ExpenseItem key={expense.id} title={expense.title} amount={expense.amount} date={expense.date} />
    //     })
    // }

    // return (
    //     <ul className="expenses-list">
    //         {expensesContent}
    //     </ul>
    // );
}

export default ExpensesList;