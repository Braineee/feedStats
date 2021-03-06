import React from 'react'

import Hero from "../../components/homepage-components/hero/hero.component";
import TrustedBy from "../../components/homepage-components/trusted-by/trusted-by.component";
import GetStarted from "../../components/homepage-components/get-started/get-started.component";
import HowItWorks from "../../components/homepage-components/how-it-works/how-it-works.component";
import ReviewSearchbar from "../../components/review-searchbar/review-searchbar.component";

const Homepage = () => {
  return (
    <div id="homepage">
      <Hero />
      <ReviewSearchbar>Drop a quick review &nbsp; &#8594;</ReviewSearchbar>
      <HowItWorks />
      <TrustedBy />
      <GetStarted />
    </div>
  );
}

export default Homepage