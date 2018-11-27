import React, {Component} from 'react';
import './index.css';
import {Menu, Dropdown, Icon, message, Button} from 'antd';
import SlideWindow from '../slideWindow/index'


const onClick = function (key) {
    message.info('Click on item ${key}')
}

const menuType = (
    <Menu onClick={onClick}>
        <Menu.Item key="单间">单间</Menu.Item>
        <Menu.Item key="双人间">双人间</Menu.Item>
        <Menu.Item key="套房">套房</Menu.Item>
    </Menu>
)

const menuSort = (
    <Menu onClick={onClick}>
        <Menu.Item key="升序">升序</Menu.Item>
        <Menu.Item key="降序">降序</Menu.Item>
    </Menu>
)

const menuSelect = (
    <Menu onClick={onClick}>
        <Menu.Item key="价格">价格</Menu.Item>
        <Menu.Item key="位置">位置</Menu.Item>
    </Menu>
)


class Menu_item extends Component {
    render() {
        return (
            <div className="menu_item">
                <div className='type'>
                    <Dropdown overlay={menuType}>
                        <a className="ant-dropdown-link" href="#">
                            住宿类型 <Icon type="caret-down" theme="filled" style={{fontSize: 16}}/>
                        </a>
                    </Dropdown>
                </div>
                <div className="shopCircle">
                    <SlideWindow/>
                </div>
                <div className="sort">
                    <Dropdown overlay={menuSort}>
                        <a className="ant-dropdown-link" href="#">
                            排序 <Icon type="caret-down" theme="filled" style={{fontSize: 16}}/>
                        </a>
                    </Dropdown>
                </div>
                <div className="select">
                    <Dropdown overlay={menuSelect}>
                        <a className="ant-dropdown-link" href="#">
                            筛选 <Icon type="caret-down" theme="filled" style={{fontSize: 16}}/>
                        </a>
                    </Dropdown>
                </div>
            </div>
        );
    }
}

export default Menu_item;