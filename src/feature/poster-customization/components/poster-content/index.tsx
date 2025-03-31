import './styles.scss';
import { usePosterContent } from '../../context/use-poster-content';
import { PosterText } from '../poster-text';

export const PosterContent = () => {
  const { posterData, editingField } = usePosterContent();
  return (
    <div className="view-content">
      {/* <div className="view-content__players">
        {firstTeam?.players.map((player) => <h3>{player.name}</h3>)}
      </div>
      <div className="view-content__players">
        {secondTeam?.players.map((player) => <h3>{player.name}</h3>)}
      </div> */}
      <PosterText
        text={posterData.teamA.name}
        editingField={editingField}
        field="teamA.name"
      />
      <PosterText
        text={posterData.teamA.players[3].name}
        editingField={editingField}
        field="teamA.players.3.name"
      />
      <PosterText
        text={posterData.teamA.players[0].name}
        editingField={editingField}
        field="teamA.players.0.name"
      />
      <PosterText
        text={posterData.date}
        editingField={editingField}
        field="date"
      />
      <PosterText
        text={posterData.venue}
        editingField={editingField}
        field="venue"
      />
    </div>
  );
};
