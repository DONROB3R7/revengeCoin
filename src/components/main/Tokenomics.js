import React from "react";


const Tokenomics = () => {
  return (
     <div className="tokenomics">
        <h3 className="container tokenomics text-center">Tokenomics</h3>
        <h2 className="container tokenomics text-center">Original Supply:<span> 1,000,000,000,000,000 Tokens</span></h2>
        
        <div className="container text-center">
                <div id="chart" data-pie="piedata" data-pie-label="Shoppers by Age"></div>
        </div>
        <h2 className="container text-center">8% Tax on Transactions:<span> 4% Distributed to holders 4% Added to liquidity</span></h2>
        <h2 className="container text-center">Profit from Holding:<span> We reward holders with a 4% transaction tax which puts $VENGEFUL directly into your wallet every time someone buys or sells.</span></h2>
    </div>
  );
};

export default Tokenomics;