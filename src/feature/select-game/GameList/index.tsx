import "./styles.scss";
import mockData, { Game } from "@/mockdata/mockData";
import { GameCard } from "../GameCard";
import Space from "@/components/space";
import { useGameActions, useGameState } from "@/context/useSelectGame";
import { useSyncSelectedGameToSearchParams } from "@/feature/select-game/hooks/useSyncSelectSearchParams";

/**
 * Make sure GameCard component does not render because of context API
 * putting div around gamecard to handle context API re-rendering issue.
 * click again to unselect
 */
export const GameList = () => {
  const { selectedGame } = useGameState();
  const { setSelectedGame } = useGameActions();

  const selectGameHandler = (game: Game) => {
    setSelectedGame((prev) => (prev?.id === game.id ? null : game));
  };

  useSyncSelectedGameToSearchParams(); // keeps side effects out of component body
  // console.log("gamelistrender");

  return (
    <>
      <Space height={20} />
      <div className="game-list">
        {mockData.map((game) => (
          <div onClick={() => selectGameHandler(game)} key={game.id}>
            <GameCard {...game} isSelected={selectedGame?.id === game.id} />
          </div>
        ))}
      </div>
      <Space height={20} />
    </>
  );
};
