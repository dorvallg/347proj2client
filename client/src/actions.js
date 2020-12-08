export const Action = Object.freeze({
    LoadBets: 'LoadBets',
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

function checkForErrors(response){
    if( !response.ok){
        throw Error(`${response.statue}: ${response.statusText}`);
    }
}

const host = 'https://project2.cjwalton.me/:8443';

export function loaBet(bet) {
    return dispatch => {
        fetch(`${host}/bets/${bet}`)
        .then(checkForErrors)
        .then(response => response.json())
        .then(data => {
            if(data.ok){
                //data bets
            }
        })
        .catch(e => console.error(e));
    };
}

export function fetchSomeData(params) {
    return dispatch => {
        dispatch(startWaiting());
        fetch(url)
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