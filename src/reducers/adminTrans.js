
import * as types from '../actions/constants';

const initialState = {
    transactions: []
};
const getAdminTransactions = (state = initialState, action) => {
    switch (action.type) {
        case types.GET_ADMIN_TRANS_SUCCESS:
            return {
                ...state, transactions: [...action.payload].reverse()
            };
        case types.UPDATE_TRANS_SUCCESS:
            const { transactions } = state;
            const filteredTrans = transactions.filter(({ _id }) => _id !== action.payload._id);

            return {
                ...state, transactions: [...filteredTrans, action.payload].reverse()
            };

        default:
            return state;
    }
};

export default getAdminTransactions;