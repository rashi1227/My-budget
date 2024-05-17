import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Budget from './Components/Budget';
import Remaining from './Components/Remaining'
import Spent from './Components/Spent';
import Expenses from './Components/Expenses';
import AddExpenseForm from './Components/AddExpenseForm';
import { AppProvider } from './context/AppContext';
import Footer from './Components/Footer';
// import ExpenseItem from './Components/ExpenseItem';


const App = () => {

  return (
    <AppProvider>
    <div className="container card mt-5 p-4 " style={{width:"42rem" , height:"36rem" ,border:"5px solid black"} }>

      <h1 className="m-3 text-center">My Budget</h1>
  
      <div className="row mt-3">
        <div className="col-sm">
           <Budget />
          
        </div>
        <div className="col-sm">
            <Remaining />
        </div>

      <div className="col-sm">
        <Spent />
      </div>
      </div>
      <h3 className='mt-3'>Expenses</h3>

      <div className="row mt-3">
        <div className="col-sm "> 
          <Expenses />
        </div>
      </div>
      <div className="mt-3">
        <h3>Add Expenses</h3>
        <div className="col-sm">
          <AddExpenseForm />
        </div>
      </div>
    </div>
    
</AppProvider>

  );
  


}

export default App;