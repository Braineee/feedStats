import React from 'react';

import './hero-header.styles.scss';

const HeroHeader = ({ title, context, image }) => (
  <div className="hero-header">
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-12 col-sm-10 col-md-8 col-lg-6 col-xl-5">
          { image }
          <h1>{title}</h1>
          <h4><strong>{context}</strong></h4>
        </div>
      </div>
    </div>
  </div>
);

export default HeroHeader;