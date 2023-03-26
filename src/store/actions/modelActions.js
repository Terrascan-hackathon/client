import { loginFailure, loginRequest, loginSuccess, logoutFailure, logoutRequest, logoutSuccess, registerFailure, registerRequest, registerSuccess, getDataRequest, getDataSuccess, getDataFailure } from "../types/modelTypes.js";
import {requestUser} from "../../utils/axiosConfig"

export const login = (data, onSucces = () => {}) => {
    return async (dispatch) => {
        dispatch(loginRequest(data));
        requestUser
        .post('login', data).then((res) => {
            console.log(res)
            const data = res?.data;
            dispatch(loginSuccess(data));
            onSucces && onSucces();
        }).catch((err) => {
            const error = err?.response?.data;
            dispatch(loginFailure(error));
        })
    }
}

export const register = (data, onSucces = () => {}) => {
    return async (dispatch) => {
        dispatch(registerRequest(data));
        requestUser
        .post('signup', data).then((res) => {
            console.log(res)
            const data = res?.data;
            dispatch(registerSuccess(data));
            onSucces && onSucces();
        }).catch((err) => {
            const error = err?.response?.data;
            dispatch(registerFailure(error));
        })
    }
}

export const logout = () => {
    return async (dispatch) => {
        dispatch(logoutRequest());
        requestUser
        .post('logout').then((res) => {
            console.log(res)
            const data = res?.data;
            dispatch(logoutSuccess(data));
        }).catch((err) => {
            const error = err?.response?.data;
            dispatch(logoutFailure(error));
        })
    }
}

export const getData = (date, location, type) => {
    const formatType = type.toLowerCase();
    return async (dispatch) => {
        dispatch(getDataRequest());
        requestUser
        .get(`data/${location}`)
        .then((res) => {
            console.log(res)
            const data = res?.data;
            dispatch(getDataSuccess(data));
        }).catch((err) => {
            const error = err?.response?.data;
            dispatch(getDataFailure(error));
        })
    }
}