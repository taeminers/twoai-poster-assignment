import { useEffect, useRef } from 'react';
import { Image, Transformer } from 'react-konva';
import useImage from 'use-image';

interface CanvasPhotoProps {
  id: string;
  photoUrl: string;
  width?: number;
  height?: number;
  x?: number;
  y?: number;
  draggable?: boolean;
  isSelected?: boolean;
  onSelect?: () => void;
  onChange?: (attrs: any) => void;
}

export const CanvasPhoto = ({
  id,
  photoUrl,
  width = 100,
  height = 100,
  x = 0,
  y = 0,
  draggable = true,
  isSelected = false,
  onSelect,
  onChange,
}: CanvasPhotoProps) => {
  const [image] = useImage(photoUrl, 'anonymous');
  const imageRef = useRef<any>(null);
  const trRef = useRef<any>(null);

  useEffect(() => {
    if (isSelected) {
      trRef.current.nodes([imageRef.current]);
    }
  }, [isSelected]);

  if (!image) return null;
  console.log('isSelected', isSelected);
  return (
    <>
      <Image
        id={id}
        ref={imageRef}
        x={x}
        y={y}
        width={width}
        height={height}
        image={image}
        fillPatternScaleX={width / image.width}
        fillPatternScaleY={height / image.height}
        draggable={draggable}
        onClick={onSelect}
        onTap={onSelect}
        onDragEnd={(e) => {
          onChange?.({
            x: e.target.x(),
            y: e.target.y(),
            width: e.target.width(),
            height: e.target.height(),
          });
        }}
        onTransformEnd={() => {
          const node = imageRef.current;
          const scaleX = node.scaleX();
          const scaleY = node.scaleY();

          // Reset scale
          node.scaleX(1);
          node.scaleY(1);

          onChange?.({
            x: node.x(),
            y: node.y(),
            width: Math.max(50, node.width() * scaleX),
            height: Math.max(50, node.height() * scaleY),
          });
        }}
      />
      {isSelected && (
        <Transformer
          ref={trRef}
          boundBoxFunc={(oldBox, newBox) => {
            // Limit resize
            if (newBox.width < 50 || newBox.height < 50) {
              return oldBox;
            }
            return newBox;
          }}
        />
      )}
    </>
  );
};
