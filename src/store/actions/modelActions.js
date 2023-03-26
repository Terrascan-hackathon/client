import { loginFailure, loginRequest, loginSuccess, logoutFailure, logoutRequest, logoutSuccess, postAlertFailure, postAlertRequest, postAlertSuccess, registerFailure, registerRequest, registerSuccess } from "../types/modelTypes";
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
export const postAlert = (data, onSuccess = ()=> {}) => {
    return async (dispatch) => {
        dispatch(postAlertRequest());
        requestUser
        .post('posts', data).then((res) => {
            console.log(res)
            const data = res?.data;
            dispatch(postAlertSuccess(data));
            onSuccess && onSuccess();
        }).catch((err) => {
            const error = err?.response?.data;
            dispatch(postAlertFailure(error));
        })
    }
}