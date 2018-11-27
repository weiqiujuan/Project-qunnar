import React, {Component} from 'react';
import {Icon, Radio} from 'antd'
import './index.css';


class HeaderTab extends Component {
    state = {dec: '厦门'}
    onChange = (e) => {
        this.setState({
            dec: e.target.value
        })
    }

    render() {
        const {dec} = this.state;
        return (
            <div className="Header">
                <Icon type="left"
                      style={{cssFloat: 'left', marginTop: 8, marginLeft: 10, ontSize: 18, color: 'darkGray'}}/>
                <Radio.Group value={dec} onChange={this.onChange} style={{marginBottom: 10, fontSize: 16}}
                             className="HeaderDec">
                    <Radio.Button value="厦门"><Icon type="eye"/>厦门</Radio.Button>
                    <Radio.Button value="客栈">景点/商圈/客栈名</Radio.Button>
                </Radio.Group>
            </div>

        );
    }
}

export default HeaderTab;