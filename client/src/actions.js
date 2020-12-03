
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
    //Bets created Here
}

const url = 'Where-Bets-Are-Located';

function checkForErrors(response){
    if( !response.ok){
        throw Error(`${response.statue}: ${response.statusText}`);
    }
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