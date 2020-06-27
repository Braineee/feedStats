import React from 'react';

import './trusted-by.styles.scss';

import logo1 from '../../../assets/trustedby/1.png';
import logo2 from '../../../assets/trustedby/2.png';
import logo3 from '../../../assets/trustedby/3.png';
import logo4 from '../../../assets/trustedby/4.png';
import logo5 from '../../../assets/trustedby/5.jpeg';

const TrustedBy = () => (
  <div className="trusted-by-container">
    <h2>Trusted by</h2>
    <div className="container">
      <div className="row">
        <img src={logo1} className="trusted-logo" alt="Logo" />
        <img src={logo2} className="trusted-logo" alt="Logo" />
        <img src={logo3} className="trusted-logo" alt="Logo" />
        <img src={logo4} className="trusted-logo" alt="Logo" />
        <img src={logo5} className="trusted-logo" alt="Logo" />
      </div>
    </div>
  </div>
);

export default TrustedBy;