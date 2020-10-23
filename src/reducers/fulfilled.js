
import * as types from '../actions/constants';


const initialState = {
    fulfilledWishes: {}
};

const fulfilled = (state = initialState, action) => {
    switch (action.type) {
        case types.GET_ALL_FULFILLED_WISHES_SUCCESS:
            return {
                ...state, fulfilledWishes: { ...action.payload }
            };

        case types.GET_ALL_FULFILLED_WISHES_ERROR:
            return {};

        default:
            return state;
    }
};

export default fulfilled;