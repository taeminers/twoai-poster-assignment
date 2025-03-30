import { useSelectGame } from "@/context/useSelectGame";
import "./styles.scss";

interface GameCardProps {
  id: number;
  teamA: string;
  teamB: string;
  date: string;
  venue: string;
  onClick: () => void;
}

export const GameCard = ({
  id,
  teamA,
  teamB,
  date,
  venue,
  onClick,
}: GameCardProps) => {
  const { selectedGame } = useSelectGame();
  return (
    <div
      className={`game-card ${selectedGame?.id === id ? "selected" : ""}`}
      onClick={onClick}
    >
      <div className="game-card__teams">
        <div className="game-card__teams-text">{teamA}</div>
        <div>VS</div>
        <div className="game-card__teams-text">{teamB}</div>
      </div>
      <div className="game-card__date-venue">
        <div className="game-card__date-venue-text">{date}</div>
        <div className="game-card__date-venue-text">{venue}</div>
      </div>
    </div>
  );
};
