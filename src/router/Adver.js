import React from 'react'
import './Adver.css'

class Adver extends React.Component{
    constructor(props){
        super(props)
        this.state={
            num:1
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

    adde(e){
        let adverColor=document.getElementsByClassName('adver-colorr')
        for (let i=0;i< adverColor.length;i++){
            adverColor[i].style.background='#fff'
            adverColor[i].style.color='#000'
        }
        adverColor[e].style.background='green'
        adverColor[e].style.color='#fff'
    }

render(){
    return(
        <div className='earth-top'>
            <div className='earth-fex'>
                <h4>广告发布</h4>
                <p className='census censuss'>广告活动按照广告计划执行，到完成广告。经过广告主的最后审核同意，
                    即可送到预订的媒介发布刊播，这项工作一般有媒介部门的有关专业人员负责，
                他们的任务就是专门负责与有关媒介单位接洽，安排有关广告的发布事宜，对其发播质量实施监督。
                </p>
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
                    <p className='colors'>行业：&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
                    <div className='gap'>
                        <select name="cars">
                            <option value="出版业">出版业</option>
                            <option value="出版社">出版社</option>
                        </select>
                    </div>
                </div>
                {/*适用地区*/}
                <div className='product'>
                    <p className='colors'>产品版本：</p>
                    <div className='gap'>
                        <p className='adver-colorr' onClick={()=>this.adde(0)}>初级版</p>
                        <p className='adver-colorr' onClick={()=>this.adde(1)}>中级版</p>
                        <p className='adver-colorr' onClick={()=>this.adde(2)}>高级版</p>
                        <p className='adver-colorr' onClick={()=>this.adde(3)}>专家版</p>
                    </div>
                </div>
                {/*产品版本*/}
                <div className='product'>
                    <p className='colors'>有效时间：</p>
                    <div className='gap'>
                        <p className='colors'>半年</p>
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
                    <p className='shop'>立即购买</p>
                </div>
                {/*立即购买*/}
            </div>
            {/*数据统计整体*/}
            <div className='earth-fex'>
                <p className='explain'>产品说明</p>
                <p className='censuss sizee'>
                    广告活动按照广告计划执行，到完成广告。经过广告主的最后审核同意，
                    即可送到预订的媒介发布刊播，这项工作一般有媒介部门的有关专业人员负责，
                    他们的任务就是专门负责与有关媒介单位接洽，安排有关广告的发布事宜，对其发播质量实施监督。
                </p>
                <div className='borderr'>
                    <ul className='analysis'>
                        <li className='analysis-as'> 安全安保</li>
                        <li className='analysis-as'> 办公文教</li>
                        <li className='analysis-as'> 彩票</li>
                        <li className='analysis-as'> 车辆物流</li>
                        <li className='analysis-as'> 成人物品</li>
                        <li className='analysis-as'> 出版传媒</li>
                        <li className='analysis-as'> 电脑硬件</li>
                    </ul>
                    <ul className='analysis'>
                        <li className='analysis-as'> 安全安保</li>
                        <li className='analysis-as'> 办公文教</li>
                        <li className='analysis-as'> 彩票</li>
                        <li className='analysis-as'> 车辆物流</li>
                        <li className='analysis-as'> 成人物品</li>
                        <li className='analysis-as'> 出版传媒</li>
                        <li className='analysis-as'> 电脑硬件</li>
                    </ul>
                    <ul className='analysis'>
                        <li className='analysis-as'> 安全安保</li>
                        <li className='analysis-as'> 办公文教</li>
                        <li className='analysis-as'> 彩票</li>
                        <li className='analysis-as'> 车辆物流</li>
                        <li className='analysis-as'> 成人物品</li>
                        <li className='analysis-as'> 出版传媒</li>
                        <li className='analysis-as'> 电脑硬件</li>
                    </ul>
                    <ul className='analysis'>
                        <li className='analysis-as'> 安全安保</li>
                        <li className='analysis-as'> 办公文教</li>
                        <li className='analysis-as'> 彩票</li>
                        <li className='analysis-as'> 车辆物流</li>
                        <li className='analysis-as'> 成人物品</li>
                        <li className='analysis-as'> 出版传媒</li>
                        <li className='analysis-as'> 电脑硬件</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
}
export default Adver
