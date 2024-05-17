import React, {useContext, useState} from 'react';
import { AppContext } from '../context/AppContext';
import { v4 as uuidv4 } from 'uuid';

const AddExpenseForm = () => {
    const {dispatch } = useContext(AppContext);
    const [name, setName] = useState('');
    const [cost, setCost] = useState('');
    const onSubmit = (event) => {
        event.preventDefault();
       const exp = {
        id: uuidv4(),
        name: name,
        cost: parseInt(cost)
       };
       dispatch({
        type: 'ADD_EXPENSE',
        payload: exp,
       })
    }
    return(
        <form onSubmit={onSubmit}>
            <div className="row">
                <div className="col-sm">
                    <label htmlFor="Name">Name</label>
                    <input type="text" className='form-control' id="Name" value={name} onChange={(event) => setName(event.target.value)} required='required'/>
                </div>
                <div className="col-sm">
                    <label htmlFor="Cost">Cost</label>
                    <input type="text" className='form-control' id='Cost' value={cost} onChange={(event)=> setCost(event.target.value)}  required='required'  />
                </div>
                <div className="col-sm">
                    <button type='submit' className='btn btn-primary mt-3'>
                    Save

                    </button>
                </div>
            </div>
        </form>

    )
};

export default AddExpenseForm;
