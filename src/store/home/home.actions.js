import {HttpCallStates} from "../../config/http.config";
import HomeTypes from "./home.types";

export const getHomeComponentInfo = () => ({
    type: HomeTypes.GET__HOME_COMPONENT_INFO
});

export const setHomeComponentInfo = (homeData) => ({
   type: HomeTypes.SET__HOME_COMPONENT_INFO,
   payload: { homeData }
});

export const getHomeComponentInfoCallStatus = (status = HttpCallStates.UNTOUCHED) => {
    if (status === HttpCallStates.LOADING) {
        return {
            type: HomeTypes.GET__HOME_COMPONENT_INFO__LOADING,
            payload: status,
        };
    }

    if (status === HttpCallStates.SUCCESS) {
        return {
            type: HomeTypes.GET__HOME_COMPONENT_INFO__SUCCESS,
            payload: status,
        };
    }

    if (status === HttpCallStates.ERROR) {
        return {
            type: HomeTypes.GET__HOME_COMPONENT_INFO__ERROR,
            payload: status,
        };
    }

    return {
        type: HomeTypes.GET__HOME_COMPONENT_INFO__STATUS,
        payload: status,
    };
};
