import React from 'react'

import HomeSearchbar from "../../components/landing-components/home-searchbar/home-searchbar.component";
import HowItWorks from "../../components/landing-components/how-it-works/how-it-works.component";
import TrustedBy from "../../components/landing-components/trusted-by/trusted-by.component";

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
                  Let's get started
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
      <HowItWorks />
      <TrustedBy />
      
      <div className="get-started-container">
        <h2>Get started with feedbackstats</h2>
        <h5>
          Do not hesitate in bringing the voicies of your customers and clients closer to you
          <br></br>
          who know?, the next big thing might be within.
        </h5>
        <button className="btn btn-lg btn-primary btn-hero">
          Let's get started
        </button>
      </div>
    </div>
  );
}

export default Homepage