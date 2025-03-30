import "./styles.scss";
import mockData from "@/mockdata/mockData";
import { GameCard } from "../GameCard";
import Space from "@/components/space";
import { useGameActions, useGameState } from "@/context/useSelectGame";
export const GameList = () => {
  const { selectedGame } = useGameState();
  const { setSelectedGame } = useGameActions();
  // wrap gamecard with div to handle context api re-rendering issue.
  return (
    <>
      <Space height={20} />
      <div className="game-list">
        {mockData.map((game) => (
          <div onClick={() => setSelectedGame(game)} key={game.id}>
            <GameCard {...game} isSelected={selectedGame?.id === game.id} />
          </div>
        ))}
      </div>
      <Space height={20} />
    </>
  );
};
