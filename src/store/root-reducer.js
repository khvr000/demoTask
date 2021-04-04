/**
 * COPYRIGHT NOTICE Deepen AI, Inc. 2017-2020
 * This software maybe subject to pending patent applications
 */

import { combineReducers } from 'redux';
import authReducer from './auth/auth.reducer';
import homeReducer from './home/home.reducer';
import AuthTypes from './auth/auth.types';


const rootReducer = combineReducers({
    auth: authReducer,
    home: homeReducer,
});

const filteredRootReducer = (state, action) => {
    if (action.type === AuthTypes.RUN__AUTH__USER_LOGOUT) {
        state = undefined;
    }

    console.log(state);


    return rootReducer(state, action);
};

export default filteredRootReducer;
