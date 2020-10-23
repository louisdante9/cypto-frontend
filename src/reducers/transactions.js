
import * as types from '../actions/constants';

const initialState = {
  transactions: []
};
const getUserTransactions = (state = initialState,  action) => {
    switch (action.type) {
        case types.GET_USER_TRANS_SUCCESS:
            return {
                ...state, transactions: [...action.payload ].reverse()
            };
        case types.BUY_MINING_SUCCESS:
            return {
                ...state, ...action.payload 
            };

        default:
            return state;
    }
};

export default getUserTransactions;