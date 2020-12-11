import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import {startAddingBet} from './actions';

//Uses dispatch to add bets now, see startAddingBet() within actions.js for more
export function BetAdder() {
    const dispatch = useDispatch();
    const [name, setName] = useState(0);
    const [date, setDate] = useState(0);
    //const [wont, setWont] = useState(0);

    return (
        <div id="adder" className="bet">
            <label>Add new event:</label>
            <input 
            id="name-input" 
            type="text"
            onChange={e => setName(e.target.value)}
            //placeHolder="your bet"
            />
    
            <button onClick={() => dispatch(startAddingBet(name, 1))}>This Will Happen</button>
            <button onClick={() => dispatch(startAddingBet(name, -1))}>This Won't Happen</button>

            <label id="date">Enter expiration date of bet in xx-xx-xxxx format</label>
            <input 
            id="date-input" 
            type="text"
            required
            onChange={e => setDate(e.target.value)}
            //placeHolder="xx-xx-xxxx"
            />
        </div>
    );
}