import React, { useState } from 'react';
import Card from '../UI/Card';
import ExpenseItem from './ExpenseItem';
import './Expenses.css';
import ExpensesFilter from './ExpensesFilter';

export default function Expenses(props) {
  const [selectedFilter, setSelectionChange] = useState('');
  const expenseElement = props.expenses.map((i) => (
    <ExpenseItem key={i.id} title={i.title} amount={i.amount} date={i.date} />
  ));
  const onSelectionChange = (selectedFilter) => {
    setSelectionChange(selectedFilter);
  };
  return (
    <div className="expenses">
      <ExpensesFilter onSelectionChange={onSelectionChange} />
      {selectedFilter && (
        <div style={{ color: 'white', marginLeft: '12px' }}>
          Selected Year : {selectedFilter}
        </div>
      )}
      <Card>{expenseElement}</Card>
    </div>
  );
}
