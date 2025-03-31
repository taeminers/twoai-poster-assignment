import { Game } from '@/mockdata/mockdata-games';
import mockdata_teams from '@/mockdata/mockdata-teams';

import './styles.scss';
import { DownloadButton } from '../download-button';
import { PosterContent } from '../poster-content';

import Space from '@/components/space';

/*
/ * - handles data for the preview, and edit button
*/
export const TemplatePreview = ({ teamA, teamB, date, venue }: Game) => {
  // get teamA and teamB from mockdata_teams
  const firstTeam = mockdata_teams.find((team) => team.name === teamA);
  const secondTeam = mockdata_teams.find((team) => team.name === teamB);
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
