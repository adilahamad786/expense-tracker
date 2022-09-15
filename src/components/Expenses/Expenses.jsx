import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css"
import { useState } from "react";

const Expense = (props) => {

  const [filteredYear, setFilteredYear] = useState('2022');
  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  }

  // filter expenses according to selected year
  const filteredExpenses = props.expenses.filter( expense => expense.date.getFullYear().toString() === filteredYear );

  // conditional expenses :- we can directlly use ternary operator or && operator to render conditional components.
  let expensesContent = <h3>Expenses not found!</h3>;
  if (filteredExpenses.length > 0) {
    expensesContent = filteredExpenses.map( expense => {
      return <ExpenseItem key={expense.id} title={expense.title} amount={expense.amount} date={expense.date} />
    })
  }

  return (
    <Card className="expense">
      <ExpensesFilter selected = {filteredYear} onChangeFilter = {filterChangeHandler} />
      { expensesContent }
    </Card>
  );
}

export default Expense;