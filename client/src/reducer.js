import {Action} from './actions';

const initialState = {
    isWaiting: true,
    bets: [],
}

export function reducer(state = initialState, action) {
    switch(action.type) {
        case Action.LoadBets:
            return {
                ...state,
                bets: action.payload,
            }
        case Action.FinishAddingBets:
            return {
                ...state,
                bets: [action.payload, ...state.bets],
            }
        case 'StopWaiting':
            return{
                ...state,
                isWaiting: false,
            }
        default:
            return state;
    }
}
