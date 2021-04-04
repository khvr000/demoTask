import AuthTypes from "./auth.types";
import {HttpCallStates} from "../../config/http.config";

const INITIAL_STATE = {
    checkAuthUserLoginCallStatus: HttpCallStates.UNTOUCHED,
    saveAuthUserLoginCallStatus: HttpCallStates.UNTOUCHED,
    saveAuthUserLogoutCallStatus: HttpCallStates.UNTOUCHED,
    saveAuthUserSignupCallStatus: HttpCallStates.UNTOUCHED,
    signUpData: {}
}

const appAuthReducer  = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case AuthTypes.RUN__AUTH__USER_LOGOUT: {
            return state;
        }

        case AuthTypes.SET__AUTH__USER_SIGNUP: {
            const { data } = action.payload;
            return {
                ...state,
                signUpData: {...data}
            }
        }

        case AuthTypes.SET__AUTH__IS_USER_LOGGED_IN: {
            return {
                ...state,
                isUserLoggedIn: action.payload,
            };
        }

        case AuthTypes.SET__AUTH__USER_LOGOUT: {
            return {
                ...state,
                isUserLoggedIn: false,
                signUpData: null
            }
        }

        case AuthTypes.SAVE__AUTH__USER_LOGIN__STATUS:
        case AuthTypes.SAVE__AUTH__USER_LOGIN__LOADING:
        case AuthTypes.SAVE__AUTH__USER_LOGIN__SUCCESS:
        case AuthTypes.SAVE__AUTH__USER_LOGIN__ERROR: {
            return {
                ...state,
                saveAuthUserLoginCallStatus: action.payload,
            };
        }

        case AuthTypes.SAVE__AUTH__USER_LOGOUT__STATUS:
        case AuthTypes.SAVE__AUTH__USER_LOGOUT__LOADING:
        case AuthTypes.SAVE__AUTH__USER_LOGOUT__SUCCESS:
        case AuthTypes.SAVE__AUTH__USER_LOGOUT__ERROR: {
            return {
                ...state,
                saveAuthUserLogoutCallStatus: action.payload,
            };
        }

        case AuthTypes.SAVE__AUTH__USER_SIGNUP__STATUS:
        case AuthTypes.SAVE__AUTH__USER_SIGNUP__LOADING:
        case AuthTypes.SAVE__AUTH__USER_SIGNUP__SUCCESS:
        case AuthTypes.SAVE__AUTH__USER_SIGNUP__ERROR: {
            return {
                ...state,
                saveAuthUserSignupCallStatus: action.payload,
            };
        }

        default: {
            return state;
        }
    }
}


export default appAuthReducer;
