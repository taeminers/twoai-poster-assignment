import { Stage } from 'konva/lib/Stage';
import { createContext, RefObject, useRef } from 'react';

interface DownloadPosterContextType {
  posterRef: RefObject<Stage | null>;
}

export const DownloadPosterContext = createContext<DownloadPosterContextType>({
  posterRef: { current: null },
});

export const DownloadPosterProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const posterRef = useRef<Stage | null>(null);
  return (
    <DownloadPosterContext.Provider value={{ posterRef }}>
      {children}
    </DownloadPosterContext.Provider>
  );
};
