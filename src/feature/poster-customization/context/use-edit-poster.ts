import { useContext } from 'react';

import { EditPosterContext } from './edit-poster-context';

export const useEditPoster = () => {
  const context = useContext(EditPosterContext);
  if (!context) {
    throw new Error('useEditPoster must be used within a EditPosterProvider');
  }
  return context;
};
