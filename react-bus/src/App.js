import React, {Component} from 'react';
import './App.css';
import {Divider, Layout} from 'antd';
import SiderMenu from './component/sider/SiderMenu'
import "../node_modules/antd/dist/antd.min.css"
import {
    HashRouter as Router,
} from 'react-router-dom';

const {
    Header, Footer, Content
} = Layout

class App extends Component {
    render() {
        return (
            <div className="App">
                <Layout>
                    <Header><h2 style={{color: 'white'}}>北京公交线路信息</h2></Header>
                    <Content><Router><SiderMenu/></Router></Content>
                    <Footer>
                        <Divider/>
                        <p>weiqiujuan@2018-12-21</p>
                    </Footer>
                </Layout>
            </div>
        );
    }
}


export default App;
