import React from 'react';
import './xiaoxi.css';

class Xiaoxi extends React.Component{
    constructor(props){
        super(props);
        this.state ={

        }
    }
    render() {
        return(
            <div className="xiaoxin-box">
                <div className="product">
                    <div className="product-tit">
                        <p>全部产品</p>
                    </div>
                    <div className="product-cont-first">
                        <p>PC产品</p>
                        <ul>
                            <li>卖家发货</li>
                            <li>数据分类</li>
                            <li>镀锌钢丝</li>
                            <li>配哦回复</li>
                        </ul>
                    </div>
                    <div className="product-cont-last">
                        <p>手机应用类</p>
                        <ul>
                            <li>上帝啊发</li>
                            <li>撇去浮海</li>
                            <li>喜欢发表<span className="hot">HOT</span></li>
                            <li>格林期货</li>
                        </ul>
                    </div>
                </div>
                <div className="new-xiaoxi">
                    <div className="new-tit">
                        <p>最新消息</p>
                    </div>
                    <div className="new-cont">
                        <ul>
                            <li>另外据说回复</li>
                            <li>看他难舍难分</li>
                            <li>李开复给肌肤年轻</li>
                            <li>看见了书法家解放复见佛就怕</li>
                            <li>卖家发发麻了南方啊老公那两个</li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }

}
export default Xiaoxi;
