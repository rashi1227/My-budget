import React, {useContext} from 'react';
import ExpenseItem from './ExpenseItem';
import { AppContext } from '../context/AppContext';

const Expenses = () => {
    const {exp} = useContext(AppContext)
   
    return (
        <ul className='list-group'>
            {exp.map((expensesl) => (
                <ExpenseItem
                    id={expensesl.id}
                    name={expensesl.name}
                    cost={expensesl.cost} />
            ))}
        </ul>
    );
}

export default Expenses;
