import React from 'react';
import { ErrorBoundary } from 'react-error-boundary';

import Space from '@/components/space';
import { SelectButton } from '@/feature/select-game/components/select-button';
import { SelectGameProvider } from '@/feature/select-game/context/select-game-context';

import Header from '../components/header';
import { GameList } from '../feature/select-game/components/game-list';

/**
 * Home page ( Select Game Feature Page)
 * Must select a game to continue
 */
const Home: React.FC = () => {
  return (
    <SelectGameProvider>
      <section>
        <Header title="GameDay" />
        <Space height={20} />
        <ErrorBoundary
          fallback={<div>Error Has Occured</div>}
          onError={() => console.log('error encountered')}
        >
          <GameList />
        </ErrorBoundary>
        <Space height={20} />
        <SelectButton />
      </section>
    </SelectGameProvider>
  );
};

export default Home;
