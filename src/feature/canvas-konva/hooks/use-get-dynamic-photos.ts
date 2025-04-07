import { useState } from 'react';

import { api } from '@/feature/select-game/hooks/use-get-photos';

export const useGetDynamicPhotos = () => {
  const [photoData, setPhotoData] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const getPhotos = async (searchQuery: string) => {
    if (!searchQuery) {
      setError('Please enter a search term');
      return;
    }

    setIsLoading(true);
    setError(null);

    try {
      const result = await api.search.getPhotos({
        query: searchQuery,
        orientation: 'landscape',
        perPage: 1,
      });
      setPhotoData(result.response?.results);
    } catch (err) {
      setError('Failed to fetch photos. Please try again.');
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  return { photoData, getPhotos, isLoading, error };
};
