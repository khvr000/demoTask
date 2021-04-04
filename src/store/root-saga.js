import { takeEvery } from 'redux-saga/effects';
import AuthTypes from "./auth/auth.types";
import {saveAuthUserLoginSaga, saveAuthUserLogoutSaga, saveAuthUserSignupSaga} from "./auth/auth.saga";
import HomeTypes from "./home/home.types";
import {getHomeComponentInfoSaga} from "./home/home.saga";


export function* watchAuthRequests() {
    // yield takeEvery(AuthTypes.CHECK__AUTH__USER_LOGIN, checkAuthUserLoginSaga);
    yield takeEvery(AuthTypes.SAVE__AUTH__USER_LOGIN, saveAuthUserLoginSaga);
    yield takeEvery(AuthTypes.SAVE__AUTH__USER_LOGOUT, saveAuthUserLogoutSaga);
    yield takeEvery(AuthTypes.SAVE__AUTH__USER_SIGNUP, saveAuthUserSignupSaga);
}

export function* watchHomeRequests() {
    yield takeEvery(HomeTypes.GET__HOME_COMPONENT_INFO, getHomeComponentInfoSaga);
}
