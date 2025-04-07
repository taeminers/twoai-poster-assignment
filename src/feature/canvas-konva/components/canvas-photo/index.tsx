import { Image } from 'react-konva';
import useImage from 'use-image';

interface CanvasPhotoProps {
  photoUrl: string;
  width?: number;
  height?: number;
  draggable?: boolean;
}

export const CanvasPhoto = ({
  photoUrl,
  width = 100,
  height = 100,
  draggable = true,
}: CanvasPhotoProps) => {
  const [image] = useImage(photoUrl, 'anonymous');
  if (!image) return null;
  return (
    <Image
      width={width}
      height={height}
      image={image}
      fillPatternScaleX={width / image.width}
      fillPatternScaleY={height / image.height}
      draggable={draggable}
    />
  );
};
