import React from 'react'
import './Data.css'

class Data extends React.Component{
    constructor(props){
        super(props)
        this.state={
            num:1,
            area:'1',
            time:'一年',
            numm:500
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
    addf(e){
        let dataColor=document.getElementsByClassName('data-color')
        for (let i=0;i<dataColor.length;i++){
            dataColor[i].style.background='#fff'
            dataColor[i].style.color='#000'
        }
        dataColor[e].style.background='green'
        dataColor[e].style.color='#fff'
        this.setState({
            area:dataColor[e].innerText
        })

    }
    confimm(){
        let start=document.getElementsByClassName('data-start')[0]
        let carone=document.getElementsByClassName('carone')[0]
        start.style.display='block'
    }
    confimmm(){
        let start=document.getElementsByClassName('data-start')[0]
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
                        <p className='colors'>媒介：&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
                        <div className='gap'>
                            <p className='data-color' onClick={()=>this.addf(0)}>纸质报告</p>
                            <p className='data-color' onClick={()=>this.addf(1)}>pdf</p>
                            <p className='data-color' onClick={()=>this.addf(2)}>页面报告</p>
                            <p className='data-color' onClick={()=>this.addf(3)}>邮件</p>
                        </div>
                    </div>
                    {/*适用地区*/}
                    <div className='product'>
                        <p className='colors'>有效时间：</p>
                        <div className='gap'>
                            <p className='colors'>一年</p>
                        </div>
                    </div>
                    {/*有效时间*/}
                    <div className='product'>
                        <p className='colors'>总价: &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;</p>
                        <div className='gap'>
                            <p className='colors'>500元</p>
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
                        精确的计算是以时间消耗为代价的，在小数据时代，追求精确是为了避免放大的偏差不得已而为之。在大数据时代，快速获得一个大概的轮廓和发展脉络，就要比严格的精确性要重要得多。
                        但是，在需要依赖大数据进行个性化决策时，张冠李戴是个很大忌讳，精确性就变得非常重要。所以在效率和精确之间存在一个平衡点，
                        这是大数据预测中一个棘手问题。
                    </p>
                </div>
                <div className='data-start'>
                    <div className='data-mask'>
                        <div className='data-cent'>
                            <div className='data-num'>
                                <div className='data-ceten'>
                                    <ul className='data-ul'>
                                        <li className='data-sixe sixe'>购买数量</li>
                                        <li className='data-sixe sixe'>媒介</li>
                                        <li className='data-sixe sixe'>有效时间</li>
                                        <li className='data-sixe sixe'>总价</li>
                                    </ul>
                                    <ul className='data-ul ull'>
                                        <li className='data-sixe lii'>{this.state.num}</li>
                                        <li className='data-sixe lii'>{this.state.area}</li>
                                        <li className='data-sixe lii'>{this.state.time}</li>
                                        <li className='data-sixe lii'>{this.state.numm}</li>
                                    </ul>
                                </div>
                                <div className='x' onClick={()=>this.confimmm()}>
                                    X
                                </div>
                                <div className='bank'>
                                    <h3>请选择银行</h3>
                                    <div className='logoo'>
                                        <div className='logow'></div>
                                        <div className='logow'></div>
                                        <div className='logow'></div>
                                        <div className='logow'></div>
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
export default Data
