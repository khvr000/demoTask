import {put} from "redux-saga/effects";
import axios from "../../utils/axios";
import {getHomeComponentInfoCallStatus, setHomeComponentInfo} from "./home.actions";
import {HttpCallStates} from "../../config/http.config";

export  function* getHomeComponentInfoSaga(action) {
    const { payload } = action;
    try {
        yield put(getHomeComponentInfoCallStatus(HttpCallStates.LOADING));
        const apiEndpoint = 'https://pokeapi.co/api/v2/pokemon/squirtle/';
        const response = yield axios.get(apiEndpoint);
        yield put(setHomeComponentInfo(response.data))
        yield put(getHomeComponentInfoCallStatus(HttpCallStates.SUCCESS));

    } catch (e) {
        yield put(getHomeComponentInfoCallStatus(HttpCallStates.ERROR));

    }
}
