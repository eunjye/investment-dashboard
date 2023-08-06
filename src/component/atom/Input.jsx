/** @jsxImportSource @emotion/react */

import { css } from "@emotion/react";

const optSize = {
  sm: {
    fontSize: '12px',
    height: '26px'
  },
  md: {
    fontSize: '14px',
    height: '32px'
  },
  lg: {
    fontSize: '16px',
    height: '40px'
  },
};

const cssInputDefault = () => {
  return css({
    borderRadius: '4px',
    border: '1px solid #444',
  });
};

const Input = ({ type = 'text', placeholder, value, onChange, size = 'md' }) => {
  const cssInputOptional = () => {
    return css({
      ...optSize[size],
    });
  };

  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      css={[cssInputDefault, cssInputOptional]}
    />
  );
};

export default Input;
