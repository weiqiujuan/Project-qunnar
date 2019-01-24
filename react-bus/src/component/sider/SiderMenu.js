import React from 'react';

import {Route, Switch, Link, withRouter} from 'react-router-dom';
import {Menu, Icon, Row, Col} from 'antd';
import FindRoad from "../content/FindRoad";
import DeleteRoad from "../content/DeleteRoad";
import ModifyRoad from "../content/ModifyRoad";
import AddRoad from "../content/AddRoad";
import Introduce from '../content/Introduce'


const SubMenu = Menu.SubMenu;

class SiderMenu extends React.Component {
    state = {
        collapsed: false
    }

    render() {
        return (
            <div>
                <Row>
                    <Col span={3}>
                        <Menu
                            defaultSelectedKeys={['1']}
                            defaultOpenKeys={['sub1']}
                            mode="inline"
                            theme="dark"
                            inlineCollapsed={this.state.collapsed}
                        >
                            <Menu.Item key="1">
                                <Icon type="smile"/>
                                <span ><Link to='/' style={{color:'white'}}>线路信息介绍</Link></span>
                            </Menu.Item>
                            <SubMenu key="sub1" title={<span><Icon type="link"/><span>线路操作</span></span>}>
                                <Menu.Item key="2"><Link to='/FindRoad'>线路查询</Link></Menu.Item>
                                <Menu.Item key="3"><Link to='/ModifyRoad'>线路修改</Link></Menu.Item>
                                <Menu.Item key="4"><Link to='/DeleteRoad'>线路删除</Link></Menu.Item>
                                <Menu.Item key="5"><Link to='/AddRoad'>线路增加</Link></Menu.Item>
                            </SubMenu>
                        </Menu>
                    </Col>
                    <Col span={21}>
                        <Switch>
                            <Route path='/FindRoad' component={FindRoad}/>
                            <Route path='/ModifyRoad' component={ModifyRoad}/>
                            <Route path='/DeleteRoad' component={DeleteRoad}/>
                            <Route path='/AddRoad' component={AddRoad}/>
                            <Route component={Introduce} />
                        </Switch>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default withRouter(SiderMenu);
