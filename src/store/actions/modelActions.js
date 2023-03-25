import { loginFailure, loginRequest, loginSuccess } from "../types/modelTypes";

export const login = (data) => {
    return (dispatch) => {
        dispatch(loginRequest(data))
        requestUser
        .post('login', data).then((res) => {
            const data = res?.data;
            dispatch(loginSuccess(data));
        }).catch((err) => {
            const error = err?.response?.data;
            dispatch(loginFailure(error));
        })
    }
}