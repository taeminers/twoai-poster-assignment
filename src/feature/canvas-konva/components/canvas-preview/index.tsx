import { Layer, Text } from 'react-konva';

import { Dimensions } from '@/feature/canvas-konva/hooks/use-update-dimensions';
import { PosterData } from '@/feature/poster-customization/context/poster-content-context';

interface CanvasPreviewProps {
  dimensions: Dimensions;
  posterData: PosterData;
}

export const CanvasPreview = ({
  dimensions,
  posterData,
}: CanvasPreviewProps) => {
  return (
    <Layer>
      <Text
        text={posterData.venue}
        x={dimensions.width / 2 - 100}
        y={dimensions.height / 2 - 200}
        fontSize={25}
        fill="white"
        draggable={true}
      />
      <Text
        text={posterData.date}
        x={dimensions.width / 2 - 100}
        y={dimensions.height / 2 - 150}
        fontSize={25}
        fill="white"
      />
      <Text
        text={posterData.teamA.name}
        x={dimensions.width / 2 - 200}
        y={dimensions.height / 2 - 100}
        fontSize={25}
        fill="white"
        draggable={true}
      />
      <Text
        text={posterData.teamB.name}
        x={dimensions.width / 2 + 50}
        y={dimensions.height / 2 - 100}
        fontSize={25}
        fill="white"
        draggable={true}
      />
      <Text
        text={posterData.teamA.slogan}
        x={dimensions.width / 2 - 200}
        y={dimensions.height / 2 - 50}
        fontSize={25}
        fill="white"
        draggable={true}
      />
      <Text
        text={posterData.teamB.slogan}
        x={dimensions.width / 2 + 50}
        y={dimensions.height / 2 - 50}
        fontSize={25}
        fill="white"
        draggable={true}
      />
      {posterData.teamA.players.map((player, index) => (
        <Text
          key={player.id}
          text={player.name}
          x={dimensions.width / 2 - 200}
          y={dimensions.height / 2 + index * 30}
          fontSize={20}
          fill="white"
          draggable={true}
        />
      ))}
      {posterData.teamB.players.map((player, index) => (
        <Text
          key={player.id}
          text={player.name}
          x={dimensions.width / 2 + 50}
          y={dimensions.height / 2 + index * 30}
          fontSize={20}
          fill="white"
          draggable={true}
        />
      ))}
    </Layer>
  );
};
