import React from 'react';
import './styles.scss';

interface GameCardProps {
  teamA: string;
  teamB: string;
  date: string;
  venue: string;
  isSelected: boolean;
}

export const GameCard = React.memo(
  ({ teamA, teamB, date, venue, isSelected }: GameCardProps) => {
    return (
      <div className={`game-card ${isSelected ? 'selected' : ''}`}>
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
  },
);
