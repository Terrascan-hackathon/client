import { combineReducers } from 'redux';

//  *****************|  MODELS FOR IMPORTS |********************

import userReducer from './reducers/modelReducers';


// ==============================|| COMBINE REDUCER ||============================== //

//  *****************|  COMBINE CUSTOM REDUCERS |********************


const reducer = combineReducers({
   userState: userReducer,
});

export default reducer;