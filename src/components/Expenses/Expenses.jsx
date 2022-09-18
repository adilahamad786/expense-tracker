import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesChart from "./ExpensesChart";
import ExpensesList from "./ExpensesList";
import "./Expenses.css"
import { useState } from "react";

const Expense = (props) => {

  const [filteredYear, setFilteredYear] = useState('2022');
  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  }

  // filter expenses according to selected year
  const filteredExpenses = props.expenses.filter( expense => expense.date.getFullYear().toString() === filteredYear );

  return (
    <li>
      <Card className="expense">
        <ExpensesFilter selected = {filteredYear} onChangeFilter = {filterChangeHandler} />
        <ExpensesChart expenses={filteredExpenses} />
        <ExpensesList expenses={filteredExpenses} />
      </Card>
    </li>
  );
}

export default Expense;