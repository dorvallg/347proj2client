import React, {useState} from 'react';

export function BetAdder(props) {
    const [name, setName] = useState(0);
    //const [will, setWill] = useState(0);
    //const [wont, setWont] = useState(0);

    return (
        <div id="adder" className="bet">
            <label for="name-input">Add new event:</label>
            <input 
            id="name-input" 
            type="text"
            onChange={e => setName(e.target.value)}
            placeHolder="your bet"
            />

            <button onClick={() => props.add({name})}>This Will Happen</button>
            <button onClick={() => props.add({name})}>This Won't Happen</button>
        </div>
    );
}