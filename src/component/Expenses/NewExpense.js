import { useState } from "react";
import ExpenseForm from "./ExpenseForn";
import './NewExpense.css'
export default function NewExpense(props){
    const [isOpen,setOpen] = useState(false);
    function hundleCollapes(){
        setOpen(false)
    }
    function hundleISCollapes(){
        setOpen(true)
    }
    const GetData=(item)=>{
        const newExpense={...item,id:Math.random().toString()}
        props.newExpenseData(newExpense);
        setOpen(false);
    }
    return(
        <div className="new-expense">
            {!isOpen && (
                <button onClick={hundleISCollapes}>Add new Expnese</button>
            )

            }
            {isOpen && (
                 <ExpenseForm collapsForm={hundleCollapes} getExpese={GetData} />
            )}
           
        </div>
    );
}