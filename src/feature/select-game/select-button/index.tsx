import React from 'react';

import { Button } from '@/components/button';

import { useGameNavigation } from '../hooks/use-game-navigation';

export const SelectButton = React.memo(() => {
  const { gameId, navigateToPoster } = useGameNavigation();
  return (
    <Button fixed disabled={!gameId} onClick={navigateToPoster}>
      Select Game
    </Button>
  );
});
