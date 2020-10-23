
import * as types from '../actions/constants';


const initialState = {
    allWishes: {},
    pendingWishes: {},
};

const wishes = (state = initialState, action) => {
    switch (action.type) {
        case types.GET_ALL_WISHES_SUCCESS:
            return {
                ...state, allWishes: {...action.payload}
            };

        case types.GET_ALL_WISHES_ERROR:
            return {};
        // case types.GET_ALL_PENDING_WISHES_SUCCESS:
        //     return {
        //         ...state, pendingWishes: {...action.payload}
        //     };

        // case types.GET_ALL_PENDING_WISHES_ERROR:
        //     return {};
        // case types.GET_ALL_FULFILLED_WISHES_SUCCESS:
        //     return {
        //         ...state, fulfilledWishes: {...action.payload}
        //     };

        // case types.GET_ALL_FULFILLED_WISHES_ERROR:
        //     return {};
        //   case types.UPDATE_CLIENT_SUCCESS:
        //     const { users } = state;
        //     const filteredUsers = users.filter(({ _id }) => _id !== action.payload._id);

        //     return {
        //       ...state, users: [...filteredUsers, action.payload]
        //     };
        //   case types.UPDATE_CLIENT_ERROR:
        //     return {};

        //   case types.AUTH_TRANSFER_FUNDS_SUCCESS:
        //           return {
        //               ...state,
        //               users: [
        //                   ...state.users.map(user => {
        //                       if(user._id == action.payload._id)
        //                           return action.payload;
        //                       return user;
        //                   })              
        //               ]
        //       };
        //   case types.AUTH_TRANSFER_FUNDS_ERROR:
        //     return {};

        //   case types.DELETE_USER_SUCCESS:
        //     const previousUsers = state.users;
        //     const newUsers = previousUsers.filter(({ _id }) => _id !== action.payload._id);

        //     return {
        //       ...state, users: [...newUsers]
        //     };
        //   case types.DELETE_USER_ERROR:
        //     return {};

        default:
            return state;
    }
};

export default wishes;