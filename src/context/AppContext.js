import { createContext, useReducer } from "react";
import { v4 as uuidv4} from 'uuid';

export const AppReducer = (state, action) => {

    switch (action.type) {
        case 'ADD_EXPENSE':
        return{
            ...state,
            exp: [...state.exp, action.payload],

        };
        case 'DELETE_EXPENSE':
            return {
                ...state,
                exp: state.exp.filter((expense)=> expense.id !== action.payload),
            };
        case 'SET_BUDGET':
             
        return {
            ...state,
            budget: action.payload,
        };
        default: return state;
    }
};

const initialState = {
    budget: 1000, 
    exp: [
        { id: uuidv4(), name: "Shopping", cost: 40},
        { id: uuidv4(), name: "Phone", cost: 30},
        { id: uuidv4(), name: "Food", cost: 10},

    ],

};

export const AppContext = createContext();



export const AppProvider = (props) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);
    
    return(<AppContext.Provider value={{
        budget:state.budget,
        exp: state.exp,
        dispatch,
    }}>
        {props.children}
    </AppContext.Provider>)
};