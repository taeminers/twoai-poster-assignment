import { createContext, useState } from 'react';
import { Dispatch, SetStateAction } from 'react';

import { Team } from '@/mockdata/mockdata-teams';
import mockdata_teams from '@/mockdata/mockdata-teams';

import { usePosterData } from '../hooks/use-poster-data';

export interface PosterData {
  teamA: Team;
  teamB: Team;
  venue: string;
  date: string;
  backgroundImage: string;
}
/*
 ** - would definitely use a state management library like zustand or redux as
 ** - lots of small state changes happen here.
 ** - would use zustand for selective subscriptions, and cleaner separation of concerns
 ** - but for now, just use context API. Context is getting a bit too big, but usable.
 */

/*
 ** - 1. Click a field -> handleTextClick -> Sets up Editing State
 ** - 2. Type Changes -> handleInputChange -> Updates Temp Value
 ** - 3. Click Save -> handleSaveEdit -> Updates Actual Poster Data
 ** - 4. Click Cancel -> handleCancelEdit -> Clears Editing State
 */
interface PosterContentContextType {
  posterData: PosterData;
  setPosterData: Dispatch<SetStateAction<PosterData>>;
}

export const PosterContentContext =
  createContext<PosterContentContextType | null>(null);

export const PosterContentProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const { game } = usePosterData();
  const firstTeam = mockdata_teams.find((team) => team.name === game?.teamA);
  const secondTeam = mockdata_teams.find((team) => team.name === game?.teamB);
  if (!firstTeam || !secondTeam || !game?.venue || !game?.date) {
    return null;
  }

  const [posterData, setPosterData] = useState<PosterData>({
    teamA: firstTeam,
    teamB: secondTeam,
    venue: game?.venue,
    date: game?.date,
    backgroundImage: game?.photo,
  });
  return (
    <PosterContentContext.Provider
      value={{
        posterData,
        setPosterData,
      }}
    >
      {children}
    </PosterContentContext.Provider>
  );
};
