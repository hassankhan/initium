import * as React from 'react';

import './styles.css';

interface ButtonProps {
  children?: React.ReactNode;
  color?: string;
  inline?: boolean;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const Button: React.SFC<ButtonProps> = (props) => {

  let className = `button button--${props.color} `;
  className += props.inline
    ? 'button--inline'
    : '';

  return (
    <button className={className} onClick={props.onClick}>{props.children}</button>
  );
}

Button.defaultProps = {
  color: 'white',
  inline: false,
};

export default Button;
