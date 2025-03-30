import React, { use } from "react";
import "./styles.scss";
import { HeaderProps } from "./types";
import { useNavigate } from "react-router-dom";

const Header: React.FC<HeaderProps> = ({
  title,
  showBackButton = false,
  className = "",
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
        {showBackButton && (
          <button
            className="header__back-button"
            onClick={handleBackClick}
            aria-label="Go back"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19 12H5M5 12L12 19M5 12L12 5"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        )}
        <h2 className="header__title">{title}</h2>
      </div>
    </header>
  );
};

export default Header;
