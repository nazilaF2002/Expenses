import ExpenseItem from './ExpenseItem';
import './ExpensesList.css'
export default function ExpensesList(props){
   
        let condition=<p>No data exist</p>;
        if(props.filltredArray.length === 0){
          return  <h2 className='expenses-list__fallback'>No data Found</h2>
        }
      
            return(
                <ul className='expenses-list'>
                    {
                           condition = props.filltredArray.map((item) => (
                            <ExpenseItem key={item.id} title={item.title} date={item.date} amount={item.amount} />
                    )
              
                  )
                    }
                </ul>
             )
      
   
}