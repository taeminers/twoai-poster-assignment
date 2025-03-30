import { useContext } from "react";
import { SelectGameContext } from "./SelectGameContext";

export const useSelectGame = () => {
  const context = useContext(SelectGameContext);
  if (!context)
    throw new Error("useSelectGame must be used within a SelectGameProvider");
  return context;
};
