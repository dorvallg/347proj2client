import React from 'react';

export function Bet(props) {
    const bet = props.bet;

    return (
        <div className="bet" id="bet">
            <span className="bet-name">{bet.name}</span>
            <div className="for-against">
                <span className="for-bet">This will happen</span>
                <input readonly></input>
            </div>
            <div className="for-against">
                <span className="against-bet">This will not happen</span>
                <input readonly></input>
            </div>
        </div>
    );
}