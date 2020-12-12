import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import { startPatchingBet } from './actions';

export function Bet(props) {
    const bet = props.bet;
    const dispatch = useDispatch();
    
    const favor = useState(bet.in_favor);
    const against = useState(bet.against);

    const updateAgainst = () => {
        
        dispatch(startPatchingBet({
            id: bet.id,
            betName: bet.betName,
            in_favor: bet.in_favor,
            against: bet.against + 1,
            expires_at: bet.expires_at,
            is_expired: 0,
        }));
        
    }

    const updateFavor = () => {
        
        dispatch(startPatchingBet({
            id: bet.id,
            betName: bet.betName,
            in_favor: bet.in_favor + 1,
            against: bet.against,
            expires_at: bet.expires_at,
            is_expired: 0,
        }));
        
    }
    
    return (
        <div className="bet" id="bet">
            <span className="bet-name">{bet.betName}</span>
            <div className="for-against">
                <span className="for-bet">This will happen:</span>
                <div className="val">{bet.in_favor}</div>
                <button className="plus" onClick={updateFavor()}>+</button>
            </div>
            <div className="for-against">
                <span className="against-bet">This will not happen:</span>
                <div className="val">{bet.against}</div>
                <button className="plus" onClick={updateAgainst()}>+</button>
            </div>
            <div id="expires">expires on: {bet.expires_at}</div>
        </div>
    );
}