import React from 'react';
import './styles.scss';
import { useNavigate } from 'react-router-dom';

import { HeaderProps } from './types';
/*
 ** - accept elements as buttons
 ** - as lefticon or righticon could be a button, make parent a div(nested button issue)
 */
const Header: React.FC<HeaderProps> = ({
  title,
  className = '',
  leftIcon,
  rightIcon,
}) => {
  const navigate = useNavigate();
  const handleBackClick = (e: React.MouseEvent) => {
    e.preventDefault();
    // navigate to previous page
    navigate(-1);
  };

  return (
    <header className={`header ${className}`}>
      <div className="header__container">
        {leftIcon && (
          <div className="header__left-button" onClick={handleBackClick}>
            {leftIcon}
          </div>
        )}
        <h2 className="header__title">{title}</h2>
        {rightIcon && <div className="header__right-button">{rightIcon}</div>}
      </div>
    </header>
  );
};

export default Header;
