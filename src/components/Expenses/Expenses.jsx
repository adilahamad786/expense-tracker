import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css"

const expense = [
  {title: "Car Insurance", cost: 786, date: new Date(2021, 5, 24)},
  {title: "Laptop", cost: 832, date: new Date(2020, 2, 5)},
  {title: "Bike", cost: 1542, date: new Date(2022, 6, 29)},
]

const Expense = () => {
  return (
    <Card className="expense">
      <ExpenseItem title={expense[0].title} amount={expense[0].cost} date={expense[0].date}></ExpenseItem>
      <ExpenseItem title={expense[1].title} amount={expense[1].cost} date={expense[1].date}></ExpenseItem>
      <ExpenseItem title={expense[2].title} amount={expense[2].cost} date={expense[2].date}></ExpenseItem>
    </Card>
  );
}

export default Expense;