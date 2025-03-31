import './styles.scss';
import { usePosterContent } from '../../context/use-poster-content';

export const PosterContent = () => {
  const {
    posterData,
    editingField,
    tempValue,
    handleInputChange,
    handleSaveEdit,
    handleCancelEdit,
    handleTextClick,
  } = usePosterContent();
  console.log('posterData', posterData);
  return (
    <div className="view-content">
      {/* <div className="view-content__players">
        {firstTeam?.players.map((player) => <h3>{player.name}</h3>)}
      </div>
      <div className="view-content__players">
        {secondTeam?.players.map((player) => <h3>{player.name}</h3>)}
      </div> */}
      {editingField === 'venue' ? (
        <div>
          <input value={tempValue} onChange={handleInputChange} autoFocus />
          <div>
            <button onClick={handleSaveEdit}>save</button>
            <button onClick={handleCancelEdit}>Cancel</button>
          </div>
        </div>
      ) : (
        <div onClick={() => handleTextClick('venue')}>{posterData.venue}</div>
      )}
    </div>
  );
};
