import { useRef } from 'react';

import './styles.scss';
import { UploadPhoto } from '@/components/icons/upload-photo';

export const ImageUploader = ({ isEditMode }: { isEditMode: boolean }) => {
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const handleClick = () => {
    fileInputRef.current?.click();
  };
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      console.log(file);
    }
  };
  return (
    <>
      {isEditMode && <UploadPhoto className="image-uploader__icon" />}
      <input type="file" className="image-uploader__input" accept="image/*" />
    </>
  );
};
