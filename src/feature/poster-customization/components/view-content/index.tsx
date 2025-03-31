import { usePosterData } from '@/feature/poster-customization/hooks/use-poster-data';
import mockdata_teams from '@/mockdata/mockdata-teams';
import './styles.scss';
export const ViewContent = () => {
  const { game } = usePosterData();
  const firstTeam = mockdata_teams.find((team) => team.name === game?.teamA);
  const secondTeam = mockdata_teams.find((team) => team.name === game?.teamB);
  return (
    <div className="view-content">
      <div className="view-content__players">
        {firstTeam?.players.map((player) => <h3>{player.name}</h3>)}
      </div>
      <div className="view-content__players">
        {secondTeam?.players.map((player) => <h3>{player.name}</h3>)}
      </div>
    </div>
  );
};
