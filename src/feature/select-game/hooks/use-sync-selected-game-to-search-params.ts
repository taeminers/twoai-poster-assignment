import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

import { useGameState } from '@/feature/select-game/context/use-select-game';

export const useSyncSelectedGameToSearchParams = () => {
  // sync the search params with the selected game state
  const { selectedGame } = useGameState();
  const [, setSearchParams] = useSearchParams();

  useEffect(() => {
    if (selectedGame?.id) {
      setSearchParams({ gameId: selectedGame.id.toString() });
    } else {
      setSearchParams({});
    }
  }, [selectedGame]);
};
