import React, { useRef } from "react";
import "./style.css";
import { Link, NavLink } from "react-router-dom";
import { X, AlignJustify, ArrowUpRight } from "react-feather";
import { useLocation } from "react-router-dom";
const Navbar = () => {
  const navRef = useRef();
  const location = useLocation();
  return (
    <div className="navbar-container">
      <div className="max-width">
        <nav className="navigation-bar">
          <div className="navbar-left">
            <NavLink to="/">
              <img src="/home/logo.png" alt="" />
            </NavLink>
            <div className="navbar-options" ref={navRef}>
              <ul>
                <li>
                  <NavLink
                    style={({ isActive }) => {
                      return isActive ? { color: "#FFDD2D" } : {};
                    }}
                    to="/"
                  >
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    style={({ isActive }) => {
                      return isActive ? { color: "#FFDD2D" } : {};
                    }}
                    to="/wallet"
                  >
                    Wallet
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    style={({ isActive }) => {
                      return isActive ? { color: "#FFDD2D" } : {};
                    }}
                    to="/earnings"
                  >
                    Earnings
                  </NavLink>
                </li>
              </ul>
              <X
                className="hamberger-close"
                color="#fff"
                size={15}
                onClick={() => (navRef.current.style.maxHeight = "0px")}
              />
            </div>
          </div>
          <div className="navbar-right">
            <button className="navbar-btn-first">Contact Us</button>
            <button className="navbar-btn-second">
              <span>Start Building</span>
              {/* <img src="/home/icons/arrow.png" alt="" /> */}
              <ArrowUpRight size={20} />
            </button>
          </div>
          <AlignJustify
            className="hamburger"
            color="#fff"
            onClick={() => (navRef.current.style.maxHeight = "150px")}
          />
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
