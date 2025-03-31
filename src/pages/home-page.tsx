import React from 'react';

import { SelectGameProvider } from '@/context/select-game-context';
import { SelectButton } from '@/feature/select-game/select-button';

import Header from '../components/header';
import { GameList } from '../feature/select-game/game-list';
const Home: React.FC = () => {
  return (
    <SelectGameProvider>
      <section>
        <Header title="GameDay" />
        <GameList />
        <SelectButton />
      </section>
    </SelectGameProvider>
  );
};

export default Home;
