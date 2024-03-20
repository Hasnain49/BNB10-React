import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="max-width">
          <div className="footer-inner">
            <div className="footer-inner-top">
              <div className="footer-left">
                <Link to="/">
                  <img className="footer-logo" src="/home/logo.png" alt="" />
                </Link>
                <p className="footer-left-para">
                  Join our Smart Chain Sweeps takes platform and participate in
                  gas fee giveaways to maximize rewards for your Binance Smart
                  Chain wallet.
                </p>
                <div className="footer-social-icons">
                  <Link>
                    <img src="/home/icons/x.png" alt="" />
                  </Link>
                  <Link>
                    <img src="/home/icons/fb.svg" alt="" />
                  </Link>
                  <Link>
                    <img src="/home/icons/insta.svg" alt="" />
                  </Link>
                  <Link>
                    <img src="/home/icons/linkedIn.svg" alt="" />
                  </Link>
                </div>
              </div>
              <div className="footer-right">
                <div className="footer-right-links">
                  <div className="footer-right-wallet-earning-support">
                    <Link className="footer-head-link">
                      Wallet <div className="wallet-underline"></div>
                    </Link>
                    <Link className="footer-sub-link">Mobile App</Link>
                    <Link className="footer-sub-link">Browser Extension</Link>
                  </div>
                  <div className="footer-right-wallet-earning-support">
                    <Link className="footer-head-link">
                      Earnings <div className="earning-underline"></div>
                    </Link>
                    <Link className="footer-sub-link">FAQS</Link>
                    <Link className="footer-sub-link">Contact Us</Link>
                  </div>
                  <div className="footer-right-wallet-earning-support">
                    <Link className="footer-head-link">
                      Support <div className="support-underline"></div>
                    </Link>
                    <Link className="footer-sub-link">Terms & Conditions</Link>
                    <Link className="footer-sub-link">Contact Us</Link>
                  </div>
                </div>
                <div className="footer-right-contacts">
                  <div className="footer-right-contacts-top">
                    <Link className="footer-head-link">Contact Us</Link>
                    <Link className="footer-sub-link">Email Address</Link>
                    <div className="footer-email-input">
                      <input type="email" placeholder="example@gmail.com" />
                      <img src="/home/icons/arrow-right.png" alt="" />
                    </div>
                  </div>

                  <div className="google-apple-stores">
                    <Link>
                      <img src="/home/icons/google.png" alt="" />
                    </Link>
                    <Link>
                      <img src="/home/icons/apple.png" alt="" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="footer-inner-bottom">
              <p>© 2024 BNB10. All Rights Reserved.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="res-footer">
        <div className="res-footer-inner">
          <div className="footer-left">
            <img className="footer-logo" src="/home/logo.png" alt="" />
            <p className="footer-left-para">
              Join our Smart Chain Sweeps takes platform and participate in gas
              fee giveaways to maximize rewards for your Binance Smart Chain
              wallet.
            </p>

            <div className="footer-right-wallet-earning-support">
              <Link className="footer-head-link">
                Wallet <div className="wallet-underline"></div>
              </Link>
              <Link className="footer-head-link">
                Earnings <div className="earning-underline"></div>
              </Link>
              <Link className="footer-head-link">
                Support <div className="support-underline"></div>
              </Link>
            </div>

            <p className="footer-community">Community</p>

            <div className="footer-social-icons">
              <Link>
                <img src="/home/icons/x.png" alt="" />
              </Link>
              <Link>
                <img src="/home/icons/fb.svg" alt="" />
              </Link>
              <Link>
                <img src="/home/icons/insta.svg" alt="" />
              </Link>
              <Link>
                <img src="/home/icons/linkedIn.svg" alt="" />
              </Link>
            </div>
          </div>

          <div className="res-footer-right">
            <div className="google-apple-stores">
              <Link>
                <img src="/home/icons/google.png" alt="" />
              </Link>
              <Link>
                <img src="/home/icons/apple.png" alt="" />
              </Link>
            </div>

            <div className="footer-right-contacts-top">
              <Link className="footer-head-link">Contact Us</Link>
              <div className="footer-email-input">
                <input type="email" placeholder="example@gmail.com" />
                <img src="/home/icons/arrow-right.png" alt="" />
              </div>
            </div>
          </div>

        </div>
        <div className="footer-inner-bottom">
          <p>© 2024 BNB10. All Rights Reserved.</p>
        </div>
      </div>
    </>
  );
};

export default Footer;
