import React, { Component } from 'react'
import { List, Avatar, Icon, Button } from 'antd';
import axios from 'axios'



// 本地模块
import './list.css'









const listData = [];
for (let i = 0; i < 23; i++) {
  listData.push({
    href: 'http://ant.design',
    title: `ant design part ${i}`,
    avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
    description:
      'Ant Design, a design language for background applications, is refined by Ant UED Team.',
    content:
      'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
  });
}
const IconText = ({ type, text }) => (
    <span>
      <Icon type={type} style={{ marginRight: 8 }} />
      {text}
    </span>
  );
export default class list extends Component {
    constructor (props) {
        super(props)
        this.state = {
            list: [],
            img: '123123',
            data: {
                page: 1,
                size: 100,
                keyword: '',
                sortBy: 'desc',
                sort: '',
                status: 0,
                eventCategory: ''
            }
        }
    }
    componentDidMount() {
        // axios({
        //     method: 'get',
        //     url: 'https://www.easy-mock.com/mock/5d4d05dac7e37172f1f68635/example/event/queryEventList',
        //     data: {
        //         firstName: 'Fred',
        //         lastName: 'Flintstone'
        //     }
        // }).then((res) => {
        //     console.log('res',res)
        //     this.setState({
        //         list: res.data.data.items
        //     })
        // }).catch((err) => {
        //     console.log('err', err)
        // });
        this.init()
    }
    // 页面数据
    init = () =>{
        axios({
            method: 'get',
            url: 'https://www.easy-mock.com/mock/5d4d05dac7e37172f1f68635/example/event/queryEventList',
            data: {
                firstName: 'Fred',
                lastName: 'Flintstone'
            }
        }).then((res) => {
            console.log('res',res)
            this.setState({
                list: res.data.data.items
            })
        }).catch((err) => {
            console.log('err', err)
        });
    }
    // 返回上一页  || 还没搞懂卸载行内
    previous_page = () => {
        this.props.history.push({
            pathname: '/admin',
            state: {
                state: 'list页面传递过来的数据'
            }
        })
    }
    render() {
        return (
            <div className='list-item'>
                <List itemLayout="vertical" size="large"
                    pagination={{
                        onChange: page => {
                            console.log(page);
                        },
                        pageSize: 5,
                    }}
                    // dataSource={this.state.list}
                    dataSource={this.state.list}
                    footer={
                    <div>
                        {/* <b>ant design</b> footer part<Button type="link" onClick={this.props.history.push('/admin')}>返回上一页</Button> */}
                        <b>ant design</b> footer part<Button type="link" onClick={this.previous_page}>返回上一页</Button>
                    </div>
                    }
                    renderItem={(item,index) => (
                        // if (item.image == '' || item.image == 0) {
                            
                        // }
                    <List.Item
                        key={item}
                        actions={[
                        <IconText type="star-o" text="156" key="list-vertical-star-o" />,
                        <IconText type="like-o" text="156" key="list-vertical-like-o" />,
                        <IconText type="message" text={item.heatScore} key="list-vertical-message" />,
                        ]}
                        extra={
                            // <img width={272} alt="logo" src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"/>
                            // <img width={272} alt="logo" src={'http://172.16.52.171/images/'+item.image}/>
                            <img width={272} alt="logo" src={item.image == '' || item.image == 0 ? 'https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png' : 'http://172.16.52.171/images/'+item.image}/>
                        }>

                        <List.Item.Meta
                        avatar={<Avatar src={item.avatar} />}
                        title={<a href={item.href}>{item.title}</a>}
                        description={item.eventCategory}
                        />
                        {item.eventNote}
                    </List.Item>
                    )}
                />
            </div>
        )
    }
}
