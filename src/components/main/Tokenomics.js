import React from "react";


const Tokenomics = () => {
  return (
    <React.Fragment>
     <h3 className="container tokenomics text-center">Tokenomics</h3>
     <h2 className="container tokenomics text-center">Original Supply:<span> 1,000,000,000,000,000 Tokens</span></h2>
     
     <div className="container text-center">
            <div id="chart" data-pie="piedata" data-pie-label="Shoppers by Age"></div>
        </div>
    </React.Fragment>
  );
};

export default Tokenomics;