import React from "react";

const Footer = () => {
  return (
        <footer className="text-lg-start text-white border-top border-bot">
            <div className="container">       
            <div className="row mt-4">

            <div class="col-lg-6 col-md-12 col-sm-12 info">
                <h4>Information</h4>
                <ul>
                    <code>The team does not recommend that any cryptocurrency should be bought, sold, or held by you. Do
                        conduct your due diligence and consult your financial advisor before making any investment decisions.
                        By purchasing $VENGE. you agree that you are not purchasing a security or investment and you agree
                        to hold the team harmless and not liable for any losses or taxes you may incur.
                </code>
                </ul>
            </div>


            <div class="col-lg-3 col-md-12 col-sm-12 social offset-lg-3">
                <h4>Social Media</h4>
                <ul>
                    <li><a href="https://twitter.com/elonmusk" target="_blank" >Twitter</a></li>
                    <li><a href="https://telegram.org/" target="_blank" >Telegram</a></li>
                    <li><a href="https://pocmon.medium.com/" target="_blank" >Medium</a></li>
                    <li><a href="https://www.reddit.com/" target="_blank" >Reddit</a></li>
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


