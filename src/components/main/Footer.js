import React from "react";

const Footer = () => {
  return (
        <footer className="text-lg-start text-white border-top border-bot">
            <div className="container">       
            <div className="row mt-4">

            <div className="col-lg-6 col-md-12 col-sm-12 info">
                <h4>Information</h4>
                <ul>
                    <code>The team does not recommend that any cryptocurrency should be bought, sold, or held by you. Do
                        conduct your due diligence and consult your financial advisor before making any investment decisions.
                        By purchasing $VENGE. you agree that you are not purchasing a security or investment and you agree
                        to hold the team harmless and not liable for any losses or taxes you may incur.
                </code>
                </ul>
            </div>


            <div className="col-lg-3 col-md-12 col-sm-12 social offset-lg-3">
                <h4>Social Media</h4>
                <ul>
                    <li><i className="fab fa-twitter"></i><a href="https://twitter.com/TheVengefulSpi1" target="_blank"  rel="noreferrer">Twitter</a></li>
                    <li><i className="fab fa-telegram-plane"></i><a href="https://t.me/vengefulspiritofficial" target="_blank"  rel="noreferrer">Telegram</a></li>
                    <li><i className="fab fa-medium-m"></i><a href="https://thevengefulspiritofficial.medium.com/" target="_blank"  rel="noreferrer">Medium</a></li>
                    <li><i className="fab fa-reddit-square"></i><a href="https://www.reddit.com/" target="_blank"  rel="noreferrer">Reddit</a></li>
                    <li><i className="fab fa-instagram"></i><a href="https://www.instagram.com/vengefulspirittoken/" target="_blank"  rel="noreferrer">Instagram</a></li>
                    <li><i className="fab fa-youtube"></i><a href="https://www.youtube.com/watch?v=_YJcTXZkASI" target="_blank"  rel="noreferrer">Youtube</a></li>
                </ul>
            </div>

            </div>

            <div className="text-center p-3 ">
            © 2021 The Vengeful Spirit | All Rights Reserved
            </div>
            </div>
        </footer>
  );
};

export default Footer;


