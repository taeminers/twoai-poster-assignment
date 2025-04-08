import { Layer } from 'react-konva';

import { Dimensions } from '@/feature/canvas-konva/hooks/use-update-dimensions';
import { useEditPoster } from '@/feature/poster-customization/context/use-edit-poster';
import { usePosterContent } from '@/feature/poster-customization/context/use-poster-content';

import { CanvasText } from '../canvas-text';

interface CanvasEditContentProps {
  dimensions: Dimensions;
}
/*
 ** - The canvas layer with text elements. Teams, slogans, date, venue, players.
 ** - First assignment didn't have criteria for dynamically adding photos, so this component was used to add text elements
 */
export const CanvasEditContent = ({ dimensions }: CanvasEditContentProps) => {
  const { posterData, setPosterData } = usePosterContent();
  const { isEditMode } = useEditPoster();
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
        isEditMode={isEditMode}
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
        isEditMode={isEditMode}
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
        isEditMode={isEditMode}
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
        isEditMode={isEditMode}
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
        isEditMode={isEditMode}
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
        isEditMode={isEditMode}
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
          isEditMode={isEditMode}
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
          isEditMode={isEditMode}
        />
      ))}
    </Layer>
  );
};
