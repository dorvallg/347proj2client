import React from 'react';

export function Bet(props) {
    const bet = props.bet;

    return (
        <div className="bet">
            <span className="bet-name">{bet.name}</span>
            <span className="for-bet">This will happen</span>
            <span className="against-bet">This will not happen</span>
        </div>
    );
}