import { Game } from "@/mockdata/mockData";
import { createContext, useState } from "react";

interface SelectGameContextType {
  gameSelect: (game: Game) => void;
  selectedGame: Game | null;
}

export const SelectGameContext = createContext<SelectGameContextType | null>(
  null
);

export const SelectGameProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [selectedGame, setSelectedGame] = useState<Game | null>(null);
  const gameSelect = (game: Game) => setSelectedGame(game);
  return (
    <SelectGameContext.Provider value={{ gameSelect, selectedGame }}>
      {children}
    </SelectGameContext.Provider>
  );
};
