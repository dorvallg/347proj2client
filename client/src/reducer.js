import {Action} from './actions';

const initialState = {
    isWaiting: true,
    bets: [{betName: "sample", in_favor: 10, against: 5}, {betName: "lauren", in_favor: 5, against: 0}],
}

export function reducer(state = initialState, action) {
    switch(action.type) {
        case Action.LoadBets:
            return {
                ...state,
                bets: action.payload,
            }
        case Action.FinishAddingBet:
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
