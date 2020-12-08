import React, {useEffect, useState} from 'react';
import './App.css';
import {Bet} from './Bet.js';
import {useSelector, useDispatch} from 'react-redux';
import {BetAdder} from './BetAdder.js';
import {stopWaiting, loadBets, loadBet} from './actions';

function App() {
  const isWaiting = useSelector(state => state.isWaiting);
  const [bets, setBets] = useState([]);
  const dispatch = useDispatch();
  console.log(isWaiting);

  const bet = new Bet();

  const addBet = newBet => {
    dispatch(loadBet(bet));
    //setBets(bets => [newBet, ...bets.filter(bet => bet.name !== newBet.name)])
  }

  useEffect(() => {
    dispatch(loadBet("this bet"));
    //setTimeout(() => dispatchEvent(stopWaiting()), 3000);
  }, [dispatch]);

  return (
    <div id="bets-root">
      <div id="header">
        <h1>What's To Come?</h1>
        <h2>Enter How You Believe An Event Will Play Out Or Add A New Event</h2>
      </div>
      <BetAdder add={addBet}></BetAdder>
      {isWaiting && <div className="loader" />}
      {bets.map(bet => <Bet key={bet.name} bet={bet}/>)}
    </div>
  );
}

export default App;
