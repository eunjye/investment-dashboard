/** @jsxImportSource @emotion/react */

import { css } from "@emotion/react";

const optSize = {
  sm: {
    fontSize: '12px',
    padding: '3px 12px',
  },
  md: {
    fontSize: '14px',
    padding: '5px 16px',
  },
  lg: {
    fontSize: '16px',
    padding: '9px 20px',
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
