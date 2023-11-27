
import { useState } from 'react';
import Card from '../UI/Card';
import ExpenseItem from './ExpenseItem';
import ExpensesList from './ExpenseList';
import './Expenses.css'
import ExpensesChart from './ExpensesChart'
import ExpensesFilter from './ExpensesFilter';
export default function Expenses(props) {
  const [mySelectedYear,setSelectYear] = useState('2019');
  let textInfo='2020,2021,2022';
  if(mySelectedYear === '2019'){
    textInfo='2020,2021,2022';
  }
  else if(mySelectedYear === '2020'){
    textInfo ='2019,2021,2022'
  }
  else if(mySelectedYear === '2021'){
    textInfo ='2019,2020,2022'
  }
  else{
    textInfo ='2019,2020,2021'
  }
  const data=(item)=>{
    setSelectYear(item);
     console.log(item);
  }
  const filltredArray=props.expenses.filter((item)=>{
    return item.date.getFullYear().toString() === mySelectedYear;
  });
 
  return (
    <li>
    <Card className='expenses'>
      <ExpensesFilter selectedYear={mySelectedYear} onData={data}/>
      <p>The data for years {textInfo} is hidden</p>
      <ExpensesChart expenses={filltredArray}/>
      <ExpensesList filltredArray={filltredArray}/>
    </Card>
    </li>
  );
}