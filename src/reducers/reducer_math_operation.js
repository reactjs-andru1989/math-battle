import { ADDITION } from '../actions/types';

export default function(state = null, action) {
  switch (action.type) {
    case ADDITION:
      return {operation: "5 + 5", result: 10};
  }
  return state;
}
