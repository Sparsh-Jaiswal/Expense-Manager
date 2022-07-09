import ExpenseItem from "./ExpenseItem";
import './Expenses.css'

const Expenses=(props) =>{
    return(
       <div className="expenses">
           {    
               props.expense.map(
                   newexpense =>(
                    <ExpenseItem key={newexpense.id} date={newexpense.date} Price={newexpense.Price} Description={newexpense.Description}/>
                   )
                 )
           }
        </div>      
    );
}

export default Expenses;