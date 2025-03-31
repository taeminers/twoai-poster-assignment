import React from 'react';

const NotFound: React.FC = () => {
  return (
    <div className="text-center">
      <h2 className="text-3xl font-bold text-gray-900">404 - Page Not Found</h2>
      <p className="mt-4 text-gray-600">
        The page you&apos;re looking for doesn&apos;t exist.
      </p>
    </div>
  );
};

export default NotFound;
