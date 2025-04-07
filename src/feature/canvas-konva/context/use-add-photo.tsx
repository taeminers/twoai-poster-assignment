import * as React from 'react';
import { createContext, useContext, useState } from 'react';

import { Photo } from './add-photo-context';

interface AddPhotoContextType {
  selectedPhoto: Photo[] | null;
  setSelectedPhoto: (photos: Photo[] | null) => void;
  photo: string | null;
  setPhoto: (photo: string | null) => void;
}

const AddPhotoContext = createContext<AddPhotoContextType | null>(null);

export const AddPhotoProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [selectedPhoto, setSelectedPhoto] = useState<Photo[] | null>(null);
  const [photo, setPhoto] = useState<string | null>(null);

  return (
    <AddPhotoContext.Provider
      value={{
        selectedPhoto,
        setSelectedPhoto,
        photo,
        setPhoto,
      }}
    >
      {children}
    </AddPhotoContext.Provider>
  );
};

export const useAddPhoto = () => {
  const context = useContext(AddPhotoContext);
  if (!context) {
    throw new Error('useAddPhoto must be used within an AddPhotoProvider');
  }
  return context;
};
