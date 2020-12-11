export const Action = Object.freeze({
    LoadBets: 'LoadBets',
    FinishAddingBet: 'FinishAddingBet',
});

//Adds the new bet to the store
export function finishAddingBet(bet){
    return {
        type: Action.FinishAddingBets,
        payload: bet,
    };
}

export function stopWaiting() {
    return {
        type: 'StopWaiting'
    };
}

export function startWaiting() {
    return {
        type: 'StartWaiting'
    };
}

export function loadBets(bets){
    return {
        type: Action.LoadBets,
        payload: bets,
    };
}

function checkForErrors(response){
    if( !response.ok){
        throw Error(`${response.statue}: ${response.statusText}`);
    }
    return response;
}

const host = 'https://project2-api.cjwalton.me:8444';

export function loadBet(expired) {
    return dispatch => {
        fetch(`${host}/bets/${expired}`)
        .then(checkForErrors)
        .then(response => response.json())
        .then(data => {
            if(data.ok){
                dispatch(loadBets(data.bets));
            }
        })
        .catch(e => console.error(e));
    };
}

//calls a similar fetch request to the server to add a bet
export function startAddingBet( name, odds, date ){
    const expires = date;
    let in_favor = 0;
    let against = 0;
    if( odds < 0 ){
        against++;
    } else {
        in_favor++;
    }
    const bet = {id: 0, betName: name, in_favor: in_favor, against: against, expires_at: expires, is_expired: 0};
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(bet),
    }
    return dispatch => {
        fetch(`${host}/bets`, options)
        .then(checkForErrors)
        .then(response => response.json())
        .then(data => {
            if(data.ok){
                bet.id = data.id;
                dispatch(finishAddingBet(bet));
            }
        })
        .catch(e => console.error(e));
    };
}

/**
export function fetchSomeData(params) {
    return dispatch => {
        dispatch(startWaiting());
        fetch(host)
        .then(checkForErrors)
        .then(response => response.json())
        .then(data => {
            if( data.ok){
                // create bets
                dispatch(loadBets(data.bets));
            }
            //After bets are created stop waiting
            dispatch(stopWaiting());
        })
        .catch(e => console.error(e));
    }
}
*/