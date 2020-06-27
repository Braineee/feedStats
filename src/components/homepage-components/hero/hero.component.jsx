import React from 'react';

import './hero.styles.scss';

import { ReactComponent as Logo } from '../../../assets/connect2.svg';// Import the logo

const Hero = () => (
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
)

export default Hero;