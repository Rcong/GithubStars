import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Form, Icon, Input, Button } from 'antd';
import { loginStartAction } from './action';
import './Login.less';


const FormItem = Form.Item;


class LoginForm extends Component {

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, { username, password }) => {
            if (!err) {
                this.props.loginStart({ username, password });
            }
        });
    }

    submit(e) {
        e.preventDefault();
        let username = this.refs.username.value.trim();
        let password = this.refs.password.value.trim();
        this.props.loginStart({ username, password });
    }

    render() {
        let { form, loginData,  } = this.props;
        let { getFieldDecorator } = form;
        let { loginErrorMsg, isLogin, loginLoading  } = loginData;

        if (isLogin) {
            this.props.history.push('/');
            return
        }

        return (
            <div className="loginContainer">
                <div className="loginMask"></div>
                <div className="loginContent">
                    <Form onSubmit={this.handleSubmit} className="loginForm">
                        <FormItem className="loginForm">
                            <h2 className="textCenter">Login to GithubStars</h2>
                        </FormItem>
                        <FormItem>
                            {
                                getFieldDecorator('username', {
                                    rules: [{ required: true, message: '请输入Github的用户名' }]
                                })(
                                    <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Github Username" />
                                )
                            }
                            { loginErrorMsg ? <div className={"loginError"}>{loginErrorMsg}</div> : '' }
                        </FormItem>
                        <FormItem>
                            {
                                getFieldDecorator('password', {
                                    rules: [{ required: true, message: '请输入Github的密码' }],
                                })(
                                    <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Github Password" />
                                )
                            }
                        </FormItem>
                        <FormItem>
                            <Button type="primary" htmlType="submit" className="loginFormButton">登录</Button>
                        </FormItem>
                    </Form>
                </div>
            </div>            
        );
    }
}

const Login = Form.create()(LoginForm);

let mapStateToProps = ({ loginData }) => ({ loginData });
let mapDispatchToProps = dispatch => ({ loginStart: data => dispatch(loginStartAction(data)) });

export default connect(mapStateToProps, mapDispatchToProps)(Login);