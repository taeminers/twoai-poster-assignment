import { useEffect, useState } from 'react';
import { createApi } from 'unsplash-js';

import mockdata_games from '@/mockdata/mockdata-games';

export const api = createApi({
  accessKey: process.env.REACT_APP_UNSPLASH_ACCESS_KEY || '',
});

export const useGetPhotos = () => {
  // would use proper types if it was a real project. As I only care about the URL, just use any type.
  const [photoData, setPhotoData] = useState<any>(null);
  useEffect(() => {
    // throw new Error('test');
    api.search
      .getPhotos({
        query: 'sports games',
        orientation: 'landscape',
      })
      .then((result) => {
        setPhotoData(result.response?.results);
        mockdata_games.forEach((game, index) => {
          game.photo = result.response?.results[index]?.urls?.regular || '';
        });
      })
      .catch(() => {
        console.log('error');
      });
  }, []);
  return { photoData };
};
