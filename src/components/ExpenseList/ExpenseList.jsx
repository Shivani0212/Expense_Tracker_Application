// ExpenseList.jsx

import React from 'react';
import "./ExpenseList.css"

const ExpenseList = ({ expenses }) => {
  return (
    <div className="expense-list-container">
      <h2>Expense List</h2>
      <ul>
        {expenses.map((expense) => (
          <li key={expense.id}>
            <span>{expense.description}</span>
            <span>{expense.amount}</span>
            {/* Add more details based on your expense object */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ExpenseList;
