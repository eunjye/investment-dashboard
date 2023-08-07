/** @jsxImportSource @emotion/react */

import { css } from '@emotion/react';

const optType = {
  default: {
    background: '#fff',
    color: '#222',
  },
  primary: {
    background: '#ffcc00',
    color: '#222',
  },
  secondary: {
    background: 'blue',
    color: '#fff',
  },
};

const optSize = {
  sm: {
    fontSize: '12px',
    height: '26px',
  },
  md: {
    fontSize: '14px',
    height: '32px',
  },
  lg: {
    fontSize: '16px',
    height: '40px',
  },
};

const cssButtonDefault = () => {
  return css({
    borderRadius: '4px',
    border: '1px solid #444',
    verticalAlign: 'middle',

    '&:disabled': {
      background: '#efefef',
      cursor: 'default',
    },
  });
};

const Button = ({ children, onClick, size = 'md', type = 'default', disabled }) => {
  const buttonProps = disabled ? { disabled: true } : {};
  const cssButtonOptional = () => {
    return css({
      ...optSize[size],
      ...optType[type],
    });
  };

  return (
    <button onClick={onClick} css={[cssButtonDefault, cssButtonOptional]} {...buttonProps}>
      <span>{children}</span>
    </button>
  );
};

export default Button;
