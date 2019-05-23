import React from 'react';
import './App.css';
import Ahead from './head/Ahead';
import Xiaoxi from "./cont/xiaoxi/xiaoxi";
import Footer from "./foot/footer";
import Carousel from "./cont/Carousel/carousel";
import Purchase from "./cont/purchase/purchase";

function App() {
  return (
    <div className="App">
        <Ahead></Ahead>
        <div className="cont-box">
          <div className="cont-one">
                <Xiaoxi></Xiaoxi>
              <div className="lunbo">
                  <Carousel></Carousel>
                  <Purchase></Purchase>
              </div>
          </div>
        </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
