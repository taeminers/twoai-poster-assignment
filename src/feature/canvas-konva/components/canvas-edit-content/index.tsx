import { Layer } from 'react-konva';

import { Dimensions } from '@/feature/canvas-konva/hooks/use-update-dimensions';
import { PosterData } from '@/feature/poster-customization/context/poster-content-context';
import { usePosterContent } from '@/feature/poster-customization/context/use-poster-content';

import { CanvasText } from '../canvas-text';

interface CanvasEditContentProps {
  dimensions: Dimensions;
  posterData: PosterData;
}

export const CanvasEditContent = ({
  dimensions,
  posterData,
}: CanvasEditContentProps) => {
  const { setPosterData } = usePosterContent();
  return (
    <Layer>
      <CanvasText
        text={posterData.venue}
        x={dimensions.width / 2 - 100}
        y={dimensions.height / 2 - 200}
        fontSize={25}
        fill="white"
        draggable={true}
        onTextChange={(text) => {
          setPosterData({ ...posterData, venue: text });
        }}
      />
      <CanvasText
        text={posterData.date}
        x={dimensions.width / 2 - 100}
        y={dimensions.height / 2 - 150}
        fontSize={25}
        fill="white"
        draggable={true}
        onTextChange={(text) => {
          setPosterData({ ...posterData, date: text });
        }}
      />
      <CanvasText
        text={posterData.teamA.name}
        x={dimensions.width / 2 - 200}
        y={dimensions.height / 2 - 100}
        fontSize={25}
        fill="white"
        draggable={true}
        onTextChange={(text) => {
          setPosterData({
            ...posterData,
            teamA: { ...posterData.teamA, name: text },
          });
        }}
      />
      <CanvasText
        text={posterData.teamB.name}
        x={dimensions.width / 2 + 50}
        y={dimensions.height / 2 - 100}
        fontSize={25}
        fill="white"
        draggable={true}
        onTextChange={(text) => {
          setPosterData({
            ...posterData,
            teamB: { ...posterData.teamB, name: text },
          });
        }}
      />
      <CanvasText
        text={posterData.teamA.slogan}
        x={dimensions.width / 2 - 200}
        y={dimensions.height / 2 - 50}
        fontSize={25}
        fill="white"
        draggable={true}
        onTextChange={(text) => {
          setPosterData({
            ...posterData,
            teamA: { ...posterData.teamA, slogan: text },
          });
        }}
      />
      <CanvasText
        text={posterData.teamB.slogan}
        x={dimensions.width / 2 + 50}
        y={dimensions.height / 2 - 50}
        fontSize={25}
        fill="white"
        draggable={true}
        onTextChange={(text) => {
          setPosterData({
            ...posterData,
            teamB: { ...posterData.teamB, slogan: text },
          });
        }}
      />
      {posterData.teamA.players.map((player, index) => (
        <CanvasText
          key={player.id}
          text={player.name}
          x={dimensions.width / 2 - 200}
          y={dimensions.height / 2 + index * 30}
          fontSize={20}
          fill="white"
          draggable={true}
          onTextChange={(text) => {
            setPosterData({
              ...posterData,
              teamA: {
                ...posterData.teamA,
                players: posterData.teamA.players.map((p) =>
                  p.id === player.id ? { ...p, name: text } : p,
                ),
              },
            });
          }}
        />
      ))}
      {posterData.teamB.players.map((player, index) => (
        <CanvasText
          key={player.id}
          text={player.name}
          x={dimensions.width / 2 + 50}
          y={dimensions.height / 2 + index * 30}
          fontSize={20}
          fill="white"
          draggable={true}
          onTextChange={(text) => {
            setPosterData({
              ...posterData,
              teamB: {
                ...posterData.teamB,
                players: posterData.teamB.players.map((p) =>
                  p.id === player.id ? { ...p, name: text } : p,
                ),
              },
            });
          }}
        />
      ))}
    </Layer>
  );
};
