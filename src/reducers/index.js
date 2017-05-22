import { combineReducers } from 'redux';
import mathOperation from './reducer_math_operation';
import checkOperation from './reducer_check_operation';

const rootReducer = combineReducers({
  activeOperation: mathOperation,
  checkOperation: checkOperation
});

export default rootReducer;
