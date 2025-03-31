import { useContext } from 'react';

import { DownloadPosterContext } from './download-poster-context';

export const useDownloadPoster = () => {
  const context = useContext(DownloadPosterContext);
  if (!context) {
    throw new Error(
      'useDownloadPoster must be used within a DownloadPosterProvider',
    );
  }
  return context;
};
