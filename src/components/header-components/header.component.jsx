import React from 'react';

import './header.styles.scss';

import { ReactComponent as Logo } from '../../assets/testlogo.svg';// Import the logo

const Header = () => (
  <div id="header">
    <nav className="navbar navbar-light bg-white fixed-top">
      <div className="container large-screen">
        <div className="row">
          <div className="col-6">
            <a class="nav-link"  href="/">
              <h3 className="h3-py">feedbackStats</h3>
            </a>
          </div>
          <div className="col-6 text-right">
            <a href="link" className="btn btn-white">
              Register a product
            </a>
            <a href="link" className="btn btn-white">
              Drop a review
            </a>
            <button className="btn btn-primary sign-in-button">Sign In</button>
          </div>
        </div>
      </div>
      <div className="container small-screen">
        <div className="col-6 logo">
          <Logo />
        </div>
        <div className="col-6 text-right">
          <span className="bugger-button">&#x02261;</span>
        </div>
      </div>
    </nav>
  </div>
);

export default Header;