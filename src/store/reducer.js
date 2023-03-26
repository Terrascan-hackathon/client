import { combineReducers } from 'redux';

//  *****************|  MODELS FOR IMPORTS |********************

import userReducer from './reducers/modelReducers';
import dataReducer from './reducers/dataReducer';


// ==============================|| COMBINE REDUCER ||============================== //

//  *****************|  COMBINE CUSTOM REDUCERS |********************


const reducer = combineReducers({
   userState: userReducer,
   dataState: dataReducer
});

export default reducer;