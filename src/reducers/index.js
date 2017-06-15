import { combineReducers } from 'redux';
//import mathOperation from './reducer_math_operation';
//import checkOperation from './reducer_check_operation';
import UsersReducer from './reducer_users';

const rootReducer = combineReducers({
  //activeOperation: mathOperation,
  //checkOperation: checkOperation,
  users: UsersReducer
});

export default rootReducer;
