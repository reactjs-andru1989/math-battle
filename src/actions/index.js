import { FETCH_USERS } from './types';
import axios from 'axios';

const ROOT_URL = "http://localhost:3000";
/*
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
}*/

export function fetchUsers() {
  const request = axios.get(`${ROOT_URL}/users.json`);

  return {
    type: FETCH_USERS,
    payload: request
  }
}
