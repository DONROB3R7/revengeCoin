import React from "react";
import road1 from "../../img/road1.png";
import road2 from "../../img/road2.png";
import road3 from "../../img/road3.png";
import road4 from "../../img/road4.png";


const Roadmap = (props) => {

  
  return (
    <React.Fragment>
    <div className="container roadmap" id={props.id}>
      <h3 className="text-center">RoadMap</h3>
      
        <div className="row">
            <div className="col-lg-3 col-md-6 col-sm-12">
                <img className="img-fluid road1 road-img"  src={road1} alt="road1"></img>
                <h4 className="text-center">0 - Stage</h4>
                <ul>
                    <li><i className="fas fa-tint-slash"></i>Conceptualization/Development</li>
                    <li><i className="fas fa-tint-slash"></i>Website launch</li>
                    <li><i className="fas fa-tint"></i>Lite Paper</li>
                    <li><i className="fas fa-tint"></i>Airdrop</li>
                    <li><i className="fas fa-tint"></i>Coinhunt and CoinSniper Listing</li>
                    <li><i className="fas fa-tint"></i>Presale</li>
                </ul>
            </div>
                <div className="col-lg-3 col-md-6 col-sm-12">
                <img className="img-fluid road2 road-img"  src={road2} alt="road2"></img>
                <h4 className="text-center">1 - Stage</h4>
                <ul>
                    <li><i className="fas fa-tint"></i>The complete White Paper</li>
                    <li><i className="fas fa-tint"></i>Audit</li>
                    <li><i className="fas fa-tint"></i>Listing On CMC/CoinGecko</li>
                    <li><i className="fas fa-tint"></i>Marketing</li>
                    <li><i className="fas fa-tint"></i>Website Development</li>
                    <li><i className="fas fa-tint"></i>The Actual $VENGEFUL Coin Printed 3D (available for sale)</li>
                </ul>
            </div>
                <div className="col-lg-3 col-md-6 col-sm-12">
                <img className="img-fluid road3 road-img"  src={road3} alt="road3"></img>
                <h4 className="text-center">2 - Stage</h4>  
                <ul>
                    <li><i className="fas fa-tint"></i>Beta Dapp Database Search</li>
                    <li><i className="fas fa-tint"></i>Partnership With A Designer</li>
                    <li><i className="fas fa-tint"></i>Marketing Campaign</li>
                    <li><i className="fas fa-tint"></i>Surprize For Holders</li>
                    <li><i className="fas fa-tint"></i>Finalizing The Database Search</li>
                    <li><i className="fas fa-tint"></i>Beta Voting Tool</li>
                </ul>
            </div>
                <div className="col-lg-3 col-md-6 col-sm-12">
                 <img className="img-fluid road4 road-img"  src={road4} alt="road4"></img>
                 <h4 className="text-center">3 - Stage</h4>  
                 <ul>
                    <li><i className="fas fa-tint"></i>Airdrop For In Game Purchase</li>
                    <li><i className="fas fa-tint"></i>Vengeful Spirit Game</li>
                    <li><i className="fas fa-tint"></i>Gamming/Coin Merch</li>
                    <li><i className="fas fa-tint"></i>Listing on HitBTC</li>
                    <li><i className="fas fa-tint"></i>Vengeful Spirit Mobile Game</li>
                    <li><i className="fas fa-tint"></i>There Is Still More To Come</li>
                </ul>
            </div>
        </div>
    </div>
    </React.Fragment>
  );
};

export default Roadmap;

