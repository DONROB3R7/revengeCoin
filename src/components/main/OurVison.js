import React, { useState, useRef }  from 'react';

// Images 
import img1 from "../../img/img1.png";
import img2 from "../../img/img2.png";

// Audio 

import ghost from "../../audio/Ghost.mp3";

const OurVison = (props) => {

    const [section, setSection] = useState(false);

    const audio = new Audio(ghost);
      React.useEffect(
        () => {
        },
        [audio]
      );

       const play = () =>{
        audio.load();
         audio.play();
         setSection(true);
       }

       const pause = () =>{
          audio.pause();
          audio.currentTime = 0;
          setSection(false);
       }


  return (
      <div className="container ourvision" id={props.id}>
         <section>
      <div className="row  pt-10">
        { section ?   
         <div className="col-sm-6 ourvision-text">
            <img className="img-fluid blood"  
              src={img2} 
              alt="img2"/>
        </div>
        :
        <div className="col-sm-6 ourvision-text">
        <h3>About Us</h3>
          <p>
            What is the vision behind this coin?
            Vengeful Spirit came to be as a way to get revenge after suffering major losses due to the Rug Pulls that happen more and more often in the crypto world. 
            We decided to created a small but devoted team, with only one mission, one purpose - Revenge. 
          </p>
          <p>
            <span>What is it?</span>
            Vengeful Spirit is a contract that looks to solve one of the biggest problems currently affecting the crypto world, especially for new users - The "Rug Pull", also known as "Scam Coin".  
          </p>
          <p>
            What is a Rug Pull?
            A Rug pull is a ill meaning maneuver in the crytocoin industry, in which the crypto developers abandon a project and run off with the funds of the investors. Rug Pulls usually happen in the decentralized financing ecosystem (Defi), especially in the decentralized apps (DEX), where ill meaning people create a token, list it on a DEX, then run off with the money.  
          </p>
          <p>
            What is it trying to solve?
            Vengeful Spirit is looking to create an application for listing coins that have done shady maneuvers like Rug pulls, Scams or other bad things. Where only the users who own some of the Vengeful Spirit coins will be able to add information into the add like the contract number, the name of the coin, the website and so on. This information is then added into the coin's contract and transferred into a table where those who own some Vengeful spirit will be able to vote for the biggest scam in the Crypto world. 
          </p>
          <p>
          We're aiming towards becoming the number 1 platform for detecting scams, along with opening an online store where our users will be able to buy products with the Vengeful Spirit coin.
          </p>
          <p>
            What's coming up in the future?
            Our ambitious plans include launching a Vengeful Spirit game with a connected $VENGE wallet. The wallet will need to be connected due to various reasons, from winning and purchases in game to quick and easy $VENGE redraws. 
          </p>
        </div>}

   
        <div className="col-sm-6 text-center spirit">
          <p className="text-center hover">Hover over the shadow</p>
          <img className="img-fluid spirit-img"  
              src={img1} 
              onMouseOver={() => play()} 
              onMouseOut ={() => pause()}
              alt="img1">
            </img>
        </div>
      </div>
    </section>
      </div>
  );
};

export default OurVison;
