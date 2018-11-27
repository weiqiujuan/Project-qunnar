import React, {Component} from 'react';
import {Row, Col} from 'antd';

import { DatePicker ,Divider} from 'antd';
import moment from 'moment';

import './index.css';

const dateFormat='YYYY/MM/DD';
class MenuDate extends Component {

    render() {
        return (
            <div className="MenuItem">
                <Row>
                    <Col span={3} style={{marginTop:3}}>入住:</Col>
                    <Col span={7}>
                        <DatePicker defaultValue={moment('2018/10/11', dateFormat)} format={dateFormat} />
                    </Col>
                    <Col span={3} style={{marginLeft:5,marginRight:-3}}>———</Col>
                    <Col span={3} style={{marginTop:3}}>离店:</Col>
                    <Col span={7}>
                        <DatePicker defaultValue={moment('2018/10/12', dateFormat)} format={dateFormat} />
                    </Col>
                </Row>
                <Divider />
            </div>

        );
    }
}

export default MenuDate;