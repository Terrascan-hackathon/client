import {
    LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE, 
    REGISTER_REQUEST, REGISTER_SUCCESS, REGISTER_FAILURE, 
    LOGOUT_REQUEST, LOGOUT_SUCCESS, LOGOUT_FAILURE, POSTALERT_REQUEST, POSTALERT_SUCCESS, POSTALERT_FAILURE,
} from "../types/modelTypes"

const initialState = {
    loading: false,
    error: {
        status: false,
        message: "",
    },
    user: {},
    isLoggedIn: false
};

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case LOGIN_SUCCESS:
            return {
                ...state,
                loading: false,
                error: {
                    status: false,
                    message: action?.payload?.message,
                },
                user: action?.payload?.user,
                isLoggedIn: action?.payload?.user?.loggedIn,
            };
        case LOGIN_FAILURE:
            return {
                ...state,
                loading: false,
                error: {
                    status: true,
                    message: action?.payload?.error,
                },
            };
            case REGISTER_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case REGISTER_SUCCESS:
            return {
                ...state,
                loading: false,
                error: {
                    status: false,
                    message: action?.payload?.message,
                },
            };
        case REGISTER_FAILURE:
            return {
                ...state,
                loading: false,
                error: {
                    status: true,
                    message: action?.payload?.error,
                },
            };
            case LOGOUT_REQUEST:
                return {
                    ...state,
                    loading: true,
                };
            case LOGOUT_SUCCESS:
                return {
                    ...state,
                    loading: false,
                    error: {
                        status: false,
                        message: action?.payload?.message,
                    },
                    user: {},
                    isLoggedIn: false
                };
            case LOGOUT_FAILURE:
                return {
                    ...state,
                    loading: false,
                    error: {
                        status: true,
                        message: action?.payload?.error,
                    },
                    user: {},
                    isLoggedIn: false
                };
                case POSTALERT_REQUEST:
                    return {
                        ...state,
                        loading: true,
                    };
                case POSTALERT_SUCCESS:
                    return {
                        ...state,
                        loading: false,
                        error: {
                            status: false,
                            message: action?.payload?.message,
                        },
                    };
                case POSTALERT_FAILURE:
                    return {
                        ...state,
                        loading: false,
                        error: {
                            status: true,
                            message: action?.payload?.error,
                        },
                    };
        default:
            return state;
    }
};

export default userReducer;