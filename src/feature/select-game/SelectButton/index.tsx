import { Button } from "@/components/button";
import { useGameState } from "@/context/useSelectGame";
import { useNavigate } from "react-router-dom";
export const SelectButton = () => {
  const { selectedGame } = useGameState();
  const navigate = useNavigate();
  const selectHandler = () => {
    navigate(`/poster?gameId=${selectedGame?.id}`);
  };
  return (
    <Button fixed={true} disabled={!selectedGame} onClick={selectHandler}>
      Select Game
    </Button>
  );
};
