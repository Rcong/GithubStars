import { fetchUser } from 'Api'

// export const LOGIN_SUCCESS = 'login/success';
export const LOGIN_FINISHED = 'login/finished';

export const loginStartAction = ({ username, password }) => dispatch => {
    fetchUser(username, password).then(userInfo => {
        let msg = userInfo.message;
        dispatch({ type: LOGIN_FINISHED, loginData: { loginErrorMsg: msg ? msg : '登录成功', isLogin: true, loginLoading: false } });
    }).catch(error => {
        dispatch({ type: LOGIN_FINISHED, loginData: { loginErrorMsg: error.message, loginLoading: false } });
    });
};