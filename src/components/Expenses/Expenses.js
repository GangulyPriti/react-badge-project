import ExpenseItem from './ExpenseItem.js';
import './Expenses.css';

export default function Expenses({ expenses }) {
  const expenseElement = expenses.map((expense) => (
    <ExpenseItem
      key={expense.id}
      title={expense.title}
      amount={expense.amount}
      date={expense.date}
    />
  ));
  return <div className="expenses">{expenseElement}</div>;
}
