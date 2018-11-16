import React, { Component } from 'react'
import { Layout, Menu, Icon } from 'antd'
import { connect } from 'react-redux'
import '../static/less/layout.less'

import { changePath } from '../store/layout'

const { SubMenu } = Menu
const { Content, Sider } = Layout
const averter = require("../static/images/averter.jpg")

class LayoutContainer extends Component {
  
    constructor (props) {
        super(props)
        this.state = {
            collapsed: false
        };
        this.menu = this.menu.bind(this)
    }
    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    }
    menu (e) {
        this.props.history.push(e.key)
        this.props.changePath(e.key)
    }

    render () {
        const {path} = this.props.layout
        let sub = 'sub1'

        return (
            <Layout className="gwrap">
                <Layout>
                    <Sider>
                        <div className="logo">
                            <img src={averter} alt=""/>
                        </div>
                        <Menu
                            mode="inline"
                            defaultSelectedKeys={[path]}
                            defaultOpenKeys={[sub]}
                            onClick = {this.menu}
                            style={{ height: '100%', borderRight: 0 }}
                        >
                            <SubMenu key="sub1" title={<span><Icon type="book" />文章管理</span>}>
                                <Menu.Item key="/">文章列表</Menu.Item>
                                <Menu.Item key="/">添加文章</Menu.Item>
                            </SubMenu>
                        </Menu>
                    </Sider>
                    <Layout>
                        <Content className="content">
                            {this.props.children}
                        </Content>
                    </Layout>
                </Layout>
            </Layout>
        );
    }
}

const mapStateToProps = ({ layout }) => ({ layout })

const mapDispatchToProps = (dispatch) => {
    return {
        changePath: (path) => dispatch(changePath(path))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LayoutContainer);