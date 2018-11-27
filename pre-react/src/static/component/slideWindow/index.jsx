import React, {Component} from 'react';
import './index.css';
import {Modal, Button, Icon, Menu, Cascader, Row, Col, List, Radio} from 'antd';

const options = [{
    value: '热门位置',
    label: '热门位置',
    children: [{
        value: '不限',
        label: '不限'
    }, {
        value: '鼓浪屿',
        label: '鼓浪屿'
    }, {
        value: '步行街',
        label: '步行街'
    }, {
        value: '厦门大学',
        label: '厦门大学'
    }],
}, {
    value: '行政区',
    label: '行政区',
    children: [{
        value: '不限',
        label: '不限'
    }],
}, {
    value: '机场车站',
    label: '机场车站',
}, {
    value: '铁路线路',
    label: '铁路线路',
}, {
    value: '大学周边',
    label: '大学周边',
}, {
    value: '医院周边',
    label: '医院周边',
}
]
const data = ['热门位置', '行政区', '机场车站', '铁路线路', '大学周边', '医院周边',]
const subData = ['不限', '鼓浪屿', '步行街', '厦门大学',]


class SlideWindow extends Component {
    state = {
        loading: false,
        visible: false
    }
    showModal = () => {
        this.setState({
            visible: true
        })
    }
    handleOk = () => {
        this.setState({
            loading: true
        })
        setTimeout(() => {
            this.setState({
                loading: false,
                visible: false
            })
        }, 3000)
    }

    handleCancel = () => {
        this.setState({visible: false});
    }


    onChange = (value) => {
        console.log(value)
    }


    render() {
        const {visible, loading} = this.state;
        return (
            <div>
                <div onClick={this.showModal} style={{fontSize: 14, color: 'gray'}}>
                    景点商圈 <Icon type="caret-down" theme="filled" style={{fontSize: 14, color: 'gray'}}/>
                </div>
                <Modal visible={visible} onOk={this.handleOk} onCancel={this.handleCancel} footer={[
                    <Button key="submit" type="primary" loading={loading} onClick={this.handleOk}>
                        确定
                    </Button>,
                ]}>

                    <Row>
                        <Col span={8}>
                            <List
                                bordered
                                dataSource={data}
                                renderItem={item => (<List.Item>{item}</List.Item>)}
                            />
                        </Col>
                        <Col span={15}>
                            <List
                                bordered
                                dataSource={subData}
                                renderItem={item => (<List.Item><Radio>{item}</Radio></List.Item>)}
                            />
                        </Col>
                    </Row>

                </Modal>
            </div>

        );
    }
}

export default SlideWindow;
/*<Cascader options={options} onChange={this.onChange} placeholder="Please select" />*/