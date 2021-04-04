import {HttpCallStates} from "../../config/http.config";
import HomeTypes from "./home.types";

const INITIAL_STATE = {
    getHomeComponentInfoCallStatus: HttpCallStates.UNTOUCHED,
    homeData: {}
}

const HomeReducer = (state=INITIAL_STATE, action) => {
    switch (action.type) {
        case HomeTypes.SET__HOME_COMPONENT_INFO: {
            return {
                ...state,
                homeData: action.payload.homeData
            }
        }

        case HomeTypes.GET__HOME_COMPONENT_INFO__STATUS:
        case HomeTypes.GET__HOME_COMPONENT_INFO__LOADING:
        case HomeTypes.GET__HOME_COMPONENT_INFO__SUCCESS:
        case HomeTypes.GET__HOME_COMPONENT_INFO__ERROR: {
            return  {
                ...state,
                getHomeComponentInfoCallStatus: action.payload
            }
        }

        default: {
            return state;
        }
    }
}

export default HomeReducer;
