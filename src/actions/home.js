import { START_TIMER, STOP_TIMER } from '../constants/home';

export function startTimerBtn(currentState) {
  return {
    type: START_TIMER,
  };
}
export function stopTimerBtn(currentState) {
  return {
    type: STOP_TIMER,
  };
}
