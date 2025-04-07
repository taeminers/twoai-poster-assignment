/*
 ** -1. Get user input to search for images
 ** -2. Return images from the API and put it on canvas
 */

import { useState } from 'react';

import { useGetDynamicPhotos } from '../../hooks/use-get-dynamic-photos';

export const GetDynamicImages = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const { photoData, getPhotos, isLoading } = useGetDynamicPhotos();
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    getPhotos(searchQuery);
  };

  return (
    <div>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search for images..."
          disabled={isLoading}
        />
        <button type="submit" disabled={isLoading}>
          {isLoading ? 'Searching...' : 'Search'}
        </button>
      </form>
    </div>
  );
};
