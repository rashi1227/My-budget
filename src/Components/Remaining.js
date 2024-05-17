import React, {useContext} from 'react';
import { AppContext } from '../context/AppContext';

const Remaining = () => {
    const { exp, budget } = useContext(AppContext);
    const totalExpenses = exp.reduce((total, item)=>{
        return (total = total + item.cost);
    }, 0); 

    const alertType = totalExpenses > budget ? 'alert-danger' : 'alert-success';
    return(
        
        <div className="alert alert-success">
            <span>Remaining: ₹{budget - totalExpenses}</span>
        </div>

    );
}

export default Remaining;
