import React, { Component } from 'react'
import { Menu, Icon, Button } from 'antd';

import { Table, Divider, Tag } from 'antd';

import axios from 'axios'

// 本地模块
import './admin.css'
const { SubMenu } = Menu;
// axios.get('https://www.easy-mock.com/mock/5d4d05dac7e37172f1f68635/example/event/queryEventList')
// .then((res) => {
//     console.log('res',res)
// }).catch((err) => {
//     console.log('err', err)
// })

// 页面数据
var bookArr = [
    {
        siteName:"百度",
        siteUrl:"http://www.baidu.com"
    },
    {
        siteName:"阿里巴巴",
        siteUrl:"http://www.alibaba.com"
    },
    {
        siteName:"腾讯",
        siteUrl:"http://www.qq.com"
    }
]
// table数据
const columns = [
    {
      title: '文章标题',
      dataIndex: 'eventTitle',
      key: 'eventTitle',
      render: text => <a>{text}</a>,
    },
    {
      title: '开始时间',
      dataIndex: 'startTime',
      key: 'startTime',
    },
    {
      title: '关键词',
      dataIndex: 'keyWord',
      key: 'keyWord',
    },
    {
      title: '操作',
      key: 'action',
      render: (text, record) => (
        <span>
          <a>{record.eventCategory}</a>
          <Divider type="vertical" />
          <a>Delete</a>
        </span>
      ),
    },
  ];
  
  const data = [
    {
      key: '1',
      name: 'John Brown',
      age: 32,
      address: 'New York No. 1 Lake Park',
      tags: ['nice', 'developer'],
    },
    {
      key: '2',
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park',
      tags: ['loser'],
    },
    {
      key: '3',
      name: 'Joe Black',
      age: 32,
      address: 'Sidney No. 1 Lake Park',
      tags: ['cool', 'teacher'],
    },
  ];

export default class Admin extends Component {
    constructor (props) {
        super(props)
        // console.log(props.location.state.state)
        this.userList = props.location.state.state || '没有值显示的数据'
        this.state = {
            list: []
        }
    }
    getMenuItems() {
        return this.state.list.map(item => {
          return (
            <div key={item.id}>
                <p>{item.eventTitle}</p>
            </div>
          )
        })
    }
    componentDidMount() {
        this.init()
    }
    // table数据
    init = () => {
        axios.get('https://www.easy-mock.com/mock/5d4d05dac7e37172f1f68635/example/event/queryEventList')
        .then((res) => {
            console.log('res',res)
            this.setState({
                list: res.data.data.items
            })
        }).catch((err) => {
            console.log('err', err)
        })
    }
    // 退出登录
    Logout = (name) => {
        // e.preventDefault()
        return (e) => {
            e.preventDefault()
            console.log(name)
            this.props.history.push('/login') 
        }
    }
    //  跳转到list.jsx页面
    goList = (e) => {
        e.preventDefault()
        this.props.history.push('/list') 
    }
    render() {
        var siteElements = []
        bookArr.forEach((item,index) => {
            siteElements.push(
                <div key={index}>
                    <p>{item.siteName}</p>
                    <p>{item.siteUrl}</p>
                    <hr/>
                </div>
            )         
        });
        var userList = ''
        return (
            <div className='menu-z'>
                <div>
                    {/* <Button onClick={this.Logout('要传递的数据')}>退出登录/{this.userList}</Button> */}
                    <Button onClick={this.Logout('要传递的数据')}>退出登录/{this.userList}</Button>
                    <Button onClick={this.goList}>去往list页面</Button>
                    {/* onClick={this.handleClick} */}
                    <Menu  style={{ width: 256 }} defaultSelectedKeys={['1']} defaultOpenKeys={['sub1']} mode="inline">
                        <SubMenu key="sub1" 
                            title={
                                <span>
                                    <Icon type="mail" />
                                    <span>Navigation One</span>
                                </span>
                            }
                        >
                        <Menu.ItemGroup key="g1" title="Item 1">
                            <Menu.Item key="1">Option 1</Menu.Item>
                            <Menu.Item key="2">Option 2</Menu.Item>
                        </Menu.ItemGroup>
                        <Menu.ItemGroup key="g2" title="Item 2">
                            <Menu.Item key="3">Option 3</Menu.Item>
                            <Menu.Item key="4">Option 4</Menu.Item>
                        </Menu.ItemGroup>
                        </SubMenu>
                        <SubMenu key="sub2"
                            title={
                                <span>
                                <Icon type="appstore" />
                                <span>Navigation Two</span>
                                </span>
                            }
                        >
                        <Menu.Item key="5">Option 5</Menu.Item>
                        <Menu.Item key="6">Option 6</Menu.Item>
                        <SubMenu key="sub3" title="Submenu">
                            <Menu.Item key="7">Option 7</Menu.Item>
                            <Menu.Item key="8">Option 8</Menu.Item>
                        </SubMenu>
                        </SubMenu>
                        <SubMenu key="sub4"
                            title={
                                <span>
                                <Icon type="setting" />
                                <span>Navigation Three</span>
                                </span>
                            }
                        >
                        <Menu.Item key="9">Option 9</Menu.Item>
                        <Menu.Item key="10">Option 10</Menu.Item>
                        <Menu.Item key="11">Option 11</Menu.Item>
                        <Menu.Item key="12">Option 12</Menu.Item>
                        </SubMenu>
                    </Menu>
                </div>
                <div className='memu-right'>
                    {siteElements}
                    {/* <Table columns={columns} dataSource={data} /> */}
                    <Table columns={columns} dataSource={this.state.list} />
                    {this.getMenuItems()}
                </div>






                {/* <div>
                    {
                        bookArr.forEach((item) => {
                            return <div>
                                <p>{item.siteName}</p>
                                <p>{item.siteUrl}</p>
                                <hr/>
                            </div>
                        })
                    }
                </div> */}
            </div>
        )
    }
}
