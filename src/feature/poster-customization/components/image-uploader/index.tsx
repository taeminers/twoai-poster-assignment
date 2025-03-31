import { ChangeEvent, useRef } from 'react';

import './styles.scss';
import { UploadPhoto } from '@/components/icons/upload-photo';
import { usePosterContent } from '@/feature/poster-customization/context/use-poster-content';

export const ImageUploader = ({ isEditMode }: { isEditMode: boolean }) => {
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const { posterData, setPosterData } = usePosterContent();
  const handleClick = () => {
    fileInputRef.current?.click();
  };
  const handleBackgroundChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        if (e.target?.result) {
          setPosterData({
            ...posterData,
            backgroundImage: e.target.result as string,
          });
        }
      };
      reader.readAsDataURL(file);
    }
  };
  return (
    <>
      {isEditMode && (
        <div onClick={handleClick} className="image-uploader__icon">
          <UploadPhoto />
        </div>
      )}
      <input
        ref={fileInputRef}
        type="file"
        className="image-uploader__input"
        accept="image/*"
        onChange={handleBackgroundChange}
      />
    </>
  );
};
