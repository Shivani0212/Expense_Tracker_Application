import { useState } from 'react'
import Header from './components/Header'
import ExpenseList from './components/ExpenseList/ExpenseList'
import ExpenseForm from './components/ExpenseForm/ExpenseForm'
import GroupExpenseAnalysis from './components/ExpenseAnalysis/GroupExpenseAnalysis/GroupExpenseAnalysis'
import IndividualExpenseAnalysis from './components/ExpenseAnalysis/IndividualExpenseAnalysis/IndividualExpenseAnalysis'
import GroupCreation from './components/GroupMnagement/GroupCreation/GroupCreation'
import GroupList from './components/GroupMnagement/GroupList/GroupList'

import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const expenses = [
    { id: 1, description: 'Groceries', amount: 50.00 },
    { id: 2, description: 'Dinner', amount: 30.00 },
    // Add more expenses as needed
  ];

  return (
    <>
      <Header/>
      <ExpenseList expenses={expenses}/>
      <ExpenseForm onSubmit={()=>{

      }}/>
      <GroupExpenseAnalysis/>
      <IndividualExpenseAnalysis/>
      <GroupCreation/>
      <GroupList/>
    </>
  )
}

export default App
