import {createStore, applyMiddleware} from 'redux';
import reducer from './reducers/index';
import createSagaMiddleware from 'redux-saga'
import {createLogger} from 'redux-logger';
import rootSaga from './sagas';

const sagaMiddleware = createSagaMiddleware();
const logger = createLogger();

//Create redux store
const store = createStore(reducer, applyMiddleware(sagaMiddleware, logger));


sagaMiddleware.run(rootSaga);

export default store;