import React, { useState } from "react";
import "./style.css";
import { ArrowUpRight, Minus, Plus } from "react-feather";
import HomeSlider from "./Slider/HomeSlider";

const faqData = [
  {
    title:
      "What is Bnb10 and how does it provide gas fee giveaways for Binance Smart Chain (BSC) transactions?",
    description:
      "Bnb10 is a platform dedicated to providing gas fee giveaways for transactions on the Binance Smart Chain (BSC). Our mission is to support BSC wallet users by facilitating seamless transactions and covering their gas fees.",
  },
  {
    title: "How can I apply for gas fee giveaways on Bnb10?",
    description:
      "Bnb10 is a platform dedicated to providing gas fee giveaways for transactions on the Binance Smart Chain (BSC). Our mission is to support BSC wallet users by facilitating seamless transactions and covering their gas fees.",
  },
  {
    title: "What factors determine eligibility for gas fee giveaways on Bnb10?",
    description:
      "Bnb10 is a platform dedicated to providing gas fee giveaways for transactions on the Binance Smart Chain (BSC). Our mission is to support BSC wallet users by facilitating seamless transactions and covering their gas fees.",
  },
  {
    title: "How often are gas fee giveaways provided on Bnb10?",
    description:
      "Bnb10 is a platform dedicated to providing gas fee giveaways for transactions on the Binance Smart Chain (BSC). Our mission is to support BSC wallet users by facilitating seamless transactions and covering their gas fees.",
  },
  {
    title: "Can my wallet recive gas fee giveaways multiple times on Bnb10?",
    description:
      "Bnb10 is a platform dedicated to providing gas fee giveaways for transactions on the Binance Smart Chain (BSC). Our mission is to support BSC wallet users by facilitating seamless transactions and covering their gas fees.",
  },
  {
    title:
      "How can i track the status of my gas fee giveways request om Bnb10?",
    description:
      "Bnb10 is a platform dedicated to providing gas fee giveaways for transactions on the Binance Smart Chain (BSC). Our mission is to support BSC wallet users by facilitating seamless transactions and covering their gas fees.",
  },
];
const Home = () => {
  const [activeFaq, setActiveFaq] = useState(1);
  return (
    <div>
      <div className="max-width">
        <div className="home-banner-inner">
          <h1 className="home-banner-main-heading">
            Say Goodbye <br />to Gas <span>Fees!</span>
          </h1>
          <p className="home-banner-main-para">
            Start now by providing your wallet address. Enjoy free BNB gas fee giveaways for your transactions.
          </p>

          <div className="home-banner-buttons">
            <button className="navbar-btn-first"><span>Learn More</span></button>
            <button className="navbar-btn-second">
              <span>Book a Demo</span>
              {/* <img src="/home/icons/arrow.png" alt="" /> */}
              <ArrowUpRight size={20} />
            </button>
          </div>
        </div>
      </div>
      <div className="home-partners-outer">
        <div className="max-width">
          <div className="home-partners">
            <div className="home-partners-inner">
              <img src="/home/partners/1.png" alt="" />
              <img src="/home/partners/2.png" alt="" />
              <img src="/home/partners/3.png" alt="" />
              <img src="/home/partners/4.png" alt="" />
              <img src="/home/partners/5.png" alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="max-width">
        <div className="why-choose-us-container">
          <div className="why-choose-us-inner">
            <img src="/home/choose.png" alt="" />
            <div className="why-choose-us-inner-content">
              <h1>
                why <span>choose</span> us?
              </h1>
              <p>
                Experience Unrivaled Benefits with “BNB10” Your Ultimate
                Destination for Gas Fee Giveaways and Wallet Rewards on the
                Binance Smart Chain, Where Every Transaction Counts Towards
                Substantial Savings and Enhanced User Experience
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="middle-cards-outer">
        <div className="max-width">
          <div className="middle-cards-inner">
            <div className="middle-cards">
              <div className="middle-card">
                <div className="middle-card-icon">
                  <img src="/home/icons/money.png" alt="" />
                </div>
                <h1>Gas Fee Savings</h1>
                <p>
                  Users can participate in gas fee giveaways, reducing the cost
                  of transactions on the Binance Smart Chain. This incentivizes
                  wallet holders to engage with the platform and benefit from
                  reduced fees.
                </p>
              </div>
              <div className="middle-card">
                <div className="middle-card-icon">
                  <img src="/home/icons/colored-wallet.png" alt="" />
                </div>
                <h1>Enhanced Wallet Engagement</h1>
                <p>
                  By fulfilling certain conditions, users can qualify for gas
                  fee giveaways. This encourages active participation and
                  engagement with their BSC wallets, fostering a sense of
                  community and involvement in the platform.
                </p>
              </div>
              <div className="middle-card">
                <div className="middle-card-icon">
                  <img src="/home/icons/finance.png" alt="" />
                </div>
                <h1>Financial Accessibility</h1>
                <p>
                  Gas fees can be a barrier for some users to engage with
                  blockchain transactions. Bnb10's gas fee giveaways make
                  transactions more affordable, promoting financial inclusivity
                  and accessibility within the Binance Smart Chain ecosystem.
                </p>
              </div>
              <div className="middle-card">
                <div className="middle-card-icon">
                  <img src="/home/icons/centric.png" alt="" />
                </div>
                <h1>User-Centric Design</h1>
                <p>
                  The website's design, structured around three main pages with
                  distinct purposes, prioritizes user experience. Clear
                  navigation and focused content ensure that users can easily
                  find information relevant to gas fee giveaways and wallet
                  conditions.
                </p>
              </div>
              <div className="middle-card">
                <div className="middle-card-icon">
                  <img src="/home/icons/law.png" alt="" />
                </div>
                <h1>Transparency and Fairness</h1>
                <p>
                  By specifying certain conditions for eligibility, Bnb10
                  ensures transparency and fairness in its gas fee giveaway
                  process. Users understand the criteria for participation,
                  fostering trust and confidence in the platform.
                </p>
              </div>
              <div className="middle-card">
                <div className="middle-card-icon">
                  <img src="/home/icons/community.png" alt="" />
                </div>
                <h1>Community Building</h1>
                <p>
                  Bnb10's mission of providing gas fee giveaways fosters a
                  community of Binance Smart Chain users who share common
                  interests in reducing transaction costs. This community
                  engagement can lead to collaboration, knowledge sharing, and
                  networking opportunities among users.
                </p>
              </div>
            </div>
          </div>
          <div className="home-page-slider">
            <HomeSlider />
          </div>
        </div>
      </div>

      <div className="max-width">
        <div className="statistics-inner">
          <h1>statistics</h1>
          <div className="statistics">
            <div className="statistic">
              <div className="statistic-top">
                <h3>BNB Sent</h3>
              </div>
              <span>387,83</span>
            </div>
            <div className="statistic">
              <div className="statistic-top">
                <h3>Wallet Recevied</h3>
              </div>
              <span>567,56</span>
            </div>
            <div className="statistic">
              <div className="statistic-top">
                <h3>Transactions</h3>
              </div>
              <span>387,83</span>
            </div>
            <div className="statistic">
              <div className="statistic-top">
                <h3>Users Online</h3>
              </div>
              <span>565,66</span>
            </div>
          </div>
        </div>
      </div>

      <div className="faq-outer-container">
        <div className="max-width">
          <div className="faq-inner-container">
            <h1>
              Frequently Asked <span>Questions</span>
            </h1>
            <p>
              Discover answers to common questions about <br /> our
              cryptocurrency platform
            </p>

            <div className="faqs">
              {faqData.map((faq, index) => {
                return (
                  <div
                    className="faq"
                    style={{
                      border: `${index + 1 === activeFaq
                        ? "0.01rem solid #FFDD2D"
                        : "1px solid transparent"
                        }`,
                      background: `${index + 1 === activeFaq
                        ? "linear-gradient(90deg, rgba(255, 221, 45, 0.05) 0%, rgba(255, 221, 45, 0) 100%)"
                        : "transparent"
                        }`,
                    }}
                  >
                    <div
                      className="faq-head"
                      onClick={() => setActiveFaq(++index)}
                      style={{
                        color: `${index + 1 === activeFaq ? "#FFDD2D" : "#CCCCCC"
                          }`,
                      }}
                    >
                      {faq.title}{" "}
                      <div className="faq-icon-container">
                        {index + 1 === activeFaq ? (
                          <Minus color="#000" />
                        ) : (
                          <Plus color="#000" />
                        )}
                      </div>
                    </div>
                    <div
                      className="faq-description"
                      style={{
                        maxHeight: `${index + 1 === activeFaq ? "200px" : "0"
                          }`,
                      }}
                    >
                      <div className="faq-description-inner">
                        {faq.description}

                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <div className="home-search-container">
        <div className="search-inner">
          <h1>Please Input Your Wallet address to check your current eligibility</h1>
          <input type="text" placeholder="Enter your wallet address here..." />
          <div className="search-inner-button">
            <button className="navbar-btn-second">
              <span>Submit</span>
              {/* <img src="/home/icons/arrow.png" alt="" /> */}
              <ArrowUpRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
