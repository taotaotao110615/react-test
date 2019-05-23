import React from 'react'
import './Earth.css'

class Earth extends React.Component{
    add(e){
        let color=document.getElementsByClassName('color')
        for (let i=0;i<color.length;i++){
            color[i].style.background='#fff'
            color[i].style.color='#000'
        }
        color[e].style.background='green'
        color[e].style.color='#fff'
    }
    render() {
        return (
            <div className='earth-top'>
                <div className='earth-fex'>
                    <h4>数据统计</h4>
                    <p className='census'>统计数据是表示某一地理区域自然经济要素特征、规模，结构、水平等指标的数据。是定性、定位和定量统计分析的基础数据。</p>
                    <div className='product'>
                        <p className='colors'>产品类型：</p>
                        <div className='gap'>
                        <p className='color' onClick={()=>this.add(0)}>红色版</p>
                        <p className='color' onClick={()=>this.add(1)}>绿色版</p>
                        <p className='color' onClick={()=>this.add(2)}>紫色版</p>
                        </div>
                    </div>
                    { /*产品类型*/}
                    <div className='product'>
                        <p className='colors'>适用地区：</p>
                        <div className='gap'>
                            <select name="cars">
                                <option value="北京">北京</option>
                                <option value="上海">上海</option>
                                <option value="深圳">深圳</option>
                                <option value="杭州">杭州</option>
                            </select>
                        </div>
                    </div>
                    {/*适用地区*/}
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
                    <p>统计数据是表示某一地理区域自然经济要素特征、规模，结构、水平等指标的数据。是定性、定位和定量统计分析的基础数据。</p>
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
        );
    }
}

export default Earth
