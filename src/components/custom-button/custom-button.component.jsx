import React from 'react';

import './custom-button.styles.scss';

const CustomButton = ({ children, properties, ...otherProps }) => (
  <button
    className={`
      ${properties}
    `}
    { ...otherProps }
  >
    { children }
  </button>
);

export default CustomButton;