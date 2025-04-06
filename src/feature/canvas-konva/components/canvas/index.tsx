import { useEffect, useRef, useState } from 'react';
import { Layer, Rect, Stage } from 'react-konva';
import useImage from 'use-image';

import { ImageUploader } from '@/feature/poster-customization/components/image-uploader';
import { useEditPoster } from '@/feature/poster-customization/context/use-edit-poster';
import { usePosterContent } from '@/feature/poster-customization/context/use-poster-content';
import { useDownloadPoster } from '@/feature/poster-download/context/use-download-poster';

import { useUpdateDimensions } from '../../hooks/use-update-dimensions';
import { CanvasEditContent } from '../canvas-edit-content';
import { CanvasPreview } from '../canvas-preview';

import './styles.scss';

/*
 ** - 1. Canvas element for the poster using konva
 ** - 2. Custom Text element for edit as konva does not support native text component for editing
 */

export const Canvas = () => {
  const { posterRef } = useDownloadPoster();
  const containerRef = useRef<HTMLDivElement>(null);
  const dimensions = useUpdateDimensions(containerRef);
  const { posterData } = usePosterContent();
  const [posterBackground] = useImage(posterData.backgroundImage, 'anonymous');
  const [image, setImage] = useState<HTMLImageElement | undefined>(undefined);
  const { isEditMode } = useEditPoster();
  useEffect(() => {
    // set rect layer of background image, and if user uploads a new image, set the image to the new image
    if (posterBackground) {
      setImage(posterBackground);
    }
  }, [posterBackground]);
  return (
    <div ref={containerRef} className="canvas__container">
      <ImageUploader isEditMode={isEditMode} />
      <Stage
        width={dimensions.width}
        height={dimensions.height}
        ref={(node) => {
          posterRef.current = node;
        }}
      >
        <Layer>
          {image && (
            <Rect
              width={dimensions.width}
              height={dimensions.height}
              fillPatternImage={image}
              fillPatternScaleX={dimensions.width / image.width}
              fillPatternScaleY={dimensions.height / image.height}
            />
          )}
        </Layer>
        {isEditMode ? (
          <CanvasEditContent dimensions={dimensions} posterData={posterData} />
        ) : (
          <CanvasPreview dimensions={dimensions} posterData={posterData} />
        )}
      </Stage>
    </div>
  );
};
