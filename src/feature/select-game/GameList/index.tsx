import "./styles.scss";
import mockData from "@/mockdata/mockData";
import { GameCard } from "../GameCard";
import Space from "@/components/space";
import { useSelectGame } from "@/context/useSelectGame";
export const GameList = () => {
  const { gameSelect } = useSelectGame();
  return (
    <>
      <Space height={20} />
      <div className="game-list">
        {mockData.map((game) => (
          <GameCard {...game} key={game.id} onClick={() => gameSelect(game)} />
        ))}
      </div>
      <Space height={20} />
    </>
  );
};
