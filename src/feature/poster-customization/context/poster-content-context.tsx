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
  // tempValue is used to store the value of the input field when it is being edited
  const [tempValue, setTempValue] = useState<string>('');
  // editingField is used to track which field is being edited
  const [editingField, setEditingField] = useState<string | null>(null);
  // set which field is being edited and the value of the field. Copies current value to the tempvalue
  const handleTextClick = (field: string) => {
    setEditingField(field);
    setTempValue(String(getFieldValue(posterData, field)));
  };
  // updates the temp value as we type
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTempValue(e.target.value);
  };
  // update the actual poster data with the tempvalue(the value being typed). Then clears the editing state.
  const handleSaveEdit = () => {
    if (editingField) {
      setPosterData((prev) => setFieldValue(prev, editingField, tempValue));
      setEditingField(null);
    }
  };

  // cancels the edit and clears the editing state
  const handleCancelEdit = () => {
    setEditingField(null);
  };
  const [posterData, setPosterData] = useState<PosterData>({
    teamA: firstTeam,
    teamB: secondTeam,
    venue: game?.venue,
    date: game?.date,
    backgroundImage: '',
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
