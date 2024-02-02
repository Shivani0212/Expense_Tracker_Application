// ExpenseForm.jsx

import React, { useState } from 'react';
import "./ExpenseForm.css"

const ExpenseForm = ({ onSubmit }) => {
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate form data as needed

    // Create an expense object
    const newExpense = {
      description,
      amount: parseFloat(amount), // Convert to a number if needed
    };

    // Pass the new expense to the parent component
    onSubmit(newExpense);

    // Clear form fields
    setDescription('');
    setAmount('');
  };

  return (
    <div className="expense-form-container">
      <h2>Expense Form</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Description:
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </label>
        <label>
          Amount:
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            required
          />
        </label>
        <button type="submit">Add Expense</button>
      </form>
    </div>
  );
};

export default ExpenseForm;
