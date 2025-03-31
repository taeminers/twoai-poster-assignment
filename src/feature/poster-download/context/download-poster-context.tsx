import { createContext, RefObject, useRef } from 'react';

interface DownloadPosterContextType {
  posterRef: RefObject<HTMLDivElement | null>;
}

export const DownloadPosterContext = createContext<DownloadPosterContextType>({
  posterRef: { current: null },
});

export const DownloadPosterProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const posterRef = useRef<HTMLDivElement>(null);
  return (
    <DownloadPosterContext.Provider value={{ posterRef }}>
      {children}
    </DownloadPosterContext.Provider>
  );
};
