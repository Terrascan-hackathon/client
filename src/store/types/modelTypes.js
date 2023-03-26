export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';
export const REGISTER_REQUEST = 'REGISTER_REQUEST';
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
export const REGISTER_FAILURE = 'REGISTER_FAILURE';
export const LOGOUT_REQUEST = 'LOGOUT_REQUEST';
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';
export const LOGOUT_FAILURE = 'LOGOUT_FAILURE';
export const GETDATA_REQUEST = 'GETDATA_REQUEST';
export const GETDATA_SUCCESS = 'GETDATA_SUCCESS';
export const GETDATA_FAILURE = 'GETDATA_FAILURE';
export const POSTALERT_REQUEST = 'POSTALERT_REQUEST';
export const POSTALERT_SUCCESS = 'POSTALERT_SUCCESS';
export const POSTALERT_FAILURE = 'POSTALERT_FAILURE';


// *****************| LOGIN |*************************

export const loginRequest = () => {
    return {
        type: LOGIN_REQUEST
    }
}

export const loginSuccess = (payload) => {
    return {
        type: LOGIN_SUCCESS,
        payload: payload
    }
}

export const loginFailure = (payload) => {
    return {
        type: LOGIN_FAILURE,
        payload: payload
    }
}
// *****************| REGISTER |*************************

export const registerRequest = () => {
    return {
        type: REGISTER_REQUEST
    }
}

export const registerSuccess = (payload) => {
    return {
        type: REGISTER_SUCCESS,
        payload: payload
    }
}

export const registerFailure = (payload) => {
    return {
        type: REGISTER_FAILURE,
        payload: payload
    }
}

// *****************| LOGOUT |*************************

export const logoutRequest = () => {
    return {
        type: LOGOUT_REQUEST
    }
}

export const logoutSuccess = (payload) => {
    return {
        type: LOGOUT_SUCCESS,
        payload: payload
    }
}

export const logoutFailure = (payload) => {
    return {
        type: LOGOUT_FAILURE,
        payload: payload
    }
}


// *****************| DATAPOST |*************************

export const getDataRequest = () => {
    return {
        type: GETDATA_REQUEST
    }
}

export const getDataSuccess = (payload) => {
    return {
        type: GETDATA_SUCCESS,

export const postAlertRequest = (payload) => {
    return {
        type: POSTALERT_REQUEST,
        payload: payload
    }
}

export const postAlertSuccess = (payload) => {
    return {
        type: POSTALERT_SUCCESS,
        payload: payload
    }
}


export const getDataFailure = (payload) => {
    return {
        type: GETDATA_FAILURE,

export const postAlertFailure = (payload) => {
    return {
        type: POSTALERT_FAILURE,
        payload: payload
    }
}