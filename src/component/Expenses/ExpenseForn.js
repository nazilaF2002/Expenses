import { useState } from 'react';
import './ExpenseForm.css'
export default function ExpenseForm(props){
    const[entiredtitle,setTitle]=useState('');
    const[entiredAmount,setAmount]=useState('');
    const[entiredDate,setDate]=useState('');
    
    function handleChange(identefire,value){
        if (identefire === 'title'){
            setTitle(value)
             console.log(entiredtitle);
        }
        else if(identefire === 'amount'){
            setAmount(value)
            console.log(entiredAmount);
        }
        else if(identefire === 'date'){
            setDate(value)
            console.log(entiredDate);
        }
    }
    const hundelSubmitData=(event)=>{
        event.preventDefault();
         const ExpenseData={
            title:entiredtitle,
            amount:entiredAmount,
            date:new Date(entiredDate) 
         }
         setTitle('');
         setAmount('');
         setDate('');
         props.getExpese(ExpenseData)
        //  console.log(ExpenseData);
    }
    
    return(
        <form onSubmit={hundelSubmitData} >
        <div className='new-expense__controls'>
            <div className='new-expense__control'>
                <label>Title</label>
                <input type="text" value={entiredtitle}  onChange={(event)=>{
                     handleChange('title',event.target.value)
                }} />
            </div>

            <div className='new-expense__control'>
                <label>Amount</label>
                <input type="number" value={entiredAmount} min="0.01" step="0.01" onChange={(event)=>{
                     handleChange('amount',event.target.value)
                }}/>
            </div>

            <div className='new-expense__control'>
                <label>Date</label>
                <input type="date" min="2019-01-01"  value={entiredDate} max="2023-12-31" onChange={(event)=>{
                     handleChange('date',event.target.value)
                }}/>
            </div>
        </div>
        <div className='new-expense__actions'>
        <button onClick={props.collapsForm}>cansel</button>
        <button type='submit' >Add  Expense</button>
        </div>
    </form>
     
     
    );
}