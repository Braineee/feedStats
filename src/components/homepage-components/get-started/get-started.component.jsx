import React from 'react';

import './get-started.styles.scss';

import { ReactComponent as Start } from '../../../assets/get-started.svg';// Import the logo


const GetStarted = () => (
  <div className="get-started-container">
    <h2>Get started with feedbackstats</h2>
    <Start className="card-img" width="300" height="170" />
    <h5>
      Do not hesitate in bringing the voicies of your customers and clients closer to you
      <br></br>
      who knows? the next big thing might be within.
    </h5>
    <button className="btn btn-lg btn-primary btn-hero">
      Let's get started &nbsp; &#8594;
    </button>
  </div>
);

export default GetStarted;
