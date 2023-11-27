
import { useState } from 'react';
import ExpenseDate from '../Expenses/ExpenseDate'
import Card from '../UI/Card';
import './ExpenseItem.css'
const ExpenseItem = (props) => {
   const [newtitle,setName]=useState(props.title);
    return (
        <Card className='expense-item'>
            <ExpenseDate date={props.date} />
            <div className='expense-item__description'>
                <h2>{newtitle}</h2>
                <div className='expense-item__price'>{props.amount}</div>
            </div>
        </Card>
    );
}
export default ExpenseItem;