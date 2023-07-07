import React, { useContext, useState, ChangeEvent } from 'react';
import { AppContext } from '../context/AppContext';
const Budget = () => {
    const [budget, setBudget] = useState(0);

    const up = (value)=> {
        console.log(`value is ${value}`);
        if (value >= 20000) {
            console.log("in alert block!")
            window.alert(`The value of ${value} cannot exceed 20000`);
        } 
    }

    const changeBudgetHandler = (event) => {
        setBudget(event.target.value); 
        up(event.target.value);
    }

    return (
        <div className='alert alert-secondary'>
            <label for="budget">Budget: £</label>
            <input id="budget1" type="number" name="budget" min="1000" max="20000" step="1000"
                onChange= {changeBudgetHandler}
                />
        </div>
    );
};
export default Budget;