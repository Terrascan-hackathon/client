import axios from 'axios';
import { userUrl } from './constants.js';

const requestUser = axios.create({
    baseURL: userUrl,
});

// const requestGuests = axios.create({
//     baseURL: guestsURL,
// });

requestUser.interceptors.request.use(function (config) {
    config.withCredentials = true;
    return config;
});
export {requestUser };