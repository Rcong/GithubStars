import { LOGIN_FINISHED } from './action';
import { createReducer } from 'Utils/createReducer'

let initState = {
    loginErrorMsg: '',
    loginLoading: false
}

export default (state = initState, action = {}) => {
    switch(action.type) {
        case LOGIN_FINISHED:
            let { loginData } = action;
            return { ...state, ...loginData}
        default:
            return state;
    }
}

// export default createReducer(initState, {
// 	[LOGIN_START]: (state, { loginData }) => {
//         return { ...state, ...loginData};
//     },
//     [LOGIN_ERROR]: (state, { loginData }) => {
//         return { ...state, ...loginData};
// 	}
// })