import React from 'react';

import './home-searchbar.styles.scss';

const homeSearchBar = () => (
  <div class="home-search-bar">
    
    <div className="container">
      <div className="row">
        <div class="col-4">
          <input type="text" className="custom-input" placeholder="Product, service or keyword" />
        </div>
        <div class="col-4">
          <select className="custom-input">
            <option>Select category</option>
            <option>eVisit</option>
          </select>
        </div>
        <div class="col-4">
          <button className="btn btn-lg btn-primary btn-block search-btn">Drop a quick review</button>
        </div>
      </div>
    </div>
  </div>
);

export default homeSearchBar;