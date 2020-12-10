import React, {useEffect, useState} from 'react';
import './App.css';
import {Bet} from './Bet.js';
import {useSelector, useDispatch} from 'react-redux';
import {BetAdder} from './betAdder.js';
//import {stopWaiting, loadBets, 
import {loadBet} from './actions';

function App() {
  const isWaiting = useSelector(state => state.isWaiting);
  const bets = useSelector(state => state.bets);
  const dispatch = useDispatch();
  //console.log(isWaiting);

  //const addBet = newBet =>{

  //}
  
/* Moving this to betAdder.js
  const addBet = newBet => {
    dispatch(loadBets(bet));
    //setBets(bets => [newBet, ...bets.filter(bet => bet.name !== newBet.name)])
  }
*/

  useEffect(() => {//hard coded for testing purposes
    dispatch(loadBet("sample"));
    //setTimeout(() => dispatchEvent(stopWaiting()), 3000);
  }, [dispatch]);

  return (
    <div id="bets-root">
      <div id="header">
        <h1>What's To Come?</h1>
        <h2>Enter How You Believe An Event Will Play Out Or Add A New Event</h2>
      </div>
      {/*<BetAdder ></BetAdder>*/}
      {isWaiting && <div className="loader" />}
      {bets.map(bet => <Bet key={bet.id} bet={bet}/>)}
    </div>
  );
}

export default App;
