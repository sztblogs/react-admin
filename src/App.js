import React, { Component } from 'react'
import { Button } from 'antd';
import { BrowserRouter, HashRouter, Switch, Route} from 'react-router-dom';
import Login from './views/login/login.jsx'
import Admin from './views/admin/admin.jsx'
import List from './views/list/list.jsx'


import axios from 'axios'
axios.defaults.baseURL = 'http://172.16.52.171:8080/';
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
export default class App extends Component {
  render() {
    return (
      // <div>
      //     <span>张三</span>
      //     <Button>按钮</Button>
      //     <Button type="danger">Danger</Button>
      // </div>
      // 1、 没去  路由#的
      // <HashRouter>
      //   <Switch>
      //     <Route path='/login' component={Login} />
      //     <Route path='/' component={Admin} />
      //   </Switch>
      // </HashRouter>
      // 2、去 # 的
      <BrowserRouter>
        <Switch>
          <Route path='/list' component={List}></Route>
          <Route path='/admin' component={Admin} />
          <Route path='/' component={Login} />
        </Switch>
      </BrowserRouter>
    )
  }
}
