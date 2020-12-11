import React from 'react';

export function Bet(props) {
    return (
        <div className="bet" id="bet">
            <span className="bet-name">{props.bet.betName}</span>
            <div className="for-against">
                <span className="for-bet">This will happen:</span>
                <div className="val">{props.bet.in_favor}</div>
            </div>
            <div className="for-against">
                <span className="against-bet">This will not happen:</span>
                <div className="val">{props.bet.against}</div>
            </div>
            <div id="expires">expires on: {props.bet.expires_at}</div>
        </div>
    );
}