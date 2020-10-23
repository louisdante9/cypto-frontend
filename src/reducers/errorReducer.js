import * as types from '../actions/constants';


export default function(state = {}, action ) {
    switch(action.type) {
        case types.USER_LOGIN_ERRORS:
            return action.payload;
        case types.USER_SIGNUP_ERRORS:
            return action.payload;
        case types.VERIFY_TOKEN_ERRORS:
            return action.payload;
        case types.ADMIN_LOGIN_ERRORS:
            return action.payload;
        case types.GET_USER_TRANS_ERROR:
            return action.payload;
        case types.BUY_MINING_ERROR:
            return action.payload;
        case types.UPDATE_TRANS_ERROR:
            return action.payload;
        case types.GET_USERS_ERROR:
            return action.payload;
        default: 
            return state;
    }
}