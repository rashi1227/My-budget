import React, {useContext} from 'react';
import {TiDelete} from 'react-icons/ti';
import { AppContext } from '../context/AppContext';

const ExpenseItem = (props) => {
    const {dispatch}= useContext(AppContext);
    const handleDeleteExpense = () => {
        dispatch({
            type: 'DELETE_EXPENSE',
            payload: props.id,
        })
    }
    return (
        <li className="list-group-item d-flex justify-content-between align-items-center border">
            {props.name}

            <div> 
          
            <span class="border badge badge-primary text-primary">₹{props.cost}</span>
            
            <TiDelete size='1.5em' onClick={handleDeleteExpense}></TiDelete>
             </div>
        </li>
    );
};

export default ExpenseItem;