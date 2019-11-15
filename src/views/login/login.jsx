// 注意  引入模块时  最好是先引入第三方模块,再引入本地
//第三方模块
import React, { Component } from 'react'
import { Form, Icon, Input, Button, message } from 'antd';
import {Admin} from 'react-router-dom'
//本地模块
import './login.css'  // 引入css  不能简写 一定要写全.css
import logo from './image/yingtai_logo.png'


// const { getFieldDecorator } = this.props.form;

export default class Login extends Component {
    handleSubmit = e => {
        e.preventDefault();
        let username=this.refs.username.state.value;
        let password=this.refs.password.state.value;
        console.log(username,password)
        if(username=='admin' && password=='111111'){
            //登录成功   跳转到首页
            message.success('登陆成功');
            this.props.history.push({
                pathname: '/admin',
                state: {
                    state: '状态管理'
                }
            })
        }else{
            message.error('登录失败');
        }
        // 1  // 跳转路由
        // this.props.history.push('/admin') 
        // 2  // 跳转路由
        // this.props.history.push({
        //     pathname: '/admin',
        //     state: {
        //         state: '状态管理'
        //     }
        // })
        // this.props.form.validateFields((err, values) => {
        //     if (!err) {
        //     console.log('Received values of form: ', values)
        //     }
        // })
    };
    render() {
        return (
            <div className='login'>
                <div className='login-header'>
                    <img src={logo} alt="logo"/>
                    <h3>react后台管理系统</h3>
                </div>
                <div className='login-content'>
                    <h3>用户登录</h3>
                    <Form onSubmit={this.handleSubmit} className="login-form">
                        <Form.Item>
                            <Input
                            ref='username'
                            prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                            placeholder="用户名"
                            />
                        </Form.Item>
                        <Form.Item>
                            <Input
                            ref='password'
                            prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                            type="password"
                            placeholder="密码"
                            />
                        </Form.Item>
                        <Form.Item>
                            <Button type="primary" htmlType="submit" className="login-form-button">登录</Button>
                        </Form.Item>
                    </Form>
                </div>
            </div>
        )
    }
}
