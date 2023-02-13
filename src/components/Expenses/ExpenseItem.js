import { useState } from 'react';
import Card from '../UI/Card';
import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';

function ExpenseItem({ title, amount, date }) {
  //   console.log(props);
  const [newtitle, setTitle] = useState(title);
  const clickhandler = () => {
    setTitle('New Title');
  };
  return (
    <Card className="expense-item">
      {/* <div>{expenses.date.toDateString()}</div> */}
      <ExpenseDate date={date} />
      <div className="expense-item__description">
        <h2>{newtitle}</h2>
        <div className="expense-item__price">${amount}</div>
        <button onClick={clickhandler}>Change Title</button>
      </div>
    </Card>
  );
}

export default ExpenseItem;
