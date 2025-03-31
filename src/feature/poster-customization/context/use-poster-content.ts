import { useContext } from 'react';

import { PosterContentContext } from './poster-content-context';

export const usePosterContent = () => {
  const context = useContext(PosterContentContext);
  if (!context) {
    throw new Error(
      'usePosterData must be used within a PosterContentProvider',
    );
  }
  return context;
};
