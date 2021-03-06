import { combineReducers } from 'redux';
import { authReducer } from "./auth/reducer";
import {registrationReducer} from "./registration/reducer";


export default combineReducers({
	auth: authReducer,
	registration: registrationReducer
});
