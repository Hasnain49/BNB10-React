import React from "react";
import "./style.css";

const Wallet = () => {
  return (
    <div>
      <div className="wallet-main">
        <div className="wallet-heading-search">
          <h1 className="wallet-main-heading">
            <span>WALLET</span> STATUS
          </h1>
          <div className="wallet-search-bar">
            <input placeholder="0xe3ba0072d1da98269133852fba1795419d72baf4" />
            <button>
              <span>Search</span>
              <img src="/home/icons/send-2.png" alt="" />
            </button>
          </div>
        </div>

        <div className="wallet-adress-status">
          <div className="wallet-adress">
            <h1>Wallet Address</h1>
            <p>0xe3ba0072d1da98269133852fba1795419d72baf4</p>
          </div>
          <div className="wallet-status">
            <h1>
              Status: <span>Searching...</span>
            </h1>
            <p>
              "Sit back and relax! We're verifying your eligibility for the
              airdrop.”
            </p>
          </div>
        </div>
      </div>
      <div className="wallet-status-table">
        <table>
          <tbody>
            <tr>
              <td>
                <div class="table-content">
                  <div class="table-main-para">
                    Condition 1 Condition 1 Condition 1 Condition 1 Condition
                    1Condition 1 Condition 1 Condition 1 Condition 1 Condition 1
                    Condition 1 Condition 1 Condition 1 Condition 1Condition 1
                    Condition 1 Condition 1 Condition 1
                  </div>
                  <div class="table-image">
                    <img src="/home/icons/status-tick.png" />
                  </div>
                  <div class="table-recheck-btn">
                    <button className="table-status-btn">Recheck</button>
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div class="table-content">
                  <div class="table-main-para">
                    Condition 1 Condition 1 Condition 1 Condition 1 Condition
                    1Condition 1 Condition 1 Condition 1 Condition 1 Condition 1
                    Condition 1 Condition 1 Condition 1 Condition 1Condition 1
                    Condition 1 Condition 1 Condition 1
                  </div>
                  <div class="table-image">
                    <img src="/home/icons/status-ineligible.png" />
                  </div>
                  <div class="table-recheck-btn">
                    <button className="table-status-btn">Recheck</button>
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div class="table-content">
                  <div class="table-main-para">
                    Condition 1 Condition 1 Condition 1 Condition 1 Condition
                    1Condition 1 Condition 1 Condition 1 Condition 1 Condition 1
                    Condition 1 Condition 1 Condition 1 Condition 1Condition 1
                    Condition 1 Condition 1 Condition 1
                  </div>
                  <div class="table-image">
                    <img src="/home/icons/status-ineligible.png" />
                  </div>
                  <div class="table-recheck-btn">
                    <button className="table-status-btn">Recheck</button>
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div class="table-content">
                  <div class="table-main-para">
                    Condition 1 Condition 1 Condition 1 Condition 1 Condition
                    1Condition 1 Condition 1 Condition 1 Condition 1 Condition 1
                    Condition 1 Condition 1 Condition 1 Condition 1Condition 1
                    Condition 1 Condition 1 Condition 1
                  </div>
                  <div class="table-image">
                    <img src="/home/icons/status-searching.png" />
                  </div>
                  <div class="table-recheck-btn">
                    <button className="table-status-btn">Recheck</button>
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div class="table-content">
                  <div class="table-main-para">
                    Condition 1 Condition 1 Condition 1 Condition 1 Condition
                    1Condition 1 Condition 1 Condition 1 Condition 1 Condition 1
                    Condition 1 Condition 1 Condition 1 Condition 1Condition 1
                    Condition 1 Condition 1 Condition 1
                  </div>
                  <div class="table-image">
                    <img src="/home/icons/status-searching.png" />
                  </div>
                  <div class="table-recheck-btn">
                    <button className="table-status-btn">Recheck</button>
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div class="table-content">
                  <div class="table-main-para">
                    Condition 1 Condition 1 Condition 1 Condition 1 Condition
                    1Condition 1 Condition 1 Condition 1 Condition 1 Condition 1
                    Condition 1 Condition 1 Condition 1 Condition 1Condition 1
                    Condition 1 Condition 1 Condition 1
                  </div>
                  <div class="table-image">
                    <img src="/home/icons/status-tick.png" />
                  </div>
                  <div class="table-recheck-btn">
                    <button className="table-status-btn">Recheck</button>
                  </div>
                </div>
              </td>
            </tr>
          </tbody>
        </table>

        <div className="wallet-confirm-btn">
          <button>Confirm</button>
        </div>
      </div>

      <div className="ads-portion">
        <h1>Space For Ads</h1>
      </div>
    </div>
  );
};

export default Wallet;
