export const ALERT_REQUEST = 'ALERT_REQUEST';
export const ALERT_SUCCESS = 'ALERT_SUCCESS';
export const ALERT_FAILURE = 'ALERT_FAILURE';


// *****************| GET ALETR |*************************

export const alertRequest = () => {
    return {
        type: ALERT_REQUEST
    }
}

export const alertSuccess = (payload) => {
    return {
        type: ALERT_SUCCESS,
        payload: payload
    }
}

export const alertFailure = (payload) => {
    return {
        type: ALERT_FAILURE,
        payload: payload
    }
}