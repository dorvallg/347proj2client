import React, {useEffect} from 'react';
import './App.css';
import {Bet} from './bet.js';
import {useSelector, useDispatch} from 'react-redux';
import {BetAdder} from './betAdder.js'; 
import {loadBet
} from './actions';

function App() {
  const isWaiting = useSelector(state => state.isWaiting);
  const bets = useSelector(state => state.bets);
  const dispatch = useDispatch();
  console.log(isWaiting);

  useEffect(() => {//hard coded for testing purposes
    dispatch(loadBet(0));
    //setTimeout(() => dispatchEvent(stopWaiting()), 3000);
  }, [dispatch]);

  return (
    <div id="bets-root">
      <div id="header">
        <h1>What's To Come?</h1>
        <h2>Enter How You Believe An Event Will Play Out Or Add A New Event</h2>
      </div>
      <div style={{display: isWaiting ? "visible" : "none"}} className="loader"></div>
      {<BetAdder style={{visibility: isWaiting ? "none" : "visible"}}></BetAdder>}
      {isWaiting && <div className="loader" />}
      {bets.map(bet => <Bet key={bet.id} bet={bet}/>)}
    </div>
  );
}

export default App;
