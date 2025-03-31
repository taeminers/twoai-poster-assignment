import { useSearchParams } from 'react-router-dom';

import mockdata_games from '@/mockdata/mockdata-games';

export const usePosterData = () => {
  const [searchParams] = useSearchParams();
  const gameId = searchParams.get('gameId');
  if (!gameId)
    return {
      game: null,
    };
  const game = mockdata_games.find((game) => game.id === parseInt(gameId));

  return {
    game,
  };
};
