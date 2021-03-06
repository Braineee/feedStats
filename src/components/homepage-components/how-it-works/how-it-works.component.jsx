import React from 'react';

import './how-it-works.styles.scss';

import { ReactComponent as SignUp } from '../../../assets/sign-up.svg';// Import the logo
import { ReactComponent as Register } from '../../../assets/register-business3.svg';// Import the logo
import { ReactComponent as Review } from '../../../assets/review-link.svg';// Import the logo

const HowItWorks = () => (
  <div className="how-it-work-container">
    <h2>How it works</h2>
    <div className="container">
      <div className="row">
        <div className="col-4">
          <div className="card text-center shadow-sm">
            <div className="card-body">
              <SignUp className="card-img" width="200" height="150" />
              <h5 className="card-title">Sign Up</h5>
              <p className="card-text">Sign up to unlock a world of unlimited reviews from your customers and client.</p>
            </div>
          </div>
        </div>
        <div className="col-4">
          <div className="card text-center shadow-sm">
            <div className="card-body">
              <Register className="card-img" width="200" height="150" />
              <h5 className="card-title">Register your product</h5>
              <p className="card-text">Provide necessary details to aid your customers or client reviews on your product.</p>
            </div>
          </div>
        </div>
        <div className="col-4">
          <div className="card text-center shadow-sm">
            <div className="card-body">
              <Review className="card-img" width="200" height="150" />
              <h5 className="card-title">Get a review link</h5>
              <p className="card-text">Get a generated review link you can instantly share with your clients and customers.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <button className="btn btn-lg btn-primary btn-hero">
      Learn more
        </button>
  </div>
);

export default HowItWorks;