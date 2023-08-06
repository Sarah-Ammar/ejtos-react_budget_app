import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';
import ExpenseTotal from './ExpenseTotal';

const Budget = () => {
    const [, setBudget] = useState(0);
    const { remaining, expenses, currency, dispatch } = useContext(AppContext);
    const totalExpenses = expenses.reduce((total, item) => {
        return (total += item.cost);
    }, 0);
    // const { expenses } = useContext(AppContext);
    const up = (value) => {
        if (value >= 20000) {
            window.alert(`The value of cannot exceed remaining funds £${remaining}`);
        }

        else if (value <= totalExpenses) {
            window.alert(`You cannot reduce the budget value lower than the spending`);
        }
    }

    const changeBudgetHandler = (event) => {
        setBudget(event.target.value);
        up(event.target.value);
    }

   
    return (

        <div className='alert alert-secondary'>
            <label for="budget">Budget: {currency}</label>
            <input id="budget1" type="number" name="budget" min="0" max="20000" step="1000"
                onChange={changeBudgetHandler}
            />
        </div >
    );
};
export default Budget;