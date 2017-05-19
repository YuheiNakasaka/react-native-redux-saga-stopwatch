import { START_TIMER, STOP_TIMER, RESET_TIMER } from '../constants/home';

export function startTimerBtn() {
  return {
    type: START_TIMER,
  };
}

export function stopTimerBtn() {
  return {
    type: STOP_TIMER,
  };
}

export function resetTimerBtn() {
  return {
    type: RESET_TIMER,
  };
}
