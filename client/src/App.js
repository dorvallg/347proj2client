import React, {useEffect, useState} from 'react';
import './App.css';
import {Bet} from './bet.js';
import {useSelector, useDispatch} from "react-redux";
import {BetAdder} from './betAdder.js';
import {stopWaiting} from './actions';

function App() {
  const isWaiting = useSelector(state => state.isWaiting);
  const [bets, setBets] = useState([]);
  const dispatch = useDispatch();
  console.log(isWaiting);

  const addBet = newBet => {
    setBets(bets => [newBet, ...bets.filter(bet => bet.name !== newBet.name)])
  }

  useEffect(() => {
    setTimeout(() => dispatchEvent(stopWaiting()), 3000);
  }, [dispatch]);

  return (
    <div id="bets-root">

      <BetAdder add={addBet}></BetAdder>
      {isWaiting && <div className="loader" />}
      {bets.map(bet => <Bet key={bet.name} bet={bet}/>)}
    </div>
  );
}

export default App;
