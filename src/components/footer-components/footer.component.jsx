import React from 'react';

import './footer.styles.scss';

import { ReactComponent as Facebook } from '../../assets/social-icons/facebook.svg';
import { ReactComponent as Twitter } from '../../assets/social-icons/twitter.svg';
import { ReactComponent as Instagram } from '../../assets/social-icons/instagram.svg';
import { ReactComponent as Linkedin } from '../../assets/social-icons/linkedin.svg';

const Footer = () => (
  <div id="footer">
    <nav className="navbar navbar-expand-xl">
      <div className="collapse navbar-collapse" id="navbarsExample06">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <a className="nav-link" href="/">FAQs <span className="sr-only">(current)</span></a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/">Privacy policy</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/">Terms of use</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/">support@feedbackstat.com</a>
          </li>
          <li className="nav-item form-inline">
            <a className="nav-link" href="/"><Facebook className="social-icon" width="50" height="25" /></a>
            <a className="nav-link" href="/"><Twitter className="social-icon" width="50" height="25" /></a>
            <a className="nav-link" href="/"><Instagram className="social-icon" width="50" height="25" /></a>
            <a className="nav-link" href="/"><Linkedin className="social-icon" width="50" height="25" /></a>
          </li>
        </ul>
        <form className="form-inline my-2 my-md-0 px-3">
          &copy; 2020 feedbackstat
        </form>
      </div>

    </nav>
  </div>
);

export default Footer;