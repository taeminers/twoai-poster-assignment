import { ChangeEvent, createContext, useState } from 'react';
import { Dispatch, SetStateAction } from 'react';

import { Team } from '@/mockdata/mockdata-teams';
import mockdata_teams from '@/mockdata/mockdata-teams';

import { getFieldValue, setFieldValue } from '../helpers/get-set-field-value';
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
  editingField: string | null;
  setEditingField: Dispatch<SetStateAction<string | null>>;
  handleTextClick: (field: string) => void;
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
  const [editingField, setEditingField] = useState<string | null>(null);
  const handleTextClick = (field: string) => {
    setEditingField(field);
    setTempValue(String(getFieldValue(posterData, field)));
  };
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTempValue(e.target.value);
  };
  const handleSaveEdit = () => {
    if (editingField) {
      setPosterData((prev) => setFieldValue(prev, editingField, tempValue));
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
