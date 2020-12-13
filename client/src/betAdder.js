import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import {startAddingBet} from './actions';

//Uses dispatch to add bets now, see startAddingBet() within actions.js for more
export function BetAdder() {
    const dispatch = useDispatch();
    const [name, setName] = useState(0);
    const [date, setDate] = useState(0);

    return (
        //input field for bet name
        <div id="adder" className="bet">
            <label>Add new event:</label>
            <input 
            id="name-input" 
            type="text"
            onChange={e => setName(e.target.value)}
            />
    
            <button onClick={() => dispatch(startAddingBet(name, 1, date))}>This Will Happen</button>
            <button onClick={() => dispatch(startAddingBet(name, -1, date))}>This Won't Happen</button>

            {/*Input field for expiration date*/}
            <label id="date">Enter expiration date of bet in xx-xx-xxxx format</label>
            <input 
            id="date-input" 
            type="text"
            required
            onChange={e => setDate(e.target.value)}
            />
        </div>
    );
}