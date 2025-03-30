import { useContext } from "react";
import { GameStateContext, GameActionContext } from "./SelectGameContext";

export const useGameState = () => {
  const context = useContext(GameStateContext);
  if (!context) {
    throw new Error("useGameState must be used within a SelectGameProvider");
  }
  return context;
};

export const useGameActions = () => {
  const context = useContext(GameActionContext);
  if (!context) {
    throw new Error("useGameActions must be used within a SelectGameProvider");
  }
  return context;
};
