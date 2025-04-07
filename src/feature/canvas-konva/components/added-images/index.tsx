import { Dispatch, SetStateAction } from 'react';
import { Layer } from 'react-konva';

import { useEditPoster } from '@/feature/poster-customization/context/use-edit-poster';

import { Photo } from '../../context/add-photo-context';
import { useAddPhoto } from '../../context/use-add-photo';
import { CanvasPhoto } from '../canvas-photo';

interface AddedImagesProps {
  dimensions: { width: number; height: number };
  selectedId: string | null;
  setSelectedId: Dispatch<SetStateAction<string | null>>;
}

export const AddedImages = ({
  dimensions,
  selectedId,
  setSelectedId,
}: AddedImagesProps) => {
  const { selectedPhoto, setSelectedPhoto } = useAddPhoto();
  const { isEditMode } = useEditPoster();
  const handlePhotoChange = (photoId: string, newAttrs: Partial<Photo>) => {
    if (selectedPhoto) {
      const updatedPhotos = selectedPhoto.map((photo) =>
        photo.id === photoId ? { ...photo, ...newAttrs } : photo,
      );
      setSelectedPhoto(updatedPhotos);
    }
  };
  return (
    <Layer>
      {selectedPhoto?.map((photo) => (
        <CanvasPhoto
          key={photo.id}
          id={photo.id}
          photoUrl={photo.url}
          width={photo.width || dimensions.width / 4}
          height={photo.height || dimensions.height / 4}
          x={photo.x}
          y={photo.y}
          draggable={isEditMode}
          isSelected={photo.id === selectedId}
          onSelect={() => setSelectedId(photo.id)}
          onChange={(newAttrs) => handlePhotoChange(photo.id, newAttrs)}
        />
      ))}
    </Layer>
  );
};
