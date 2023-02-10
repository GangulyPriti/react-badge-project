import './ExpenseItem.css';

function ExpenseItem({ expenses }) {
  //   console.log(props);
  return (
    <div className="expense-item">
      <div>{expenses.date.toDateString()}</div>
      <div className="expense-item__description">
        <h2>{expenses.title}</h2>
        <div className="expense-item__price">${expenses.amount}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
