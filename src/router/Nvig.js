import React from 'react'
import './Nvig.css'
import Earth from './Earth'
import earth from './earth.jpg'
import data from './data.jpg'
import flow from './flow.jpg'
import adver from'./adver.jpg'

class Nvig extends React.Component{
    add(e){
        let leftdan=document.getElementsByClassName('leftdan')
        let imgearth=document.getElementsByClassName('imgearth')

      for (let i=0;i<leftdan.length;i++){
          leftdan[i].style.background='#fff'
          leftdan[i].style.color='#000'
      }
        for (let j=0;j< imgearth.length;j++) {
            imgearth[j].style.display='none'
        }
        leftdan[e].style.background='green'
        leftdan[e].style.color='#fff'
        imgearth[e].style.display='block'
    }
    render() {
        return (
            <div className='top'>
                {/*左边导航栏*/}
                <div>
                    <div className='topleft'>
                        <div>
                            <img src={earth} className="imgearth" alt=''/>
                            <img src={data} className="imgearth" alt=''/>
                            <img src={flow} className="imgearth" alt=''/>
                            <img src={adver} className="imgearth" alt=''/>
                        </div>
                        <ul>
                            <li className="leftdan" onClick={()=>this.add(0)}>数据统计</li>
                            <li className="leftdan" onClick={()=>this.add(1)}>数据预测</li>
                            <li className="leftdan" onClick={()=>this.add(2)}>流量分析</li>
                            <li className="leftdan" onClick={()=>this.add(3)}>广告发布</li>
                        </ul>
                    </div>
                </div>
                <div className='earth'>
                   <Earth></Earth>
                </div>
            </div>
        );
    }
}
export default Nvig;
