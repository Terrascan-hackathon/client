import { combineReducers } from "redux";
import alertReducer from "./reducers/alertReducer";

//  *****************|  MODELS FOR IMPORTS |********************

import userReducer from "./reducers/modelReducers";
import dataReducer from "./reducers/dataReducer";

// ==============================|| COMBINE REDUCER ||============================== //

//  *****************|  COMBINE CUSTOM REDUCERS |********************

const reducer = combineReducers({
  userState: userReducer,
  dataState: dataReducer,
  alertState: alertReducer,
});

export default reducer;
