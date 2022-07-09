import Expenses from "./components/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import React,{useState} from "react";

let DummyExpenses=[
  {
    id:'101',
    date:new Date(2021, 3, 28),
    Price:200,
    Description: 'Car-Wash'
  },

  {
    id:'102',
    date:new Date(2021, 2, 12),
    Price:1000,
    Description: 'Household Items'
  },
     
  {
    id:'103',
    date:new Date(2021, 4, 26),
    Price:90,
    Description: 'Petrol Bill'
  }
];

const App = () => {
  
  const [expenses,setExpenses]=useState(DummyExpenses);

  const saveExpenseDataHandler=(enteredExpenseData)=>{
    const updatedExpenses= [enteredExpenseData, ...expenses]
    setExpenses(updatedExpenses);
    console.log(updatedExpenses);
  };

  return (
    <div>
      <NewExpense onGettingData={saveExpenseDataHandler}/>
      <Expenses expense={expenses}/>
    </div>
  );
}

export default App;
