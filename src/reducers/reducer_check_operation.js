import { CHECKING } from '../actions/types';

export default function(state = null, action) {
  switch (action.type) {
    case CHECKING:
      let result = (eval(action.payload.operation) === action.payload.result)
      let answer = action.answer
      console.log(result === answer)
      if (result === answer) {
        action.addSeconds()
        action.addScore()
      } else {
        action.subtractSeconds()
      }
      //action.randomOperation()
  }
  return state;
}
