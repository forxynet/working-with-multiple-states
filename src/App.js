import React, { useState } from 'react';

import NewExpense from './components/NewExpense/NewExpense';
import Expenses from './components/Expenses/Expenses';

import data from './data.js'

const App = () => {
  const [expenses, setExpenses] = useState(data);

  const addExpenseHandler = expense => {
    setExpenses(prevExpense => {
      console.log(expense)
      return [expense, prevExpense];
    });
  }

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
