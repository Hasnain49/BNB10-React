import React, { useState } from 'react'
import EaningSlider from "../Sllider/Slider"
import './style.css'
import { Minus, Plus, ArrowUpRight } from "react-feather";
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
const Earnings = () => {
  const [activeFaq, setActiveFaq] = useState(1);
  return (
    <div>
      <div className="first-sec-earning max-width">
        <div className="first-sec-leftside">
          <div className="genstatictics-side">
            <h1>General Statistics</h1>
            <button>Withdraw Earnings <ArrowUpRight size={20} /></button>
          </div>
          <div className='genstatictics-boxes'>
            <div className='genstatictics-boxes-1'>
              <h3>Total Balance Since Join</h3>
              <h2>$3904.40</h2>
            </div>
            <div className='genstatictics-boxes-1'>
              <h3>Today's Earning</h3>
              <div className='amount-and-arrow'>
                <h2>$20.008</h2>
                <img src='/home/icons/red.png' alt='' />
              </div>
            </div>
            <div className='genstatictics-boxes-1'>
              <h3>All Time Earning</h3>
              <div className='amount-and-arrow'>
                <h2>$23240.8</h2>
                <img src='/home/icons/blue.png' alt='' />
              </div>
            </div>
          </div>
        </div>
        <div className="first-sec-rightside">
          <div className="right-side-walletaddress">
            <h3>Wallet Address</h3>
            <p>0xe3ba0072d1da98269133852fba179541</p>
          </div>
          <div className="right-side-walletavailable">
            <p>Balance Available for Use</p>
            <h3>$500.93</h3>
            <button>Withdraw balance <ArrowUpRight size={20} /></button>
          </div>
        </div>
      </div>
      <div className="second-sec-earningslider max-width">

        <div className="second-sec-rightside">
          <div className='session-timer'>
            <p>Session Timer</p>
            <div className='center-timing-number'>
              <h1>10:59:40</h1>
              <div className='hour-minutes-seconds'>
                <p>Hours</p>
                <p>Minutes</p>
                <p>Secs</p>
              </div>
              <h5>#12345</h5>
            </div>
          </div>
          <button>Knock <ArrowUpRight size={20} /></button>
        </div>
        <div className="second-sec-leftside">
          <h2>Earning History</h2>
          <EaningSlider />
        </div>

      </div>
      <div className='third-sec-adserning-outer'>
        <div className='third-sec-adserning max-width'>
          <h1>Space For Ads</h1>
        </div>
      </div>

    <div className='fouth-section-outer'>
      <div className='fouth-section-earningtable max-width'>
        <h1>Withdrawal History</h1>
        <div className='main-table-earningpage'>
          <table>
            <tr>
              <th className="activity-active"><span>Date</span> <p>Activity</p></th>
              <th className='main-table-time'>Time</th>
              <th className='main-table-time'>Transaction ID</th>
              <th>Amount</th>
              <th className='main-table-time'>Status</th>
              <th>Action</th>
            </tr>
            <tr>
              <td className='date-recieved'><p>Recieved</p><h6>12/02/24</h6></td>
              <td className='main-table-time'>12:33 PM</td>
              <td className='main-table-time'>x43wtrew66-24</td>
              <td>$5000</td>
              <td className='recieved-batch'><span>Recieved</span></td>
              <td><button>View</button></td>
            </tr>
            <tr>
              <td className='date-recieved'><p>Recieved</p><h6>12/02/24</h6></td>
              <td className='main-table-time'>12:33 PM</td>
              <td className='main-table-time'>x43wtrew66-24</td>
              <td>$5000</td>
              <td className='recieved-batch'><span>Recieved</span></td>
              <td><button>View</button></td>
            </tr>
            <tr>
              <td className='date-recieved'><p>Recieved</p><h6>12/02/24</h6></td>
              <td className='main-table-time'>12:33 PM</td>
              <td className='main-table-time'>x43wtrew66-24</td>
              <td>$5000</td>
              <td className='recieved-batch'><span>Recieved</span></td>
              <td><button>View</button></td>
            </tr>

          </table>
        </div>
      </div>
      </div>

      <div className="faq-outer-container faq-earning-page">
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
                        maxHeight: `${index + 1 === activeFaq ? "200px" : "0px"
                          }`,
                      }}
                    >
                      <div className='faq-description-inner'>

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


    </div>
  )
}

export default Earnings
