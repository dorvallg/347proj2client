import React from 'react';

export function Bet(props) {
    const bet = props.bet;
    return (
        <div className="bet" id="bet">
            <span className="bet-name">{bet.betName}</span>
            <div className="for-against">
                <span className="for-bet">This will happen:</span>
                <div className="val">{bet.in_favor}</div>
                <button className="plus">+</button>
            </div>
            <div className="for-against">
                <span className="against-bet">This will not happen:</span>
                <div className="val">{bet.against}</div>
                <button className="plus">+</button>
            </div>
            <div id="expires">expires on: {bet.expires_at}</div>
        </div>
    );
}