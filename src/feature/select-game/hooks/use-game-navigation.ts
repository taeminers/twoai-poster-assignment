import { useCallback } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';

export const useGameNavigation = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const gameId = searchParams.get('gameId');
  const navigateToPoster = useCallback(() => {
    navigate(`/poster?gameId=${gameId}`);
  }, [navigate, gameId]);

  return {
    gameId,
    navigateToPoster,
  };
};
