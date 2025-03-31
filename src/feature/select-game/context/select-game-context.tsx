import { createContext, useState, Dispatch, SetStateAction } from 'react';

import { Game } from '@/mockdata/mockdata-games';

interface GameStateContextType {
  selectedGame: Game | null;
  isSelected: boolean;
}

interface GameActionContextType {
  setSelectedGame: Dispatch<SetStateAction<Game | null>>;
}

export const GameStateContext = createContext<GameStateContextType | null>(
  null,
);
export const GameActionContext = createContext<GameActionContextType | null>(
  null,
);

export const SelectGameProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [selectedGame, setSelectedGame] = useState<Game | null>(null);
  const isSelected = selectedGame !== null;
  return (
    <GameStateContext.Provider value={{ selectedGame, isSelected }}>
      <GameActionContext.Provider value={{ setSelectedGame }}>
        {children}
      </GameActionContext.Provider>
    </GameStateContext.Provider>
  );
};
