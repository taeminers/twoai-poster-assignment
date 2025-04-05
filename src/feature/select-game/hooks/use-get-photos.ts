import { useEffect, useState } from 'react';
import { createApi } from 'unsplash-js';

const api = createApi({
  accessKey: process.env.REACT_APP_UNSPLASH_ACCESS_KEY || '',
});

export const useGetPhotos = () => {
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
