import { combineReducers } from 'redux';
import alertReducer from './reducers/alertReducer';

//  *****************|  MODELS FOR IMPORTS |********************

import userReducer from './reducers/modelReducers';


// ==============================|| COMBINE REDUCER ||============================== //

//  *****************|  COMBINE CUSTOM REDUCERS |********************


const reducer = combineReducers({
   userState: userReducer,
   alertState : alertReducer,
});

export default reducer;