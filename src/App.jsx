import { useState, useEffect } from 'react'
import './App.css'
import ExpenseForm from './assets/Components/ExpenseForm'
import ExpenseList from './assets/Components/ExpenseList'



function App() {
const [ expenses, setExpenses] = useState(() => {
const saved = localStorage.getItem("expenses")
return saved ? JSON.parse(saved) : [];
}) //[1,2,3,4]

useEffect(() =>{
  localStorage.setItem("expenses", JSON.stringify(expenses))
}, [expenses])

const addExpense = (expense) => {
     setExpenses(
      (prev) => [ ...prev, expense ]
      //[1,2,3,4] => [1,2,3,4,5] 
    )
}

const deleteExpense = (id) => {
   setExpenses((prev) => prev.filter((item) => item.id != id) )
}

// const countExpenses = expenses.reduce((sum, veer) => sum + veer.amount, 0)

let tempSum = 0
const countExpenses = expenses.map((item)=>{
  tempSum += item.amount
})
 
  return (
    <div className='app-container'>
      <h1>Expense Tracker</h1>
  
      <ExpenseForm onAddExpense={addExpense} />
      <h4 className='total'>Wallet Trauma Count: ₹{tempSum.toFixed(2)}</h4>

      <ExpenseList expenses={expenses} onDelete={deleteExpense} />

    </div>
  )
}
 
export default App
