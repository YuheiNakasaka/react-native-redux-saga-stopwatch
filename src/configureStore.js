import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import app from './reducers';
import rootSaga from './saga/index';

const sagaMiddleware = createSagaMiddleware();

export default function configureStore() {
  const store = createStore(app, applyMiddleware(sagaMiddleware));
  rootSaga.map(saga => sagaMiddleware.run(saga));
  return store;
}
