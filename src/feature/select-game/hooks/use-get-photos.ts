import { useEffect, useState } from 'react';
import { createApi } from 'unsplash-js';

const api = createApi({
  accessKey: process.env.REACT_APP_UNSPLASH_ACCESS_KEY || '',
});

export const useGetPhotos = () => {
  // would use proper types if it was a real project. As I only care about the URL, just use any type.
  const [photoData, setPhotoData] = useState<any>(null);
  useEffect(() => {
    api.search
      .getPhotos({
        query: 'sports games',
        orientation: 'landscape',
      })
      .then((result) => setPhotoData(result.response?.results))
      .catch(() => {
        console.log('error');
      });
  }, []);
  return { photoData };
};
