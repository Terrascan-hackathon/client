import { ALERT_FAILURE, ALERT_REQUEST, ALERT_SUCCESS } from "../types/alertTypes";


const initialState = {
    loading: false,
    error: {
        status: false,
        message: "",
    },
    alerts: [],
};

const alertReducer = (state = initialState, action) => {
    switch (action.type) {
        case ALERT_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case ALERT_SUCCESS:
            return {
                ...state,
                loading: false,
                error: {
                    status: false,
                    message: action?.payload?.message,
                },
                alerts: action?.payload?.posts,
            };
        case ALERT_FAILURE:
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

export default alertReducer;