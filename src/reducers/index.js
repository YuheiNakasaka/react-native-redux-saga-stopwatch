import { combineReducers } from 'redux';
import homeData from './homeReducer';

const rootReducer = combineReducers({
  homeData,
});

export default rootReducer;
