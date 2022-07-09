import './ExpenseItem.css'
import ExpenseDate from './ExpenseDate';
import React,{useState} from 'react';

const ExpenseItem=(props)=>{
    const [Description,setDesc] = useState(props.Description);

    const [curdesc,setcurdesc]=useState(props.Description);

    const changehandler=(event)=>{
        setcurdesc(event.target.value);
    };

    const clickhandler=()=>{
        setDesc(curdesc);
    };

    return(
        <div className="expense-item">
            <ExpenseDate date={new Date(props.date)}/>
            <h2>{Description}</h2>
           
            <div className='expense-item__desrcription'>
                <div className='expense-item__price'>{props.Price}</div>
                <input type='text' placeholder='Enter New Description' value={curdesc} onChange={changehandler} ></input>
                <button onClick={clickhandler}>Change Description</button>
            </div>
        </div>
    );
}

export default ExpenseItem;