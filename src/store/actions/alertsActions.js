import { alertFailure, alertRequest, alertSuccess} from "../types/alertTypes";
import {requestAll} from "../../utils/axiosConfig"

export const getAlert = (onSucces = () => {}) => {
    return async (dispatch) => {
        dispatch(alertRequest());
        requestAll
        .get('posts').then((res) => {
            console.log(res)
            const data = res?.data;
            dispatch(alertSuccess(data));
            onSucces && onSucces();
        }).catch((err) => {
            const error = err?.response?.data;
            dispatch(alertFailure(error));
        })
    }
}