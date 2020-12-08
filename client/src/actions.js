export const Action = Object.freeze({
    LoadBets: 'LoadBets',
    FinishAddingBets: 'FinishAddingBets',
});

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
        type: Action.LoadMemories,
        payload: bets,
    };
}

export function FinishAddingBets(bets){
    return {
        type: Action.FinishAddingMemory,
        payload: bets,
    };
}

function checkForErrors(response){
    if( !response.ok){
        throw Error(`${response.statue}: ${response.statusText}`);
    }
}

const host = 'https://project2.cjwalton.me/:8443';

export function loadBet(newBet) {
    return dispatch => {
        fetch(`${host}/bets/${newBet}`)
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

export function addBet(newBet) {
    const bet = {newBet: ''};
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'applications/json'
        },
        body: JSON.stringify(newBet),
    }

    return dispatch => {
        fetch(`${host}/bets/${newBet}`, options)
        .then(checkForErrors)
        .then(response => response.json())
        .then(data => {
            if(data.ok){
                bet.id = data.id;
                dispatch(FinishAddingBets(newBet));
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