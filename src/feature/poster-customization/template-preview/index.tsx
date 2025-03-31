import { Game } from '@/mockdata/mockdata-games';
import mockData_teams from '@/mockdata/mockdata-teams';

import './styles.scss';
import { DownloadButton } from '../download-button';
import { PosterContent } from '../poster-content';

import Space from '@/components/space';

/*
/ * - handles data for the preview, and edit button
*/
export const TemplatePreview = ({ teamA, teamB, date, venue }: Game) => {
  // get teamA and teamB from mockData_teams
  const firstTeam = mockData_teams.find((team) => team.name === teamA);
  const secondTeam = mockData_teams.find((team) => team.name === teamB);
  return (
    <>
      <Space height={50} />
      <div className="preview">
        <PosterContent />
        <DownloadButton />
      </div>
    </>
  );
};
