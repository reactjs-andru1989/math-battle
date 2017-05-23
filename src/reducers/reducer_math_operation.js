import { ADDITION, RESULT_TYPES } from '../actions/types';

export default function(state = null, action) {
  switch (action.type) {
    case ADDITION:
      let n1 = Math.floor(Math.random() * 10) + 1
      let n2 = Math.floor(Math.random() * 10) + 1
      //let result = n1 + n2

      let result_value;
      let result_type = RESULT_TYPES[Math.floor(Math.random() * RESULT_TYPES.length)];
      if (result_type === 'truthy') {
        result_value = n1 + n2
      } else {
        result_value = n1 + n2 + 5
      }

      return {
        message: `${n1} + ${n2} = ${result_value}`,
        operation: `${n1} + ${n2}`,
        result: result_value
      };
  }
  return state;
}

/*function question() {
  var add = (x, y) => x+y;
  var subtract = (x, y) => x-y;
  var multiply = (x, y) => x*y;
  var operators = [add, subtract, multiply];

  this.a = Math.round(Math.random()*10);
  this.b = Math.round(Math.random()*10);
  var operatorIdx = Math.min(Math.floor(Math.random()*4),3);
  this.operator = operators[operatorIdx];
  this.result = operator(this.a,this.b);
  this.checkResult = function(givenResultString) {
    return (""+this.result == givenResultString);
  }
}
*/
