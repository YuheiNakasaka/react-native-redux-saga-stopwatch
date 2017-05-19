import { START_TIMER, STOP_TIMER, RESET_TIMER, INCREASE_TIMER } from '../constants/home';

const initialState = {
  totalTime: 0,
  timerRunning: false,
};

export default function dataReducer(state = initialState, action) {
  switch (action.type) {
    case START_TIMER:
      return {
        ...state,
        timerRunning: true,
      };
    case STOP_TIMER:
      return {
        ...state,
        timerRunning: false,
      };
    case RESET_TIMER:
      return {
        ...state,
        timerRunning: false,
        totalTime: 0,
      };
    case INCREASE_TIMER:
      return {
        ...state,
        totalTime: state.totalTime + 1,
      };
    default:
      return state;
  }
}
