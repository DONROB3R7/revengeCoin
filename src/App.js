import React, { Component } from "react";
import Hero from "./components/main/Hero";
import Footer from "./components/main/Footer";
import Countdown from "./components/main/Countdown";
import Content from "./components/main/Content";
import Tokenomics from "./components/main/Tokenomics";
import OurVison from "./components/main/OurVison";
import Roadmap from "./components/main/Roadmap";

class Main extends Component {

  render() {
    return(
    <React.Fragment>
      <Hero/>
      <div className="main">
        <Countdown/>
        <Tokenomics />
        <OurVison />
        <Roadmap />
        <Content />
        <Footer/>
      </div>
    </React.Fragment>
    )
  }

}

export default Main;
