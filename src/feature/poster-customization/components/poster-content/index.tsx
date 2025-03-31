import './styles.scss';
import { PosterText } from '@/feature/poster-customization/components/poster-text';
import { useEditPoster } from '@/feature/poster-customization/context/use-edit-poster';
import { usePosterContent } from '@/feature/poster-customization/context/use-poster-content';
export const PosterContent = () => {
  const { isEditMode } = useEditPoster();
  const { posterData, editingField } = usePosterContent();
  return (
    <div className="view-content">
      <div className="view-content__top">
        <div className="view-content__date">
          <PosterText
            text={posterData.date}
            editingField={editingField}
            field="date"
            disabled={!isEditMode}
          />
        </div>
        <div className="view-content__team">
          <PosterText
            text={posterData.teamA.name}
            editingField={editingField}
            field="teamA.name"
            disabled={!isEditMode}
          />
          <PosterText
            text={posterData.teamA.slogan}
            editingField={editingField}
            field="teamA.slogan"
            disabled={!isEditMode}
          />
        </div>
        <div className="view-content__team">
          <PosterText
            text={posterData.teamB.name}
            editingField={editingField}
            field="teamB.name"
            disabled={!isEditMode}
          />
          <PosterText
            text={posterData.teamB.slogan}
            editingField={editingField}
            field="teamB.slogan"
            disabled={!isEditMode}
          />
        </div>
      </div>
      <div className="view-content__bottom">
        <div className="view-content__players">
          {posterData.teamA.players.map((player) => (
            <PosterText
              key={player.id}
              text={player.name}
              editingField={editingField}
              field={`teamA.players.${player.id - 1}.name`}
              disabled={!isEditMode}
            />
          ))}
        </div>
        <div className="view-content__players">
          {posterData.teamB.players.map((player) => (
            <PosterText
              key={player.id}
              text={player.name}
              editingField={editingField}
              field={`teamB.players.${player.id - 1}.name`}
              disabled={!isEditMode}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
