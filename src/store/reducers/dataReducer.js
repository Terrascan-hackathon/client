import {
    GETDATA_REQUEST,
    GETDATA_SUCCESS,
    GETDATA_FAILURE
} from "../types/modelTypes"

const initialState = {
    loading: false,
    error: {
        status: false,
        message: "",
    },
    data: []
};

const dataReducer = (state = initialState, action) => {
    switch (action.type) {
        case GETDATA_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case GETDATA_SUCCESS:
            return {
                ...state,
                loading: false,
                error: {
                    status: false,
                    message: action?.payload?.message,
                },
                data: action?.payload
            };
        case GETDATA_FAILURE:
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

export default dataReducer;