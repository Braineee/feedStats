import React from 'react'

import HomeSearchbar from "../../components/home-searchbar/home-searchbar.component";

import './homepage.styles.scss'

import { ReactComponent as Logo } from '../../assets/connect2.svg';// Import the logo
import { ReactComponent as SignUp } from '../../assets/sign-up.svg';// Import the logo
import { ReactComponent as Register } from '../../assets/register-business3.svg';// Import the logo
import { ReactComponent as Review } from '../../assets/review-link.svg';// Import the logo


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
        <h2>How it works</h2>
        <div className="container">
          <div className="row">
            <div className="col-4">
              <div class="card text-center">
                <div class="card-body">
                  <SignUp className="card-img" width="200" height="150" />
                  <h5 class="card-title">Sign Up</h5>
                  <p class="card-text">Sign up to unlock a world of unlimited reviews from your customers and client.</p>
                </div>
              </div>
            </div>
            <div className="col-4">
              <div class="card text-center">
                <div class="card-body">
                  <Register className="card-img" width="200" height="150" />
                  <h5 class="card-title">Register your product</h5>
                  <p class="card-text">Provide necessary details to aid your customers or client reviews on your product.</p>
                </div>
              </div>
            </div>
            <div className="col-4">
              <div class="card text-center">
                <div class="card-body">
                  <Review className="card-img" width="200" height="150" />
                  <h5 class="card-title">Get a review link</h5>
                  <p class="card-text">Get a generated review link you can instantly share with your clients and customers.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Homepage