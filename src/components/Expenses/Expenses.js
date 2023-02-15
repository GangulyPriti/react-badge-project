import React, { useState } from 'react';
import Card from '../UI/Card';
import './Expenses.css';
import ExpensesChart from './ExpensesChart';
import ExpensesFilter from './ExpensesFilter';
import ExpensesList from './ExpensesList';

export default function Expenses(props) {
  const [selectedFilter, setSelectionChange] = useState('2020');
  const onSelectionChange = (selectedFilter) => {
    setSelectionChange(selectedFilter);
  };
  const filteredExpenses = props.expenses.filter(
    (i) => '' + i.date.getFullYear() === selectedFilter
  );

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selectedFilter={selectedFilter}
          onSelectionChange={onSelectionChange}
        />
        {selectedFilter && (
          <div style={{ color: 'white', marginLeft: '12px' }}>
            Selected Year : {selectedFilter}
          </div>
        )}
        <ExpensesChart expenses={filteredExpenses} />
        <ExpensesList filteredExpenses={filteredExpenses} />
      </Card>
    </div>
  );
}
