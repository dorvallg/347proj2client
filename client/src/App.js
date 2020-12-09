import React, {useEffect, useState} from 'react';
import './App.css';
import {Bet} from './bet.js';
import {useSelector, useDispatch} from 'react-redux';
import {BetAdder} from './betAdder.js';
import {stopWaiting, loadBets, loadBet} from './actions';

function App() {
  const isWaiting = useSelector(state => state.isWaiting);
  const [bets, setBets] = useState([]);
  const dispatch = useDispatch();
  console.log(isWaiting);

  const addBet = newBet =>{

  }
  
/* Moving this to betAdder.js
  const addBet = newBet => {
    dispatch(loadBets(bet));
    //setBets(bets => [newBet, ...bets.filter(bet => bet.name !== newBet.name)])
  }
*/
  useEffect(() => {
    dispatch(loadBet([ //hard coded for testing purposes
      {name: "sample", id: 0},
      {name: 'Sample', id: 1},
    ]));
    //setTimeout(() => dispatchEvent(stopWaiting()), 3000);
  }, [dispatch]);

  return (
    <div id="bets-root">
      <div id="header">
        <h1>What's To Come?</h1>
        <h2>Enter How You Believe An Event Will Play Out Or Add A New Event</h2>
      </div>
      <BetAdder ></BetAdder>
      {isWaiting && <div className="loader" />}
      {bets.map(bet => <Bet key={bet.name} bet={bet}/>)}
    </div>
  );
}

export default App;
