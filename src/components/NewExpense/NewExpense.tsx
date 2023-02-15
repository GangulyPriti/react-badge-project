import React, { useState } from 'react';
import ExpenseForm from './ExpenseForm';

import './NewExpense.css';

const NewExpense = (props: any) => {
  const [showExpenseForm, setShowExpenseForm] = useState(false);
  const showExpenseFormHandler = () => {
    setShowExpenseForm(!showExpenseForm);
  };
  return (
    <div className="new-expense">
      {showExpenseForm ? (
        <ExpenseForm
          showExpenseFormHandler={showExpenseFormHandler}
          onSaveExpenseData={props.onSaveExpenseData}
        />
      ) : (
        <button onClick={showExpenseFormHandler}>Add New Expense</button>
      )}
    </div>
  );
};

export default NewExpense;
