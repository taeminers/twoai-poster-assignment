import { Game } from "@/mockdata/mockData";
import { createContext, useState } from "react";

interface GameStateContextType {
  selectedGame: Game | null;
}

interface GameActionContextType {
  setSelectedGame: (game: Game) => void;
}

export const GameStateContext = createContext<GameStateContextType | null>(
  null
);
export const GameActionContext = createContext<GameActionContextType | null>(
  null
);

export const SelectGameProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [selectedGame, setSelectedGame] = useState<Game | null>(null);

  return (
    <GameStateContext.Provider value={{ selectedGame }}>
      <GameActionContext.Provider value={{ setSelectedGame }}>
        {children}
      </GameActionContext.Provider>
    </GameStateContext.Provider>
  );
};
