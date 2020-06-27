import React from 'react'

import HomeSearchbar from "../../components/home-searchbar/home-searchbar.component";

import './homepage.styles.scss'

import { ReactComponent as Logo } from '../../assets/connect2.svg';// Import the logo


const Homepage = () => {
  return (
    <div id="homepage">
      <div className="hero-container">
        <div className="container">
          <div className="hero">
            <div className="row">
              <div className="col-6">
                <h1>Manage and organise your reviews efficiently.</h1>
                <h5>
                  let us help you manage and organise your feedback and reviews.
                </h5>
                <button className="btn btn-lg btn-primary btn-hero">
                  Let's get started.
                </button>
              </div>
              <div className="col-6">
                <div className="hero-svg">
                  <Logo width="500" height="350" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <HomeSearchbar />
      <div className="how-it-work-container">
        <h3>How it works</h3>
        <div className="container">
          <div className="row">
            <div class="info-list">
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Homepage