import { combineReducers } from 'redux';
// import signup from './signup';
// import fulfilled from './fulfilled';
// import wishes from './wishes';
import errorReducer from './errorReducer';
import setCurrentUser from './setCurrentUser';


const rootReducer = combineReducers({
  setCurrentUser,
  errors: errorReducer
  // slots,
  // fulfilled,
  // wishes
});

export default rootReducer;