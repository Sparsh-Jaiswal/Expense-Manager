import React from "react";
import ExpenseForm from "./ExpenseForm";

import './NewExpense.css'
const NewExpense=(props)=>{

    const saveExpenseDataHandler=(enteredExpenseData)=>{
        const newEnteredExpenseData={
            ...enteredExpenseData,
            id: Math.random()
        };
        console.log(newEnteredExpenseData);
        props.onGettingData(newEnteredExpenseData);                                  //
    };


    return(
        <div className="new-expense">
            <ExpenseForm onSaveExpenseData={saveExpenseDataHandler}/>
        </div>
    );
};

export default NewExpense;