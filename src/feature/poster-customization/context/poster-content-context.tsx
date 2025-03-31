import { ChangeEvent, createContext, useState } from 'react';
import { Dispatch, SetStateAction } from 'react';

import { Team } from '@/mockdata/mockdata-teams';
import mockdata_teams from '@/mockdata/mockdata-teams';

import { usePosterData } from '../hooks/use-poster-data';

export interface PosterData {
  teamA: Team;
  teamB: Team;
  venue: string;
  date: string;
}

interface PosterContentContextType {
  posterData: PosterData;
  setPosterData: Dispatch<SetStateAction<PosterData>>;
  tempValue: string;
  setTempValue: Dispatch<SetStateAction<string>>;
  editingField: keyof PosterData | null;
  setEditingField: Dispatch<SetStateAction<keyof PosterData | null>>;
  handleTextClick: (field: keyof PosterData) => void;
  handleInputChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleSaveEdit: () => void;
  handleCancelEdit: () => void;
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
  const [tempValue, setTempValue] = useState<string>('');
  const [editingField, setEditingField] = useState<keyof PosterData | null>(
    null,
  );
  const handleTextClick = (field: keyof PosterData) => {
    setEditingField(field);
    setTempValue(String(posterData[field]));
  };
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTempValue(e.target.value);
  };
  const handleSaveEdit = () => {
    if (editingField) {
      setPosterData({
        ...posterData,
        [editingField]: tempValue,
      });
      setEditingField(null);
    }
  };
  const handleCancelEdit = () => {
    setEditingField(null);
  };
  const [posterData, setPosterData] = useState<PosterData>({
    teamA: firstTeam,
    teamB: secondTeam,
    venue: game?.venue,
    date: game?.date,
  });
  return (
    <PosterContentContext.Provider
      value={{
        posterData,
        setPosterData,
        tempValue,
        setTempValue,
        editingField,
        setEditingField,
        handleTextClick,
        handleInputChange,
        handleSaveEdit,
        handleCancelEdit,
      }}
    >
      {children}
    </PosterContentContext.Provider>
  );
};
