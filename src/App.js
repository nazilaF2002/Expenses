// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import Expenses from './component/Expenses/Expenses';
import NewExpense from './component/Expenses/NewExpense';

// const [Intial_Expenses,setIntial_Expenses]=useState();
const Intial_Expenses = [
  {
    id: 'e1',
    title: 'HP Printer',
    amount: 117.23,
    date: new Date(2022, 3, 11),
  },
  { id: 'e2', title: 'Fridge', amount: 899.99, date: new Date(2022, 2, 6) },
  {
    id: 'e3',
    title: 'Pack of Chairs',
    amount: 313.12,
    date: new Date(2022, 12, 11),
  },
  {
    id: 'e4',
    title: 'Personal Computer (Dell)',
    amount: 1250,
    date: new Date(2021, 2, 14),
  },
];

function App() {
  const [expenses,setNewExpense]=useState(Intial_Expenses);
  const newExpeseData=(data)=>{
setNewExpense([data,...Intial_Expenses]);
  console.log(data);
  }
  return (
    <div>
      <NewExpense newExpenseData={newExpeseData}></NewExpense>
     <Expenses expenses={expenses}></Expenses>
    </div>
  );
}

export default App;
