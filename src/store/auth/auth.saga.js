import {
    setAuthIsUserLoggedIn,
    setAuthSaveUserLoginCallStatus, setAuthSaveUserLogoutCallStatus,
    setAuthSaveUserSignupCallStatus,
    setAuthUserSignup
} from "./auth.actions";
import {put, select} from 'redux-saga/effects';
import {HttpCallStates} from "../../config/http.config";
import axios from "../../utils/axios";
import {getJwtTokenFromStorage, saveLoginDataToStorage} from "../../utils/storage";
import {Link} from "react-router-dom";


export const getAuthState = (state) => state.auth;


const sleep = (milliseconds) => {
    const date = Date.now();
    let currentDate = null;
    do {
        currentDate = Date.now();
    } while (currentDate - date < milliseconds);
}

export function* saveAuthUserLoginSaga(action) {
    const { payload } = action;
    const { data, isSSO } = payload;
    // sleep(1000);
    yield put(setAuthSaveUserLoginCallStatus(HttpCallStates.LOADING));
    // sleep(1000);
    try {

        // if (isSSO) {
        //     const element = document.createElement('a');
        //     element.href = '/api/v2/login?sso=true';
        //     document.body.appendChild(element);
        //     element.click();
        //     document.body.removeChild(element);
        //     return;
        // }
        const apiEndpoint = 'https://jsonplaceholder.typicode.com/todos/1';
        const response = yield axios.get(apiEndpoint);
        const authState = yield select(getAuthState);
        const { signUpData } = authState;

        if (data.email === signUpData.email && data.password === signUpData.password) {
            saveLoginDataToStorage({jwt_token: '12121212131313'});
            axios.defaults.headers.common.Authorization = `Bearer ${getJwtTokenFromStorage()}`;
            yield put(setAuthIsUserLoggedIn(true))
            yield put(setAuthSaveUserLoginCallStatus(HttpCallStates.SUCCESS));
        } else {
            alert('please enter valid credentials')
            throw new Error('Invalid Login details');
        }

        // const response = yield axios.post(apiEndpoint, data);

    } catch (e) {
        yield put(setAuthSaveUserLoginCallStatus(HttpCallStates.ERROR));
    }
}


export function* saveAuthUserSignupSaga(action) {
    const { payload } = action;
    const { data } = payload;
    yield put(setAuthSaveUserSignupCallStatus(HttpCallStates.LOADING));
    try {
        const response = yield axios.get(`https://jsonplaceholder.typicode.com/todos/1`);
        yield put(setAuthUserSignup(data));
        yield put(setAuthSaveUserSignupCallStatus(HttpCallStates.SUCCESS));
        alert('sign up success')
        // this.props.history.push('/login')

    } catch (e) {
        let error400Title = 'Signup - Error 400';
        let error400Content = <div>You need to enter both email and password</div>;
        if (e && e.response && e.response.status === 400) {
            if (e.response.data === 'User already signed up') {
                error400Title = 'Signup Error';
                error400Content = (
                    <div>
                        You already have an account with us.
                        <br />
                        <br />
                        <Link to="/login">Click here</Link> to login.
                    </div>
                );
            } else if (e.response.data) {
                error400Content = <div>{e.response.data}</div>;
            }
        }
        yield put(setAuthSaveUserSignupCallStatus(HttpCallStates.ERROR));
    }
}


export function* saveAuthUserLogoutSaga(action) {
    const { payload } = action;
    const { data } = payload;
    yield put(setAuthSaveUserLogoutCallStatus(HttpCallStates.LOADING));
    try {
        // const apiEndpoint = '/api/v2/logout';

        // const response = yield axios.get(apiEndpoint, data);
        // if (response && response.data) {
        //
        // }
        yield put(setAuthIsUserLoggedIn(false))

        yield put(setAuthSaveUserLogoutCallStatus(HttpCallStates.SUCCESS));
    } catch (e) {
        yield put(setAuthSaveUserLogoutCallStatus(HttpCallStates.ERROR));
    }
}
