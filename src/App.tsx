import * as React from 'react';
// import ReactDOM from 'react-dom/client';
import './App.css';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';

const App = () => {
  const [expenses, setExpenses] = React.useState([
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: 'e3',
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: 'e4',
      title: 'New Desk (Wooden)',
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ]);
  const onSaveExpenseData = (expenseData: object) => {
    console.log(expenseData);
    const newExpense: any = {
      ...expenseData,
      id: Math.random().toString(),
    };
    setExpenses((prevState: any) => [...prevState, newExpense]);
  };
  console.log(expenses);
  return (
    // <div className="App-header">
    <div className="App-header">
      <NewExpense onSaveExpenseData={onSaveExpenseData} />
      <Expenses expenses={expenses} />
    </div>
  );
};

export default App;
