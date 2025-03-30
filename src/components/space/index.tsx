import React from "react";

interface SpaceProps {
  height?: number | string;
  className?: string;
}

/**
 * Space component for adding vertical spacing between elements
 *
 * @param height - The height of the space in pixels or any valid CSS unit (default: 16px)
 * @param className - Additional CSS class names
 * @returns A space component with the specified height
 */
const Space: React.FC<SpaceProps> = ({ height = 16, className = "" }) => {
  // Convert number to pixel value, or use as is if it's a string
  const heightValue = typeof height === "number" ? `${height}px` : height;

  return (
    <div
      className={`space ${className}`}
      style={{ height: heightValue }}
      aria-hidden="true"
    />
  );
};

export default Space;
