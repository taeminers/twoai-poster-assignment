import { useContext } from 'react';

import { AddPhotoContext } from './add-photo-context';

export const useAddPhoto = () => {
  const context = useContext(AddPhotoContext);
  if (!context) {
    throw new Error('useAddPhoto must be used within a AddPhotoProvider');
  }
  return context;
};
