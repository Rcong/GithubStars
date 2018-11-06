import { combineReducers } from 'redux';
import loginReducer from 'Pages/Login/reducer';

export default combineReducers({
    loginData: loginReducer
});