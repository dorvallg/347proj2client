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

export function loadBet(name, odds) {
    return dispatch => {
        fetch(`${host}/bets/${name}/${odds}`)
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
export function startAddingBet( name, odds ){
    const today = Date.UTC();
    const expires = today + Date.UTC(0, 1, 0, 0, 0, 0, 0);
    const bet = {id: 0, odds, name, expires_at: expires, is_expired: 0};
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