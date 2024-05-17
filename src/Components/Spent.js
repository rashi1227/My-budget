import React, {useContext} from 'react';
import { AppContext } from '../context/AppContext';

const Spent = () => {
    const {exp} = useContext(AppContext);
    const totalExpeses = exp.reduce((total, item)=>{
        return (total += item.cost);
    }, 0);
    return(
        <div className="alert alert-primary">
            <span>Spent so far: ₹{totalExpeses}</span>
        </div>

    );
}
export default Spent;