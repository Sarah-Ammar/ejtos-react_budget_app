import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
const Budget = () => {
    const { budget } = useContext(AppContext);
    return (
        <div className='alert alert-secondary'>
            <label for="budget">Budget: £</label>
            <input id="budget1" type="number" name="budget" min="1000" max="20000"  step="1000"/>    
        </div>
    );
};
export default Budget;