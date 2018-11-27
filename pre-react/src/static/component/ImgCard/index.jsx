import React, {Component} from 'react';
import './index.css';
import oneImg from '../../../image/one_page.jpg'
import twoImg from '../../../image/two_page.jpg'
import threeImg from '../../../image/three_page.jpg'

class ImgCard extends Component {
    render() {
        return (
            <div>
                <div className="layout">
                    <img src={oneImg} alt="第一张图片" style={{width: '388px', height: '203px'}}/>
                    <div style={{margin: 5}}>厦门鼓浪屿小姐姐</div>
                    <div style={{display: 'flex'}} className='gutter-box'>
                        <li className="score">4.8分</li>
                        <li className="state">1428条评论</li>
                        <li className="dec">距离海底世界331米</li>
                        <li className="price">￥1314起</li>
                    </div>
                </div>
                <div className="layout">
                    <img src={twoImg} alt="第一张图片" style={{width: '388px', height: '203px'}}/>
                    <div style={{margin: 5}}>厦门鼓浪屿小姐姐</div>
                    <div style={{display: 'flex'}} className='gutter-box'>
                        <li className="score">4.5分</li>
                        <li className="state">428条评论</li>
                        <li className="dec">好美的小姐姐哈</li>
                        <li className="price">￥520起</li>
                    </div>
                </div>
                <div className="layout">
                    <img src={threeImg} alt="第一张图片" style={{width: '388px', height: '203px'}}/>
                    <div style={{margin: 5}}>厦门鼓浪屿小姐姐</div>
                    <div style={{display: 'flex'}} className='gutter-box'>
                        <li className="score">5.5分</li>
                        <li className="state">148条评论</li>
                        <li className="dec">就是那么萌</li>
                        <li className="price">￥314起</li>
                    </div>
                </div>
            </div>
        );
    }
}

export default ImgCard;



