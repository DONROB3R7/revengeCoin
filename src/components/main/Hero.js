import React from 'react';

//Audio Sound 
import backgroundAudi from "../../audio/background_music2.mp3";

const Hero = () => {
  return (
      <React.Fragment>
    <div id="hero">
        <div className="hero-info">
            <p className="title-small">Welcome to</p>
            <h1 className="title-big">The Vengeful spirit</h1>
            <p className="title">The Vengeful spirit Protocol is an experiment in decentralized spontaneous community building</p>
            <audio controls controlsList="nodownload">
                <source src={backgroundAudi} type="audio/mpeg"/>
            </audio>
            <a className="btn btn-danger  btn-lg" href="https://exchange.pancakeswap.finance/#/swap?outputCurrency=0x7fc6b75feb0eb32a89a7d6a654c4db967894c658" target="_black">Buy Now On Pancakeswap</a>
            <a className="btn btn-danger  btn-lg" href="https://t.me/vengefulspiritofficial" target="_black">Join Our Telegram <i className="fab fa-telegram-plane"></i></a>
            <p className="bsc-address">BSC Contract Address</p>
             <span>0x7fc6b75feb0eb32a89a7d6a654c4db967894c658</span>
            
          
        </div>
    <div className="layer-bg layer" data-type="parallax" data-depth="0.10"></div>
    <div className="layer-1 layer" data-type="parallax" data-depth="0.20"></div>
    <div className="layer-2 layer" data-type="parallax" data-depth="0.50"></div>
    <div className="layer-3 layer" data-type="parallax" data-depth="0.80"></div>
    <div
      className="layer-overlay layer"
      data-type="parallax"
      data-depth="0.85"
    ></div>
    <div className="layer-4 layer" data-type="parallax" data-depth="1.00"></div>
  </div>
  <div id="hero-mobile"></div>
</React.Fragment>
  );
};

export default Hero;
