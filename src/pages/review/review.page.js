import React from 'react';

import './review.styles.scss';

import HeroHeader from "../../components/hero-header/hero-header.component";
import ReviewSearchbar from "../../components/review-searchbar/review-searchbar.component";
import ProductList from "../../components/reviewpage-components/product-list/product-list.component";

import { ReactComponent as Review } from '../../assets/reviewPage.svg';
import { ReactComponent as Search } from '../../assets/svg-icon/search-icon-white.svg';// Import the logo

const ReviewPage = () => (
  <div id="review-page">
    <HeroHeader
      title="Product Review"
      context="Find any product or service you wish to review below"
      image={<Review width="350" />}
    />
    <ReviewSearchbar>
      <Search width="20" height="20" />&ensp;Search
    </ReviewSearchbar>
    <ProductList />
  </div>
);

export default ReviewPage;