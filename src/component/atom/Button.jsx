/** @jsxImportSource @emotion/react */

const optType = {
  default: {
    background: '#fff',
    color: 'rgb(36, 41, 47)',
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

const cssButtonDefault = () => {
  return css({
    borderRadius: '4px',
  });
};

const Button = ({ label, onClick, size = 'md', type = 'default' }) => {
  const cssButtonOptional = () => {
    return css({
      ...optSize[size],
      ...optType[type],
    });
  };

  return (
    <button onClick={onClick} css={[cssButtonDefault, cssButtonOptional]}>
      {label}
    </button>
  );
};

export default Button;
