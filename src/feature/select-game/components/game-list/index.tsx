import './styles.scss';
import {
  useGameActions,
  useGameState,
} from '@/feature/select-game/context/use-select-game';
import { useSyncSelectedGameToSearchParams } from '@/feature/select-game/hooks/use-sync-selected-game-to-search-params';
import mockdata_games, { Game } from '@/mockdata/mockdata-games';

import { useGetPhotos } from '../../hooks/use-get-photos';
import { GameCard } from '../game-card';

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
  const { photoData } = useGetPhotos();

  return (
    <div className="game-list">
      {mockdata_games.map((game, index) => (
        <div onClick={() => selectGameHandler(game)} key={game.id}>
          <GameCard
            {...game}
            isSelected={selectedGame?.id === game.id}
            photo={game.photo || photoData?.[index]?.urls?.regular || ''}
          />
        </div>
      ))}
    </div>
  );
};
