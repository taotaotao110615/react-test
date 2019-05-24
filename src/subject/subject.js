import React from 'react';
import Xiaoxi from "../cont/xiaoxi/xiaoxi";
import Carousel from "../cont/Carousel/carousel";
import Purchase from "../cont/purchase/purchase";
import './subject.css';


class Subject extends React.Component{
    constructor(props){
        super(props)
        this.state={

        }
    }
    render() {
        return (
            <div>
                <div className="cont-one">
                    <Xiaoxi></Xiaoxi>
                    <div className="lunbo">
                        <Carousel></Carousel>
                        <Purchase></Purchase>
                    </div>
                </div>
            </div>
        );
    }


}

export default Subject;
