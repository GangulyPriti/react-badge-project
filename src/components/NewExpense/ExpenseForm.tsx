import React, { useState } from 'react';
import './ExpenseForm.css';

const ExpenseForm = ({ onSaveExpenseData }: any) => {
  //   const [title, setTitle] = useState('');
  //   const [amount, setAmount] = useState(0.0);
  //   const [date, setDate] = useState('');
  const [userInput, setUserInput] = useState({
    title: '',
    amount: '',
    date: '',
  });
  const titleChangeHandler = (e: any) => {
    // setTitle(e.target.value);
    // setUserInput({
    //   ...userInput,
    //   title: e.target.value,
    // });
    setUserInput((prevState) => {
      return { ...prevState, title: e.target.value };
    });
  };
  const amountChangeHandler = (e: any) => {
    setUserInput({
      ...userInput,
      amount: e.target.value,
    });
  };
  const dateChangeHandler = (e: any) => {
    setUserInput({
      ...userInput,
      date: e.target.value,
    });
  };
  const submitForm = (event: any) => {
    event.preventDefault();
    console.log('form data submitted');
    const expenseData = {
      title: userInput.title,
      amount: userInput.amount,
      date: new Date(userInput.date),
    };
    console.log('submitted value: ', expenseData);
    onSaveExpenseData(expenseData);
    setUserInput({
      title: '',
      amount: '',
      date: '',
    });
  };
  return (
    <form onSubmit={submitForm}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            onChange={titleChangeHandler}
            value={userInput.title}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            onChange={amountChangeHandler}
            value={userInput.amount}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            onChange={dateChangeHandler}
            value={userInput.date}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
