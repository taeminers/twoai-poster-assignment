import { useRef, useState } from 'react';
import { Layer, Stage } from 'react-konva';

import { ImageUploader } from '@/feature/poster-customization/components/image-uploader';
import { usePosterContent } from '@/feature/poster-customization/context/use-poster-content';
import { useDownloadPoster } from '@/feature/poster-download/context/use-download-poster';

import { useUpdateDimensions } from '../../hooks/use-update-dimensions';
import { AddedImages } from '../added-images';
import { CanvasEditContent } from '../canvas-edit-content';
import { CanvasPhoto } from '../canvas-photo';
import './styles.scss';
import { GetDynamicImages } from '../get-dynamic-images';

/*
 ** - 1. Canvas element for the poster using konva
 ** - 2. Custom Text element for edit as konva does not support native text component for editing
 */

export const Canvas = () => {
  const { posterRef } = useDownloadPoster();
  const containerRef = useRef<HTMLDivElement>(null);
  const dimensions = useUpdateDimensions(containerRef);
  const { posterData } = usePosterContent();
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const checkDeselect = (e: any) => {
    // Check if clicked on background image or stage
    const clickedOnBackground = e.target.attrs.id === 'background';
    const clickedOnStage = e.target === e.target.getStage();
    if (clickedOnBackground || clickedOnStage) {
      setSelectedId(null);
    }
  };

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
        onMouseDown={checkDeselect}
        onTouchStart={checkDeselect}
      >
        <Layer>
          {/* Add background image */}
          <CanvasPhoto
            id="background"
            photoUrl={posterData.backgroundImage}
            width={dimensions.width}
            height={dimensions.height}
            draggable={false}
          />
        </Layer>
        <AddedImages
          dimensions={dimensions}
          selectedId={selectedId}
          setSelectedId={setSelectedId}
        />
        <CanvasEditContent dimensions={dimensions} posterData={posterData} />
      </Stage>
    </div>
  );
};
