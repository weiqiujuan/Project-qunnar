import React, {Component} from 'react';
import {Input} from 'antd'
import './index.css'
import busDatas from '../../data/data.js'

const Search = Input.Search


class FindRoad extends Component {
    constructor(props) {
        super(props)
        this.state = {
            searchText: 103,
            busData: {}
        }
    }

    componentWillMount(value) {
        console.log(busDatas)
    }


    getSearchText = (value) => {
        this.setState.searchText = value
        console.log(value)
        this.getSearchInfo(value)
    }

    getSearchInfo = (value) => {
        console.log(value)
        for (let busData of busDatas) {
            console.log(busData.busName)
            if (value === busData.busName) {
                console.log(busData)
               this.setState.busData=busData
            } else {
                this.setState=this.state
            }
        }
        console.log(this.setState.busData)
    }

    render() {
        return (
            <div className="findRoad">
                <Search placeholder="输入要查询的公交线路"
                        onSearch={this.getSearchText}
                        style={{width: 300}}
                        enterButton/>
            </div>
        );
    }
}

export default FindRoad;