import React from 'react';

import './custom-button.styles.scss';

const CustomButton = ({ children, properties, ...otherProps }) => (
  <button
    className={`
      ${properties}
      custom-button
    `}
    { ...otherProps }
  >
    { children }
  </button>
);

export default CustomButton;