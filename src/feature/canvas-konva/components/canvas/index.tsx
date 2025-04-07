import { useRef } from 'react';
import { Layer, Stage } from 'react-konva';

import { ImageUploader } from '@/feature/poster-customization/components/image-uploader';
import { usePosterContent } from '@/feature/poster-customization/context/use-poster-content';
import { useDownloadPoster } from '@/feature/poster-download/context/use-download-poster';

import { useUpdateDimensions } from '../../hooks/use-update-dimensions';
import { CanvasEditContent } from '../canvas-edit-content';
import { CanvasPhoto } from '../canvas-photo';
import './styles.scss';
import { GetDynamicImages } from '../get-dynamic-images';

/*
 ** - 1. Canvas element for the poster using konva
 ** - 2. Custom Text element for edit as konva does not support native text component for editing
 */

export const Canvas = () => {
  // set up initial canvas
  const { posterRef } = useDownloadPoster(); // used for downloading canvas
  const containerRef = useRef<HTMLDivElement>(null); // used for updating dimensions
  const dimensions = useUpdateDimensions(containerRef); // used for updating dimensions
  const { posterData } = usePosterContent(); // used for getting poster data
  return (
    <div ref={containerRef} className="canvas__container">
      <GetDynamicImages />
      <ImageUploader />
      <Stage
        width={dimensions.width}
        height={dimensions.height}
        ref={(node) => {
          posterRef.current = node;
        }}
      >
        <Layer>
          <CanvasPhoto
            photoUrl={posterData.backgroundImage}
            width={dimensions.width}
            height={dimensions.height}
            draggable={false}
          />
        </Layer>
        <CanvasEditContent dimensions={dimensions} posterData={posterData} />
      </Stage>
    </div>
  );
};
