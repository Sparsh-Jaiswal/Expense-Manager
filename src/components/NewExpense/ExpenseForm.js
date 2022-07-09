import './ExpenseForm.css'

import React, { useState } from 'react'

const ExpenseForm=(props)=>{
    const [ExpenseDesc,setExpenseDesc]=useState('');
    const [ExpenseAmount,setExpenseAmount]=useState('');
    const [ExpenseDate,setExpenseDate]=useState('');

    const changedeschandler=(event)=>{
        setExpenseDesc(event.target.value);
    };
    
    const changeamounthandler=(event)=>{
        setExpenseAmount(event.target.value);
    };
    
    const changedatehandler=(event)=>{
        setExpenseDate(event.target.value);
    };

    const submithandler=(event)=>{
        event.preventDefault();    //prevent default page actions like page refresh
        const expenseData={
            Description: ExpenseDesc,
            Price: ExpenseAmount,
            date: ExpenseDate
        }
        console.log(expenseData);
        props.onSaveExpenseData(expenseData);
        setExpenseDesc('');
        setExpenseDate('');
        setExpenseAmount('');
    }

    return(
        <form onSubmit={submithandler}>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label>Expense Description</label>
                    <input type="text" value={ExpenseDesc} onChange={changedeschandler}></input>
                </div>
                <div className='new-expense__control'>
                    <label>Expense Amount</label>
                    <input type="number" min="0.01"  value={ExpenseAmount} onChange={changeamounthandler}/>
                </div>
                <div className='new-expense__control'>
                    <label>Expense Date</label>
                    <input type="date" value={ExpenseDate} onChange={changedatehandler}/>
                </div>
            </div>
            <div className='new-expense__actions'>
                <button type='submit'>Add Expense</button>
            </div>
        </form>

    );
};

export default ExpenseForm