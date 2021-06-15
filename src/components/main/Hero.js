import React from "react";

const Hero = () => {
  return (
    <div id="hero">
        <div className="hero-info">
            <p className="title-small">Welcome to</p>
            <h1 className="title-big">The Vengeful spirit</h1>
            <p className="title">The Vengeful spirit Protocol is an experiment in decentralized spontaneous community building</p>
        </div>
    <div class="layer-bg layer" data-type="parallax" data-depth="0.10"></div>
    <div class="layer-1 layer" data-type="parallax" data-depth="0.20"></div>
    <div class="layer-2 layer" data-type="parallax" data-depth="0.50"></div>
    <div class="layer-3 layer" data-type="parallax" data-depth="0.80"></div>
    <div
      class="layer-overlay layer"
      data-type="parallax"
      data-depth="0.85"
    ></div>
    <div class="layer-4 layer" data-type="parallax" data-depth="1.00"></div>
  </div>
  );
};

export default Hero;
