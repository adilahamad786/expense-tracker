import "./ExpenseForm.css";

const ExpenseForm = () => {
    return (
        <form>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label htmlFor="title">Title</label>
                    <input type="text" name="title" />
                </div>
                <div className="new-expense__control">
                    <label htmlFor="amount">Amount</label>
                    <input type="number" name="amount" />
                </div>
                <div className="new-expense__control">
                    <label htmlFor="date">Date</label>
                    <input type="date" name="date" />
                </div>
                <div className="new-expense__action">
                    <button type="submit">Add Expense</button>
                </div>
            </div>
        </form>
    );
}

export default ExpenseForm;