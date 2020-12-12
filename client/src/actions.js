export const Action = Object.freeze({
    LoadBets: 'LoadBets',
    FinishAddingBet: 'FinishAddingBet',
    FinishSavingBet: 'FinishSavingBet',
});

//Adds the new bet to the store
export function finishSavingBet(bet){
    return {
        type: Action.FinishSavingBet,
        payload: bet,
    };
}

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
                check_expired(data.bets);
                const bets = (data.bets).filter(bet => bet.is_expired !== 1);
                const bad_bet = (data.bets).filter(bet => bet.is_expired === 1);
                var bet;
                for(bet of bad_bet) {
                    dispatch(startPatchingBet(bet));
                }
                dispatch(loadBets(bets));
            }
        })
        .catch(e => console.error(e));
    };
}

function check_expired(bets, dispatch) {
    const date = new Date();

    var bet;
    for(bet of bets){
        const expires = bet.expires_at;
        const date_split = expires.split("-");
        const bet_year = parseInt(date_split[2]);
        const bet_month = parseInt(date_split[1]);
        const bet_day = parseInt(date_split[0]);

        const bet_date = new Date(bet_year, bet_month, bet_day);
        if(bet_date < date) {
            bet.is_expired = 1;
            
        }
    }
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

export function startPatchingBet(bet){
    const options = {
        method: 'PATCH',
        header: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(bet),
    }

    return dispatch => {
        fetch(`${host}/bets/${bet.id}`, options)
        .then(checkForErrors)
        .then(response => response.json)
        .then(data => {
            if(data.ok) {
                dispatch(finishSavingBet(bet));
            }
        })
        .catch(e => console.error(e));
    }
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