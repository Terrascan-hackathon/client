import {
    LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE,
} from "../types/modelTypes"

const initialState = {
    loading: false,
    error: {
        status: false,
        message: "",
    },
    user: {},
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
        default:
            return state;
    }
};

export default userReducer;