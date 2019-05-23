import React from 'react';
import './Ahead.css';
import two from './two.jpg'
import ModalExample from "./tank/tank";

class Ahead extends React.Component{
    constructor(props){
        super(props);
        this.state ={

        }
    }
    render() {
        return(
            <div className="head-box">
                <div className="head-cont">
                    <div className="head-logo">
                        <img src={two} />
                    </div>
                    <div className="land">
                        <div><span className="spa"><ModalExample></ModalExample></span></div>
                        <p><span>注册</span></p>
                        <p><span>关于</span></p>
                    </div>
                </div>
            </div>
        )
    }

}
export default Ahead;
