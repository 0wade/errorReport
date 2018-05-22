import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import {connect} from 'react-redux';
import {Menu} from 'antd';

import './index.less'
const SubMenu = Menu.SubMenu;

class SiderBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show: true
        };
    }
    handleClick = (e) => {
        this.setState(state => ({
            show: !state.show
        }));
    }
    render() {
        return (<div className="js-sidebar">
            <Menu style={{
                    width: 240
                }} mode="inline" onClick={this.handleClick}>
                <SubMenu title={<span> 错误监控</span>}>
                    <Menu.Item>
                        <Link to="/">实时监控</Link>
                    </Menu.Item>
                    <Menu.Item>
                        <Link to={`/report/${this.state.show}`}>错误查询</Link>
                    </Menu.Item>
                    <Menu.Item>
                        <Link to="/">错误统计</Link>
                    </Menu.Item>
                </SubMenu>
            </Menu>
        </div>);
    }
}

export default connect()(SiderBar);
