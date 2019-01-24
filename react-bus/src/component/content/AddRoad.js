import React, {Component} from 'react';
import data from '../../data/data.js'

/*let {keys, values, entries} = Object
const datas = data*/

class AddRoad extends Component {
    constructor(props) {
        super(props)
        this.state = {
            busData: this.data
        }
    }

    render() {
        return (
            <div className="addRoad">
                <h1>我是增加页</h1>
            </div>
        );
    }
}

export default AddRoad;