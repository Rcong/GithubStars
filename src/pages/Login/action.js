import { fetchUser } from 'Api'
import history from 'Src/history';

export const LOGIN_FINISHED = 'login/finished';

export const loginStartAction = ({ username, password }) => async dispatch => {

    let res = await fetchUser(username, password);

    if (res.message) {
        dispatch({ type: LOGIN_FINISHED, loginData: { loginErrorMsg: res.message, loginLoading: false } });
    } else {
        dispatch({ type: LOGIN_FINISHED, loginData: { loginErrorMsg: '登录成功', userInfo: res, loginLoading: false } });
        history.push('/home');
    }

};