import React from 'react';

import './styles.scss';
import { HeaderProps } from './types';

const Header: React.FC<HeaderProps> = ({
  title,
  className = '',
  leftIcon,
  rightIcon,
  onLeftIconClick,
  onRightIconClick,
}) => {
  return (
    <header className={`header ${className}`}>
      <div className="header__container">
        {leftIcon && (
          <div className="header__left-button" onClick={onLeftIconClick}>
            {leftIcon}
          </div>
        )}
        <h2 className="header__title">{title}</h2>
        {rightIcon && (
          <div className="header__right-button" onClick={onRightIconClick}>
            {rightIcon}
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
