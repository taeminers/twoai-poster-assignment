/*
 ** -1. Get user input to search for images
 ** -2. Return images from the API and put it on canvas
 */

import { useEffect, useState } from 'react';

import { Button } from '@/components/button';
import Space from '@/components/space';

import { useAddPhoto } from '../../context/use-add-photo';
import { useGetDynamicPhotos } from '../../hooks/use-get-dynamic-photos';

import './styles.scss';

/*
 ** - Not part of the canvas.
 ** - Get user input to search for images
 ** - Return images from the API and handle the selection of the image through context
 */
export const GetDynamicImages = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [localSelectedPhoto, setLocalSelectedPhoto] = useState<any>(null);
  const { photo, setPhoto, selectedPhoto, setSelectedPhoto } = useAddPhoto();
  const { photoData, getPhotos, isLoading } = useGetDynamicPhotos();
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    getPhotos(searchQuery);
  };

  useEffect(() => {
    if (photoData && photoData.length > 0) {
      setPhoto([
        ...photo,
        ...photoData.map((photo: any) => ({
          id: photo.id,
          url: photo.urls.regular,
        })),
      ]);
    }
  }, [photoData]);

  const handleInsertPhoto = () => {
    if (localSelectedPhoto) {
      setSelectedPhoto([...(selectedPhoto || []), localSelectedPhoto]);
    }
  };

  return (
    <div>
      <form onSubmit={handleSearch} className="dynamic-images__form">
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search for images..."
          disabled={isLoading}
        />
        <Button type="submit" disabled={isLoading} size="small">
          {isLoading ? 'Searching...' : 'Search'}
        </Button>
        <Button
          size="small"
          variant="secondary"
          disabled={localSelectedPhoto === null}
          onClick={handleInsertPhoto}
        >
          Insert Photo
        </Button>
      </form>
      <Space height={10} />
      <div className="dynamic-images__container">
        {photo?.map((photo: any) => (
          <div
            key={photo.id}
            onClick={() => setLocalSelectedPhoto(photo)}
            className={`dynamic-images__picture ${
              localSelectedPhoto?.id === photo.id
                ? 'dynamic-images__picture--selected'
                : ''
            }`}
          >
            <img src={photo.url} alt={photo.url} width={100} height={100} />
          </div>
        ))}
      </div>
    </div>
  );
};
