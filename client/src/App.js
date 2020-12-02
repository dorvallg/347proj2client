import React, {useState} from 'react';
import './App.css';
import {Bet} from './bet.js';
import {BetAdder} from './betAdder.js';

function App() {
  const [bets, setBets] = useState([]);

  const addBet = newBet => {
    setBets(bets => [newBet, ...bets.filter(bet => bet.name !== newBet.name)])
  }

  return (
    <div id="bets-root">
      <BetAdder add={addBet}></BetAdder>
      {bets.map(bet => <Bet key={bet.name} bet={bet}/>)}
    </div>
  );
}

export default App;
