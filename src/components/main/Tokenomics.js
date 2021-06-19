import React from "react";


const Tokenomics = (props) => {
  return (
    <div className="container" id={props.id}>
        <h3 className="container tokenomics text-center">Tokenomics</h3>
        <div className="row mt-4">
     <div className="col-lg-6 col-md-6 col-sm-6">
         <div className="text-center">
               <div id="chart" data-pie="piedata" data-pie-label="Shoppers by Age"></div>
         </div>
    </div>
    <div className="col-lg-6 col-md-6 col-sm-6 social tokenomics-box">
          <div className="row mt-4">
              <div className="col-lg-10 col-md-10 col-sm-10 box offset-lg-2 offset-md-2 offset-sm-2">
                    <span className="title-big text-center ">Token Information</span>
                    <span className="title"><i className="fas fa-tint"></i><b> Total Supply: </b> 1,000,000,000,000,000 VENGE</span>
                    <span className="title"><i className="fas fa-tint"></i><b> Network :</b>Binance Smart Chain (BEP-20)</span>
                    <span className="title"><i className="fas fa-tint"></i><b> Ticker :</b>VENGE</span>
                    <span className="title"><i className="fas fa-tint"></i><b> Decimals: </b> 9</span>
              </div>

              <div className="col-lg-10 col-md-10 col-sm-10 box offset-lg-2 offset-md-2 offset-sm-2 mt-5">
                    <span className="title-big text-center ">The Mechanics of the Token</span>
                    <span className="title"><i className="fas fa-tint"></i><b> Automatic LP: </b> Every trade contributes towards automatically generating liquidity
                     that goes into multiple pools used by exchanges.</span>
                    <span className="title"><i className="fas fa-tint"></i><b> Tax on Transactions :</b> 4% Distributed to holders 4% Added to liquidity. </span>
                    <span className="title"><i className="fas fa-tint"></i><b> Profit from Holding: </b> We reward holders with a 4% transaction tax which puts $VENGEFUL directly into your wallet every time someone buys or sells.</span>
              </div>
          </div>
    </div> 
   </div>
</div>    
  );
};

export default Tokenomics;


{/* <h2 className="container tokenomics text-center">Original Supply:<span> 1,000,000,000,000,000 Tokens</span></h2>
<h2 className="container text-center">8% Tax on Transactions:<span> 4% Distributed to holders 4% Added to liquidity</span></h2>
<h2 className="container text-center">Profit from Holding:<span> We reward holders with a 4% transaction tax which puts $VENGEFUL directly into your wallet every time someone buys or sells.</span></h2> */}