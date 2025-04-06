import { useRef } from 'react';
import { Stage } from 'react-konva';
import { useSearchParams } from 'react-router-dom';

import { useEditPoster } from '@/feature/poster-customization/context/use-edit-poster';
import { usePosterContent } from '@/feature/poster-customization/context/use-poster-content';
import { getBackgroundStyle } from '@/feature/poster-customization/helpers/get-background-style';
import mockdata_games from '@/mockdata/mockdata-games';

import { useUpdateDimensions } from '../../hooks/use-update-dimensions';
import { CanvasEditContent } from '../canvas-edit-content';
import { CanvasPreview } from '../canvas-preview';

import './styles.scss';

/*
 ** - 1. Canvas element for the poster using konva
 ** - 2. Custom Text element for edit as konva does not support native text component for editing
 */

export const Canvas = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const dimensions = useUpdateDimensions(containerRef);
  const { posterData } = usePosterContent();
  const [searchParams] = useSearchParams();
  const gameId = searchParams.get('gameId');
  const { isEditMode } = useEditPoster();
  if (!gameId) return null;
  const backgroundStyle = getBackgroundStyle(
    mockdata_games[parseInt(gameId) - 1].photo,
  );

  return (
    <div ref={containerRef} className="canvas__container">
      <Stage
        width={dimensions.width}
        height={dimensions.height}
        style={backgroundStyle}
      >
        {isEditMode ? (
          <CanvasEditContent dimensions={dimensions} posterData={posterData} />
        ) : (
          <CanvasPreview dimensions={dimensions} posterData={posterData} />
        )}
      </Stage>
    </div>
  );
};
