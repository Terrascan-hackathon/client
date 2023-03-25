import { loginFailure, loginRequest, loginSuccess, registerFailure, registerRequest, registerSuccess } from "../types/modelTypes";
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