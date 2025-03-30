import { Button } from "@/components/button";
import { useSelectGame } from "@/context/useSelectGame";
export const SelectButton = () => {
  const { selectedGame } = useSelectGame();
  return (
    <Button fixed={true} disabled={!selectedGame}>
      Select Game
    </Button>
  );
};
