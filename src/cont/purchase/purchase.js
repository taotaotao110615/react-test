import React from 'react';
import './purchase.css';
import fi from './fi.jpg';
import fr from './fr.jpg';
import si from './si.jpg';
import xie from './xie.jpg'
import { BrowserRouter,Route,Switch,Redirect,Link } from 'react-router-dom'
import Nvig from '../../router/Nvig'

class Purchase extends React.Component{
    constructor(props){
        super(props);
        this.state ={

        }
    }
    render() {
        return(
            <div className="purchase-box">
                <div className="purchase-cont">
                    <div className="purchase-cont-one">
                        <div className="purchase-cont-img">
                            <img src={fi} />
                        </div>
                        <div className="purchase-cont-wenzi">
                            <p className="purchase-cont-wenzi-pone">咖啡好喝</p>
                            <p className="purchase-cont-wenzi-two">是发哦发货发哈哈</p>
                            <Link to='/nvig?0'>
                            <p className="purchase-cont-wenzi-psan">立即购买</p>
                            </Link>
                        </div>
                    </div>
                    <div className="purchase-cont-one">
                        <div className="purchase-cont-img">
                            <img src={fr} />
                        </div>
                        <div className="purchase-cont-wenzi">
                            <p className="purchase-cont-wenzi-pone">咖啡好喝</p>
                            <p className="purchase-cont-wenzi-two">是发哦发货发哈哈</p>
                            <Link to='/nvig?1'>
                                <p className="purchase-cont-wenzi-psan">立即购买</p>
                            </Link>
                        </div>
                    </div>
                    <div className="purchase-cont-one">
                        <div className="purchase-cont-img">
                            <img src={si} />
                        </div>
                        <div className="purchase-cont-wenzi">
                            <p className="purchase-cont-wenzi-pone">咖啡好喝</p>
                            <p className="purchase-cont-wenzi-two">是发哦发货发哈哈</p>
                            <Link to='/nvig?2'>
                                <p className="purchase-cont-wenzi-psan">立即购买</p>
                            </Link>
                        </div>
                    </div>
                    <div className="purchase-cont-one">
                        <div className="purchase-cont-img">
                            <img src={xie} />
                        </div>
                        <div className="purchase-cont-wenzi">
                            <p className="purchase-cont-wenzi-pone">咖啡好喝</p>
                            <p className="purchase-cont-wenzi-two">是发哦发货发哈哈</p>
                            <Link to='/nvig?3'>
                                <p className="purchase-cont-wenzi-psan">立即购买</p>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}
export default Purchase;
