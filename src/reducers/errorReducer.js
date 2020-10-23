import * as types from '../actions/constants';


export default function(state = {}, action ) {
    switch(action.type) {
        case types.GET_ERRORS:
            return action.payload;
        default: 
            return state;
    }
}