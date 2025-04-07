import React, { ButtonHTMLAttributes, ReactNode } from 'react';
import './styles.scss';

export type ButtonSize = 'small' | 'medium' | 'large';
export type ButtonVariant = 'primary' | 'secondary';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * Button content
   */
  children: ReactNode;

  /**
   * Button size
   * @default 'medium'
   */
  size?: ButtonSize;

  /**
   * Button variant
   * @default 'primary'
   */
  variant?: ButtonVariant;

  /**
   * Full width button
   * @default false
   */
  fullWidth?: boolean;

  /**
   * Fixed to bottom of screen
   * @default false
   */
  fixed?: boolean;

  /**
   * Disabled state
   * @default false
   */
  disabled?: boolean;

  /**
   * Loading state
   * @default false
   */
  isLoading?: boolean;

  /**
   * Icon to display before the button text
   */
  startIcon?: ReactNode;

  /**
   * Icon to display after the button text
   */
  endIcon?: ReactNode;

  /**
   * Additional class name
   */
  className?: string;

  /**
   * Button type
   * @default 'button'
   */
  type?: 'button' | 'submit' | 'reset';
}

/**
 * Button component that follows SOLID principles
 * - Single Responsibility: Only handles button rendering and behavior
 * - Open/Closed: Extensible through props without modifying the component
 * - Liskov Substitution: Can be used anywhere a standard button is used
 * - Interface Segregation: Props are specific to button functionality
 * - Dependency Inversion: Relies on abstractions (props) not concrete implementations
 */
export const Button: React.FC<ButtonProps> = ({
  children,
  size = 'medium',
  variant = 'primary',
  fullWidth = false,
  fixed = false,
  disabled = false,
  isLoading = false,
  startIcon,
  endIcon,
  className = '',
  type = 'button',
  ...restProps
}) => {
  const buttonClasses = [
    'button',
    `button--${size}`,
    `button--${variant}`,
    fullWidth ? 'button--full-width' : '',
    fixed ? 'button--fixed' : '',
    isLoading ? 'button--loading' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <button
      className={buttonClasses}
      disabled={disabled || isLoading}
      type={type}
      {...restProps}
    >
      {isLoading && <span className="button__loader" />}

      {startIcon && (
        <span className="button__icon button__icon--start">{startIcon}</span>
      )}

      <span className="button__text">{children}</span>

      {endIcon && (
        <span className="button__icon button__icon--end">{endIcon}</span>
      )}
    </button>
  );
};
