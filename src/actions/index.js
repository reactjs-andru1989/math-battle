import { OPERATIONS, CHECKING } from './types';

export function randomOperation() {
  let operation = OPERATIONS[Math.floor(Math.random() * OPERATIONS.length)];

  return {
    type: operation
  };
}

export function checkOperation(answer, { operation, addSeconds, subtractSeconds, addScore, randomOperation }) {
  return {
    type: CHECKING,
    payload: operation,
    answer,
    addSeconds,
    subtractSeconds,
    addScore,
    randomOperation
  };
}
