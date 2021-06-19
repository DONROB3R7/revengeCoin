import React, { Component } from "react";
import Nav from "./components/main/Nav";
import Hero from "./components/main/Hero";
import Footer from "./components/main/Footer";
import Countdown from "./components/main/Countdown";
import Tokenomics from "./components/main/Tokenomics";
import OurVison from "./components/main/OurVison";
import Roadmap from "./components/main/Roadmap";

class Main extends Component {

  render() {
    return(
    <React.Fragment>
      <Nav/>
      <Hero/>
      <div className="main">
        <Countdown id="Countdown"/>
        <Tokenomics id="Tokenomics"  />
        <OurVison id="OurVison" />
        <Roadmap  id="RoadMap" />
        <Footer/>
      </div>
    </React.Fragment>
    )
  }

}

export default Main;
