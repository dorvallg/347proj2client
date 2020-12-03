import {Action} from './actions';

const initialState = {
    isWaiting: true,
}

export function reducer(state = initialState, action) {
    switch(action.type) {
        case 'StopWaiting':
            return{
                ...state,
                isWaiting: false,
            }
        default:
            return state;
    }
}
