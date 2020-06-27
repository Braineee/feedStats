import React from 'react';

import './footer.styles.scss';

import { ReactComponent as Facebook } from '../../assets/social-icons/facebook.svg';
import { ReactComponent as Twitter } from '../../assets/social-icons/twitter.svg';
import { ReactComponent as Instagram } from '../../assets/social-icons/instagram.svg';
import { ReactComponent as Linkedin } from '../../assets/social-icons/linkedin.svg';

const Footer = () => (
  <div id="footer">
    <nav class="navbar navbar-expand-xl">
      <div class="collapse navbar-collapse" id="navbarsExample06">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <a class="nav-link" href="/">FAQs <span class="sr-only">(current)</span></a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/">Privacy policy</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/">Terms of use</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/">support@feedbackstat.com</a>
          </li>
          <li class="nav-item form-inline">
            <a class="nav-link" href="/"><Facebook className="social-icon" width="50" height="25" /></a>
            <a class="nav-link" href="/"><Twitter className="social-icon" width="50" height="25" /></a>
            <a class="nav-link" href="/"><Instagram className="social-icon" width="50" height="25" /></a>
            <a class="nav-link" href="/"><Linkedin className="social-icon" width="50" height="25" /></a>
          </li>
        </ul>
        <form class="form-inline my-2 my-md-0 px-3">
          &copy; 2020 feedbackstat
        </form>
      </div>

    </nav>
  </div>
);

export default Footer;