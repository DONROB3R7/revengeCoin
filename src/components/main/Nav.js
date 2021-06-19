import logo from "../../img/Logo.png";
import { Link } from "react-scroll";
import React from "react";

function Click() {
  var navbar = document.querySelector(".main-nav ul");
  navbar.classList.toggle("active");
}

function Nav() {
  return (
    <header className="main-header fixed-top">
      <a href="index.html" className="brand-logo">
        <div className="brand-logo-name">
         <img className="img-fluid blood"  
              src={logo} 
              alt="logo"/>
        </div>
      </a>
      <div href="#" className="toggle-button" onClick={Click}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
      <nav className="main-nav">
        <ul>
          <li>
            <Link
                    activeClass="active"
                    to="Countdown"
                    spy={true}
                    smooth={true}
                    duration={500}
                    offset={-70}
                >Countdown    
              </Link>
          </li>
          <li>
          <Link
                    activeClass="active"
                    to="Tokenomics"
                    spy={true}
                    smooth={true}
                    duration={500}
                    offset={-70}
                >Tokenomics    
              </Link>
          </li>
          <li>
          <Link
                    activeClass="active"
                    to="OurVison"
                    spy={true}
                    smooth={true}
                    duration={500}
                    offset={-70}
                >About  Us   
              </Link>
          </li>
          <li>
          <Link
                    activeClass="active"
                    to="RoadMap"
                    spy={true}
                    smooth={true}
                    duration={500}
                    offset={-70}
                >RoadMap    
              </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}


export default Nav;
