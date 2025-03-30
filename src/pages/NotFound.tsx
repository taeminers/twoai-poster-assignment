import React from "react";

const NotFound: React.FC = () => {
  return (
    <div className="text-center">
      <h2 className="text-3xl font-bold text-gray-900">404 - Page Not Found</h2>
      <p className="mt-4 text-gray-600">
        The page you're looking for doesn't exist.
      </p>
    </div>
  );
};

export default NotFound;
