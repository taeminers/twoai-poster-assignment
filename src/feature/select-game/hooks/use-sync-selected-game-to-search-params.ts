import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

import { useGameState } from '@/context/use-select-game';

export const useSyncSelectedGameToSearchParams = () => {
  const { selectedGame } = useGameState();
  const [, setSearchParams] = useSearchParams();

  useEffect(() => {
    if (selectedGame?.id) {
      setSearchParams({ gameId: selectedGame.id.toString() });
    } else {
      setSearchParams({});
    }
  }, [selectedGame, setSearchParams]);
};
