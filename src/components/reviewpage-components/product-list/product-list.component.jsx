import React from 'react';

import './product-list.styles.scss';

//import ProductItem from '../product-items/product-item.component';
import CustomButton from "../../custom-button/custom-button.component";

import { ReactComponent as GoldStar } from '../../../assets/svg-icon/gold-star.svg';
import { ReactComponent as GrayStar } from '../../../assets/svg-icon/grey-star.svg';
import { ReactComponent as Bullet } from '../../../assets/svg-icon/bullet-circle.svg';

const ProductList = () => (
  <div id="product-list">
    <div className="container">
      <div className="row align-items-center">
        <div className="col-4">
          <div className="product-item-card shadow-sm">
            <div className="d-flex align-items-center justify-content-between mb-4">
              <img src="https://pace-africa.s3.amazonaws.com/company/logo/1591630864012-811049605.png" class="product-item-logo" alt=""></img>
              <div class="product-item-stars text-right">
                <GoldStar width="10%" height="5%"/>
                <GoldStar width="10%" height="5%"/>
                <GoldStar width="10%" height="5%"/>
                <GrayStar width="10%" height="5%"/>
                <GrayStar width="10%" height="5%"/>
              </div>
            </div>
            <div className="product-item-name">
              <Bullet width="3%" height="3%" />
              &ensp;
              Good Talent
            </div>
            <span className="product-item-category">
              <Bullet width="3%" height="3%" />
              &ensp;
              Technology
            </span>
            <span className="product-item-category">
              <Bullet width="3%" height="3%" />
              &ensp;
              1,400 reviews
            </span>
            <div className="product-item-description">
              Emergency Response Africa (ERA) is a health tech start up on a mission 
              to provide medical care to emergency victims in Africa. Many African countries...
            </div>
            <hr />
            <div className="product-item-button text-center">
              <CustomButton properties="btn btn-sm btn-outline-primary">
                View reviews
              </CustomButton>
              &ensp;
              <CustomButton properties="btn btn-sm btn-outline-primary">
                Drop review
              </CustomButton>
            </div>
          </div>
        </div>
        <div className="col-4">
          <div className="product-item-card shadow-sm">
            <div className="d-flex align-items-center justify-content-between mb-4">
              <img src="https://pace-africa.s3.amazonaws.com/company/logo/1591585427095-20820975.jpg" class="product-item-logo" alt=""></img>
              <div class="product-item-stars text-right">
                <GoldStar width="10%" height="5%" />
                <GoldStar width="10%" height="5%" />
                <GoldStar width="10%" height="5%" />
                <GoldStar width="10%" height="5%" />
                <GoldStar width="10%" height="5%" />
              </div>
            </div>
            <div className="product-item-name">
              <Bullet width="3%" height="3%" />
              &ensp;
              Good Talent
            </div>
            <span className="product-item-category">
              <Bullet width="3%" height="3%" />
              &ensp;
              Technology
            </span>
            <span className="product-item-category">
              <Bullet width="3%" height="3%" />
              &ensp;
              1,400 reviews
            </span>
            <div className="product-item-description">
              Emergency Response Africa (ERA) is a health tech start up on a mission
              to provide medical care to emergency victims in Africa. Many African countries...
            </div>
            <hr />
            <div className="product-item-button text-center">
              <CustomButton properties="btn btn-sm btn-outline-primary">
                View reviews
              </CustomButton>
              &ensp;
              <CustomButton properties="btn btn-sm btn-outline-primary">
                Drop review
              </CustomButton>
            </div>
          </div>
        </div>
        <div className="col-4">
          <div className="product-item-card shadow-sm">
            <div className="d-flex align-items-center justify-content-between mb-4">
              <img src="https://pace-africa.s3.amazonaws.com/company/logo/1591990471675-905730228.png" class="product-item-logo" alt=""></img>
              <div class="product-item-stars text-right">
                <GoldStar width="10%" height="5%" />
                <GoldStar width="10%" height="5%" />
                <GrayStar width="10%" height="5%" />
                <GrayStar width="10%" height="5%" />
                <GrayStar width="10%" height="5%" />
              </div>
            </div>
            <div className="product-item-name">
              <Bullet width="3%" height="3%" />
              &ensp;
              Enov8 solutions limited
            </div>
            <span className="product-item-category">
              <Bullet width="3%" height="3%" />
              &ensp;
              Technology
            </span>
            <span className="product-item-category">
              <Bullet width="3%" height="3%" />
              &ensp;
              1,400 reviews
            </span>
            <div className="product-item-description">
              Emergency Response Africa (ERA) is a health tech start up on a mission
              to provide medical care to emergency victims in Africa. Many African countries...
            </div>
            <hr />
            <div className="product-item-button text-center">
              <CustomButton properties="btn btn-sm btn-outline-primary">
                View reviews
              </CustomButton>
              &ensp;
              <CustomButton properties="btn btn-sm btn-outline-primary">
                Drop review
              </CustomButton>
            </div>
          </div>
        </div>
        <div className="col-4">
          <div className="product-item-card shadow-sm">
            <div className="d-flex align-items-center justify-content-between mb-4">
              <img src="https://pace-africa.s3.amazonaws.com/company/logo/1591630864012-811049605.png" class="product-item-logo" alt=""></img>
              <div class="product-item-stars text-right">
                <GoldStar width="10%" height="5%" />
                <GoldStar width="10%" height="5%" />
                <GoldStar width="10%" height="5%" />
                <GoldStar width="10%" height="5%" />
                <GrayStar width="10%" height="5%" />
              </div>
            </div>
            <div className="product-item-name">
              <Bullet width="3%" height="3%" />
              &ensp;
              Good Talent
            </div>
            <span className="product-item-category">
              <Bullet width="3%" height="3%" />
              &ensp;
              Technology
            </span>
            <span className="product-item-category">
              <Bullet width="3%" height="3%" />
              &ensp;
              1,400 reviews
            </span>
            <div className="product-item-description">
              Emergency Response Africa (ERA) is a health tech start up on a mission
              to provide medical care to emergency victims in Africa. Many African countries...
            </div>
            <hr />
            <div className="product-item-button text-center">
              <CustomButton properties="btn btn-sm btn-outline-primary">
                View reviews
              </CustomButton>
              &ensp;
              <CustomButton properties="btn btn-sm btn-outline-primary">
                Drop review
              </CustomButton>
            </div>
          </div>
        </div>
        <div className="col-4">
          <div className="product-item-card shadow-sm">
            <div className="d-flex align-items-center justify-content-between mb-4">
              <img src="https://pace-africa.s3.amazonaws.com/company/logo/1591630864012-811049605.png" class="product-item-logo" alt=""></img>
              <div class="product-item-stars text-right">
                <GoldStar width="10%" height="5%" />
                <GrayStar width="10%" height="5%" />
                <GrayStar width="10%" height="5%" />
                <GrayStar width="10%" height="5%" />
                <GrayStar width="10%" height="5%" />
              </div>
            </div>
            <div className="product-item-name">
              <Bullet width="3%" height="3%" />
              &ensp;
              Good Talent
            </div>
            <span className="product-item-category">
              <Bullet width="3%" height="3%" />
              &ensp;
              Technology
            </span>
            <span className="product-item-category">
              <Bullet width="3%" height="3%" />
              &ensp;
              1,400 reviews
            </span>
            <div className="product-item-description">
              Emergency Response Africa (ERA) is a health tech start up on a mission
              to provide medical care to emergency victims in Africa. Many African countries...
            </div>
            <hr />
            <div className="product-item-button text-center">
              <CustomButton properties="btn btn-sm btn-outline-primary">
                View reviews
              </CustomButton>
              &ensp;
              <CustomButton properties="btn btn-sm btn-outline-primary">
                Drop review
              </CustomButton>
            </div>
          </div>
        </div>
        <div className="col-4">
          <div className="product-item-card shadow-sm">
            <div className="d-flex align-items-center justify-content-between mb-4">
              <img src="https://pace-africa.s3.amazonaws.com/company/logo/1591630864012-811049605.png" class="product-item-logo" alt=""></img>
              <div class="product-item-stars text-right">
                <GoldStar width="10%" height="5%" />
                <GoldStar width="10%" height="5%" />
                <GoldStar width="10%" height="5%" />
                <GrayStar width="10%" height="5%" />
                <GrayStar width="10%" height="5%" />
              </div>
            </div>
            <div className="product-item-name">
              <Bullet width="3%" height="3%" />
              &ensp;
              Good Talent
            </div>
            <span className="product-item-category">
              <Bullet width="3%" height="3%" />
              &ensp;
              Technology
            </span>
            <span className="product-item-category">
              <Bullet width="3%" height="3%" />
              &ensp;
              1,400 reviews
            </span>
            <div className="product-item-description">
              Emergency Response Africa (ERA) is a health tech start up on a mission
              to provide medical care to emergency victims in Africa. Many African countries...
            </div>
            <hr />
            <div className="product-item-button text-center">
              <CustomButton properties="btn btn-sm btn-outline-primary">
                View reviews
              </CustomButton>
              &ensp;
              <CustomButton properties="btn btn-sm btn-outline-primary">
                Drop review
              </CustomButton>
            </div>
          </div>
        </div>
        <div className="col-4">
          <div className="product-item-card shadow-sm">
            <div className="d-flex align-items-center justify-content-between mb-4">
              <img src="https://pace-africa.s3.amazonaws.com/company/logo/1591630864012-811049605.png" class="product-item-logo" alt=""></img>
              <div class="product-item-stars text-right">
                <GoldStar width="10%" height="5%" />
                <GoldStar width="10%" height="5%" />
                <GoldStar width="10%" height="5%" />
                <GrayStar width="10%" height="5%" />
                <GrayStar width="10%" height="5%" />
              </div>
            </div>
            <div className="product-item-name">
              <Bullet width="3%" height="3%" />
              &ensp;
              Good Talent
            </div>
            <span className="product-item-category">
              <Bullet width="3%" height="3%" />
              &ensp;
              Technology
            </span>
            <span className="product-item-category">
              <Bullet width="3%" height="3%" />
              &ensp;
              1,400 reviews
            </span>
            <div className="product-item-description">
              Emergency Response Africa (ERA) is a health tech start up on a mission
              to provide medical care to emergency victims in Africa. Many African countries...
            </div>
            <hr />
            <div className="product-item-button text-center">
              <CustomButton properties="btn btn-sm btn-outline-primary">
                View reviews
              </CustomButton>
              &ensp;
              <CustomButton properties="btn btn-sm btn-outline-primary">
                Drop review
              </CustomButton>
            </div>
          </div>
        </div>
        <div className="col-4">
          <div className="product-item-card shadow-sm">
            <div className="d-flex align-items-center justify-content-between mb-4">
              <img src="https://pace-africa.s3.amazonaws.com/company/logo/1591630864012-811049605.png" class="product-item-logo" alt=""></img>
              <div class="product-item-stars text-right">
                <GoldStar width="10%" height="5%" />
                <GoldStar width="10%" height="5%" />
                <GoldStar width="10%" height="5%" />
                <GrayStar width="10%" height="5%" />
                <GrayStar width="10%" height="5%" />
              </div>
            </div>
            <div className="product-item-name">
              <Bullet width="3%" height="3%" />
              &ensp;
              Good Talent
            </div>
            <span className="product-item-category">
              <Bullet width="3%" height="3%" />
              &ensp;
              Technology
            </span>
            <span className="product-item-category">
              <Bullet width="3%" height="3%" />
              &ensp;
              1,400 reviews
            </span>
            <div className="product-item-description">
              Emergency Response Africa (ERA) is a health tech start up on a mission
              to provide medical care to emergency victims in Africa. Many African countries...
            </div>
            <hr />
            <div className="product-item-button text-center">
              <CustomButton properties="btn btn-sm btn-outline-primary">
                View reviews
              </CustomButton>
              &ensp;
              <CustomButton properties="btn btn-sm btn-outline-primary">
                Drop review
              </CustomButton>
            </div>
          </div>
        </div>
        <div className="col-4">
          <div className="product-item-card shadow-sm">
            <div className="d-flex align-items-center justify-content-between mb-4">
              <img src="https://pace-africa.s3.amazonaws.com/company/logo/1591630864012-811049605.png" class="product-item-logo" alt=""></img>
              <div class="product-item-stars text-right">
                <GoldStar width="10%" height="5%" />
                <GoldStar width="10%" height="5%" />
                <GoldStar width="10%" height="5%" />
                <GrayStar width="10%" height="5%" />
                <GrayStar width="10%" height="5%" />
              </div>
            </div>
            <div className="product-item-name">
              <Bullet width="3%" height="3%" />
              &ensp;
              Good Talent
            </div>
            <span className="product-item-category">
              <Bullet width="3%" height="3%" />
              &ensp;
              Technology
            </span>
            <span className="product-item-category">
              <Bullet width="3%" height="3%" />
              &ensp;
              1,400 reviews
            </span>
            <div className="product-item-description">
              Emergency Response Africa (ERA) is a health tech start up on a mission
              to provide medical care to emergency victims in Africa. Many African countries...
            </div>
            <hr />
            <div className="product-item-button text-center">
              <CustomButton properties="btn btn-sm btn-outline-primary">
                View reviews
              </CustomButton>
              &ensp;
              <CustomButton properties="btn btn-sm btn-outline-primary">
                Drop review
              </CustomButton>
            </div>
          </div>
        </div>
      </div>
      <div className="m-5 text-center">
        <CustomButton properties="btn btn-lg btn-primary">
          Load more
        </CustomButton>
      </div>
    </div>
  </div>
);  

export default ProductList;