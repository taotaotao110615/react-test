import React from 'react'
import './Flow.css'

class Flow extends React.Component{
    constructor(props){
        super(props)
        this.state={
            num:1,
            area:'入门版',
            time:'半年',
            ben:'客户版',
            numm:29
        }
    }
    adds(){
        let num=this.state.num
        num++
        this.setState({
            num:num
        })
    }
    removs(){
        let num=this.state.num
        num--
        this.setState({
            num:num
        })
    }
    add(e){
        let flowColor=document.getElementsByClassName('flow-color')
        for (let i=0;i<flowColor.length;i++){
            flowColor[i].style.background='#fff'
            flowColor[i].style.color='#000'
        }
        flowColor[e].style.background='green'
        flowColor[e].style.color='#fff'
        this.setState({
            time:flowColor[e].innerText
        })
    }
    adde(e){
        let flowColorr=document.getElementsByClassName('flow-colorr')
        for (let i=0;i<flowColorr.length;i++){
            flowColorr[i].style.background='#fff'
            flowColorr[i].style.color='#000'
        }
        flowColorr[e].style.background='green'
        flowColorr[e].style.color='#fff'
        this.setState({
            ben:flowColorr[e].innerText
        })
    }
    confimm(){
        let start=document.getElementsByClassName('flow-start')[0]
        let cartwo=document.getElementsByClassName('cartwo')[0]
        start.style.display='block'
        this.setState({
            area:cartwo.value
        })
    }
    confimmm(){
        let start=document.getElementsByClassName('flow-start')[0]
        start.style.display='none'
    }
    render(){
        return(
            <div className='earth-top'>
                <div className='earth-fex'>
                    <h4>数据预测</h4>
                    <p className='census censuss'>大数据预测是大数据最核心的应用，大数据预测将传统意义预测”拓展到“现测”。大数据预测的优势体现在它把一个非常困难的预测问题，转化为一个相对简单的描述问题，而这是传统小数据集根本无法企及的。</p>
                    <div className='product'>
                        <p className='colors'>购买数量：</p>
                        <div className='gap'>
                            <p className='colorr'onClick={()=>this.removs()}>-</p>
                            <p className='colorr'>{this.state.num}</p>
                            <p className='colorr' onClick={()=>this.adds()}>+</p>
                        </div>
                    </div>
                    { /*产品类型*/}
                    <div className='product'>
                        <p className='colors'>产品类型：</p>
                        <div className='gap'>
                            <select name="cars" className='cartwo'>
                                <option value="入门版">入门版</option>
                                <option value="豪华版">豪华版</option>
                                <option value="精装版">精装版</option>
                            </select>
                        </div>
                    </div>
                    {/*适用地区*/}
                    <div className='product'>
                        <p className='colors'>有效时间：</p>
                        <div className='gap'>
                            <p className='flow-color' onClick={()=>this.add(0)}>半年</p>
                            <p className='flow-color' onClick={()=>this.add(1)}>一年</p>
                            <p className='flow-color' onClick={()=>this.add(2)}>三年</p>
                        </div>
                    </div>
                    {/*有效时间*/}
                    <div className='product'>
                        <p className='colors'>产品版本：</p>
                        <div className='gap'>
                            <p className='flow-colorr' onClick={()=>this.adde(0)}>客户版</p>
                            <p className='flow-colorr' onClick={()=>this.adde(1)}>代理商版</p>
                            <p className='flow-colorr' onClick={()=>this.adde(2)}>专家版</p>
                        </div>
                    </div>
                    {/*产品版本*/}
                    <div className='product'>
                        <p className='colors'>总价: &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;</p>
                        <div className='gap'>
                            <p className='colors'>29元</p>
                        </div>
                    </div>
                    {/*总价*/}
                    <div className='product'>
                        <p className='shop' onClick={()=>this.confimm()}>立即购买</p>
                    </div>
                    {/*立即购买*/}
                </div>
                {/*数据统计整体*/}
                <div className='earth-fex'>
                    <p className='explain'>产品说明</p>
                    <p className='censuss sizee'>
                        网站访问统计分析报告的基础数据源于网站流量统计信息，
                        但其价值远高于原始数据资料。专业的网站访问统计分析报告
                        对网络营销的价值，正如专业的财务分析报告对企业经营策略的价值。
                    </p>
                    <h4 className='flow-index'>用户行为指标</h4>
                    <p>用户行为指标主要反映用户是如何来到网站、在网上停留了多长时间、访问了那些页面、主要的统计指标包括：</p>
                    <p>用户在网上停留时间</p>
                    <p>用户来源网站（"也叫引导网站"）</p>
                    <p>用户所使用的搜索引擎及其关键字</p>
                    <p>在不同时段的用户访问量及其情况</p>
                    <h4 className='flow-index'>浏览网站方式</h4>
                    <p>用户上网类型</p>
                    <p>用户浏览器的名称和版本</p>
                    <p>访问者电脑分辨率显示模式</p>
                    <p>用户所使用的操作系统和版本</p>
                    <p>用户所在地理分布情况</p>
                </div>
                <div className='flow-start'>
                    <div className='flow-mask'>
                        <div className='flow-cent'>
                            <div className='flow-num'>
                                <div className='flow-ceten'>
                                    <ul className='flow-ul'>
                                        <li className='flow-sixe sixe'>购买数量</li>
                                        <li className='flow-sixe sixe'>产品类型</li>
                                        <li className='flow-sixe sixe'>有效时间</li>
                                        <li className='flow-sixe sixe'>产品版本</li>
                                        <li className='flow-sixe sixe'>总价</li>
                                    </ul>
                                    <ul className='flow-ul ull'>
                                        <li className='flow-sixe lii'>{this.state.num}</li>
                                        <li className='flow-sixe lii'>{this.state.area}</li>
                                        <li className='flow-sixe lii'>{this.state.time}</li>
                                        <li className='flow-sixe lii'>{this.state.ben}</li>
                                        <li className='flow-sixe lii'>{this.state.numm}</li>
                                    </ul>
                                </div>
                                <div className='x' onClick={()=>this.confimmm()}>
                                    X
                                </div>
                                <div className='bank'>
                                    <h3>请选择银行</h3>
                                    <div className='logoo'>
                                        <div className='logoe'></div>
                                        <div className='logoe'></div>
                                        <div className='logoe'></div>
                                        <div className='logoe'></div>
                                    </div>
                                </div>
                                <div className='confirm'>确认购买</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Flow
