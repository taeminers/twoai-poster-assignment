import { Layer } from 'react-konva';

import { usePosterContent } from '@/feature/poster-customization/context/use-poster-content';

import { Dimensions } from '../../hooks/use-update-dimensions';
import { CanvasPhoto } from '../canvas-photo';

interface CanvasBackgroundProps {
  dimensions: Dimensions;
}

export const CanvasBackground = ({ dimensions }: CanvasBackgroundProps) => {
  const { posterData } = usePosterContent();
  return (
    <Layer>
      <CanvasPhoto
        id="background"
        photoUrl={posterData.backgroundImage}
        width={dimensions.width}
        height={dimensions.height}
        draggable={false}
      />
    </Layer>
  );
};
