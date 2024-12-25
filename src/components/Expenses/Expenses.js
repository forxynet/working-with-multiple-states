import React, { useState } from 'react';
import ExpensesFilter from './ExpensesFilter';
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import './Expenses.css';

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('2020');
  const [filteredInfoText, setFilteredInfoText] = useState('2019,2021 & 2022');

  const filteredChangeHandler = selectedYear => {
    setFilteredYear(selectedYear);
    if (selectedYear === '2019') {
      setFilteredInfoText('2020, 2021 & 2022');
    } else if (selectedYear === '2020') {
      setFilteredInfoText('2019, 2021 & 2022');
    } else if (selectedYear === '2021') {
      setFilteredInfoText('2019, 2020 & 2022');
    } else {
      setFilteredInfoText('2019, 2020 & 2021');
    }
  }

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter selected={filteredYear} onChangeFilter={filteredChangeHandler} />
        <p style={{ color: '#fff' }}>Data for years {filteredInfoText} is hidden.</p>

        {props.items.map(item => (
          <ExpenseItem
            title={item.title}
            amount={item.amount}
            date={item.date}
          />
        ))}

      </Card>
    </div>
  );
}

export default Expenses;
