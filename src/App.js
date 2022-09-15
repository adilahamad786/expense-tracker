import React, { useState } from "react";
import NewExpense from "./components/NewExpense/NewExpense";
import Expenses from "./components/Expenses/Expenses";

const DUMMY_EXPENSES = [
  {id: "e1", title: "Car Insurance", amount: 786, date: new Date(2021, 5, 24)},
  {id: "e2", title: "Laptop", amount: 832, date: new Date(2020, 2, 5)},
  {id: "e3", title: "Bike", amount: 1542, date: new Date(2022, 6, 29)},
  {id: "e4", title: "Phone", amount: 584, date: new Date(2021, 7, 3)},
]

function App() {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const onExpenseHandler = expense => {
    expense.date = new Date(expense.date); // convert date string into dateObject and assign it.
    setExpenses( previousExpenses => {
      return [expense, ...previousExpenses];
    })
  }

  return (
      <div>
        <NewExpense onAddExpense={onExpenseHandler}/>
        <Expenses expenses={expenses}/>
      </div>
  );

  // // Internally React work..
  // return React.createElement(
  //   "div",
  //   {},
  //   React.createElement("h2", {}, "Let's get started!"),
  //   React.createElement(Expenses)
  // );
}

export default App;
