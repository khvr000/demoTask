import { applyMiddleware, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { createLogger } from 'redux-logger';
import rootReducer from './root-reducer';
import {watchAuthRequests, watchHomeRequests} from './root-saga';

const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware];

if (process.env.NODE_ENV === 'development') {
    const logger = createLogger({
        collapsed: true,
        duration: true,
    });
    middlewares.push(logger);
}

const store = createStore(rootReducer, applyMiddleware(...middlewares));

sagaMiddleware.run(watchAuthRequests);
sagaMiddleware.run(watchHomeRequests);


export default store;
