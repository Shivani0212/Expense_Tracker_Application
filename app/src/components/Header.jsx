// Header.jsx

import React from 'react';
import { Link } from 'react-router-dom';

import './Header.css'; // Import the CSS file

const Header = () => {
  return (
    <header className="header-container">
      <div className="logo">
        <Link to="/">Expense Tracker</Link>
      </div>
      <nav>
        <ul>
          <li>
            <Link to="/individual-expenses">Individual Expenses</Link>
          </li>
          <li>
            <Link to="/group-expenses">Group Expenses</Link>
          </li>
          <li>
            <Link to="/expense-analysis">Expense Analysis</Link>
          </li>
          <li>
            <Link to="/group-management">Group Management</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
