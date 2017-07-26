import * as React from 'react';

interface ButtonProps {
  className?: string;
  children?: React.ReactNode;
  color?: string;
  inline?: boolean;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const Button: React.SFC<ButtonProps> = (props) => {

  let className = `button ${props.color ? `button--${props.color}` : ''} `;
  className += props.inline
    ? 'button--inline'
    : '';

  return (
    <button className={`${className} ${props.className}`} onClick={props.onClick}>{props.children}</button>
  );
};

Button.defaultProps = {
  className: '',
  color: '',
  inline: false,
};

export default Button;
