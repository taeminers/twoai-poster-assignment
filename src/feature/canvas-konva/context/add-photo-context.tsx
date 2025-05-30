import { createContext, SetStateAction, Dispatch, useState } from 'react';

export interface Photo {
  id: string;
  url: string;
  x?: number;
  y?: number;
  width?: number;
  height?: number;
}

interface AddPhotoContextType {
  photo: Photo[];
  setPhoto: Dispatch<SetStateAction<Photo[]>>;
  selectedPhoto: Photo[] | null;
  setSelectedPhoto: Dispatch<SetStateAction<Photo[] | null>>;
}
/*
 ** - Context for adding photos to the canvas
 ** - photo is to store the photos that user has searched for
 ** - selectedPhoto is to store the photos that user has selected and will be used for the canvas
 */
export const AddPhotoContext = createContext<AddPhotoContextType | null>(null);

export const AddPhotoProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [photo, setPhoto] = useState<Photo[]>([]);
  const [selectedPhoto, setSelectedPhoto] = useState<Photo[] | null>(null);
  return (
    <AddPhotoContext.Provider
      value={{ photo, setPhoto, selectedPhoto, setSelectedPhoto }}
    >
      {children}
    </AddPhotoContext.Provider>
  );
};
