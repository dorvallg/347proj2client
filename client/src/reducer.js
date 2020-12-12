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
        case Action.FinishAddingBet:
            return {
                ...state,
                bets: [action.payload, ...state.bets],
            }
        case Action.StartPacthingBet:
            return {
                ...state,
                bets: [action.payload, ...state.bets],
            }
        case Action.FinishSavingBet:
            return {
                ...state,
                bets: state.bets.map(bet => {
                    if( bet.id === action.payload.id ){
                        return action.payload;
                    } else {
                        return bet;
                    }
                }),
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
