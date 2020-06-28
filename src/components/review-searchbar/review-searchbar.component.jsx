import React from 'react';

import './review-searchbar.styles.scss';

import CustomButton from "../custom-button/custom-button.component";

const ReviewSearchBar = ({ children, searchButton }) => (
  <div className="review-search-bar">
    <div className="container">
      <div className="row">
        <div className="col-4">
          <input
            type="text"
            className="custom-input"
            placeholder="Product, service or keyword"
          />
        </div>
        <div className="col-4">
          <select className="custom-input">
            <option>Select category</option>
            <option>eVisit</option>
          </select>
        </div>
        <div className="col-4">
          <CustomButton properties="btn btn-lg btn-primary btn-block search-btn">
            { children }
          </CustomButton>
        </div>
      </div>
    </div>
  </div>
);

export default ReviewSearchBar;