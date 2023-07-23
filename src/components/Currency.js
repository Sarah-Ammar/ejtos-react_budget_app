import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Currency = () => {
    const [currency, setCurrency] = useState('');

     const changeCurrency= (event) => {
         setCurrency(event.target.value);
     }

    return (
        <div className='alert alert-secondary'>
            <label style={{ marginLeft: '1rem', backgroundColor: '#85F089', color: 'white' }} >Currency
      <select name='hover_color' id="currency" onChange={(event) => changeCurrency(event.target.value)} style={{ marginLeft: '1rem', backgroundColor: '#85F089', color: 'white' }}>
                    <option style={{ color: 'black' }} value="£">£ Pound</option>
                    <option style={{ color: 'black' }} value="$">$ Dollar</option>
                    <option style={{ color: 'black' }} value="€">€ Euro</option>
                    <option style={{ color: 'black' }} value="₹">₹ Ruppee</option>
                </select>
            </label>

        </div>
    );
};

export default Currency;
