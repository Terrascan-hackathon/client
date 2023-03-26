import axios from 'axios';
import { baseUrl, userUrl } from './constants';


const requestUser = axios.create({
    baseURL: userUrl,
});

const requestAll = axios.create({
    baseURL: baseUrl,
});
// const requestGuests = axios.create({
//     baseURL: guestsURL,
// });

requestUser.interceptors.request.use(function (config) {
    config.withCredentials = true;
    return config;
});
export {requestUser, requestAll };